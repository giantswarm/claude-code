---
description: Bump plugin versions for changed plugins
---

Check which plugins have changes that require a version bump and apply the suggested bumps.

## Instructions

1. Run the version check script to identify plugins needing bumps:
   ```bash
   node shared/scripts/check-version-bump.js --check --base origin/main
   ```

2. If plugins need version bumps, apply them:
   ```bash
   node shared/scripts/check-version-bump.js --bump-all --base origin/main
   ```

3. Show the user what was changed in `.claude-plugin/marketplace.json`

4. Remind the user to commit the version bump changes

## Notes

- By default, this applies **minor** version bumps (appropriate for most non-trivial changes)
- For typo-only fixes, the user can manually run with `--level patch`
- The script detects changes to: commands, skills, agents, hooks, .mcp.json, .lsp.json
- README and documentation files don't trigger version bumps
