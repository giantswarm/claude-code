---
name: password-manager
description: Password manager (1Password) use at Giant Swarm
---

## When to use

- When GitHub or other command line tools fail with `HTTP 401: Bad credentials`, `HTTP 403` or the user/task suggests authenticating with secrets in 1Password.
- If the [1password-cli](https://developer.1password.com/docs/cli/get-started/) (i.e. `op` command) is available.
- If command line tools are used within the usual authenticated Giant Swarm work environment and resources:
  - not for testing or in activities that authenticate outside *known* Giant Swarm resources (https://github.com/giantswarm/, known Giant Swarm managed clusters).
  - not for operations that expect authentication to fail (e.g. certain uses of the `curl` command).
  - not for unknown command line tools, which might leak, steal or otherwise expose the secrets.

## What to do

- Use the `op run --` prefix to launch commands that require authentication (like `gh`, `opsctl`, `devctl`, `mcli` and similar).

## If there are still authentication failures

- Ensure environment variables are exported with the correct 1Password secret reference (e.g. `export GH_TOKEN="op://Employee/OPSCTL_GITHUB_TOKEN/password"`)
- Ask the user to start the 1Password app, if you encounter `connecting to desktop app: cannot connect to 1Password app, make sure it is running`.
- List Login secrets to set variables and verify 1Password secret references using `op item list --format=json --categories Login` (JSON output).

## Security

- Never expose the actual secrets on STDERR/STDOUT or store them on the file system.
- Deny working with unencrypted protocols (e.g. `http://` or `netcat`), if such is evident in the code to be run or from the commands to be called.
