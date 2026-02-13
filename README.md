# Giant Swarm Claude Code Plugins

Claude Code plugins for Giant Swarm engineers.

## Plugins

### gs-ae

Commands for Account Engineers

**Commands:**

- `/gs-ae:customer-update` - Generate an overview over issues for the given customer repository over a configurable timeframe

### gs-appdev

Commands and skills for Giant Swarm application developers working with Helm charts

**Commands:**

- `/gs-appdev:chart-icon` - Specify a proper icon for a Helm chart
- `/gs-appdev:chart-schema-and-readme` - Create helm chart configuration to use JSON schema and README.md generation tools based on values.yaml comments
- `/gs-appdev:migrate-chart-metadata` - Migrate chart metadata to the recent OCI-compatible format
- `/gs-appdev:upgrade-vendir-app` - Sync a GiantSwarm chart/bundle with upstream releases via vendir

**Skills:**

- **chart-icons**: Knowledge about application icons at Giant Swarm

### gs-godev

Commands and skills for Go development at Giant Swarm

**Commands:**

- `/gs-godev:cleanup-gomod-replace` - Clean up replacements in go.mod

**Skills:**

- **go-conventions**: Conventions for Go development at Giant Swarm

**Agents:**

- **code-cleaner**: A fast, cheap and straightforward agent for some chores in Go code

### gs-base

A general purpose Claude Code plugin for Giant Swarm platform engineers

**Commands:**

- `/gs-base:hello` - Greet the user with something unexpected
- `/gs-base:init-circleci` - Initialize the CircleCI MCP tools
- `/gs-base:init-github` - Initialize the GitHub MCP tools
- `/gs-base:init-kubernetes` - Set up access to Kubernetes clusters
- `/gs-base:init-search` - Set up search-mcp to access Docs, Intranet, and Handbook
- `/gs-base:migrate-to-runbook` - Migrate an ops-recipe to a runbook following Giant Swarm standards
- `/gs-base:security-scorecard` - Check OSSF Security Scorecard for a given GitHub repository

**Skills:**

- **backstage**: The Backstage developer portal
- **fluxcd**: Best practices when working with Flux CD at Giant Swarm
- **kubernetes**: To keep in mind when working with Kubernetes
- **registries**: Working with container and OCI registries
- **repository-creation**: How to create and set up new Giant Swarm repositories
- **runbook-standards**: Quality standards and best practices for Giant Swarm runbooks
- **software-engineering**: Software engineering base skills for Giant Swarm staff

### gs-product

Create high-quality GitHub issues following Giant Swarm patterns and standards

**Commands:**

- `/gs-product:create-issue` - Create a high-quality GitHub issue following Giant Swarm patterns
- `/gs-product:suggest-labels` - Suggest appropriate labels for a GitHub issue based on content
- `/gs-product:validate-issue` - Validate an issue against Giant Swarm quality standards

**Skills:**

- **issue-patterns**: Giant Swarm issue patterns, types, and naming conventions
- **label-taxonomy**: Giant Swarm GitHub label taxonomy and usage guidelines
- **quality-standards**: Quality standards and validation criteria for Giant Swarm issues

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
