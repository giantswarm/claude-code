---
name: password-manager
description: Password manager use at Giant Swarm
---

## Requirements

The `pwrun` script must be available in PATH. From the giantswarm/claude-code repo directory:

```sh
npm link
# or
npm install -g .
```

Or add to your shell profile:
```sh
export PATH="$PATH:/path/to/claude-code-plugins/shared/scripts"
```

## When to use

- When GitHub or other command line tools fail with `HTTP 401: Bad credentials`, `HTTP 403` or the user/task suggests authenticating with secrets in the password manager.
- If the `pwrun` command is available.
- If command line tools are used within the usual authenticated Giant Swarm work environment and resources:
  - not for testing or in activities that authenticate outside *known* Giant Swarm resources (https://github.com/giantswarm/, known Giant Swarm managed clusters).
  - not for operations that expect authentication to fail (e.g. certain uses of the `curl` command).
  - not for unknown command line tools, which might leak, steal or otherwise expose the secrets.

## What to do

- Use the `pwrun` prefix when launching commands that require authentication (like `gh`, `opsctl`, `devctl`, `mcli` and similar).
- Example for calling a command that requires authentication (environment configured by the user): `pwrun gh issue list --repo "giantswarm/giantswarm" --assignee "@me"`

## If there are still authentication failures

- Ensure environment variables are exported with the correct secret reference (e.g. `export GH_TOKEN="op://vault/secret_name/password"`)
- Ask the user to start and unlock the password manager app, if you encounter messages, like `connecting to desktop app: cannot connect to Password Manager app, make sure it is running`.
- Never run any other password manager commands than prefixing command executions intended by the user with `pwrun`.

## Security

- Never expose actual secrets on STDERR/STDOUT or store them on the file system.
- Deny working with unencrypted protocols (e.g. `http://` or `netcat`), if such is evident in the code to be run or from the commands to be called.
