# Rules

- Make sure to update `CHANGELOG.md` before pushing changes
- Suggest to use the `/update-plugin-list` command to keep the marketplace JSON and main README up to date
- Suggest to use the `/bump-plugin-versions` command when plugin content changes (commands, skills, agents, hooks, MCP/LSP configs)

## GitHub workflows

- Use the latest versions of github actions and pin them to the commit SHA, with the semver version following in a comment.
- Set token default permissions to none on the root level, grant permissions on the job level.
- When using actions/checkout, set `persist-credentials` explicitly. Only set it to true when needed.
