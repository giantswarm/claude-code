# Giant Swarm Claude Code Plugins

Claude Code plugins for Giant Swarm engineers.

## Plugins

### gs-base

A general purpose Claude Code plugin for Giant Swarm platform engineers

**Commands:**

- `/gs-base:hello` - Greet the user with something unexpected
- `/gs-base:init-circleci` - Initialize the CircleCI MCP tools
- `/gs-base:init-github` - Initialize the GitHub MCP tools
- `/gs-base:init-kubernetes` - Set up access to Kubernetes clusters
- `/gs-base:init-search` - Set up search-mcp to access Docs, Intranet, and Handbook
- `/gs-base:migrate-chart-metadata` - Migrate chart metadata to the recent OCI-compatible format

**Skills:**

- **backstage**: The Backstage developer portal
- **fluxcd**: Best practices when working with Flux CD at Giant Swarm
- **kubernetes**: To keep in mind when working with Kubernetes
- **registries**: Working with container and OCI registries
- **software-engineering**: Software engineering base skills for Giant Swarm staff

### gs-sre

SRE tools and commands for Giant Swarm site reliability engineering

**Skills:**

- **giantswarm-platform**: Giant Swarm platform knowledge for SRE operations
- **mcp-tools-reference**: MCP tools quick reference for Giant Swarm operations

---

## Installation

Add this repository as a marketplace to Claude Code. In Claude code, execute:

```nohighlight
/plugin marketplace add giantswarm/claude-code
```

Then use the `/plugin` command to install, enable, disable plugins.

## Creating a new plugin

See [the `shared` folder](./shared/README.md) for plugin development guidelines and the template structure.

## Support

For questions, please use the #topic-dev channel.
