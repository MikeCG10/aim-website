# AIM Club Website

A simple static website for AIM (AI, InfoSec & Mentorship) — no build step required.

## Structure

- `index.html`, `about.html`, `events.html`, `team.html`, `contact.html` — pages
- `css/styles.css` — shared stylesheet
- `js/main.js` — mobile nav toggle
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

Search the HTML files for bracketed placeholders like `[Your University]`, `[Month] [Day], [Year]`, and `[Room / Building]`, and replace them with real club details. Officer names/roles are in `team.html`; event details are in `index.html` and `events.html`; contact links are in `contact.html`.
