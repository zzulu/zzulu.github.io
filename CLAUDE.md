# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog at https://zzu.lu, built with Hugo (static site generator). Content is in Korean. No npm/Node.js toolchain — Hugo handles everything directly.

## Common Commands

```bash
hugo server          # Start local dev server (default: http://localhost:1313)
hugo                 # Build site to /public
hugo new posts/slug.md  # Create a new post from archetype
```

## Architecture

**Content:** `content/posts/*.md` for blog posts, `content/about.md` and `content/now.md` for static pages.

**Templates:** `layouts/` contains all Hugo templates. The base layout is `layouts/_default/baseof.html`, which wraps every page with header and footer partials from `layouts/partials/`.

**Assets:** `assets/css/main.css` uses CSS custom properties for theming. `assets/css/syntax-light.css` and `syntax-dark.css` handle code block highlighting. `assets/js/theme.js` manages dark/light/system theme cycling and persists the choice in `localStorage`.

Hugo processes assets with minification and fingerprinting via `resources.Get | minify | fingerprint`, generating SRI hashes automatically.

**Dark mode:** Controlled via `data-theme` attribute on `<html>`. The JS toggles between system preference, light, and dark modes.

## Content Conventions

- Posts use front matter: `title`, `date` (YYYY-MM-DD), optional `tags` array, optional `draft: true`, optional `hideDate: true`.
- Korean typography: `word-break: keep-all` is set globally.
- Max content width is 720px.
