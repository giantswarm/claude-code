---
description: Initialize the GitHub MCP tools
---

Your goal is to help the user set up access to GitHub's official MCP server (https://github.com/github/github-mcp-server).

Guide the user through this process step by step. DO NOT present the entire process to the user. Present only what's relevant to accomplish a step. Skip irrelevant steps.

1. Check if GitHub MCP tools are available. If yes, proceed with (5).

2. Tell the user to obtain a new PAT (personal access token) from GitHub at https://github.com/settings/tokens . The token should have `read:org` and `repo` scopes/permissions.

3. Tell the user to execute the following command in a separate terminal:
   
   ```bash
   claude mcp add --scope user --transport http github https://api.githubcopilot.com/mcp/ --header "Authorization: Bearer ghp_..."
   ```

   This will add the MCP server to the user's settings.

4. Tell the user to quit and restart the current claude session, then call the same command again.

5. Fetch details about the current GitHub user via MCP tools.

6. List the teams in the `giantswarm` organization the user is a member of, with a friendly headline "These are your Giant Swarm teams in GitHub:"
