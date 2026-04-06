export const markets = [
  {
    id: "cme",
    name: "Chicago Mercantile Exchange",
    shortName: "CME",
    city: "Chicago",
    country: "United States",
    countryCode: "US",
    timeZone: "America/Chicago",
    weeklySessions: [
      { openDay: 7, open: "17:00", closeDay: 1, close: "16:00" },
      { openDay: 1, open: "17:00", closeDay: 2, close: "16:00" },
      { openDay: 2, open: "17:00", closeDay: 3, close: "16:00" },
      { openDay: 3, open: "17:00", closeDay: 4, close: "16:00" },
      { openDay: 4, open: "17:00", closeDay: 5, close: "16:00" }
    ]
  },
  {
    id: "nyse",
    name: "New York Stock Exchange",
    shortName: "NYSE",
    city: "New York",
    country: "United States",
    countryCode: "US",
    timeZone: "America/New_York",
    openDays: [1, 2, 3, 4, 5],
    sessions: [{ open: "09:30", close: "16:00" }]
  },
  {
    id: "tsx",
    name: "Toronto Stock Exchange",
    shortName: "TSX",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA",
    timeZone: "America/Toronto",
    openDays: [1, 2, 3, 4, 5],
    sessions: [{ open: "09:30", close: "16:00" }]
  },
  {
    id: "lse",
    name: "London Stock Exchange",
    shortName: "LSE",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    timeZone: "Europe/London",
    openDays: [1, 2, 3, 4, 5],
    sessions: [{ open: "08:00", close: "16:30" }]
  },
  {
    id: "asx",
    name: "Australian Securities Exchange",
    shortName: "ASX",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    timeZone: "Australia/Sydney",
    openDays: [1, 2, 3, 4, 5],
    sessions: [{ open: "10:00", close: "16:00" }]
  },
  {
    id: "tse",
    name: "Tokyo Stock Exchange",
    shortName: "TSE",
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    timeZone: "Asia/Tokyo",
    openDays: [1, 2, 3, 4, 5],
    sessions: [
      { open: "09:00", close: "11:30" },
      { open: "12:30", close: "15:30" }
    ]
  },
  {
    id: "sse",
    name: "Shanghai Stock Exchange",
    shortName: "SSE",
    city: "Shanghai",
    country: "China",
    countryCode: "CN",
    timeZone: "Asia/Shanghai",
    openDays: [1, 2, 3, 4, 5],
    sessions: [
      { open: "09:30", close: "11:30" },
      { open: "13:00", close: "15:00" }
    ]
  },
  {
    id: "hkex",
    name: "Hong Kong Stock Exchange",
    shortName: "HKEX",
    city: "Hong Kong",
    country: "Hong Kong",
    countryCode: "HK",
    timeZone: "Asia/Hong_Kong",
    openDays: [1, 2, 3, 4, 5],
    sessions: [{ open: "09:30", close: "16:10" }]
  },
  {
    id: "sgx",
    name: "Singapore Exchange",
    shortName: "SGX",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    timeZone: "Asia/Singapore",
    openDays: [1, 2, 3, 4, 5],
    sessions: [
      { open: "09:00", close: "12:00" },
      { open: "13:00", close: "17:00" }
    ]
  }
];

