---
name: backstage
description: The Backstage developer portal
---

## Purpose

- Giant Swarm has an internal developer portal at https://devportal.giantswarm.io/
- Customers have their individual Backstage portals managed by Giant Swarm under customer-specific domains
- Customers have a single Backstage instance, even though they may have multiple installations
- The portal serves as unified user interface for platform-related information

## URLs

The user might hand over a Backstage portal URL to you, and you might want to direct a user to their Backstage portal URL. For this it's important to understand how to construct/deconstruct a URL.

We omit the hostname part here and only focus on the path element.

### Deployment details

Example: `/deployments/gazelle/helmrelease/flux-giantswarm/backstage`

URL scheme: `/deployments/:mc/:kind/:namespace/:name`

### Cluster details

Example: `/clusters/gazelle/org-giantswarm-production/operations`

URL scheme: `/clusters/:mc/:namespace/:name`

### Installation details

Example: `/catalog/default/resource/gazelle`

URL scheme: `/catalog/:catalog-namespace/resource/:mc`

### Component entity details

Example: `/catalog/default/component/app-build-suite`

URL scheme: `/catalog/:catalog-namespace/component/:name`
