import { markets } from "./static/modules/marketDefinitions.js";
import { getHolidayEntries, holidayDataDisclosure } from "./static/modules/marketHolidays.js";
import { getAllMarketStatuses } from "./static/modules/marketSchedule.js";
import {
  formatDisclosureDate,
  formatDuration,
  formatHolidayDate,
  formatLocalMarketTime,
  getFlagEmoji,
  getLocalDateKey,
} from "./static/modules/formatters.js";

const els = {
  grid: document.querySelector("[data-market-grid]"),
  timestamp: document.querySelector("[data-last-updated]"),
  timestampDate: document.querySelector("[data-last-updated-date]"),
  errorPanel: document.querySelector("[data-app-error]"),
  disclosurePanel: document.querySelector("[data-holiday-disclosure]"),
  holidayModal: document.querySelector("[data-holiday-modal]"),
  holidayModalTitle: document.querySelector("[data-holiday-modal-title]"),
  holidayModalBody: document.querySelector("[data-holiday-modal-body]"),
  footerCopyright: document.querySelector("[data-footer-copyright]"),
  footerVersion: document.querySelector("[data-footer-version]"),
};

const APP_VERSION = "1.0.0";
const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";
const marketCardsById = new Map();

function formatTransitionLabel(status) {
  return {
    label: status.isOpen ? "Closes in:" : "Opens in:",
    value: formatDuration(status.nextTransition.getTime() - status.now.getTime()),
  };
}

function showHolidayModalLoading(marketLabel) {
  els.holidayModalTitle.textContent = `${marketLabel} Holidays`;
  els.holidayModalBody.innerHTML = `<p class="modal__empty">Loading holiday list...</p>`;
  els.holidayModal.hidden = false;
}

function closeHolidayModal() {
  els.holidayModal.hidden = true;
}

function renderHolidayModal(marketId, marketLabel) {
  const holidays = getHolidayEntries(marketId);
  els.holidayModalTitle.textContent = `${marketLabel} Holidays`;
  els.holidayModalBody.innerHTML = holidays.length > 0
    ? `
      <ul class="modal__holiday-list">
        ${holidays.map((holiday) => `
          <li class="modal__holiday-item">
            <span class="modal__holiday-date">${formatHolidayDate(holiday.dateKey)}</span>
            <span class="modal__holiday-name">${holiday.name}</span>
          </li>
        `).join("")}
      </ul>
    `
    : `<p class="modal__empty">No holiday data available.</p>`;
}

