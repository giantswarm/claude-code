# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
however, we are **not** using semantic versioning, as users are encouraged to
subscribe to the default branch instead. We structure this log by dates instead.

## Unreleased

### Added

- Added `1password` skill to `gs-base` plugin for 1Password CLI integration

## 2026-02-04

### Added

- Added `migrate-to-runbook` command to `gs-base` plugin for migrating ops-recipes to runbooks
- Added `runbook-standards` skill to `gs-base` plugin with quality standards and best practices for runbooks

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
