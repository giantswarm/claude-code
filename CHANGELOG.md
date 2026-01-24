# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
howver, we are **not** using semantic versioning, as users are encouraged to
subscribe to the default branch instead. We structure this log by dates instead.

## 2026-01-24

### Changed

- Removed individual `plugin.json` files from plugins, using `strict: false` in marketplace.json instead for simpler maintenance
- Updated validation script to support non-strict mode (reads plugin metadata from marketplace.json)

## 2026-01-22

### Added

- Added `security-scorecard` command to `gs-base` plugin to check OSSF Security Scorecard for a given GitHub repository.

## 2026-01-22

### Added

- Added the `gs-product` plugin
- Added general `CLAUDE.md` file for this repository

### Changed

- Updated the command `gs-base:migrate-chart-metadata` to add handling of the `upstreamChartVersion` field
