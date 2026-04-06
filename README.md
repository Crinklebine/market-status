# Market Status Web

Market Status Web is a pure static web version of MarketStatus. It keeps the browser-side market engine and dashboard UI, but removes the local Python server so it can be hosted directly on GitHub Pages or any static web host.

## Architecture

- `index.html`: browser shell
- `base.css`: app styling
- `app.js`: browser app controller
- `static/modules/marketDefinitions.js`: market metadata and sessions
- `static/modules/marketHolidays.js`: built-in 2026 holiday data and disclosure
- `static/modules/marketSchedule.js`: timezone-aware schedule engine
- `static/modules/formatters.js`: display helpers

## Local Preview

You can preview it locally with a simple static server:

```bash
cd market-status-web
python3 -m http.server 8040
```

Then open:

```text
http://127.0.0.1:8040/
```

## GitHub Pages

This project is static-site ready:

- no backend required
- no build step required
- `.nojekyll` included

Deploy the repository root to GitHub Pages.

## Notes

- Market schedules and holiday data are static built-in 2026 reference data.
- CME remains a simplified generic Globex-style schedule rather than a product-specific session engine.
- External source links open directly from the page.
