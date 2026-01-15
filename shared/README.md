# Plugin Development Guide

This guide explains how to create new Claude Code plugins for the Giant Swarm monorepo.

## Quick Start

1. Copy the plugin template:
   ```bash
   cp -r shared/templates/plugin-template plugins/your-plugin-name
   ```

2. Update `plugins/your-plugin-name/.claude-plugin/plugin.json` with your plugin details

3. Create your commands in `plugins/your-plugin-name/commands/`

4. Update `plugins/your-plugin-name/README.md` with documentation

5. Validate your plugin:
   ```bash
   npm run validate
   npm run check-conflicts
   ```

6. Add your plugin to the main [README.md](../README.md)

## Plugin Structure

```
plugins/your-plugin-name/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata (required)
├── commands/                # Command definitions (optional)
│   ├── command1.md
│   └── command2.md
├── skills/                  # Skill definitions (optional)
│   ├── skill-name-1/
│   │   └── SKILL.md
│   └── skill-name-2/
│       └── SKILL.md
└── README.md               # Plugin documentation (recommended)
```

## plugin.json Schema

The `plugin.json` file must contain the following fields:

```json
{
    "name": "your-plugin-name",
    "description": "Brief description of your plugin",
    "version": "0.1.0",
    "author": {
        "name": "Giant Swarm GmbH"
    }
}
```

### Field Requirements

- **name** (required): Lowercase, hyphens only, no spaces (e.g., `my-plugin-name`)
- **description** (required): Brief description of the plugin's purpose
- **version** (required): Semantic versioning (e.g., `0.1.0`, `1.2.3`)
- **author.name** (required): Author name (typically "Giant Swarm GmbH")

### Optional Fields

```json
{
    "name": "your-plugin-name",
    "description": "Brief description",
    "version": "0.1.0",
    "author": {
        "name": "Giant Swarm GmbH",
        "email": "team@giantswarm.io"
    },
    "homepage": "https://internal.docs/plugins/your-plugin",
    "repository": "https://github.com/giantswarm/claude-code-plugins",
    "keywords": ["kubernetes", "platform", "devops"],
    "dependencies": {
        "required_tools": ["kubectl", "helm"],
        "mcp_servers": ["github"]
    }
}
```

## Creating Commands

Commands are defined in markdown files within the `commands/` directory.

### Command File Structure

```markdown
---
description: Brief one-line description
---

# Command Name

Detailed explanation of what this command does.

## Instructions for Claude

Clear step-by-step instructions:

1. First action
2. Second action
3. Third action

## Example Usage

Show examples of command usage or expected outputs.

## Notes

- Important considerations
- Prerequisites
- Common gotchas
```

### Command Best Practices

1. **Name commands clearly**: Use descriptive names (e.g., `deploy-staging.md`, not `deploy.md`)
2. **Include frontmatter**: Always add the `description` field in YAML frontmatter
3. **Be specific**: Provide clear, actionable instructions for Claude
4. **Add examples**: Show real-world usage examples
5. **Document prerequisites**: List required tools, APIs, or permissions

## Creating Skills

Skills provide background knowledge and context that Claude can reference during any operation. Unlike commands (which are explicitly invoked), skills are always available as context.

### Skill Directory Structure

Each skill must be in its own directory with a `SKILL.md` file:

```
plugins/your-plugin/
└── skills/
    ├── skill-name/
    │   └── SKILL.md
    └── another-skill/
        └── SKILL.md
```

### Skill File Structure

**Important:** The `name` field must match the parent folder name exactly.

```markdown
---
name: skill-name
description: Brief one-line description of the skill
---

# Skill Name

Background knowledge, concepts, patterns, and reference information.

## Section 1

Content organized for quick reference...

## Section 2

More contextual information...
```

For example, if your skill is in `skills/platform-knowledge/SKILL.md`, the frontmatter must have `name: platform-knowledge`.

### When to Use Skills

