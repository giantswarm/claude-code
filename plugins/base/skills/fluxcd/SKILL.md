---
name: fluxcd
description: Best practices when working with Flux CD at Giant Swarm
---

## Namespaces

- Giant Swarm deploys their version of Flux controllers in the `flux-giantswarm` namespace.

## flux CLI

- Make sure to use the right CLI version matching the controllers in the cluster.
- Check the CLI version using `flux version --client`
- Check the controller versions using `flux version --context <context-name> --namespace flux-giantswarm`. The first output line is the CLI version.
