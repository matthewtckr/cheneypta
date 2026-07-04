# Cheney Elementary PTA Website

This repository contains a simple Jekyll site for Cheney Elementary PTA, designed for GitHub Pages.

The site is intended to remain a minimal quick resource page for families and new parents. It should not replace ParentSquare or the official Cheney Elementary website for current announcements.

## How the site works

- The home page is `index.md`.
- Each resource card is a Markdown file in `_resources/`.
- The layout for each resource is `_layouts/resource.html`.
- Shared styling is in `assets/css/site.css`.
- Language toggle behavior is in `assets/js/language.js`.

## Adding or editing a resource

Create or edit a file in `_resources/`.

Example:

```markdown
---
title: ParentSquare
description: School communication for families.
category: Essential Links
order: 20
external_url: https://example.com
last_updated: 2026-07-04
content_en: |
  English content goes here.
content_es: |
  Spanish content goes here.
---
```

The `order` field controls where the card appears inside its section. Lower numbers appear first.

## Categories

The home page currently displays these sections:

- Essential Links
- PTA
- School Resources

Set the `category` field to one of those names to place a resource in that section.

## English and Spanish content

Each resource can include both English and Spanish content in the same file:

- `content_en` for English
- `content_es` for Spanish

The site detects a visitor's browser language preference and shows Spanish automatically when the browser language starts with `es`. Visitors can also switch languages manually.

If Spanish is not available yet, remove `content_es` or leave it out.

## URLs

Resources are published at simple top-level URLs, such as:

```text
/parentsquare/
/volunteer/
/school-supply-lists/
```

## Custom domain

The `CNAME` file points GitHub Pages to:

```text
cheneypta.org
```

Configure the repository Pages settings and DNS records in GitHub and your DNS provider.
