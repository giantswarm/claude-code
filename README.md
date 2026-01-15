# Giant Swarm Claude Code Plugins

Claude Code plugins for Giant Swarm engineers.

## Overview

This repository contains a collection of Claude Code plugins designed to help Giant Swarm team members.

To not overlode the context, there are several plugins (see below).

## Available Plugins

### `base`

A general purpose Claude Code plugin all Giant Swarm engineers should have installed.

**Commands:**

- `/gs-base:hello` - Greet the user
- `/gs-base:init-github` - Set up GitHub MCP tools and confirm they're working
- `/gs-base:init-circleci` - Set up CircleCI MCP tools and confirm they're working

**Skills:**

- **kubernetes**: Kubernetes best practices

---

### sre (gs-sre)
**Version:** 0.1.0
**Description:** SRE tools and commands for Giant Swarm site reliability engineering

**Location:** `plugins/sre/`

**Commands:**
- `incident-start` - Start incident response workflow and create incident document
- `postmortem` - Generate postmortem document from incident notes
- `debug-pod` - Debug a Kubernetes pod with comprehensive diagnostics
- `check-alerts` - Investigate and triage active alerts

---

## Installation

See [INSTALLATION.md](./INSTALLATION.md) for detailed setup instructions.

**Quick Start:**
```bash
# Clone this repository
git clone <repository-url> claude-code-plugins

# Or add as a submodule to your project
git submodule add <repository-url> .claude-plugins
```

## Creating a New Plugin

See [shared/README.md](./shared/README.md) for plugin development guidelines and the template structure.

## Repository Structure

```
claude-code-plugins/
├── plugins/           # All available plugins
├── shared/           # Shared utilities and templates
├── .github/          # CI/CD workflows
└── docs/             # Additional documentation
```

## Contributing

1. Create a new plugin using the template in `shared/templates/`
2. Add your plugin to the `plugins/` directory
3. Update this README with your plugin information
4. Submit a pull request

## License

Internal use only - Giant Swarm GmbH

## Support

For questions, please use the #topic-dev channel.
