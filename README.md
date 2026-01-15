# Giant Swarm Claude Code Plugins

Claude Code plugins for Giant Swarm engineers.

## Overview

This repository contains a collection of Claude Code plugins designed to help Giant Swarm team members.

To not overlode the context, there are several plugins (see below).

## Plugins

### base

A general purpose Claude Code plugin all Giant Swarm engineers should have installed.

**Commands:**

- `/gs-base:hello` - Greet the user with something unexpected
- `/gs-base:init-github` - Initialize the GitHub MCP tools
- `/gs-base:init-circleci` - Initialize the CircleCI MCP tools
- `/gs-base:init-kubernetes` - Set up access to Kubernetes clusters
- `/gs-base:init-search` - Set up search-mcp to access Docs, Intranet, and Handbook

**Skills:**

- **kubernetes**: To keep in mind when working with Kubernetes
- **fluxcd**: Best practices when working with Flux CD at Giant Swarm
- **software-engineering**: Software engineering base skills for Giant Swarm staff
- **registries**: Working with container and OCI registries

### sre

SRE skills for Giant Swarm site reliability engineering.

**Skills:**

- **giantswarm-platform**: Giant Swarm platform knowledge for SRE operations
- **mcp-tools-reference**: MCP tools quick reference for Giant Swarm operations

---

## Installation

See [the installation docs](./docs/INSTALLATION.md) for setup instructions.

## Creating a New Plugin

See [shared/README.md](./shared/README.md) for plugin development guidelines and the template structure.

## Support

For questions, please use the #topic-dev channel.
