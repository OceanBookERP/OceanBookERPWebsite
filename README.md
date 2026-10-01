# OceanBookERP - Official Public Marketing Website

The official static marketing and product information website for **OceanBookERP** — Commercial ERP & Accounting Software for the Seafood Industry.

---

## 🏗 Directory Architecture

This website is maintained in a completely standalone folder (`website/`) separated from the desktop ERP runtime:

```text
OceanBookERP/
├── frontend/             # Desktop ERP Frontend (React + Ant Design)
├── backend/              # Desktop ERP Backend (Spring Boot 3 + SQLite)
├── src-tauri/            # Tauri 2 Desktop Shell
└── website/              # Public Marketing Website (React + Vite + TypeScript)
    ├── public/
    │   ├── oceanbook-logo.png     # Official OceanBookERP Logo
    │   ├── favicon.ico            # Brand Favicon
    │   ├── favicon-32x32.png      # 32px Icon
    │   ├── apple-touch-icon.png   # Apple Touch Icon
    │   ├── robots.txt             # SEO Crawl Configuration
    │   └── sitemap.xml            # SEO Sitemap
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Navbar.tsx              # Responsive Navigation & Brand Header
    │   │   ├── Hero.tsx                # Hero Showcase & Core Value Proposition
    │   │   ├── WhyOceanBook.tsx        # Problem-Solution Architecture
    │   │   ├── CoreFeatures.tsx        # 7-Category Tabbed Feature Explorer
    │   │   ├── BuiltForSeafood.tsx     # 6 Industry Segment Solutions
    │   │   ├── BusinessFlow.tsx        # Commercial & Fishing Flow Switcher
    │   │   ├── FishingOperations.tsx   # Fleet, Voyage, Landing & Crew Economics
    │   │   ├── AccountingSection.tsx   # Connected Double-Entry Engine & Ledgers
    │   │   ├── DispatchLogistics.tsx   # Carrier & Cold-Chain Tracking
    │   │   ├── ProductShowcase.tsx     # Desktop ERP Architecture Showcase
    │   │   ├── MultiCompany.tsx        # Multi-Firm Isolation & Switching
    │   │   ├── GstTax.tsx              # Adaptive Tax & GST Configuration
    │   │   ├── AboutSection.tsx        # Product Philosophy & Foundations
    │   │   ├── ContactSection.tsx      # Demo Request & Operational Form
    │   │   ├── DemoRequestModal.tsx    # Modal Walkthrough Request Dialog
    │   │   └── Footer.tsx              # Footer & Legal Dialogs
    │   ├── styles/
    │   │   └── index.css               # Design System & Responsive Tokens
    │   ├── types/
    │   │   └── index.ts                # TypeScript Interfaces
    │   ├── App.tsx                     # Main Website Assembler
    │   └── main.tsx                    # React Entrypoint
    ├── index.html                      # SEO Optimized HTML5 Document
    ├── netlify.toml                    # Production Netlify Configuration
    ├── package.json
    ├── tsconfig.json
    └── vite.config.ts
```

---

## 🚀 Running the Website Locally

### 1. Navigate to the Website Directory
```powershell
cd website
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Start Local Development Server
```powershell
npm run dev
```
* The local development server will start at: `http://localhost:5174/`

### 4. Build for Production
```powershell
npm run build
```
* Compiles clean production assets into `website/dist/`.

---

## 🌐 Deploying to Netlify

The repository includes a ready-to-use [netlify.toml](file:///c:/Users/DELL/Desktop/OceanBook/website/netlify.toml) configuration.

### Option A: Automatic Git Deployment via Netlify Dashboard
1. Connect your repository to **Netlify** (`app.netlify.com`).
2. Set **Base directory**: `website`
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `website/dist` (or `dist` if base is `website`)
5. Deploy site.

### Option B: Deploy via Netlify CLI
```powershell
cd website
npm run build
npx netlify deploy --prod --dir=dist
```
