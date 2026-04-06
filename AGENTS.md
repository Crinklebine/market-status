# AGENTS.md

## Purpose

MarketStatus is a static web app intended for GitHub-hosted deployment.

This repository provides:

- a browser-based dashboard for market open/close status
- built-in holiday browsing and disclosure
- a static deployment target with no local server requirement

This repository is the primary version of MarketStatus.
The sibling Electron project is a separate legacy implementation and should not be modified from work in this repository unless the user explicitly asks for cross-project work.

## Repository Boundary

Do not modify sibling repositories such as `market-status-electron` or `market-status-client` from work in this project unless the user explicitly asks for cross-project work.

## Product Shape

The intended shape is:

- a pure static site
- browser-side market calculations using inspectable JavaScript modules
- no backend and no build step for the first pass

Prefer simple, readable architecture over framework-heavy setup.

Suggested ownership:

- `index.html`: browser shell
- `base.css`: styling
- `app.js`: browser app controller
- `static/modules/`: browser-safe market engine modules

## Data Rules

- Keep market definitions, holiday data, and schedule logic modular.
- Keep holiday logic separate from UI rendering logic.
- Avoid hidden services, sync pipelines, or remote dependencies.
- Prefer explicit static data over opaque runtime fetching.

## UI Direction

- Preserve the MarketStatus visual language where it serves the product.
- Keep the app compact, desktop-friendly, and readable.
- Use progressive enhancement with vanilla HTML, CSS, and JavaScript.
- Keep the site easy to host on GitHub Pages.

## Safe Change Guidance

- Keep the app fully static.
- Do not add user accounts, remote writes, or unnecessary runtime dependencies.
- Keep browser behavior easy to trace from module imports to rendered cards.
- Make small, reviewable changes.
- Never commit or publish absolute local filesystem paths such as `/Users/...`, workspace roots, machine-specific install paths, or other host-specific directory layouts in code, docs, screenshots, config, metadata, or comments.
- Never publish personal information, private information, or identifying local environment details unless the user explicitly asks for that disclosure. This includes usernames, machine names, private email addresses, personal directory names, private URLs, internal hostnames, API keys, access tokens, credentials, secrets, private certificates, account identifiers, and workstation-specific conventions.
- For public-facing docs and examples, prefer generic commands such as `cd market-status` instead of machine-specific paths.
- Before any public push, scan changed files for private details such as `/Users/`, `/home/`, `C:\\Users\\`, personal usernames, machine names, emails, API keys, access tokens, credentials, secrets, private certificates, local domains, and other host-specific identifiers.
- If a private or personal detail ever lands in a public commit, treat it as a history cleanup issue rather than only fixing the latest file contents.
- In public repo copy, docs, credits, metadata, and examples, refer to the author only as `Crinklebine` unless the user explicitly asks for some other public attribution.

## Git Hygiene

- Keep commits focused and easy to review.
- Prefer short, descriptive commit messages.
- Good examples:
  - `Scaffold MarketStatus`
  - `Port market engine to static web modules`
  - `Add GitHub Pages ready static site`

## Pre-Publish Checklist

- Review changed files for absolute local paths, usernames, machine names, private URLs, emails, and other identifying environment details.
- Review changed files for API keys, access tokens, credentials, secrets, private certificates, `.env` values, and copied terminal output that may contain them.
- Check screenshots, images, and pasted console output for personal or machine-specific information.
- Confirm public-facing docs use generic paths such as `cd market-status` and only non-sensitive localhost examples.
- Confirm public-facing attribution uses only `Crinklebine` unless the user explicitly requested some other public identity.
- If anything private or identifying was already committed publicly, stop and treat it as a history cleanup issue before pushing further.
