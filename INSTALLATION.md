# Installation Guide

This guide explains how to install and use Giant Swarm Claude Code plugins.

## Prerequisites

- Claude Code CLI installed and configured
- Access to the Giant Swarm internal repositories
- Git configured with appropriate credentials

## Installation Methods

### Method 1: Git Clone (Recommended)

Clone the repository to a local directory:

```bash
# Clone to a dedicated location
git clone <repository-url> ~/claude-code-plugins
```

Then configure Claude Code to load plugins from this location.

### Method 2: Git Submodule

Add the plugins as a submodule to your project:

```bash
# From your project root
git submodule add <repository-url> .claude-plugins
git submodule update --init --recursive
```

### Method 3: Direct Download

Download the repository as a ZIP file and extract to your desired location.

## Configuring Claude Code

### Loading Individual Plugins

To use a specific plugin, you need to configure Claude Code to load it. Add the plugin path to your Claude Code settings:

**Option A: Via Settings File**

Edit your Claude Code settings file (typically `~/.config/claude/settings.json` or similar):

```json
{
  "plugins": [
    "~/claude-code-plugins/plugins/base"
  ]
}
```

**Option B: Via Environment Variable**

Set the `CLAUDE_PLUGINS_PATH` environment variable:

```bash
export CLAUDE_PLUGINS_PATH="~/claude-code-plugins/plugins/base:~/claude-code-plugins/plugins/kubernetes"
```

**Option C: Via CLI Flag**

Load plugins when starting Claude Code:

```bash
claude --plugin ~/claude-code-plugins/plugins/base
```

### Loading All Plugins

To load all available plugins:

```json
{
  "plugins": [
    "~/claude-code-plugins/plugins/*"
  ]
}
```

Or use a wildcard pattern if supported by your Claude Code version.

## Verifying Installation

Once configured, start Claude Code and verify the plugins are loaded:

1. Check for available commands from your plugins
2. Look for plugin-specific skills in the help output
3. Test a simple command (e.g., `/hello` from the base plugin)

## Updating Plugins

### Git Clone Method

```bash
cd ~/claude-code-plugins
git pull origin main
```

### Git Submodule Method

```bash
# From your project root
git submodule update --remote
git commit -am "Update Claude Code plugins"
```

## Troubleshooting

### Plugin Not Loading

1. Verify the plugin path is correct in your settings
2. Check that the plugin has a valid `.claude-plugin/plugin.json` file
3. Ensure file permissions allow Claude Code to read the plugin directory
4. Restart Claude Code after configuration changes

### Command Conflicts

If multiple plugins define the same command name, Claude Code will typically load the first one found. Check for conflicts:

```bash
cd ~/claude-code-plugins
node shared/scripts/check-conflicts.js
```

### Permission Issues

Ensure the plugins directory and all files are readable:

```bash
chmod -R +r ~/claude-code-plugins
```

## Uninstalling

To remove a plugin:

1. Remove the plugin path from your Claude Code settings
2. Restart Claude Code
3. Optionally, delete the local repository if no longer needed

## Getting Help

For issues or questions:
- Check the main [README.md](./README.md)
- Review individual plugin documentation in their directories
- Contact the Platform Engineering team
- Open an issue in the repository (internal only)

## Next Steps

- Browse available plugins in the [README.md](./README.md)
- Learn how to create your own plugins in [shared/README.md](./shared/README.md)
- Review plugin-specific documentation in each plugin's directory
