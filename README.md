# ComptaBase — Official Website

Official landing page and technical overview for **ComptaBase**, an accounting and financial management platform engineered for Moroccan SMEs and accounting professionals.

## 1. Project Overview

ComptaBase is an independent software project focused on:
- Robust double-entry bookkeeping conforming to the Plan Comptable Général Marocain (PCGM).
- Multi-journal architecture (Achats, Ventes, Banque, Caisse, OD).
- Real-time arithmetic equilibrium enforcement (Debit = Credit).
- Auxiliary accounts and lettering (*lettrage*).
- Moroccan tax metadata tracking (ICE, IF, RC, CNSS, Moroccan VAT encaissements / débits).
- Human-in-the-loop AI assistance for document ingestion and invoice extraction (in active research and prototyping).

This website also serves as public technical documentation supporting our application to the **Claude for Startups** program.

## 2. Technical Stack

- **Markup:** Semantic HTML5 (`index.html`, `404.html`)
- **Styling:** Modern, responsive Vanilla CSS (`assets/css/style.css`)
- **Scripting:** Minimal, dependency-free Vanilla JavaScript (`assets/js/main.js`)
- **Design System:** Deep navy palette (`#060B17`), slate surfaces, emerald/mint accents (`#10B981`, `#34D399`)
- **SEO & Social:** Canonical tags, Open Graph meta, Twitter card meta, XML sitemap, `robots.txt`
- **Hosting:** GitHub Pages ($0 budget, static hosting)
- **Domain:** `https://comptabase.com`

## 3. Repository Structure

```
├── .nojekyll              # Bypasses Jekyll processing on GitHub Pages
├── 404.html               # Custom branded 404 error page
├── CNAME                  # Custom domain configuration (comptabase.com)
├── README.md              # Project documentation
├── index.html             # Main landing page
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # Canonical XML sitemap
└── assets/
    ├── css/
    │   └── style.css      # Core stylesheet and design system
    ├── js/
    │   └── main.js        # Navigation and interactive mockup logic
    ├── favicon.svg        # Vector monogram favicon
    └── og-image.svg       # Open Graph social preview banner
```

## 4. Namecheap DNS Configuration for `comptabase.com`

To complete custom domain mapping in Namecheap DNS:

### A Records (Apex / Root `@`)
Configure the following 4 GitHub Pages IP addresses:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | `@` | `185.199.108.153` | Automatic |
| A | `@` | `185.199.109.153` | Automatic |
| A | `@` | `185.199.110.153` | Automatic |
| A | `@` | `185.199.111.153` | Automatic |

### CNAME Record (Subdomain `www`)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `youssefelamraoui.github.io.` | Automatic |

*Note: Maintain all existing MX and email-related TXT records intact to avoid disrupting email services for `founder@comptabase.com`.*

## 5. Contact

- **Email:** `founder@comptabase.com`
- **Canonical Website:** [https://comptabase.com](https://comptabase.com)
