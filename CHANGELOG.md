# Changelog

All notable changes to the **Testform Documentation Portal** (`@fromeroc9/testform-docs`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- **Testform Studio Guides (`en/` & `es/` `docs/integration/studio.mdx`, `docs/integration/index.mdx`):**
  - Documented Testform Studio capabilities, execution results import (`ImportResultsModal`), `.docx`/`.xlsx` exports, real-time SSE workspace sync (`/events`), and CLI-parity API routes (`/apply`, `/destroy`, `/diff`, `/force-unlock`, `/import`, `/ephemeral`).

### Changed

- **Branding Cleanup (`en/` & `es/` `docs/language/backends.mdx`):**
  - HTTP backend description now references Testform's own protocol instead of Terraform's, reflecting the `X-Testform-Lock-ID` header rename in the core CLI.
- **CLI Workflow & Provider Destruction Docs (`en/` & `es/` `cli/workflow/destroy.mdx`, `cli/workflow/apply.mdx`, `docs/language/providers.mdx`):**
  - Documented `--parallelism <n>` concurrency flag on `testform destroy` and `testform apply`, permanent deletion via `deleteIssue()` across `GitHubProvider` (GraphQL + Project V2 cleanup), `GitLabProvider` (`DELETE /projects/:id/issues/:issue_iid`), and `LocalProvider` (`.testform/data.json` + `sub_issues` pruning), with `closeIssue()` permission fallback and `404`/`5xx` resilience.
- **MCP Integration Docs (`en/` & `es/` `docs/integration/mcp.mdx`):**
  - Added `testform_import`, `testform_diff`, `testform_destroy` (including `parallelism`), `testform_force_unlock`, and updated `testform_report` matrix/filter parameters.
- **SDK Reference (`en/` & `es/` `api/index.mdx`):**
  - Documented the dedicated `@fromeroc9/testform/sdk` subpath entrypoint (`Parser`, `TestcaseParser`, `TestrunParser`, `TestplanParser`, `LocalBackend`, `calculatePlan`, `hashScenario`, `detectAttributeDrift`, `Diag`).
- **VS Code Extension Guides (`en/` & `es/` `docs/integration/vscode.mdx`):**
  - Replaced obsolete *Specs Hub Webview* references with the unified dual-mode native explorer (`testform.views.state`) and updated `targetFormat` documentation to reflect the 7 canonical formats.

### Removed

- **Deprecated `testform suite` Docs (`en/` & `es/` `cli/developer-tools/suite.mdx`):**
  - Removed obsolete `testform suite` documentation pages superseded by `testform spec`.

---

## [1.3.5] - 2026-11-26

### Added

- **`testform spec` Unified Authoring CLI Guides (`en/` & `es/` `cli/developer-tools/spec.mdx`, `cli/index.mdx`, `cli/developer-tools/index.mdx`):**
  - Documented the unified `testform spec <resource> <action>` (`new`, `add`, `fill`, `set`, `delete`, `status`) workflow across `testcase`, `testrun`, `testplan`, and `bug`.
  - Marked legacy `testform suite` pages (`cli/developer-tools/suite.mdx`) as deprecated with migration guidance to `testform spec`.
- **Exploratory & Ad-Hoc Defect Documentation (`en/` & `es/` `docs/test-as-code/resources.mdx`, `docs/integration/ai-rules.mdx`):**
  - Documented why `@bug` supports both formal regression traceability (`Rule:` + `@depends_on(@tc-*)`) and **exploratory / ad-hoc QA**: optional `Background:` / `* set run`, exemption from `@depends_on` via `@adhoc` / `@exploratory` / `@independent` on `Scenario:` (avoiding `Feature:` due to `no-feature-tags`) or `* set trace`, and optional `Given / When / Then / And / But` reproduction steps alongside `* set status`, `* set trace`, and `* set attach`.
- **Mandatory `testform init` & Remote Backend Setup Guides (`en/` & `es/` `cli/workflow/init.mdx`, `docs/language/backends.mdx`, `docs/language/providers.mdx`, `docs/language/state.mdx`, `docs/guides/multi-cloud-backends.mdx`, `docs/guides/state-locking.mdx`, `docs/integration/ci-cd-github.mdx`, `docs/integration/ci-cd-gitlab.mdx`):**
  - Documented mandatory `testform init` enforcement for remote backends, `github` backend missing repository/token diagnostics, backend state locking details, and updated CI/CD and multi-cloud backend examples.

### Changed

- **Alignment of `@depends_on` and Stacks Documentation (`en/` & `es/` `docs/language/meta-arguments/depends-on.mdx`, `docs/language/stacks.mdx`, `docs/getting-started/test-suite-automation.mdx`):**
  - Replaced legacy `* set target = ...` examples with `@depends_on(@tc-*)` under `Rule:` blocks and updated test automation tutorials to reference `testform spec`.

---

## [1.3.4] - 2026-11-23

### Added

- **Bug Steps to Reproduce & Clean Defect Body:**
  - Documented that Gherkin steps in bugs are rendered under `### 🐾 Steps to Reproduce`.
  - Removed boilerplate descriptions when no scenario description is present.
  - Documented the native GitHub attachment uploader (`uploads.github.com/user-attachments/assets`) for live image embedding during `testform apply`.
- **Board-First 2-Status Synchronization Architecture (`docs/test-as-code/resources.mdx`):**
  - Documented that status synchronization is 100% board-driven via the project's `Status` column in metadata (`meta['Status']`).
  - Documented complete decoupling from remote issue `state` (`open` / `closed`) to eliminate fighting with GitHub Projects native automation workflows (e.g. auto-close on "Done").
  - Documented scope-specific status rules:
    - `testcase`: Governed purely by custom field `Status` (or leaves board column clean if undeclared).
    - `testrun` & `testplan`: Autocalculated rollup verdicts (`passed`, `failed`, `pending`, `skipped`) travel directly to the board's `Status` column; manual `* field Status` serves as an explicit override.
    - `bug`: Sovereign lifecycle status. `* set status` travels implicitly to the board's `Status` column and is immune to global defaults or field overrides.
  - Documented explicit testrun status precedence and testplan synchronization: when a testrun is forced (e.g. `* field Status = skipped`), testplans linked via `Rule:` automatically reflect the forced status in plan rollups and summary execution tables.
  - Documented automatic purging of legacy `state: "closed"` / `state: "open"` properties from the state ledger (`cleanAttributes`) and drift exclusion in `detectAttributeDrift`.
- **Accurate Resource Canonical Targeting (`-target`) (`cli/workflow/plan.mdx`, `cli/workflow/apply.mdx`, `docs/language/canonical-addresses.mdx`):**
  - Documented targeted plan/apply with `-target` supporting:
    - Dot and slash hierarchical notation (e.g. `magento.cart.case.feature.@tc-01` or `testcase/Magento/cart.case.feature.@tc-01`).
    - Relative filesystem paths with root convention directory prefixes (e.g. `testcase\Magento\checkout.case.feature` or `testcase/Magento/checkout.case.feature`).
    - Multi-attribute evaluation (`r.address`, `r.path`, `r.physicalAddress`) preventing false unmatches in targeted operations.
    - Anti-destruction protection (`matchedStateAddresses`) and automatic state address healing when migrating between path-based and namespace-based addresses.
- **Resource API Documentation: `ParserScenario` and `ResourceContext` (`api/resources.mdx`):**
  - Fully documented the typed signatures `(s: ParserScenario, context?: ResourceContext)` for `ResourceTemplate`.
  - Added property reference tables for `ParserScenario` (`name`, `steps`, `tags`, `feature`, `rule`, `custom.fields`, `custom.set`, `custom.explicitFields`, `custom.groupScenarios`) and `ResourceContext` (`config`, `state`, `testDirectory`, `provider`, `variables`).
- **Elimination of `scaffold:` in Manifest Configuration:**
  - Updated resource configuration examples to use direct top-level properties: `directory`, `filename`, `identity`, `match`, `set`, and `fields`.

---

## [1.3.3] - 2026-11-22

### Added

- **Strict Separation of `* set` vs `* field` vs `@tag` (`docs/test-as-code/resources.mdx`, `docs/integration/ai-rules.mdx`):**
  - Updated Declarative Resources guide with the strict mark vs field vs tag governance model.
  - Documented prohibition of `* set` in `testcase` specifications.
  - Documented `testrun` execution suites with `Rule:` (`Scenario: @tc-01`) and direct canonical addresses without `Rule:` (`Scenario: testcase/path.case.feature.@tc-01`), suite-level marks in `Background:` (`duration`, `attach`, `trace`), and autocalculated suite status.
  - Documented `bug` specifications with `Background: * set run = ...` (optional), grouped under `Rule: <path.case.feature>`, with dual defect traceability forms (`@bg-01 @depends_on(@tc-01)` or `@bg-01 @tc-01`), and scenario lifecycle marks.
  - Updated Attachment Governance matrix across all 4 primitives.
- **Contract Field Source Governance (`docs/test-as-code/configuration.mdx`):**
  - Documented distinction between `source: "tag"` (strictly declared as `@tag`, prohibited as step) and `source: "step"` (declared via `* field <name> = <val>`).
- **Defect Traceability & Unquoted `@depends_on` (`docs/language/meta-arguments/depends-on.mdx`, `docs/guides/depends-on.mdx`):**
  - Documented unquoted syntax `@depends_on(@tc-01)` and cross-file rule-scoped testcase resolution for defects.

---

## [1.3.2] - 2026-11-20

### Added

- **Unified Ephemeral Workspaces Documentation (`cli/workspaces/workspace.mdx`, `cli/workspaces/ephemeral.mdx`):**
  - Documented complete integration of disposable ephemeral QA sandboxes into `testform workspace` using `-ephemeral` (alias `-e`) and `-ttl=<duration>` (`30m`, `2h`, `1d`).
  - Documented automated clean teardown workflow (`testform workspace delete <name>`) with `-auto-approve` and `-force`.
  - Documented `testform workspace promote` for promoting validated ephemeral state into `default` and `testform workspace cleanup` for purging expired sandboxes.
  - Standardized all documentation examples to single-dash Terraform-style CLI syntax (`-ephemeral`, `-ttl`, `-auto-approve`, `-force`, `-json`).
  - Documented backwards-compatibility migration table for legacy `testform ephemeral` commands.

---

## [1.3.1] - 2026-11-13

### Added

- **Universal AI Agent Directives & Rules (`es/docs/integration/ai-rules.mdx`, `en/docs/integration/ai-rules.mdx`):**
  - Documented ready-to-use template files for Cursor (`.cursorrules`), Claude Code (`CLAUDE.md`), and Antigravity/Copilot (`agent.md`).
  - Added strict syntax contracts for the 4 primitives (`testcase`, `testrun`, `testplan`, `bug`), step requirements (`Given/When/Then`), status conventions, and common anti-patterns.
  - Published comprehensive Attachment Governance rules for `* set attach` per resource scope.
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
