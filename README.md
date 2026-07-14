# AIM Club Website

A simple static website for AIM (AI, InfoSec & Mentorship) — no build step required.

## Structure

- `index.html`, `about.html`, `membership.html`, `events.html`, `team.html`, `contact.html`, `constitution.html` — pages
- `css/styles.css` — shared stylesheet (modern gradient/glass theme)
- `js/main.js` — mobile nav toggle + scroll-reveal animations
- `assets/` — logo and images (see `assets/images/README.md` for how to swap in real photos)

## Preview locally

Open `index.html` directly in a browser, or run a local server from the project root:

```
npx serve .
```

or

```
python -m http.server
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/aim-website/`.

## Replacing placeholder content

Search the HTML files for bracketed placeholders like `[Month] [Day], [Year]`, and replace them with real event details. Officer names are placeholders in `team.html` — swap in real Cabinet/Officer names and photos. Contact links (Discord, Instagram, LinkedIn, membership form, mentor request form) in `contact.html` are placeholder `#` links until real URLs are available. The full club Constitution is in `constitution.html`, sourced from the official 2026–2027 AIM Constitution.
