# Changelog

All notable changes to the **Testform Documentation Portal** (`@fromeroc9/testform-docs`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
