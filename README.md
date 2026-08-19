# AP Maju Jaya Trading — Website

A ready-to-publish one-page website built from your company profile PDF.

## What's inside
- `index.html` — all page content
- `styles.css` — design system & layout
- `script.js` — gallery, lightbox, live clock, mobile nav, WhatsApp quote form
- `images/` — your logo + 18 real project photos, optimized for web

## How to view it
Just double-click `index.html` to open it in any browser — no install needed.

## How to publish it (pick one)
1. **Netlify Drop** — go to https://app.netlify.com/drop and drag the whole folder in. Live in seconds, free.
2. **Your own hosting / domain** — upload all files (keep the folder structure) via FTP or your host's file manager to the `public_html` (or `www`) folder.
3. **GitHub Pages** — create a repo, push these files, enable Pages in repo settings.

## Things to check before going live
- The "Send via WhatsApp" quote button opens WhatsApp using **017-620 4655** — update the number in `script.js` (search for `waNumber`) if this should go to a different line.
- Business licenses & purchase order pages from your PDF were **left out on purpose** — they contain personal IC numbers and confidential client pricing that shouldn't be public. The Credentials section instead summarizes your CIDB G2 and MOF Bumiputera registration as trust badges.
- Swap in your own domain email/WhatsApp Business number if different from what's shown.

## Editing content later
Everything is plain HTML/CSS/JS — no build tools required. Open `index.html` in any text editor and edit the text directly, or ask Claude to make changes for you.
