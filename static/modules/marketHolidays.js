export const holidayCalendars = {
  nyse: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-01-19": { type: "closed", name: "Martin Luther King Jr. Day" },
    "2026-02-16": { type: "closed", name: "Presidents' Day" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-05-25": { type: "closed", name: "Memorial Day" },
    "2026-06-19": { type: "closed", name: "Juneteenth National Independence Day" },
    "2026-07-03": { type: "closed", name: "Independence Day (Observed)" },
    "2026-09-07": { type: "closed", name: "Labor Day" },
    "2026-11-26": { type: "closed", name: "Thanksgiving Day" },
    "2026-11-27": {
      type: "special",
      name: "Day After Thanksgiving Early Close",
      sessions: [{ open: "09:30", close: "13:00" }]
    },
    "2026-12-24": {
      type: "special",
      name: "Christmas Eve Early Close",
      sessions: [{ open: "09:30", close: "13:00" }]
    },
    "2026-12-25": { type: "closed", name: "Christmas Day" }
  },
  tsx: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-02-16": { type: "closed", name: "Family Day" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-05-18": { type: "closed", name: "Victoria Day" },
    "2026-07-01": { type: "closed", name: "Canada Day" },
    "2026-08-03": { type: "closed", name: "Civic Holiday" },
    "2026-09-07": { type: "closed", name: "Labour Day" },
    "2026-10-12": { type: "closed", name: "Thanksgiving Day" },
    "2026-12-24": {
      type: "special",
      name: "Christmas Eve Early Close",
      sessions: [{ open: "09:30", close: "13:00" }]
    },
    "2026-12-25": { type: "closed", name: "Christmas Day" },
    "2026-12-28": { type: "closed", name: "In Lieu of Boxing Day" }
  },
  lse: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-04-06": { type: "closed", name: "Easter Monday" },
    "2026-05-04": { type: "closed", name: "Early May Bank Holiday" },
    "2026-05-25": { type: "closed", name: "Spring Bank Holiday" },
    "2026-08-31": { type: "closed", name: "Summer Bank Holiday" },
    "2026-12-25": { type: "closed", name: "Christmas Day" },
    "2026-12-28": { type: "closed", name: "Boxing Day (Substitute Day)" }
  },
  tse: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-01-02": { type: "closed", name: "New Year Holiday" },
    "2026-01-12": { type: "closed", name: "Coming of Age Day" },
    "2026-02-11": { type: "closed", name: "National Foundation Day" },
    "2026-02-23": { type: "closed", name: "Emperor's Birthday" },
    "2026-03-20": { type: "closed", name: "Vernal Equinox Day" },
    "2026-04-29": { type: "closed", name: "Showa Day" },
    "2026-05-04": { type: "closed", name: "Greenery Day" },
    "2026-05-05": { type: "closed", name: "Children's Day" },
    "2026-05-06": { type: "closed", name: "Constitution Memorial Day (Observed)" },
    "2026-07-20": { type: "closed", name: "Marine Day" },
    "2026-08-11": { type: "closed", name: "Mountain Day" },
    "2026-09-21": { type: "closed", name: "Respect for the Aged Day" },
    "2026-09-22": { type: "closed", name: "National Holiday" },
    "2026-09-23": { type: "closed", name: "Autumnal Equinox Day" },
    "2026-10-12": { type: "closed", name: "Sports Day" },
    "2026-11-03": { type: "closed", name: "Culture Day" },
    "2026-11-23": { type: "closed", name: "Labor Thanksgiving Day" },
    "2026-12-31": { type: "closed", name: "Year-End Market Holiday" }
  },
  sse: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-01-02": { type: "closed", name: "New Year Holiday" },
    "2026-02-16": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-02-17": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-02-18": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-02-19": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-02-20": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-02-23": { type: "closed", name: "Lunar New Year Holiday" },
    "2026-04-06": { type: "closed", name: "Qingming Festival" },
    "2026-05-01": { type: "closed", name: "Labour Day Holiday" },
    "2026-05-04": { type: "closed", name: "Labour Day Holiday" },
    "2026-05-05": { type: "closed", name: "Labour Day Holiday" },
    "2026-06-19": { type: "closed", name: "Dragon Boat Festival" },
    "2026-09-25": { type: "closed", name: "Mid-Autumn Festival" },
    "2026-10-01": { type: "closed", name: "National Day Holiday" },
    "2026-10-02": { type: "closed", name: "National Day Holiday" },
    "2026-10-05": { type: "closed", name: "National Day Holiday" },
    "2026-10-06": { type: "closed", name: "National Day Holiday" },
    "2026-10-07": { type: "closed", name: "National Day Holiday" }
  },
  hkex: {
    "2026-01-01": { type: "closed", name: "The First Day of January" },
    "2026-02-16": {
      type: "special",
      name: "Lunar New Year Eve Half Day",
      sessions: [{ open: "09:30", close: "12:10" }]
    },
    "2026-02-17": { type: "closed", name: "Lunar New Year's Day" },
    "2026-02-18": { type: "closed", name: "The Second Day of Lunar New Year" },
    "2026-02-19": { type: "closed", name: "The Third Day of Lunar New Year" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-04-06": { type: "closed", name: "The Day Following Ching Ming Festival" },
    "2026-04-07": { type: "closed", name: "The Day Following Easter Monday" },
    "2026-05-01": { type: "closed", name: "Labour Day" },
    "2026-05-25": { type: "closed", name: "The Day Following the Birthday of the Buddha" },
    "2026-06-19": { type: "closed", name: "Tuen Ng Festival" },
    "2026-07-01": { type: "closed", name: "Hong Kong Special Administrative Region Establishment Day" },
    "2026-10-01": { type: "closed", name: "National Day" },
    "2026-10-19": { type: "closed", name: "The Day Following Chung Yeung Festival" },
    "2026-12-24": {
      type: "special",
      name: "Christmas Eve Half Day",
      sessions: [{ open: "09:30", close: "12:10" }]
    },
    "2026-12-25": { type: "closed", name: "Christmas Day" },
    "2026-12-31": {
      type: "special",
      name: "New Year's Eve Half Day",
      sessions: [{ open: "09:30", close: "12:10" }]
    }
  },
  sgx: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-02-17": { type: "closed", name: "Chinese New Year" },
    "2026-02-18": { type: "closed", name: "Chinese New Year Holiday" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-05-01": { type: "closed", name: "Labour Day" },
    "2026-05-27": { type: "closed", name: "Hari Raya Haji" },
    "2026-06-01": { type: "closed", name: "Vesak Day (Observed)" },
    "2026-08-10": { type: "closed", name: "National Day (Observed)" },
    "2026-11-09": { type: "closed", name: "Deepavali (Observed)" },
    "2026-12-25": { type: "closed", name: "Christmas Day" }
  },
  asx: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-01-26": { type: "closed", name: "Australia Day" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-04-06": { type: "closed", name: "Easter Monday" },
    "2026-06-08": { type: "closed", name: "King's Birthday" },
    "2026-12-24": {
      type: "special",
      name: "Christmas Eve Early Close",
      sessions: [{ open: "10:00", close: "14:10" }]
    },
    "2026-12-25": { type: "closed", name: "Christmas Day" },
    "2026-12-28": { type: "closed", name: "Boxing Day" },
    "2026-12-31": {
      type: "special",
      name: "Last Business Day Early Close",
      sessions: [{ open: "10:00", close: "14:10" }]
    }
  },
  cme: {
    "2026-01-01": { type: "closed", name: "New Year's Day" },
    "2026-04-03": { type: "closed", name: "Good Friday" },
    "2026-11-26": { type: "closed", name: "Thanksgiving Day" },
    "2026-11-27": {
      type: "special",
      name: "Day After Thanksgiving Reduced Session",
      sessions: [{ open: "17:00", close: "12:00", closeDayOffset: 1 }]
    },
    "2026-12-24": {
      type: "special",
      name: "Christmas Eve Reduced Session",
      sessions: [{ open: "17:00", close: "12:00", closeDayOffset: 1 }]
    },
    "2026-12-25": { type: "closed", name: "Christmas Day" }
  }
};

