# Cheney Elementary PTA Website

**Public website: [cheneypta.org](https://cheneypta.org/)**

This repository contains a simple Jekyll site for Cheney Elementary PTA, designed for GitHub Pages.

The site is intended to remain a minimal quick resource page for families and new parents. It should not replace ParentSquare or the official Cheney Elementary website for current announcements.

## How the site works

- The home page is `index.md`.
- Each resource card is a Markdown file in `_resources/`.
- The layout for each resource is `_layouts/resource.html`.
- Shared styling is in `assets/css/site.css`.
- Language toggle behavior is in `assets/js/language.js`.
- The default layout displays `assets/logo.svg` in the header and uses `assets/logo.png` for the organization logo in structured data.
- `sitemap.xml` lists the homepage and generated resource pages, and `robots.txt` advertises the sitemap to search engines.
- `.well-known/security.txt` directs security researchers to GitHub's private vulnerability reporting form.
- `404.html` provides a bilingual not-found page using the site's external stylesheet so it remains styled under the Content Security Policy.

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

### Event order and cleanup

List upcoming events in chronological order, with the closest upcoming event first. Assign Events `order` values to match their dates, and review those values whenever an event is added or rescheduled. The site sorts by `order`, not automatically by event date. Place events with dates still TBD after events with confirmed dates; do not invent dates to position them.

Remove past event resource files from `_resources/` after the event ends, including the final day of a multi-day event, so their cards and generated pages are no longer published. Git history preserves the removed content. Update the homepage's `last_updated` date, check for links to removed pages, and review the newly featured event's structured data as part of cleanup.

If `external_url` is set, the homepage card links directly to that external URL. If `external_url` is blank, the card links to the generated resource page for that Markdown file.

On generated resource pages, the `Open resource` button only appears when `external_url` is set.

The school-supply-list resource uses structured bilingual data from `_data/supply_lists.yml` and the `_includes/supply-lists.html` include to show each grade in a collapsed disclosure with the supply list written directly on the page and a link to the original flyer.

### Featured event search data

The first card in the Events section—the event with the lowest `order` value—is the featured event. Its detail page automatically includes Event JSON-LD when all of these front-matter fields are present:

- `event_start_date` and `event_end_date` in `YYYY-MM-DD` format
- `event_location_name`
- `event_street_address`, `event_address_locality`, `event_address_region`, and `event_postal_code`
- `event_image`, using a site-relative path to a representative image
- `event_description` for the search-focused description; when omitted, the regular English `description` is used

Only the featured event's detail page receives Event JSON-LD; the homepage remains an event listing page. Give the closest upcoming event the lowest Events `order`, and provide complete, accurate event fields without guessing unknown times. When the featured event changes, add the event fields to the new top card and remove past event resources as described above.

## Categories

The home page currently displays these sections:

- Events
- Parent Resources
- PTA

Homepage sections and their Spanish labels are defined in the `sections` list in the front matter at the top of `index.md`. A resource's `category` must match a section's English `name` to appear in that section.

Set the `category` field to one of those names to place a resource in that section. Use `category_es` for the Spanish category label on resource pages.

## English and Spanish content

Maintain English and Spanish content together in each resource file:

- `title` and `description` for English card and page metadata
- `title_es` and `description_es` for Spanish card and page metadata
- `content_en` for English page content
- `content_es` for Spanish page content

The site checks the visitor's browser language list and shows Spanish automatically when any listed language starts with `es`. Visitors can also switch languages manually.

The language switch also updates the document language, page title, selected-language state, navigation labels, home-link label, language-selector label, and logo alternative text so assistive technologies use the correct language.

Manual language choices are saved in `localStorage` only when the selected language differs from the browser preference. When a visitor changes back to the browser-preferred language, the saved language preference is removed.

When adding or changing visible content, update both languages at the same time, including card descriptions, page content, category labels, navigation, and link labels. Resources that use structured bilingual data, such as school supply lists, should maintain both languages in that data. The template's English metadata fallbacks do not replace the requirement to provide Spanish translations.

## URLs

Resources are published at simple top-level URLs when they do not link directly to an external URL, such as:

```text
/school-supply-lists/
/family-support/
```

Resources with `external_url` set may still have generated pages, but the homepage card will send visitors directly to the external URL.

## Deployment

The `.github/workflows/pages.yml` workflow builds the site, validates the generated HTML with the official Nu Html Checker, and blocks pull requests that contain broken internal links. It verifies that `.well-known/security.txt` exists in the generated site and includes hidden paths in the Pages artifact. Valid changes on `main` are deployed to GitHub Pages; the workflow can also be started manually.

When Nu warnings are found on a pull request from a branch in this repository, the workflow posts them in one bot comment and updates that comment on later runs. A successful clean run marks previous warnings cleared. Long output is truncated with a link to the workflow log. Fork and Dependabot pull requests retain log-only reporting because their tokens have read-only permissions. Validation errors still fail the build; a failure to post the comment does not fail the build.

The `.github/workflows/external-links.yml` workflow checks external links on the first day of each month, when a new resource page is added to `main`, or when started manually. External checks are kept separate from deployment so a temporary third-party outage cannot prevent the site from publishing.

Lychee is pinned to a full commit SHA in both workflows. The repository's existing monthly `github-actions` Dependabot configuration keeps that pinned action updated.

After a successful GitHub Pages deployment, the workflow purges the Cloudflare cache for the configured zone using these repository settings:

- GitHub Actions secret: `CLOUDFLARE_PURGE_TOKEN`
- GitHub Actions variable: `CLOUDFLARE_ZONE_ID`

The purge step currently purges cached content by hostname for `cheneypta.org`.

## Custom domain

The `CNAME` file points GitHub Pages to:

```text
cheneypta.org
```

Configure the repository Pages settings and DNS records in GitHub and your DNS provider.

## Maintenance notes

Every user-facing page must include a `last_updated` date in its front matter. Whenever a page's content, links, metadata, or accessibility information changes, update `last_updated` to the date of that change so the sitemap reports an accurate modification date.

Whenever a resource card is added, removed, or materially changed—especially an event—also update `index.md`'s `last_updated` date. Resource cards are rendered on the homepage, so these changes materially update the homepage even when `index.md` otherwise stays the same.

When making site changes, review this README in the same pull request and update it whenever the site structure, resource fields, category names, URL behavior, layout behavior, language behavior, or deployment behavior changes.
