<p align="center">
  <img src="public/favicon.svg" alt="Testform Logo" width="80" height="80" />
</p>

<h1 align="center">Testform Documentation Portal</h1>

<p align="center">
  <strong>Declare, plan, apply, and reconcile in Git.</strong>
</p>

<p align="center">
  <em>The official documentation, guides, and API specifications for Testform.</em>
</p>

<p align="center">
  <a href="https://fromeroc9.github.io/testform-docs/"><img src="https://img.shields.io/badge/docs-online-4F46E5?style=flat-square&logo=gitbook&logoColor=white" alt="Docs Online" /></a>
  <a href="https://github.com/fromeroc9/testform-docs/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/fromeroc9/testform-docs/deploy.yml?branch=main&label=deploy&style=flat-square" alt="Deploy Status" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight%20%2B%20Astro-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Built with Starlight" /></a>
  <a href="https://github.com/fromeroc9/testform"><img src="https://img.shields.io/badge/core-testform-0284C7?style=flat-square&logo=github&logoColor=white" alt="Core Repository" /></a>
  <a href="https://github.com/fromeroc9/testform/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-blue?style=flat-square" alt="License" /></a>
</p>

---

Welcome to the source repository for the **[Official Testform Documentation Portal](https://fromeroc9.github.io/testform-docs/)**. 

This site is built with **[Astro](https://astro.build/)** and **[Starlight](https://starlight.astro.build/)**, providing a bilingual (Spanish & English), high-performance, and searchable documentation experience for the **Testform** declarative Test-as-Code ecosystem.

---

## 🌐 Live Documentation

- **Production Portal:** 👉 **[https://fromeroc9.github.io/testform-docs/](https://fromeroc9.github.io/testform-docs/)**
- **Spanish Documentation (Default):** [https://fromeroc9.github.io/testform-docs/es/](https://fromeroc9.github.io/testform-docs/es/)
- **English Documentation:** [https://fromeroc9.github.io/testform-docs/en/](https://fromeroc9.github.io/testform-docs/en/)
- **Core Engine Repository:** [fromeroc9/testform](https://github.com/fromeroc9/testform)

---

## 📖 Portal Content Overview

The portal covers over 190 pages structured into four main areas:

```text
📚 Documentation Portal
├── 📁 DOCS
│   ├── Getting Started (Prerequisites, Quickstart, Local vs GitHub Provider)
│   ├── Guides (Automation, Data Sources, Dependencies DAG, Drift, Lifecycle, Modules, Reports)
│   ├── Core Architecture (Test-as-Code, Gherkin specs, Reconciliation, Policies)
│   ├── Configuration Language (main.yml, Providers, Variables, Locals, Outputs, Backends)
│   ├── Integration (GitHub Actions CI/CD, GitLab CI, Custom Webhooks, Test Runners)
│   ├── Migration (From Jira, Manual Test Cases, State Migration)
│   └── Terraform Parity (HCL equivalence, workflow mapping)
│
├── 📁 CLI Reference
│   ├── Getting Started & Core Concepts
│   ├── Configuration & Precedence Hierarchy
│   ├── Core Workflow (init, plan, apply, destroy, refresh)
│   ├── Developer Tools (validate, fmt, graph, diff, report, query, suite, show, policy)
│   ├── Storage & State Management (state, taint, force-unlock, import)
│   └── Workspaces & Sessions (workspace, ephemeral, login, logout)
│
├── 📁 API & SDK
│   ├── SDK Extensibility (registerPolicy, registerResource)
│   ├── Storage Backends (IBackend: local, s3, oci, azurerm, gcs)
│   ├── Quality Providers (IProvider: local, github, gitlab, jira)
│   ├── Modular Reports (IReport, IReportFormat, custom report loaders)
│   └── Expressions & AST Engine (Evaluator, interpolation)
│
└── 📁 Built-in Functions
    ├── String manipulation
    ├── Collection & list helpers
    ├── System utilities
    └── CLI helpers
```

---

## 🛠️ Local Development

### Prerequisites

Ensure you have the following installed:
- **Node.js:** version `18.0.0` or higher (`node -v`)
- **NPM:** version `9.0.0` or higher (`npm -v`)
- **Git**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/fromeroc9/testform-docs.git
cd testform-docs
npm install
```

### Development Server

Start the local development server with hot-reload:

```bash
npm run dev
```

The site will be available at:
```text
http://localhost:4321/testform-docs/
```

### Production Build & Preview

Build the static output and verify all pages compile cleanly:

```bash
# Build the production site (dist/)
npm run build

# Preview the production build locally
npm run preview
```

> **Note:** The build executes Starlight's static site generation and generates the Pagefind offline search index across all 190+ pages.

---

## 📁 Repository Structure

```text
testform-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment to GitHub Pages
├── public/                     # Static assets (favicons, touch icons, .nojekyll)
├── src/
│   ├── components/             # Custom UI components
│   │   ├── Header.astro        # Custom header with logo, theme & language toggle
│   │   ├── Sidebar.astro       # Collapsible navigation sidebar
│   │   ├── CodePreview.astro   # Interactive tabbed code blocks
│   │   ├── PeleDiagram.astro   # Architecture & state diagrams
│   │   └── PipelineFlow.astro  # Interactive CI/CD flow diagrams
│   ├── content/
│   │   └── docs/               # Documentation content (.md / .mdx)
│   │       ├── en/             # English documentation
│   │       └── es/             # Spanish documentation (Default locale)
│   ├── pages/                  # Landing pages (es/index.astro, en/index.astro)
│   └── styles/
│       └── custom.css          # Brand palette (Indigo, Slate, Sky) and typography
├── astro.config.mjs            # Astro & Starlight configuration
├── package.json
└── tsconfig.json
```

---

## ✍️ Contribution & Authoring Guidelines

When adding or updating documentation:

1. **Bilingual Parity:** Always maintain parity between Spanish (`src/content/docs/es/`) and English (`src/content/docs/en/`). Every page created or modified in one language must have its counterpart in the other.
2. **Canonical Manifest:** Always reference **`main.yml`** as the primary Testform configuration file (do not reference legacy `testform.yml`).
3. **Diagnostic Standards:** When documenting CLI errors or warnings, follow the HashiCorp Terraform box format:
   ```text
   ╷
   │ Error: Instance cannot be destroyed
   │ 
   │   Resource github_testcase.auth/login.case.feature.@tc-1 has lifecycle.prevent_destroy set.
   ╵
   ```
4. **Frontmatter:** All `.mdx` pages require valid YAML frontmatter:
   ```yaml
   ---
   title: "Page Title"
   description: "Concise summary for search index and SEO"
   ---
   ```
5. **Callout Alerts:** Use Starlight aside blocks for notes, tips, and warnings:
   ```markdown
   :::note
   Helpful tip or additional context.
   :::

   :::caution
   Important prerequisite or potential pitfall.
   :::
   ```

---

## 🚀 Deployment

Deployments are fully automated via GitHub Actions:
- Any push or merge to the `main` or `master` branch triggers `.github/workflows/deploy.yml`.
- The workflow builds the static site with Node.js 24 and deploys the artifact directly to **GitHub Pages**.

---

## 📄 License

This documentation portal is open-source software licensed under the **[GPL-3.0-or-later](https://github.com/fromeroc9/testform/blob/main/LICENSE)**.

Developed and maintained by **Flavio Romero** (<flavio.arc9@gmail.com>).

