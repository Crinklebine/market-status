# MarketStatus

[![Deploy GitHub Pages](https://github.com/Crinklebine/market-status/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Crinklebine/market-status/actions/workflows/deploy-pages.yml)

Live site: [https://crinklebine.github.io/market-status/](https://crinklebine.github.io/market-status/)

MarketStatus is a static web app for tracking whether major global stock markets are open or closed in real time, with live countdowns, built-in holiday calendars, and timezone-aware market status.

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
cd market-status
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

Deployment is handled by the included GitHub Actions workflow in [`/.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

To enable it on GitHub:

1. Open your repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main`, or run the `Deploy GitHub Pages` workflow manually from the `Actions` tab.

After that, GitHub will publish the site automatically on each push to `main`.

## Notes

- Market schedules and holiday data are static built-in 2026 reference data.
- CME remains a simplified generic Globex-style schedule rather than a product-specific session engine.
- External source links open directly from the page.
