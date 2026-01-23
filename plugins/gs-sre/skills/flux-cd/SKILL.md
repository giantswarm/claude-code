---
name: flux-cd
description: Knowledge about Flux CD in Giant Swarm platform
---

## Terminology

- Flux and Flux CD are used interchangeably in Giant Swarm's context.

## Namespaces

- Giant Swarm deploys their version of Flux controllers in the `flux-giantswarm` namespace.
- Always specify `--namespace` when running Flux CLI commands.

## flux CLI

- The `flux` CLI facilitates some tasks that might require multiple kubectl commands otherwise.
- Always use the CLI version matching the Flux version deployed in the cluster.
- Check versions using `flux version --namespace flux-giantswarm`.
- If the server version is not returned, check the image tag of the flux controller manager deployment in the `flux-giantswarm` namespace.

### Useful Commands

- **`flux trace`**: Shows how objects are managed by Flux. Useful for debugging. Example: `flux trace redis --kind=helmrelease --api-version=helm.toolkit.fluxcd.io/v2 --namespace redis`
- **`flux tree`**: Prints the hierarchy of resources managed by a Kustomization. Use `--compact` to show only Flux resources. Example: `flux tree kustomization gazelle-gitops --namespace default`
- **`flux build kustomization --dry-run`**: Helps identify problems when other tools fall short. Note: secret and configmap variables remain unreplaced in dry-run mode.

## GitOps Repository Structure

Giant Swarm recommends a hierarchical repository layout mirroring infrastructure organization:

```
bases/
├── clusters/
├── environments/
│   ├── stages/
│   │   ├── dev/
│   │   └── prod/
│   └── regions/
│       ├── eu_central/
│       └── us_west/
management-clusters/
└── MC_NAME/
    ├── secrets/
    └── organizations/
        └── ORG_NAME/
            └── workload-clusters/
                ├── WC_NAME1/
                │   ├── mapi/
                │   │   ├── apps/
                │   │   │   └── APP1/
                │   │   └── cluster/
                │   └── [out-of-band]/
                └── WC_NAME2/
```

## kubectl-gs GitOps Commands

The `kubectl gs gitops` command family manages GitOps repositories:

| Command | Purpose |
|---------|---------|
| `init` | Set up repository with basic structure, `.sops.yaml`, and pre-commit hooks |
| `add management-cluster` | Register a management cluster |
| `add organization` | Add organizational units |
| `add workload-cluster` | Register workload clusters |
| `add app` | Deploy applications |
| `add automatic-update` | Configure app update automation |
| `add encryption` | Integrate GPG key pairs for SOPS |
| `add base` | Create provider-specific cluster templates |

Key notes:
- All git operations (clone, push) must be performed by the user.
- Commands won't overwrite existing files.
- Use `--dry-run` to preview changes.
- Run `kubectl gs gitops init` each time you clone a repo to restore the pre-commit security hook.

## SOPS Encryption

Giant Swarm uses Mozilla SOPS for secret encryption:

- The `.sops.yaml` file is created during `kubectl gs gitops init`.
- Encryption can be applied at management cluster, organization, or workload cluster levels.
- After running `add encryption`, import the public key: `gpg --import [path-to-public-key.asc]`
- The pre-commit hook checks for unencrypted manifests before pushing commits.

## App Deployment

### Using App CRs

Apps deploy as `App` Custom Resources using:
```bash
kubectl gs template app \
  --app-name "${cluster_name}-${APP_NAME}" \
  --catalog ${APP_CATALOG} \
  --target-namespace ${NAMESPACE} \
  --cluster-name ${WC_NAME} \
  --version ${VERSION}
```

App names should include `${cluster_name}` to prevent collisions across clusters.

### Configuration

- **ConfigMaps**: For standard configuration values.
- **Encrypted Secrets**: Sensitive data encrypted via AGE/GPG using the workload cluster's public key.

### ServiceAccount Requirements

Resources require explicit `.spec.serviceAccountName` definitions. The `automation` ServiceAccount holds `cluster-admin` role within organization namespaces, enabling Flux resource creation.

## Automatic Updates

Flux can automatically update app versions using:

- **OCIRepository**: Defines the OCI registry to monitor for new app versions.
- **ImageRepository**: Configures where images are stored and detects new versions.
- **ImagePolicy**: Establishes rules for which versions should trigger updates (supports semver and regex).
- **ImageUpdateAutomation**: Defines commit structure and file update strategies.

Mark App resources with a comment for auto-updates: `# {"$imagepolicy": "default:app-name:tag"}`

## Environment Management

Giant Swarm uses a multi-directory approach with a single repository and branch as the source of truth.

Configuration priority levels:
- 100: cluster base
- 110: stage environment (dev/staging/prod)
- 120: regional environment
- 130: cluster-specific configuration

## Giant Swarm Tools

### fake-flux

A Giant Swarm script that mimics the `flux` CLI locally. Validates resource generation by applying patches and variable substitution before deployment.

### test-all-ff

Checks all manifests for errors using `yamllint` and `kubeconform`. Run from repository root:
```bash
test-all-ff validate
```
Works best in GitHub Actions but also runs locally or in git pre-commit hooks.
