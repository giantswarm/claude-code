---
description: Set up agentic access to Slack
---

Your goal is to help the user set up agentic access to Slack, so that they can use it form within Claude Code.

1. Check if a Slack MCP server is already set up and available. If yes, we are done.

2. To **install the Slack MCP server**, help the user download a suitable binary from https://github.com/korotovsky/slack-mcp-server/releases/latest . Place it in a directory where it's accessible for execution. Make sure it's excecutable.

3. Install the slack CLI as explained in https://docs.slack.dev/tools/slack-cli/guides/installing-the-slack-cli-for-mac-and-linux or https://docs.slack.dev/tools/slack-cli/guides/installing-the-slack-cli-for-windows

4. To **obtain a Slack user token**, guide the user through the following steps. Note: It is important that the user executes the CLI commands in their own terminal session, not via Claude Code.

    a. Go to https://api.slack.com/apps

    b. Hit "Create New App"

    c. Select "From scratch"

    d. Set an app name like "janes-mcp-server", where jane is replaced with the user's name.

    e. Select the "Giant Swarm" workspace

    f. Hit "Create App"

    g. Copy the App ID

    h. Install the `slack` CLI

    i. Run the following command:

        ```bash
        slack auth login --app <App ID>
        ```

    j. Follow the instructions to log in and authorize the app. This means copying/pasting a command like `/slackauthticket YWZlZW...` into a Slack conversation. Use the direct message conversation with yourself for this. Copy the challenge code from the response message and paste it back into the terminal.

5. The user should now have the Slack MCP server installed and user auth information in `~/.slack/credentials.json`. Next we want to add the MCP server to the user's Claude MCP configuration, in STDIO mode. To do this, the user should run the following command in the terminal:

    ```bash
    claude mcp add giantswarm-slack --scope user -- <path-to-slack-mcp-server-binary>
    ```

6. After that, instruct the user to restart their current claude session and then resume this conversation using `/resume`.

7. Now let's confirm that the MCP server is working. Fetch the message https://gigantic.slack.com/archives/C0251EQJT/p1770803438030689 and read it's content. The content should be the single word "morning".

8. If this worked, give the user a short and celebratory success message. If it didn't, help the user troubleshoot.
