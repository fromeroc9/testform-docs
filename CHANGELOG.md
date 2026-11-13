# Changelog

All notable changes to the **Testform Documentation Portal** (`@fromeroc9/testform-docs`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.1] - 2026-11-13

### Added

- **Model Context Protocol (MCP) Server Documentation (`es/docs/integration/mcp.mdx`, `en/docs/integration/mcp.mdx`):**
  - Documented the official `@fromeroc9/testform-mcp` server enabling AI agents (Claude Desktop, Cursor, Antigravity, Cline, Zed) to manage Testform projects natively.
  - Provided step-by-step setup guides for `claude_desktop_config.json`, `.cursor/mcp.json`, and Antigravity IDE `mcp_servers`.
  - Documented all 9 MCP tools (`testform_plan`, `testform_apply`, `testform_validate`, `testform_query`, `testform_show`, `testform_status`, `testform_scaffold`, `testform_report`, `testform_attach`).
  - Documented live MCP resources (`testform://state`, `testform://schema`, `testform://summary`) and prompt templates (`generate-test-cases`, `diagnose-test-failure`, `create-regression-plan`).
- **Attachment System & Governance Documentation:**
  - Documented `scaffold.attach` convention in `main.yml` specification.
  - Added Attachment Governance matrix guide for `set attach` / `set evidence` in testcase, testrun, testplan, and bug resources.
  - Enhanced Interactive Web Playground: expanded layout to 100% full-bleed viewport width, eliminating horizontal squeezing and removing right TOC sidebar constraints.

## [1.3.0] - 2026-11-11

### Added

- **The 4 Declarative Resources & Bug Defect Specification (`en/` & `es/`):**
  - Documented the fourth fundamental declarative primitive: `bug` (`.bug.feature`, `@bg-*`), alongside `testcase`, `testrun`, and `testplan` in `docs/test-as-code/resources.mdx`.
  - Documented complete defect lifecycle statuses (`open`, `in_progress`, `resolved`, `reopened`, `discarded`, `duplicate`), Gherkin traceability statements (`* set target`, `status`, `trace`, `evidence`), and state ledger representations.
- **Local Provider Persistence & PR Workflow Guidance (`en/` & `es/`):**
  - Documented relocation of the local provider simulated database from `.testform/cache/data.json` to canonical `.testform/data.json` with seamless automatic backward compatibility in `docs/integration/ci-cd-github.mdx`, `docs/test-as-code/configuration.mdx`, and `cli/directories.mdx`.
  - Documented `.testform/cache/parser-ast.json` persistence rules, 100% disposable cache `.gitignore` patterns, and conflict-free Pull Request workflows for `provider: local`.

### Changed

- **Cucumber Gherkin Status & Execution Duration Documentation (`en/` & `es/`):**
  - Synchronized TestRun and status documentation across `docs/test-as-code/resources.mdx`, `docs/getting-started/test-suite-automation.mdx`, `cli/developer-tools/suite.mdx`, `cli/developer-tools/report.mdx`, `cli/storage/import.mdx`, `docs/integration/vscode.mdx`, `docs/language/search-and-import.mdx`, `es/docs/language/state.mdx`, and `api/reports.mdx` with Cucumber Gherkin statuses (`passed`, `failed`, `pending`, `skipped`, `undefined`, `ambiguous`, plus legacy `blocked`).
  - Documented Cucumber JSON `result.duration` nanosecond import into `* set duration = ...` in `cli/storage/import.mdx`, updated VS Code QA Fast Pass status/command references in `docs/integration/vscode.mdx`, and aligned report CLI/API status examples in `cli/developer-tools/report.mdx` and `api/reports.mdx`.

---

## [1.2.0] - 2026-11-09

### Added


#### ⚡ Interactive Web Playground (`src/components/Playground.astro`)
- **In-Browser Sandbox Experience (`es/docs/playground.mdx` & `en/docs/playground.mdx`):**
  - Integrated interactive Web Playground component simulating Testform engine behavior client-side with zero local installation.
  - Interactive presets:
    - *1. Test Cases (testcase)*: Declarative spec editing and plan calculation.
    - *2. Test Run Execution*: Live status, duration, and attachment assignment with modern `* set` syntax.
    - *3. Drift Detection*: Real-time cryptographic signature drift simulation (`~ To Change`).
    - *4. Runner Bridge*: Ingest raw JUnit XML / test outputs and auto-generate `.run.feature` specs.
  - Dual-pane layout featuring real-time **Visual Plan Diff**, **CLI Output Terminal**, and **State Ledger (`testform.state`)** inspector.

