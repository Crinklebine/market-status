import { getHolidayEntry, getNextHolidayEntry, toDateKey } from "./marketHolidays.js";

const WEEKDAY_MAP = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7
};

function parseTime(value) {
  const [hour, minute] = value.split(":").map(Number);
  return { hour, minute, totalMinutes: (hour * 60) + minute };
}

export function getZonedParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
    hour12: false,
    hourCycle: "h23"
  });

  const parts = {};
  for (const part of formatter.formatToParts(date)) {
    if (part.type !== "literal") {
      parts[part.type] = part.value;
    }
  }

  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
    weekday: WEEKDAY_MAP[parts.weekday]
  };
}

function addDays(civilDate, daysToAdd) {
  const result = new Date(Date.UTC(civilDate.year, civilDate.month - 1, civilDate.day + daysToAdd));
  return {
    year: result.getUTCFullYear(),
    month: result.getUTCMonth() + 1,
    day: result.getUTCDate()
  };
}

function getWeekdayForCivilDate(civilDate) {
  const weekday = new Date(Date.UTC(civilDate.year, civilDate.month - 1, civilDate.day)).getUTCDay();
  return weekday === 0 ? 7 : weekday;
}

function createCivilDateTime(civilDate, time) {
  return {
    year: civilDate.year,
    month: civilDate.month,
    day: civilDate.day,
    hour: time.hour,
    minute: time.minute,
    second: 0
  };
}

function getCivilDateForInstant(date, timeZone) {
  const parts = getZonedParts(date, timeZone);
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day
  };
}

export function zonedDateTimeToUtc(civilDateTime, timeZone) {
  let guess = Date.UTC(
    civilDateTime.year,
    civilDateTime.month - 1,
    civilDateTime.day,
    civilDateTime.hour,
    civilDateTime.minute,
    civilDateTime.second || 0
  );

  for (let index = 0; index < 5; index += 1) {
    const actual = getZonedParts(new Date(guess), timeZone);
    const actualAsUtc = Date.UTC(
      actual.year,
      actual.month - 1,
      actual.day,
      actual.hour,
      actual.minute,
      actual.second
    );
    const targetAsUtc = Date.UTC(
      civilDateTime.year,
      civilDateTime.month - 1,
      civilDateTime.day,
      civilDateTime.hour,
      civilDateTime.minute,
      civilDateTime.second || 0
    );
    const diff = targetAsUtc - actualAsUtc;
    guess += diff;
    if (diff === 0) {
      break;
    }
  }

  return new Date(guess);
}

function getWeeklySessionTemplates(market) {
  if (market.weeklySessions) {
    return market.weeklySessions.map((session) => ({
      openTime: parseTime(session.open),
      closeDayOffset: (session.closeDay - session.openDay + 7) % 7,
      closeTime: parseTime(session.close)
    }));
  }

  return market.sessions.map((session) => ({
    openTime: parseTime(session.open),
    closeDayOffset: 0,
    closeTime: parseTime(session.close)
  }));
}

function getBaseSessionsForDate(market, civilDate) {
  const weekday = getWeekdayForCivilDate(civilDate);

  if (market.weeklySessions) {
    return market.weeklySessions
      .filter((session) => session.openDay === weekday)
      .map((session) => ({
        openTime: parseTime(session.open),
        closeDayOffset: (session.closeDay - session.openDay + 7) % 7,
        closeTime: parseTime(session.close)
      }));
  }

  if (!market.openDays.includes(weekday)) {
    return [];
  }

  return getWeeklySessionTemplates(market);
}

function getSessionsForDate(market, civilDate) {
  const holidayEntry = getHolidayEntry(market.id, civilDate);

  if (holidayEntry?.type === "closed") {
    return { sessions: [], holidayEntry };
  }

  if (holidayEntry?.type === "special") {
    return {
      sessions: holidayEntry.sessions.map((session) => ({
        openTime: parseTime(session.open),
        closeDayOffset: session.closeDayOffset ?? 0,
        closeTime: parseTime(session.close)
      })),
      holidayEntry
    };
  }

  return {
    sessions: getBaseSessionsForDate(market, civilDate),
    holidayEntry: null
  };
}

function getSessionOccurrences(market, nowParts) {
  const today = {
    year: nowParts.year,
    month: nowParts.month,
    day: nowParts.day
  };
  const occurrences = [];

  for (let offset = -7; offset <= 8; offset += 1) {
    const candidateDate = addDays(today, offset);
    const { sessions, holidayEntry } = getSessionsForDate(market, candidateDate);

    for (const session of sessions) {
      const openAt = zonedDateTimeToUtc(createCivilDateTime(candidateDate, session.openTime), market.timeZone);
      const closeAt = zonedDateTimeToUtc(
        createCivilDateTime(addDays(candidateDate, session.closeDayOffset), session.closeTime),
        market.timeZone
      );
      const openDate = getCivilDateForInstant(openAt, market.timeZone);
      const closeDate = getCivilDateForInstant(closeAt, market.timeZone);

      if (getHolidayEntry(market.id, openDate)?.type === "closed") {
        continue;
      }
      if (toDateKey(closeDate) !== toDateKey(openDate) && getHolidayEntry(market.id, closeDate)?.type === "closed") {
        continue;
      }

      occurrences.push({
        openAt,
        closeAt,
        holidayName: holidayEntry?.name ?? null
      });
    }
  }

  return occurrences.sort((left, right) => left.openAt - right.openAt);
}

export function getMarketStatus(market, now = new Date()) {
  const nowParts = getZonedParts(now, market.timeZone);
  const today = {
    year: nowParts.year,
    month: nowParts.month,
    day: nowParts.day
  };
  const holidayEntry = getHolidayEntry(market.id, today);
  const nextHoliday = getNextHolidayEntry(market.id, today);
  const occurrences = getSessionOccurrences(market, nowParts);
  const currentSession = occurrences.find((session) => now >= session.openAt && now < session.closeAt);

  if (currentSession) {
    return {
      market,
      isOpen: true,
      now,
      nowParts,
      nextTransition: currentSession.closeAt,
      nextTransitionType: "close",
      scheduleNote: currentSession.holidayName,
      nextHoliday,
      closureReason: null,
      isHolidayClosure: false
    };
  }

  const nextSession = occurrences.find((session) => session.openAt > now);
  if (!nextSession) {
    throw new Error(`No upcoming open session found for market ${market.id}`);
  }

  return {
    market,
    isOpen: false,
    now,
    nowParts,
    nextTransition: nextSession.openAt,
    nextTransitionType: "open",
    scheduleNote: holidayEntry?.type === "special" ? holidayEntry.name : null,
    closureReason: holidayEntry?.type === "closed" ? holidayEntry.name : null,
    isHolidayClosure: holidayEntry?.type === "closed",
    nextHoliday
  };
}

export function getAllMarketStatuses(markets, now = new Date()) {
  return markets.map((market) => getMarketStatus(market, now));
}

