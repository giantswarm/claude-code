---
name: flux-cd
description: Knowledge about Flux CD in Giant Swarm platform
---

## Terminology

- Flux and Flux CD are used interchangeably in our context

## CLI tools

- The `flux` CLI facilitates some tasks that would take much longer using kubectl or other tools.
- Always make sure to use the right CLI version matching the Flux version deployed in the cluster.
- Normally `flux version --namespace flux-giantswarm` is the command to check the Flux versoin in the cluster and on the CLI.
- If the server version is not delivered, you can check the deployed Flux version by looking at the image tag of the flux controller manager deployment in the `flux-giantswarm` namespace.
- The `flux trace` command shows how objects are managed by Flux. Example: `flux trace redis --kind=helmrelease --api-version=helm.toolkit.fluxcd.io/v2 --namespace redis`
- The `flux tree` command prints the hierarchy of resources managed by a Kustomization. The `--compact` flag _can_ be added to only show Flux resources. Example: `flux tree kustomization gazelle-gitops --namespace default`
