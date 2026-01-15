# Installation Guide

This guide explains how to install and use Giant Swarm Claude Code plugins.

## Prerequisites

- Claude Code CLI installed and configured
- Access to the Giant Swarm internal repositories
- Git configured with appropriate credentials

## Installation Methods

### Git Clone

Clone the repository to a local directory:

```bash
# Clone to a dedicated location
git clone https://github.com/giantswarm/claude-code.git ~/gs-claude-code-plugins
```

Then configure Claude Code to load plugins from this location.

## Configuring Claude Code

### Loading Individual Plugins

To use a specific plugin, you need to configure Claude Code to load it. Add the plugin path to your Claude Code settings:

#### Option A: via settings file

Edit your Claude Code settings file (typically `~/.claude.json` , `~/.config/claude/settings.json` or similar):

```json
{
  "plugins": [
    "~/claude-code-plugins/plugins/base"
  ]
}
```

**

#### Option B: via environment variable

Set the `CLAUDE_PLUGINS_PATH` environment variable:

```bash
export CLAUDE_PLUGINS_PATH="~/claude-code-plugins/plugins/base:~/claude-code-plugins/plugins/kubernetes"
```

### Option C: via CLI flag

Load plugins when starting Claude Code:

```bash
claude --plugin ~/claude-code-plugins/plugins/base
```

### Loading All Plugins

Loading all plugins is possible via the settings file option (see above) with a wildcard:

```json
{
  "plugins": [
    "~/claude-code-plugins/plugins/*"
  ]
}
```

## Verifying Installation

Once configured, start Claude Code and verify the plugins are loaded:

1. Check for available commands from your plugins by typing `/gs` in Claude Code. You should see some command names offered for auto-completion. Note that this list may not show all commands.
2. Type `/skills` in Claudde Code and hit Enter.

## Updating Plugins

Simply update your local clone and make sure to restart Claude Code.

```bash
cd ~/claude-code-plugins
git pull origin main
```

## Uninstalling

To remove a plugin, undo whatever you did to install it, and then restart Claude Code.

## Getting Help

Please reach out to #topic-dev in Slack!
