---
description: Update the list of plugins in the main README
---

The goal is to present up-to-date information in the main `README.md` file and marketplace list about the plugins available in this repository.

First, understand which plugins are available, and what commands, skills, and hoos they provide.

### Update README

Then, under `### Plugins` in the README, add a block in the following format about each plugin:

```markdown
### pluginname

Description about the plugin

**Commands:**

- `/gs-pluginname:first-command` - Description of first command
- `/gs-pluginname:second-command` - Description of second command

**Skills:**

- **first-skill-name**: Description of skill
- **second-skill-name**: Description of skill
```

Order lists alphabetically.

### Update marketplace index

Update the file `.claude-plugin/marketplace.json` to have one item per plugin available in the repo.

Each plugin item must have the `name` and `source` specified. The description may be specified, taken from the plugin metadata.
