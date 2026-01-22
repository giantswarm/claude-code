---
name: label-taxonomy
description: Giant Swarm GitHub label taxonomy and usage guidelines
---

# Label Taxonomy

Reference for Giant Swarm's 200+ GitHub labels and labeling conventions.

## Label Categories

1. **Teams** - Required, exactly ONE per issue
2. **Kinds** - Issue types, recommended
3. **Functions** - Cross-functional domains
4. **Areas** - Product areas (kaas, platform)
5. **Providers** - Cloud providers
6. **Impact** - Severity levels
7. **Workstreams** - Long-running initiatives

## Teams (Required - Exactly ONE)

| Label | Focus Area |
|-------|------------|
| `team/atlas` | Observability, monitoring, logging |
| `team/cabbage` | Networking, service mesh, ingress |
| `team/honey-badger` | App platform, GitOps |
| `team/phoenix` | Cloud providers (AWS, Azure) |
| `team/planeteers` | Product, cross-team coordination |
| `team/rocket` | On-prem, edge (vSphere, Cloud Director) |
| `team/shield` | Security, auth, RBAC |
| `team/tenet` | Releases, testing, CAPI core |
| `team/up` | Marketing, growth, people ops |
| `team/turtles` | Platform foundations |
| `team/nifflers` | (Newer team) |

## Kinds (Recommended)

| Label | Use For |
|-------|---------|
| `kind/epic` | Strategic initiatives |
| `kind/story` | User-facing value |
| `kind/task` | Specific actions |
| `kind/bug` | Defects |
| `kind/postmortem` | Incident docs |
| `kind/discovery` | Research/spikes |
| `kind/request` | Customer asks |
| `kind/feature` | New capabilities |
| `kind/rock` | Quarterly bets |
| `kind/recurring` | Scheduled tasks |
| `kind/operational` | Platform health |
| `kind/note` | Reference docs |
| `kind/experiment` | POCs, validation |

## Providers (Optional)

- `provider/aws` or `provider/capa` - AWS/CAPA
- `provider/azure` or `provider/capz` - Azure/CAPZ
- `provider/vsphere` or `provider/capv` - vSphere/CAPV
- `provider/cloud-director` or `provider/capvcd` - Cloud Director/CAPVCD

## Impact (Optional - For Bugs)

- `impact/high` - Critical, customer-facing, outage
- `impact/medium` - Degraded, workaround exists
- `impact/low` - Minor, cosmetic, nice-to-have

## Areas (Optional)

- `area/kaas` - Kubernetes-as-a-Service
- `area/platform` - Platform capabilities

## Functions (Optional - Cross-Functional)

- `function/engineering`
- `function/customer-success`
- `function/product-strategy`
- `function/documentation`
- `function/security`
- `function/marketing`

## Workstreams (Optional)

- `workstream/CAPA 📕` - Cluster API Provider AWS
- `workstream/CAPZ` - Cluster API Provider Azure
- `workstream/CAPV 📘` - Cluster API Provider vSphere
- `workstream/CAPVCD 📗` - Cluster API Provider Cloud Director
- `workstream/CAPI 📚` - Cluster API generic
- `workstream/SSO 🪪` - Single sign-on
- `workstream/Certs 🧾` - Certificate management

## Label Selection Rules

1. **EXACTLY ONE** team label (required)
2. One or more kind labels (recommended)
3. Multiple optional labels are fine
4. All labels must be from approved list
5. Don't invent new labels

## Common Patterns

**Epic:** `team/<name>`, `kind/epic`, `area/<domain>`

**Story:** `team/<name>`, `kind/story`, `area/<domain>`, possibly `function/<area>`

**Bug:** `team/<name>`, `kind/bug`, `provider/<provider>`, `impact/<level>`, possibly `customer/<name>`

**Postmortem:** `team/<name>`, `kind/postmortem`, `installation/<name>`, `impact/high`

## Content Indicators

Look for these in issue content to suggest labels:

**Provider keywords:**
- "AWS", "CAPA", "Amazon" → `provider/aws`
- "Azure", "CAPZ" → `provider/azure`
- "vSphere", "CAPV" → `provider/vsphere`
- "Cloud Director", "CAPVCD" → `provider/cloud-director`

**Severity keywords:**
- "critical", "outage", "down" → `impact/high`
- "degraded", "slow" → `impact/medium`
- "cosmetic", "minor" → `impact/low`

**Customer mentions:**
- Company names → `customer/<name-lowercase>`

**Installation mentions:**
- gazelle, wallaby, alba, golem → `installation/<name>`

## Reference

Complete taxonomy in `.claude-code/labels.md`
