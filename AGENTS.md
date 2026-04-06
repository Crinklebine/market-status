# AGENTS.md

## Purpose

Market Status Web is a pure static web version of MarketStatus intended for GitHub-hosted deployment.

This repository provides:

- a browser-based dashboard for market open/close status
- built-in holiday browsing and disclosure
- a static deployment target with no local server requirement

This project is not the Electron app and should not mutate or redefine the sibling `market-status` repository.

## Upstream Boundary

`market-status` remains the upstream product reference for:

- market coverage
- holiday calendar content
- scheduling rules
- presentation behavior to preserve where practical

Market Status Web should stay downstream of `market-status`.

Do not modify the sibling `market-status` repository from work in this project unless the user explicitly asks for cross-project work.

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
- For public-facing docs and examples, prefer generic commands such as `cd market-status-web` instead of machine-specific paths.
- Before any public push, scan changed files for private details such as `/Users/`, `/home/`, `C:\\Users\\`, personal usernames, machine names, emails, API keys, access tokens, credentials, secrets, private certificates, local domains, and other host-specific identifiers.
- If a private or personal detail ever lands in a public commit, treat it as a history cleanup issue rather than only fixing the latest file contents.
- In public repo copy, docs, credits, metadata, and examples, refer to the author only as `Crinklebine` unless the user explicitly asks for some other public attribution.

## Git Hygiene

- Keep commits focused and easy to review.
- Prefer short, descriptive commit messages.
- Good examples:
  - `Scaffold Market Status Web`
  - `Port market engine to static web modules`
  - `Add GitHub Pages ready static site`

## Pre-Publish Checklist

- Review changed files for absolute local paths, usernames, machine names, private URLs, emails, and other identifying environment details.
- Review changed files for API keys, access tokens, credentials, secrets, private certificates, `.env` values, and copied terminal output that may contain them.
- Check screenshots, images, and pasted console output for personal or machine-specific information.
- Confirm public-facing docs use generic paths such as `cd market-status-web` and only non-sensitive localhost examples.
- Confirm public-facing attribution uses only `Crinklebine` unless the user explicitly requested some other public identity.
- If anything private or identifying was already committed publicly, stop and treat it as a history cleanup issue before pushing further.
