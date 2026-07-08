# IPU SGPA Calculator

GGSIPU semester SGPA calculator built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes

- `postcss.config.js` was added — required for Tailwind, wasn't in your original file list.
- `icon.png` and `opengraph-image.png` are image files — add your own 512x512 logo PNG and a 1200x630 OG image at `app/icon.png` and `app/opengraph-image.png`.
- Theme (light / dark / eye-comfort) is saved to `localStorage` and toggled via the Navbar.
- Grade scale used: O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0 (standard GGSIPU scale).

