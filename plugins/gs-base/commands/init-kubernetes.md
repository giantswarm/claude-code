---
description: Set up access to Kubernetes clusters
---

Your goal is to help the user set up access to Kubernetes clusters managed by Giant Swarm using the mcp-kubernetes MCP server (https://github.com/giantswarm/mcp-kubernetes).

## Setup Process

Guide the user through this process step by step. DO NOT present the entire process to the user. Present only what's relevant to accomplish a step. Skip irrelevant steps.

1. Use `which tsh` to check if the Teleport CLI (tsh) is installed.

2. If `tsh` is not installed, ask the user to install it. Give them the link https://goteleport.com/docs/connect-your-client/teleport-clients/tsh/#installing-tsh to find instructions for their system.

3. Use `tsh status` to check the Teleport login status. The user is logged in correctly if the output contains `Logged in as` with a user name and `Cluster: teleport.giantswarm.io`. If the user is not logged in correctly, tell them to execute this command in a separate terminal:

    ```bash
    tsh login --proxy teleport.giantswarm.io --auth giantswarm
    ```

    After that, re-verify with `tsh status`.

4. Check whether mcp-kubernetes is installed using `which mcp-kubernetes` and `mcp-kuberntes --version`.

5. Check which is the latest release of https://github.com/giantswarm/mcp-kubernetes . You may have a tool available to get the latest release directly.

6. If mcp-kubernetes is not installed, execute `go install github.com/giantswarm/mcp-kubernetes@latest`. If the installed version is outdated, run `mcp-kubernetes self-update`.

7. Check if Kubernetes MCP tools provided by mcp-kubernetes, e. g. `kubernetes_context_get_current`, are available.

8. If mcp-kubernetes was not installed, or if the MCP tools are not available, ask the user to install the MCP server into Claude Code using the following command:

    ```bash
    claude mcp add mcp-kubernetes --scope user -- mcp-kubernetes serve
    ```

    After that, the user must restart Claude Code.

9. Verify access by using MCP tools to access management cluster `gazelle` and list all nodes. You don't have to present the nodes list to the user.

10. If everything is fine, report success. If not, provide information to help the user troubleshoot any issues.
