---
name: registries
descriptions: Working with container and OCI registries
---

- Giant Swarm primarily uses Azure CR via these host names:
  - `gsoci.azurecr.io` for public images and charts
  - `gsociprivate.azurecr.io` for non-public images and charts
- Use the `az` CLI with the `az acr` command family
- Helm charts in the OCI registries have the repository prefix `charts/giantswarm/`
- Container imagaes have the repository prefix `giantswarm/`

## az CLI

- Even when dealing with the public registry, it might be required to run `az acr login`. Examples:
  - `az acr login --name gsoci`
  - `az acr login --name gsociprivate`
- With `az acr repository list`
  - apply filters using `--query`; otherwise the command will take a very long time and will return several thousand repositories.
  - use the `--top` flag with to limit the output
  - use the `--output tsv` for simple, concise output
