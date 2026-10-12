# ComptaBase — Official Website

Public website and project overview for **ComptaBase**, an accounting and financial management software initiative focused on Moroccan SMEs and accounting professionals.

## 1. Project Overview

ComptaBase is an independent software engineering initiative currently in active development. The platform is designed around:
- Structured double-entry bookkeeping conforming to the Plan Comptable Général Marocain (PCGM).
- Multi-journal architecture (Purchases, Sales, Bank, Cash, and Miscellaneous Operations).
- Arithmetic balance validation controls (Debit = Credit) to prevent out-of-balance entries from posting.
- Auxiliary sub-ledger accounts and lettering (*lettrage*).
- Moroccan business identification fields (ICE, IF, RC, CNSS) and VAT parameterization.
- Human-in-the-loop AI assistance concepts for document ingestion and entry suggestion (under research and prototyping).

This website also serves as public technical documentation supporting an application to the **Claude for Startups** program.

> **Project Boundary Note:** This repository contains the public static landing page and documentation. The core backend ERP and application repositories are managed separately.

## 2. Technical Stack

- **Markup:** Semantic HTML5 (`index.html`, `404.html`) with `lang="en"`
- **Styling:** Custom responsive CSS (`assets/css/style.css`)
- **Scripting:** Minimal vanilla JavaScript (`assets/js/main.js`)
- **Visual Design:** Deep navy palette (`#060B17`), slate surfaces, emerald/mint accents (`#10B981`, `#34D399`)
- **SEO & Social:** Canonical URL (`https://comptabase.com/`), Open Graph metadata, Twitter card tags, XML sitemap, `robots.txt`
- **Hosting:** GitHub Pages (Static hosting)
- **Production URL:** [https://comptabase.com](https://comptabase.com)

## 3. Repository Structure

```
├── .nojekyll              # Disables Jekyll processing on GitHub Pages
├── 404.html               # Custom branded 404 error page
├── CNAME                  # Custom domain definition (comptabase.com)
├── README.md              # Project and deployment documentation
├── index.html             # Main public landing page
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # Canonical XML sitemap
└── assets/
    ├── css/
    │   └── style.css      # Core design system and responsive layout
    ├── js/
    │   └── main.js        # Navigation and mockup tab interactivity
    ├── favicon.svg        # Vector monogram favicon
    └── og-image.svg       # Vector Open Graph social preview banner
```

## 4. Production Deployment & Domain Status

- **Custom Domain:** `comptabase.com`
- **DNS Hosting:** Namecheap DNS (Configured with apex A records pointing to GitHub Pages IP pool and `www` CNAME pointing to `youssefelamraoui.github.io`).
- **Deployment Source:** GitHub Pages publishing from the `main` branch root `/(root)`.
- **SSL / TLS:** Managed TLS certificate active on GitHub Pages.

## 5. Contact & Disclaimers

- **Project Contact:** `founder@comptabase.com`
- **Canonical Website:** [https://comptabase.com](https://comptabase.com)
- **Legal Notice:** ComptaBase is an independent software project currently in development. It does not provide certified accounting, tax, or legal advice. System tax parameters must be validated against prevailing legislation (General Tax Code / CGI).
