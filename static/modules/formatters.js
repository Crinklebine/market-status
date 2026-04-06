export function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  if (totalHours >= 24) {
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    return `${days}d ${hours}h ${minutes}m`;
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (hours > 0 || minutes > 0) {
    parts.push(`${minutes}m`);
  }
  parts.push(`${seconds}s`);
  return parts.join(" ");
}

export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    return "";
  }
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

export function formatLocalMarketTime(now, market) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: market.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short"
  }).format(now);
}

export function formatHolidayDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function formatDisclosureDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function getLocalDateKey(now, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(now);

  const values = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  return `${values.year}-${values.month}-${values.day}`;
}