export const holidayDataDisclosure = {
  title: "Holiday Data Disclosure",
  body: "Built-in holiday data is static 2026 reference data. We sourced exchange calendars from official exchange or government pages where available. CME is modeled as a simplified generic Globex-style schedule in this app and may not reflect product-specific hours, ad hoc changes, or final holiday-hour updates.",
  lastUpdated: "2026-04-02",
  sourceLinks: [
    { marketId: "cme", label: "CME Group", url: "https://www.cmegroup.com/trading-hours.html" },
    { marketId: "nyse", label: "NYSE", url: "https://www.nyse.com/trade/hours-calendars" },
    { marketId: "tsx", label: "TSX", url: "https://www.tsx.com/en/trading/calendars-and-trading-hours/calendar" },
    { marketId: "lse", label: "LSE via GOV.UK", url: "https://www.gov.uk/bank-holidays" },
    { marketId: "asx", label: "ASX", url: "https://www.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours/trading-calendar" },
    { marketId: "tse", label: "JPX / TSE", url: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/index.html" },
    { marketId: "sse", label: "SSE", url: "https://big5.sse.com.cn/site/cht/www.sse.com.cn/disclosure/dealinstruc/closed/list/" },
    { marketId: "hkex", label: "HKEX", url: "https://www.hkex.com.hk/Services/Trading-hours-and-Severe-Weather-Arrangements/Trading-Hours/Securities-Market?sc_lang=en" },
    { marketId: "sgx", label: "SGX Rulebook", url: "https://rulebook.sgx.com/rulebook/practice-notes-4" },
    { marketId: "sgx", label: "Singapore MOM Holidays", url: "https://www.mom.gov.sg/employment-practices/public-holidays" }
  ]
};

export function toDateKey(civilDate) {
  const month = String(civilDate.month).padStart(2, "0");
  const day = String(civilDate.day).padStart(2, "0");
  return `${civilDate.year}-${month}-${day}`;
}

export function getHolidayEntry(marketId, civilDate) {
  return holidayCalendars[marketId]?.[toDateKey(civilDate)] ?? null;
}

export function getNextHolidayEntry(marketId, civilDate) {
  const calendar = holidayCalendars[marketId];
  if (!calendar) {
    return null;
  }

  const currentKey = toDateKey(civilDate);
  const currentEntry = calendar[currentKey];
  if (currentEntry) {
    return { dateKey: currentKey, ...currentEntry };
  }

  const nextKey = Object.keys(calendar).sort().find((dateKey) => dateKey > currentKey);
  if (!nextKey) {
    return null;
  }

  return {
    dateKey: nextKey,
    ...calendar[nextKey]
  };
}

export function getHolidayEntries(marketId) {
  const calendar = holidayCalendars[marketId];
  if (!calendar) {
    return [];
  }

  return Object.keys(calendar).sort().map((dateKey) => ({
    dateKey,
    ...calendar[dateKey]
  }));
}

