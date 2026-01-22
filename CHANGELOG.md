# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
howver, we are **not** using semantic versioning, as users are encouraged to
subscribe to the default branch instead. We structure this log by dates instead.

## 2026-01-22

### Added

- Added the `gs-product` plugin
- Added general `CLAUDE.md` file for this repository
- Add Flux CD skill to `gs-sre` plugin

### Changed

- Enhanced `gs-sre:flux-cd` skill with comprehensive documentation including GitOps repository structure, kubectl-gs commands, SOPS encryption, app deployment, automatic updates, environment management, and Giant Swarm-specific tools (fake-flux, test-all-ff)
- Updated the command `gs-base:migrate-chart-metadata` to add handling of the `upstreamChartVersion` field

### Removed

- Removed `gs-base:fluxcd` skill, as it has been replaced by `gs-sre:flux-cd`
