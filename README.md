# Cheney Elementary PTA Website

This repository contains a simple Jekyll site for Cheney Elementary PTA, designed for GitHub Pages.

## How the site works

- The home page is `index.md`.
- Each resource card is a Markdown file in `_resources/`.
- The layout for each resource is `_layouts/resource.html`.
- Shared styling is in `assets/css/site.css`.

## Adding or editing a resource

Create or edit a file in `_resources/`.

Example:

```markdown
---
title: ParentSquare
description: School communication for families.
icon: 💬
category: Parent Resources
order: 10
external_url: https://example.com
last_updated: 2026-07-04
content_en: |
  English content goes here.
content_es: |
  Spanish content goes here.
---
```

The `order` field controls where the card appears on the home page. Lower numbers appear first.

## English and Spanish content

Each resource can include both English and Spanish content in the same file:

- `content_en` for English
- `content_es` for Spanish

If Spanish is not available yet, remove `content_es` or leave it out.

## Placeholder links

Some starter resources use `external_url: "#"`. Replace those with the official membership, volunteer, or supply-list links when available.

## Custom domain

The `CNAME` file points GitHub Pages to:

```text
cheneypta.org
```

Configure the repository Pages settings and DNS records in GitHub and your DNS provider.
