---
description: Set up search-mcp to access Docs, Intranet, and Handbook
---

Your goal is to help the user set up access to several Giant Swarm resources (docs.giantswarm.io website, intranet.giantswarm.io, handbook.giantswarm.io) and search functionality using https://github.com/giantswarm/search-mcp .

Guide the user through this process step by step. DO NOT present the entire process to the user. Present only what's relevant to accomplish a step. Skip irrelevant steps.

1. Check if search-mcp MCP tools like search_runbook are available. If yes, proceed with (5).

2. Use github MCP tools to fetch the latest release of giantswarm/search-mcp .

3. Ask the user whether they prefer to run the MCP server via Docker or via the binary (installed via go install), using the AskUserQuestionTool.

4. Based on the response in (3), tell the user which command to execute next in a separate terminal.

    Docker:

        ```bash
        claude mcp add giantswarm-search --scope user --transport http -- docker run --rm -i gsoci.azurecr.io/giantswarm/search-mcp:<TAG>
        ```

        Note: <TAG> must be replaced with the latest search-mcp version, without a v prefix.

    Binary:

        ```bash
        claude mcp add giantswarm-search --scope user --transport http http://localhost:8080 -- search-mcp serve --transport=streamable-http --http-addr=:8080
        ```

5. Tell the user to quit and restart the current claude session, then call the same command again.

6. To confirm that public documentation search is working, use the `search` MCP tool to search for "creating a cluster" with type_filter="Documentation".

7. Report success if results were returned. Otherwise give details about the problem.