- **Reference material** needed across many operations
- **Platform/domain knowledge** that provides context
- **Common patterns** and best practices
- **Tool usage guidelines** frequently referenced

### Best Practices

1. **Keep it concise** - Skills add tokens to every conversation
2. **Use bullet points** - Easier to scan and more compact
3. **Organize hierarchically** - Use sections and subsections
4. **Focus on reference** - Not procedural steps (use commands for that)
5. **Update regularly** - Keep information current and accurate

### Example: Platform Knowledge Skill

**Folder structure:** `skills/platform-knowledge/SKILL.md`

```markdown
---
name: platform-knowledge
description: Platform architecture and access patterns
---

# Platform Knowledge

## Architecture
- MC (Management Cluster): Control plane, single-word names
- WC (Workload Cluster): Format {mc}-{wc}

## Access
- Login MC: `workflow_login-management-cluster`
- Always set `kubeContext` parameter explicitly
```

## Validation

### Local Validation

Before committing, validate your plugin:

```bash
# Validate all plugins
npm run validate

# Check for command name conflicts
npm run check-conflicts

# Run all tests
npm test
```

### Validate Specific Plugin

```bash
node shared/scripts/validate-schema.js plugins/your-plugin-name
```

## Common Validation Errors

### Missing plugin.json
```
❌ Error: plugin.json not found at plugins/your-plugin/...
```
**Fix**: Create `.claude-plugin/plugin.json` file

### Invalid JSON
```
❌ Error: Invalid JSON in plugin.json
```
**Fix**: Check JSON syntax, ensure proper commas and quotes

### Missing Required Fields
```
❌ Error: Missing required field 'name' in plugin.json
```
**Fix**: Add all required fields (name, description, version, author)

### Command Name Conflicts
```
❌ Command name conflicts detected:
   Command: /deploy
   Defined in:
     - kubernetes (plugins/kubernetes)
     - cloud (plugins/cloud)
```
**Fix**: Rename one of the commands to avoid collision

## Naming Conventions

### Plugin Names
- Lowercase only
- Use hyphens for spaces: `my-plugin-name`
- Be descriptive: `kubernetes-utils` not `k8s`
- Avoid version numbers in names

### Command Names
- Lowercase with hyphens
- Action-oriented: `deploy-app`, `list-pods`
- Namespace if needed: `k8s-get-pods`, `helm-install`

### File Names
- Command files: `command-name.md`
- Skill files: `skill-name.md`
- All lowercase, hyphens for spaces

## Shared Code and Utilities

If you need to share code or utilities across plugins, place them in:
- `shared/lib/` - Shared libraries
- `shared/utils/` - Common utilities
- `shared/templates/` - Reusable templates

Document any shared resources in this README.

## Testing Your Plugin

### Manual Testing

1. Configure Claude Code to load your plugin:
   ```bash
   claude --plugin ./plugins/your-plugin-name
   ```

2. Test each command:
   ```
   /your-command
   ```

3. Verify Claude follows the command instructions correctly

### Automated Testing

CI/CD will automatically:
- Validate plugin.json schema
- Check for command conflicts
- Verify directory structure
- Run markdown checks

## Versioning

Follow semantic versioning (semver):
- **0.x.x**: Initial development
- **x.0.0**: Breaking changes
- **x.x.0**: New features (backwards compatible)
- **x.x.x**: Bug fixes

Update the version in `plugin.json` when making changes.

## Publishing Your Plugin

1. Create a pull request with your plugin
2. Ensure CI/CD passes all checks
3. Update the main [README.md](../README.md) with your plugin details
4. Request review from the Platform Engineering team
5. After merge, the plugin is available to all team members


## Getting Help

- Review existing plugins in `plugins/` for examples
- Check the template in `shared/templates/plugin-template/`
- Ask the Platform Engineering team
- Open an issue in the repository

## Resources

- [Claude Code Documentation](https://code.claude.com/docs/en/plugins)
