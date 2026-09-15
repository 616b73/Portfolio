# Ashish Kumar Singh — Portfolio

A static terminal-themed portfolio with Home, Experience, Skills, Projects, and Contact tabs.

## Files

- `index.html`: profile content, experience, skills, project links, and contact information.
- `assets/styles.css`: the terminal theme, responsive layouts, focus indicators, and reduced-motion support.
- `assets/script.js`: accessible tab navigation with scoped arrow-key and Home/End support.
- `AshishKumarSingh_Resume.pdf`: existing downloadable resume, preserved independently of the website content.
- `.github/workflows/static.yml`: existing GitHub Pages deployment workflow.

## Preview and deploy

There is no build step or application dependency to install. Open `index.html` directly or serve the repository root with a static HTTP server. Styles, scripts, and the resume use relative paths, including under the `/Portfolio/` GitHub Pages prefix.

The existing Pages workflow deploys pushes to `main`. Feature branches do not automatically deploy. Review changes on a branch before merging. No Pages settings or workflow changes are needed for this update.

## Content maintenance

Update the HTML directly. Keep supplied metrics accurate and distinguish an overall average from a representative measurement. Do not add placeholder metrics, customer deployment claims, internal endpoints, or confidential operational details. ORION is described as implemented platform work; the website does not assert customer-production deployment.

The resume PDF is a separate artifact. Updating the website does not regenerate it.

## Verification

- Run `node --check assets/script.js` and `git diff --check`.
- Confirm every tab activates one panel and updates the status bar.
- With a tab focused, check Left/Right, Home/End, and Tab navigation. Arrow keys elsewhere must not change sections.
- Check narrow mobile and desktop widths for wrapping, readable text, and reachable tabs.
- Confirm the contact links, both project repositories, and resume download.
- Without JavaScript, all sections remain available in document order. The decorative animations honor the system's reduced-motion preference.
