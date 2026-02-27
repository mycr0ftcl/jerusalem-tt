# Jerusalem T&T — Website

Static website for **Jerusalem T&T**, an incoming tour operator for Israel, Jordan & Palestine.

**Live site:** https://mycr0ftcl.github.io/jerusalem-tt/  
**GitHub repo:** https://github.com/mycr0ftcl/jerusalem-tt

---

## Structure

```
jerusalem-tt/
├── index.html               # Homepage
├── about.html
├── israel.html
├── jordan.html
├── palestine.html
├── pilgrimage.html
├── adventure.html
├── culinary.html
├── family.html
├── group-tours.html
├── fit-personalized.html
├── mice.html
├── agriculture.html
├── culture-history.html
├── unique-experiences.html
│
├── css/
│   └── style.css            # Full design system (all breakpoints)
│
├── js/
│   └── main.js              # Nav toggle, mobile dropdowns, active link
│
├── images/
│   ├── logo-icon.png        # Blue icon (nav), transparent bg, 311×513
│   └── logo.png             # Full logo, transparent bg, 565×800
│
├── scrape-content/          # Source content (markdown from original Wix site)
│   ├── *.md                 # One file per page
│   ├── image-urls.txt       # All Wix CDN image URLs with human-readable names
│   └── image-map.json       # name → URL mapping used by build script
│
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions — auto-deploy to GitHub Pages
```

> **Images** are served directly from Wix CDN (no copies stored in the repo). URLs are in `scrape-content/image-map.json`.

---

## Deployment

The site deploys automatically to **GitHub Pages** on every push to `main`.

### How it works

1. Push any change to `main`
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) runs
3. It copies the repo contents to the `gh-pages` branch
4. GitHub Pages serves that branch at `https://mycr0ftcl.github.io/jerusalem-tt/`

**Typical deploy time:** ~30 seconds after push.

### Deploy manually

```bash
git add .
git commit -m "your message"
git push
```

That's it. No build step, no npm install, no bundler — it's plain HTML/CSS/JS.

### Check deploy status

```bash
gh run list --repo mycr0ftcl/jerusalem-tt --limit 5
```

Or visit: https://github.com/mycr0ftcl/jerusalem-tt/actions

---

## Making changes

### Edit a page

Open any `.html` file directly — pages share the same nav/footer pattern.  
The nav is in each file's `<header>` and the footer in `<footer>` (both identical across pages).

### Edit styles

All CSS is in `css/style.css`. Key variables at the top:

```css
:root {
  --navy:   #1B2A4A;   /* primary dark */
  --gold:   #C9A85C;   /* accent */
  --ivory:  #F8F6F1;   /* light bg */
  --steel:  #3D5A80;   /* mid blue */
  --sand:   #E8DCC8;   /* warm light */
}
```

### Add a new page

1. Copy an existing page as a template
2. Update the `<title>`, hero content, and body sections
3. No build step needed — push and it deploys

---

## Tech stack

| Thing | What |
|-------|------|
| HTML/CSS/JS | Pure vanilla, no framework |
| Fonts | Playfair Display + Inter (Google Fonts CDN) |
| Icons | Unicode characters + CSS (no icon library) |
| Images | Wix CDN URLs (no local copies in repo) |
| Hosting | GitHub Pages (free) |
| CI/CD | GitHub Actions |
| Domain | `mycr0ftcl.github.io/jerusalem-tt` (no custom domain yet) |

---

## Original site

Scraped from the original Wix site. All source content is in `scrape-content/*.md`.  
Screenshots of the original 15 pages are in `~/jerusalem-tt-scrape/screenshots/` on this machine.

---

## Repo access

- Owner: `mycr0ftcl` (GitHub)
- Admin collaborator: `salah153`