function renderHolidayDisclosure() {
  const disclosure = holidayDataDisclosure;
  els.disclosurePanel.hidden = false;
  els.disclosurePanel.innerHTML = `
    <div class="disclosure__card">
      <h2>${disclosure.title}</h2>
      <p>${disclosure.body}</p>
      <p class="disclosure__updated">Last built-in database update: ${formatDisclosureDate(disclosure.lastUpdated)}</p>
      <ul class="disclosure__links">
        ${disclosure.sourceLinks.map((link) => `
          <li>
            <a class="disclosure__link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

function sortStatusesForDisplay(statuses) {
  const openMarkets = [];
  const closedMarkets = [];

  for (const status of statuses) {
    if (status.isOpen) {
      openMarkets.push(status);
    } else {
      closedMarkets.push(status);
    }
  }

  openMarkets.sort((left, right) => left.nextTransition - right.nextTransition);
  closedMarkets.sort((left, right) => left.nextTransition - right.nextTransition);

  return [...openMarkets, ...closedMarkets];
}

function updateMarketCard(article, status) {
  article.dataset.marketId = status.market.id;
  article.className = `market-card ${status.isOpen ? "open" : "closed"}`;
  const countdown = formatTransitionLabel(status);
  const flag = getFlagEmoji(status.market.countryCode);
  const isActiveHoliday = Boolean(
    status.nextHoliday && getLocalDateKey(status.now, status.market.timeZone) === status.nextHoliday.dateKey
  );
  const holidayLabel = isActiveHoliday ? ["Active", "Holiday"] : ["Next", "Holiday"];

  article.innerHTML = `
    <div class="market-card__header">
      <div>
        <p class="market-card__eyebrow">
          <span>${status.market.city}</span>
          <span class="market-card__subvalue">${status.market.country}</span>
        </p>
        <div class="market-card__title-row">
          <span class="market-card__flag" aria-hidden="true">${flag}</span>
          <h2>${status.market.shortName}</h2>
        </div>
        <p class="market-card__name">${status.market.name}</p>
      </div>
      <span class="market-card__badge">${status.isOpen ? "Open" : "Closed"}</span>
    </div>
    <div class="market-card__countdown">
      <p class="market-card__countdown-label">${countdown.label}</p>
      <p class="market-card__countdown-value">${countdown.value}</p>
    </div>
    <dl class="market-card__meta">
      <div>
        <dt>Local time</dt>
        <dd>${formatLocalMarketTime(status.now, status.market)}</dd>
      </div>
      ${status.nextHoliday ? `
        <div>
          <dt class="market-card__stacked-label ${isActiveHoliday ? "market-card__stacked-label--active" : ""}">
            <span>${holidayLabel[0]}</span>
            <span>${holidayLabel[1]}</span>
          </dt>
          <dd class="market-card__stacked-value">
            <span>${status.nextHoliday.name}</span>
            <span class="market-card__subvalue">${formatHolidayDate(status.nextHoliday.dateKey)}</span>
          </dd>
        </div>
      ` : ""}
    </dl>
    <button
      type="button"
      class="market-card__action"
      data-market-holidays="${status.market.id}"
      data-market-label="${status.market.shortName}"
    >
      Holidays
    </button>
  `;
}

function getMarketCard(status) {
  let article = marketCardsById.get(status.market.id);
  if (!article) {
    article = document.createElement("article");
    marketCardsById.set(status.market.id, article);
  }
  updateMarketCard(article, status);
  return article;
}

function animateCardReorder(previousRects) {
  for (const card of els.grid.children) {
    const previousRect = previousRects.get(card.dataset.marketId);
    if (!previousRect) {
      card.animate(
        [
          { opacity: 0, transform: "translateY(14px) scale(0.98)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ],
        { duration: 240, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      continue;
    }

    const currentRect = card.getBoundingClientRect();
    const deltaX = previousRect.left - currentRect.left;
    const deltaY = previousRect.top - currentRect.top;
    if (deltaX === 0 && deltaY === 0) {
      continue;
    }

    card.animate(
      [
        { transform: `translate(${deltaX}px, ${deltaY}px)` },
        { transform: "translate(0, 0)" },
      ],
      { duration: 280, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  }
}

function render(statuses) {
  els.errorPanel.hidden = true;
  els.errorPanel.textContent = "";

  const previousRects = new Map(
    [...els.grid.children].map((card) => [card.dataset.marketId, card.getBoundingClientRect()])
  );
  const sortedStatuses = sortStatusesForDisplay(statuses);
  const nextIds = new Set(sortedStatuses.map((status) => status.market.id));
  els.grid.replaceChildren(...sortedStatuses.map(getMarketCard));

  for (const marketId of marketCardsById.keys()) {
    if (!nextIds.has(marketId)) {
      marketCardsById.delete(marketId);
    }
  }

  animateCardReorder(previousRects);

  const now = new Date();
  els.timestamp.textContent = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now) + ` (${localTimeZone})`;
  els.timestampDate.textContent = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(now);
}

function renderError(message) {
  els.grid.replaceChildren();
  els.timestamp.textContent = `--:--:-- (${localTimeZone})`;
  els.timestampDate.textContent = "-- --- ----";
  els.errorPanel.hidden = false;
  els.errorPanel.textContent = message;
}

function renderFooter() {
  const year = new Date().getFullYear();
  els.footerCopyright.textContent = `© Crinklebine ${year}`;
  els.footerVersion.textContent = `MarketStatus ${APP_VERSION}`;
}

function refresh() {
  try {
    render(getAllMarketStatuses(markets));
  } catch (error) {
    console.error(error);
    renderError(`Unable to load market data: ${error.message}`);
  }
}

function boot() {
  renderHolidayDisclosure();
  renderFooter();
  refresh();
  setInterval(refresh, 1000);
}

els.grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-market-holidays]");
  if (!button) {
    return;
  }
  const marketId = button.dataset.marketHolidays;
  const marketLabel = button.dataset.marketLabel || "Market";
  showHolidayModalLoading(marketLabel);
  renderHolidayModal(marketId, marketLabel);
});

els.holidayModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-holiday-modal]")) {
    closeHolidayModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.holidayModal.hidden === false) {
    closeHolidayModal();
  }
});

boot();