#### 🌉 Runner Bridge CLI Reference (`testform import -results=...`)
- **Native Test Runner Ingestion (`es/cli/storage/import.mdx` & `en/cli/storage/import.mdx`):**
  - Comprehensive documentation for `testform import -results=<report> [options]`.
  - Details multi-format auto-detection for JUnit XML (PyTest, Jest, Cypress, NUnit), Playwright JSON, and Cucumber JSON.
  - Documents granular in-place updating via `-target=<file.run.feature>`, `-out`, and automated bug creation (`--auto-create-bugs`).

#### 🛠️ VS Code Visual Plan Diff & State Time Machine Guides
- **VS Code Extension Integration Guide (`es/docs/integration/vscode.mdx` & `en/docs/integration/vscode.mdx`):**
  - Documented the new **Visual Plan Diff Webview** (`testform.showPlanDiff`) with color-coded diff cards (Add, Change, Destroy, Replace) and direct Apply button.
  - Documented the **State Time Machine View** (`testform.views.history`) with Git commit timeline, virtual on-demand document diffs (`testform-state-revision://`), and safe rollback action.
  
#### 🧭 Dual Address Architecture & Scope Priority Documentation
- **Architecture & Technical Guide (`es/api/` & `en/api/`):**
  - Documented Dual Address architecture supporting both logical addresses (`[namespace.]<basename>.[@tag]`) and physical paths (`<relative_path> + [@tag]`).
  - Added 3-tier scope priority matrix: 1. Special root tags (`@testcase`, `@testrun`, `@testplan`, `@bug`), 2. Filename suffix, 3. `main.yml` conventions.
  - Added comparative table comparing physical paths, logical addresses, and legacy identity approaches with collision avoidance rules.

#### ⏱️ Reactive Watch Mode (`testform plan --watch`)
- **CLI Workflow Plan Documentation (`es/cli/workflow/plan.mdx` & `en/cli/workflow/plan.mdx`):**
  - Added full documentation for `--watch` mode in both Spanish and English.
  - Detailed 300ms debounce behavior, terminal feedback, and fast feedback loops during spec authoring.

#### 🚀 Binary Plan CI/CD Pipeline (GitHub Actions)
- **CI/CD Integration Guide (`es/docs/integration/ci-cd-github.mdx` & `en/docs/integration/ci-cd-github.mdx`):**
  - Documented automated CI/CD pipeline using `.github/workflows/testform-plan.yml`.
  - Explains binary plan generation (`testform plan -out=plan.tfplan`), artifact upload (`actions/upload-artifact@v4`), and strict policy gating.

### Changed
- **DSL Syntax Modernization (`* set`):**
  - Updated all code blocks, tutorials, BDD examples, and CLI suite management references from `* mark` to `* set` (`* set status = ...`, `* set target = ...`, `* set trace = ...`, `* set evidence = ...`) across all 211 pages.
  - Updated CLI command documentation for `testform suite set` and `testform spec <run|bug> set`.
- Bumped documentation portal to v1.2.0 with complete bilingual synchronization across all 211 pages.

---

## [1.1.0] - 2026-11-06

### Added

#### 🧩 Resource Management (`testform providers resource`)
- **CLI Reference Guide:** Documented `testform providers resource` in Spanish (`es/cli/developer-tools/providers.mdx`) and English (`en/cli/developer-tools/providers.mdx`).
  - `testform providers resource scaffold <name>`: Scaffolds `.testform/resources/<name>.ts`.
  - `testform providers resource list`: Inspects registered resource types and displays `[lifecycle hooks]`.
  - `testform providers resource show <name>`: Displays template details, attributes, state, and lifecycle hooks.
- **Resource API Reference:** Updated `es/api/resources.mdx` and `en/api/resources.mdx` with `ResourceTemplate` structure (`attributes`, `state`, `lifecycle` hooks) and CLI scaffolding tips.

#### 🛡️ Policy Engine Governance
- **CLI Reference (`testform policy` & `testform validate`):**
  - Documented 8 system policies with `bug` scope (`@bg-*`) and new `bug-target-integrity` rule.
  - Documented CLI filtering flags: `-include`, `-exclude`, `-severity` (`error`, `warning`, `advisory`), `-strict`, and `-compact-warnings`.
  - Documented custom policy scaffolding (`testform policy --scaffold <name>`).
- **Policy API Reference:** Updated `es/api/policies.mdx` and `en/api/policies.mdx` with programmatic `registerPolicy` syntax.

#### 🔌 Agnostic Provider Architecture (`IProvider`)
- **Agnostic CRUD Resources:** Documented `IProvider` contract with `resources: Record<string, IResourceHandler>` implementing `create`, `read`, `update`, `delete`.
- **Custom Provider Scaffolding:** Documented `testform providers scaffold <name> [--project]`.
- **Full Bilingual Sync:** 100% parity between Spanish (`/es/`) and English (`/en/`) documentation across 209 static pages.
