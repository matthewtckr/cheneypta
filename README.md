# Cheney Elementary PTA Website

This repository contains a simple Jekyll site for Cheney Elementary PTA, designed for GitHub Pages.

The site is intended to remain a minimal quick resource page for families and new parents. It should not replace ParentSquare or the official Cheney Elementary website for current announcements.

## How the site works

- The home page is `index.md`.
- Each resource card is a Markdown file in `_resources/`.
- The layout for each resource is `_layouts/resource.html`.
- Shared styling is in `assets/css/site.css`.
- Language toggle behavior is in `assets/js/language.js`.
- The site logo image is stored at `assets/logo.png` and is referenced by the default layout.

## Adding or editing a resource

Create or edit a file in `_resources/`.

Example:

```markdown
---
title: School Supply Lists
title_es: Listas de útiles escolares
description: Supply list images for Pre-K through 5th Grade.
description_es: Imágenes de las listas de útiles escolares de Pre-K a 5.º grado.
category: Parent Resources
category_es: Recursos para familias
order: 100
external_url: ""
last_updated: 2026-07-04
content_en: |
  English content goes here.
content_es: |
  Spanish content goes here.
---
```

The `order` field controls where the card appears inside its section. Lower numbers appear first.

If `external_url` is set, the homepage card links directly to that external URL. If `external_url` is blank, the card links to the generated resource page for that Markdown file.

On generated resource pages, the `Open resource` button only appears when `external_url` is set.

## Categories

The home page currently displays these sections:

- Parent Resources
- PTA

Set the `category` field to one of those names to place a resource in that section. Use `category_es` for the Spanish category label on resource pages.

## English and Spanish content

Each resource can include both English and Spanish content in the same file:

- `title` and `description` for English card and page metadata
- `title_es` and `description_es` for Spanish card and page metadata
- `content_en` for English page content
- `content_es` for Spanish page content

The site detects a visitor's browser language preference and shows Spanish automatically when the browser language starts with `es`. Visitors can also switch languages manually.

Manual language choices are saved in `localStorage` only when the selected language differs from the browser preference. When a visitor changes back to the browser-preferred language, the saved language preference is removed.

If Spanish is not available yet, remove `content_es` or leave it out. Spanish metadata fields can also be omitted; the site falls back to the English values.

## URLs

Resources are published at simple top-level URLs when they do not link directly to an external URL, such as:

```text
/school-supply-lists/
/meet-the-teacher/
```

Resources with `external_url` set may still have generated pages, but the homepage card will send visitors directly to the external URL.

## Deployment

The `.github/workflows/pages.yml` workflow builds and deploys the site to GitHub Pages when relevant site files change on `main` or when the workflow is started manually.

After a successful GitHub Pages deployment, the workflow purges the Cloudflare cache for the configured zone using these repository settings:

- GitHub Actions secret: `CLOUDFLARE_PURGE_TOKEN`
- GitHub Actions variable: `CLOUDFLARE_ZONE_ID`

The purge step currently uses Cloudflare's `purge_everything` option for the zone.

## Custom domain

The `CNAME` file points GitHub Pages to:

```text
cheneypta.org
```

Configure the repository Pages settings and DNS records in GitHub and your DNS provider.

## Maintenance notes

When making site changes, review this README in the same pull request and update it whenever the site structure, resource fields, category names, URL behavior, layout behavior, language behavior, or deployment behavior changes.
