---
description: Initialize the CircleCI MCP tools
---

Your goal is to help the user set up access to CircleCI's official MCP server (https://circleci.com/product/mcp/).

Guide the user through this process step by step. DO NOT present the entire process to the user. Present only what's relevant to accomplish a step. Skip irrelevant steps.

1. Check if CircleCI MCP tools are available. If yes, proceed with (5).

2. Tell the user to obtain a new PAT (personal API token) from CircleCI at https://app.circleci.com/settings/user/tokens .

3. Ask the user whether they prefer to run the MCP server via Docker or via npx (NodeJS), using the AskUserQuestionTool.

4. Based on the response in (3), tell the user which command to execute next in a separate terminal.

    Docker:

        ```bash
        claude mcp add circleci --scope user -e CIRCLECI_TOKEN=CCIPAT_... CIRCLECI_BASE_URL=https://circleci.com -- docker run --rm -i -e CIRCLECI_TOKEN -e CIRCLECI_BASE_URL circleci/mcp-server-circleci
        ```
    npx/NodeJS:

        ```bash
        claude mcp add circleci --scope user -e CIRCLECI_TOKEN=CCIPAT_... CIRCLECI_BASE_URL=https://circleci.com -- npx -y @circleci/mcp-server-circleci@latest
        ```

4. Tell the user to quit and restart the current claude session, then call the same command again.

5. Fetch a list of followed CircleCI projects using the list_followed_projects tool.

6. Report success with details like "You are following 123 projects on CircleCI". DO NOT list all the projects the user follows!
