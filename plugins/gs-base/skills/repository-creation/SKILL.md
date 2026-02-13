---
name: repository-creation
description: How to create and set up new Giant Swarm repositories (Go projects, CLIs, apps). Use when creating a new repo, scaffolding a project, or setting up repository ownership.
---

## Templates

| Template | Use case |
|----------|----------|
| `giantswarm/template` | Go projects (CLIs, libraries, services) |
| `giantswarm/template-app` | Apps for the Giant Swarm app platform |

## Prerequisites

- `gh` CLI authenticated with GitHub
- `devctl` installed (https://github.com/giantswarm/devctl)
- `GITHUB_TOKEN` environment variable set

## Step-by-Step: Go Repository

### 1. Create repo from template

```bash
export REPOSITORY_NAME=my-repo
gh repo create --clone --public --template=giantswarm/template giantswarm/${REPOSITORY_NAME}
cd ${REPOSITORY_NAME}
```

### 2. Replace placeholders

```bash
devctl replace -i 'REPOSITORY_NAME' ${REPOSITORY_NAME} --ignore '.git/**' '**'
```

This replaces the `REPOSITORY_NAME` placeholder in `go.mod`, `README.md`, `CHANGELOG.md`, `docs/development.md`, and other files.

### 3. Update README

Replace the template README with a project-specific description, usage, and configuration sections.

### 4. Commit and push initial changes

```bash
git add -A
git commit -m "Replace template placeholders for ${REPOSITORY_NAME}"
git push origin main
```

### 5. Run devctl repo setup

This configures GitHub settings, branch protection, permissions, and Renovate:

```bash
devctl repo setup giantswarm/${REPOSITORY_NAME}
```

After this, direct pushes to `main` are blocked. Use PRs for further changes.

### 6. Generate renovate config

For Go projects:

```bash
devctl gen renovate --language go
```

This generates `renovate.json5` with Giant Swarm presets:

```json5
{
  "extends": [
    "github>giantswarm/renovate-presets:default.json5",
    "github>giantswarm/renovate-presets:lang-go.json5",
  ],
}
```

### 7. Set repo description

```bash
gh repo edit giantswarm/${REPOSITORY_NAME} --description "Short description of the project"
```

## Step-by-Step: App Repository

For repositories with Helm charts:

```bash
export APP_NAME=my-app
gh repo create --clone --public --template=giantswarm/template-app giantswarm/${APP_NAME}
cd ${APP_NAME}
mv helm/APP-NAME helm/${APP_NAME}
devctl replace -i '{APP-NAME}' ${APP_NAME} --ignore '.git/**' '**'
git add -A && git commit -m "Replace placeholder by ${APP_NAME}" && git push origin main
devctl repo setup giantswarm/${APP_NAME}
```

## Adding Team Ownership

Every repository must be added to the owning team file in `giantswarm/github`:

### 1. Clone and branch

```bash
cd /path/to/giantswarm/github
git checkout main && git pull
git checkout -b add-${REPOSITORY_NAME}-to-team
```

### 2. Edit the team file

Add an entry to `repositories/team-<name>.yaml` in alphabetical order.

For a CLI tool:

```yaml
- componentType: cli
  gen:
    flavours:
      - cli
    language: go
  name: my-cli
```

For a service/app:

```yaml
- componentType: service
  gen:
    flavours:
      - app
    language: go
  name: my-service
```

For a library:

```yaml
- componentType: library
  gen:
    flavours:
      - generic
    language: go
  name: my-library
```

### 3. Create PR

```bash
git add repositories/team-<name>.yaml
git commit -m "Add ${REPOSITORY_NAME} to team-<name> ownership"
git push -u origin add-${REPOSITORY_NAME}-to-team
gh pr create --title "Add ${REPOSITORY_NAME} to team-<name> ownership" --body "..."
```

## Component Types and Flavours

| componentType | Use case |
|---------------|----------|
| `service` | Deployed services, apps with Helm charts |
| `cli` | Command-line tools |
| `library` | Shared Go libraries |
| `configuration` | Config-only repos (no deployable code) |
| `customer` | Customer-specific config repos |

| Flavour | Use case |
|---------|----------|
| `generic` | General purpose |
| `app` | App with Helm chart |
| `cli` | CLI binary |
| `fleet` | Fleet management |
| `cluster-app` | Cluster app |
| `customer` | Customer config |

## Standard Repository Files

After setup, a Go repository should contain:

| File | Purpose |
|------|---------|
| `go.mod` | Go module (`github.com/giantswarm/<name>`) |
| `main.go` | Entry point |
| `Makefile` | devctl-generated, includes `Makefile.*.mk` |
| `README.md` | Project description |
| `CHANGELOG.md` | Keep a Changelog format |
| `CODEOWNERS` | Team ownership (synced from `giantswarm/github`) |
| `LICENSE` | Apache 2.0 |
| `DCO` | Developer Certificate of Origin |
| `SECURITY.md` | Security policy |
| `renovate.json5` | Renovate config with Giant Swarm presets |
| `.github/` | Workflows (`zz_generated.*` from devctl) |
| `.circleci/config.yml` | CircleCI pipeline (optional) |
| `docs/development.md` | Development instructions |

## devctl Commands Reference

| Command | Purpose |
|---------|---------|
| `devctl repo setup giantswarm/<repo>` | Configure GitHub settings, branch protection, Renovate |
| `devctl replace -i 'PATTERN' 'REPLACEMENT' 'GLOB'` | Replace text in files |
| `devctl gen renovate [--language go]` | Generate `renovate.json5` |
| `devctl gen makefile` | Generate Makefiles |
| `devctl gen workflow` | Generate GitHub Actions workflows |

## Notes

- Repository and chart names should match (avoid `-app` suffix)
- Branch protection is applied by `devctl repo setup` -- push placeholder replacements before running it
- `CODEOWNERS` is synced automatically from `giantswarm/github` team files
- The `zz_generated.*` files are managed by devctl and should not be edited manually
