# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
howver, we are **not** using semantic versioning, as users are encouraged to
subscribe to the default branch instead. We structure this log by dates instead.

## 2026-02-10

### Changed

- Updated `runbook-standards` skill: clarify that variables must be INSTALLATION/CLUSTER (not WC_CONTEXT/MC_CONTEXT), add dashboard links documentation, link to code blocks showcase
- Updated `migrate-to-runbook` command: add dashboard links step, clarify variable naming requirements, improve highlight shortcode language guidance
### Added

- Added `gs-godev` plugin for Go development at Giant Swarm
  - `/gs-godev:cleanup-gomod-replace` - Clean up replacements in go.mod

## 2026-02-06

### Added

- Added `gs-appdev` plugin with commands and skills for Helm chart development
  - `/gs-appdev:chart-icon` - Specify a proper icon for a Helm chart
  - `/gs-appdev:migrate-chart-metadata` - Migrate chart metadata to the recent OCI-compatible format
  - `/gs-appdev:upgrade-vendir-app` - Sync a GiantSwarm chart/bundle with upstream releases via vendir
  - `chart-icons` skill - Knowledge about application icons at Giant Swarm

### Changed

- Moved `migrate-chart-metadata` and `upgrade-vendir-app` commands from `gs-base` to `gs-appdev` plugin

## 2026-02-04

### Added

- Added `migrate-to-runbook` command to `gs-base` plugin for migrating ops-recipes to runbooks
- Added `runbook-standards` skill to `gs-base` plugin with quality standards and best practices for runbooks

### Changed

- Updated `migrate-to-runbook` command to include CHANGELOG update step and warning about pending PR references
- Updated `migrate-to-runbook` command to add migration notice step for original ops-recipe (redirect to new runbook)

## 2026-01-24

### Added

- Added automated plugin version checking in PRs via GitHub workflow
- Added `/bump` slash command support in PR comments to easily bump plugin versions
- Added `check-version-bump.js` script to detect plugins needing version bumps (commands, skills, agents, hooks, MCP/LSP configs)
- Added `/bump-plugin-versions` command for local version bumping

### Changed

- Removed individual `plugin.json` files from plugins, using `strict: false` in marketplace.json instead for simpler maintenance
- Updated validation script and CI workflow to support non-strict mode
- Updated PR template with versioning information and slash command documentation
- Pinned all GitHub Actions to commit SHAs for improved security

## 2026-01-22

### Added

- Added `security-scorecard` command to `gs-base` plugin to check OSSF Security Scorecard for a given GitHub repository.

## 2026-01-22

### Added

- Added the `gs-product` plugin
- Added general `CLAUDE.md` file for this repository

### Changed

- Updated the command `gs-base:migrate-chart-metadata` to add handling of the `upstreamChartVersion` field
