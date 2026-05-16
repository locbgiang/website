# Portfolio Site — Changes Summary
Date: May 15, 2026

---

## index.css
- Added `background-color: #0d0d0d` to `body` so the dark theme is applied globally
- Added `scroll-behavior: smooth` to `body` for smooth anchor link navigation

---

## index.html
- Added `<meta name="description">` tag for SEO
- Added `<meta name="author">` tag
- Updated `<title>` from "Loc's Portfolio" to "Loc Giang | Full-Stack Developer"

---

## src/App.jsx
- Fixed invalid CSS values: `height: max` and `width: max` replaced with `min-height: 100vh` and `width: 100%`
- Updated background color to `#0d0d0d` to match global body color

---

## src/components/Header.jsx  (full rewrite)
- Fixed hardcoded `height: 1000px` — replaced with `min-height: 100vh` using flexbox
- Fixed typo: "bellow" → "below"
- Added a sticky **navigation bar** at the top with anchor links: About, Skills, Projects, Contact
- Nav bar has a frosted-glass effect (`backdrop-filter: blur`) and a subtle bottom border
- Added animated entrance for name, greeting, and description using **framer-motion**
- Hero section now displays: greeting label → full name (large) → subtitle description
- Social icon buttons (LinkedIn, GitHub, Email) now:
  - Are proper `<button>` elements instead of plain `<div>`
  - Have `aria-label` attributes for accessibility
  - Open external links in a new tab (`target="_blank"`)
  - Have smooth hover transitions (rotate + background)
- Added a bouncing animated scroll-down arrow at the bottom of the hero section

---

## src/components/Body.jsx  (full rewrite)
- Added **About Me** section (`id="about"`) with a personal bio paragraph
- Added **Tech Stack / Skills** section (`id="skills"`) with an animated badge grid
  - 12 skills listed: React, JavaScript, TypeScript, Node.js, Redux, Tailwind CSS,
    Styled-Components, HTML/CSS, Solidity, Hardhat, Ethers.js, Git
  - Each badge animates into view on scroll using framer-motion `whileInView`
- Fixed card click vs. link conflict:
  - The entire card still navigates to the live site on click
  - "Source" and "Live" link buttons use `e.stopPropagation()` so they work independently
- All external links now open in a **new tab** (`target="_blank"` + `rel="noopener noreferrer"`)
- Added a separate **"Live" demo link** button alongside the GitHub source link on each card
- Added smooth card hover effects: `background-color`, `box-shadow`, `transform: translateY(-4px)`,
  and `border-color` all transition with `0.3s ease`
- Project cards animate into view on scroll via `whileInView` with `once: true`
- Added **`alt` text** to all project images for accessibility
- Fixed CSS typo: `padding:left: 0px` → `padding-left: 0`
- Improved tech badge styling: dark background, border, subtle hover color
- Improved section title styling with accent color (`#6c8ebf`) and a divider line
- Added `id="projects"` wrapper section for nav anchor linking
- Shortened and cleaned up project description text

---

## src/components/Footer.jsx  (full rewrite)
- Fixed invalid CSS: `width: full` → `width: 100%`
- Fixed invalid CSS property: `text-size: small` → `font-size: 16px`
- Added `id="contact"` so the nav "Contact" anchor link works
- Added social icon row (LinkedIn, GitHub, Email) with `aria-label` for accessibility
- "Get in touch" label added above the email address
- Email address is now a clickable `mailto:` link
- Divider line is now `1px` solid and a subtle dark color instead of near-invisible `0.25px gray`
- Copyright line added: "© 2026 Loc Giang. All rights reserved."
- Changed footer element from `<div>` to semantic `<footer>` HTML element

---

## Dependencies Added
- `framer-motion@6` — animation library (compatible with React 17)
  installed via: `npm install framer-motion@6`
