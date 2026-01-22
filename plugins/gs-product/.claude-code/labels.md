# Giant Swarm Label Reference

Complete taxonomy of GitHub labels used in Giant Swarm issue tracking.

## Label Categories

1. [Teams](#teams) - Required, exactly ONE per issue
2. [Kinds](#kinds) - Issue types, recommended
3. [Functions](#functions) - Cross-functional domains
4. [Areas](#areas) - Product areas
5. [Workstreams](#workstreams) - Long-running initiatives
6. [SIGs](#sigs) - Special Interest Groups
7. [Working Groups](#working-groups) - Temporary initiatives
8. [Providers](#providers) - Cloud providers
9. [Customers](#customers) - Customer-specific
10. [Installations](#installations) - Installation-specific
11. [Impact](#impact) - Severity levels
12. [Effort](#effort) - Sizing estimates
13. [Priority](#priority) - Prioritization
14. [Availability](#availability) - Roadmap timeline
15. [Lifecycle](#lifecycle) - Special handling

---

## Teams

**Format**: `team/<name>`

**Rule**: **EXACTLY ONE** team label per issue. The team owns delivery and prioritization.

### Available Teams

| Label | Focus Area |
|-------|------------|
| `team/atlas` | Observability platform, monitoring, logging |
| `team/cabbage` | Networking, service mesh, ingress |
| `team/honey-badger` | App platform, GitOps, application delivery |
| `team/phoenix` | Cloud providers (CAPA, CAPZ), AWS, Azure |
| `team/planeteers` | Product management, cross-team coordination |
| `team/rocket` | On-prem, edge computing (CAPV, CAPVCD) |
| `team/shield` | Security, authentication, RBAC, authorization |
| `team/tenet` | Releases, testing, CAPI core |
| `team/up` | Marketing, growth, people operations |
| `team/turtles` | Platform foundations, infrastructure |
| `team/nifflers` | (Newer team) |

---

## Kinds

**Format**: `kind/<type>`

**Rule**: Recommended for all issues. Helps with filtering and organization.

### Available Kinds

| Label | Symbol | Description |
|-------|--------|-------------|
| `kind/epic` | 🎯 | Strategic initiatives (weeks-months) |
| `kind/story` | 📑 | User-facing value delivery |
| `kind/task` | 🗒️ | Specific action items |
| `kind/bug` | 🐞 | Defects and errors |
| `kind/postmortem` | 🚧 | Incident documentation |
| `kind/discovery` | 👀 | Research and spikes |
| `kind/request` | 🛎️ | Customer/stakeholder asks |
| `kind/feature` | 💫 | New platform capabilities |
| `kind/rock` | 🪨 | Quarterly strategic bets |
| `kind/recurring` | ⥁ | Ongoing scheduled tasks |
| `kind/operational` | ⚙️ | Platform health improvements |
| `kind/note` | 📜 | Reference documentation |
| `kind/experiment` | 🥼 | POCs and hypothesis validation |
| `kind/insight` | 💬 | Analytics and insights |
| `kind/coffee` | ☕ | Informal discussions |
| `kind/alert` | 🚨 | Automated alerts |

**Note**: Some teams use emoji labels directly (e.g., `Epic 🎯` instead of `kind/epic`)

---

## Functions

**Format**: `function/<area>` or just `<Function Name>`

**Rule**: Optional. Use for cross-functional work to help with resource allocation.

### Available Functions

| Label | Description |
|-------|-------------|
| `Engineering *️⃣` | Engineering work |
| `Product Strategy 📈` | Product planning and strategy |
| `Customer Success 📊` | Customer-facing success work |
| `Marketing/Growth 📈` | Marketing and growth initiatives |
| `Product Marketing 📢` | Product marketing activities |
| `Sales 🤝` | Sales-related work |
| `Documentation 📖` | Documentation tasks |
| `Events 🥳` | Event planning and execution |
| `Content 📠` | Content creation |
| `Admin/Legal 🎓` | Administrative and legal |
| `People Ops Engineering` | People operations |
| `Finance 💸` | Financial matters |
| `Recruiting 🧑‍🤝‍🧑` | Recruitment |
| `Org Development 🏛` | Organizational development |
| `Design 🎨` | Design work |
| `Security 🔒` | Security-related |
| `Solution Engineering 🎨` | Solution engineering |
| `Account Engineering 👷‍♀️` | Account engineering |
| `Partner/Alliance 🫂` | Partnerships |
| `Product Organization 🧑‍🤝‍🧑` | Product org work |
| `People 👩‍💻` | People-related |
| `On-/Offboarding` | Employee onboarding/offboarding |
| `Working Student` | Working student projects |
| `Individual Development 🎒` | Personal development |

---

## Areas

**Format**: `area/<domain>` or `<Area Name>`

**Rule**: Optional. Distinguishes product domains.

### Available Areas

| Label | Description |
|-------|-------------|
| `KaaS ⛵` | Kubernetes as a Service |
| `Platform 🔗` | Platform capabilities |

---

## Workstreams

**Format**: `workstream/<name>` or `<Workstream Name>`

**Rule**: Optional. Use for long-running focus areas to group related work.

### Available Workstreams

| Label | Description |
|-------|-------------|
| `CAPA 📕` | Cluster API Provider AWS |
| `CAPZ` | Cluster API Provider Azure |
| `CAPV 📘` | Cluster API Provider vSphere |
| `CAPVCD 📗` | Cluster API Provider Cloud Director |
| `CAPI 📚` | Cluster API (generic) |
| `KVM 📒` | KVM provider |
| `Cluster Import` | Cluster import functionality |
| `Fleet management` | Fleet management capabilities |
| `SSO 🪪` | Single sign-on |
| `Certs 🧾` | Certificate management |
| `Authorization 🔐` | Authorization and RBAC |
| `VPN & Teleport 🚇` | VPN and Teleport access |
| `QWL 🪄` | Quality of Work Life |
| `Admin 📠` | Administrative tasks |
| `Customer 🤴` | Customer-related work |
| `Professional Services` | Professional services |
| `Project` | Project-related |
| `QBR` | Quarterly Business Reviews |
| `Flow ⛵️` | Flow initiatives |
| `mc-bootstrap 🍔` | Management cluster bootstrap |
| `After CAPI` | Post-CAPI migration work |

---

## SIGs

**Format**: `sig/<name>` or `<SIG Name>`

**Rule**: Optional. Special Interest Groups for cross-team collaboration.

### Available SIGs

| Label | Description |
|-------|-------------|
| `Architecture` | Architecture discussions |
| `Docs` | Documentation SIG |
| `Monitoring` | Monitoring and observability |
| `Security` | Security SIG |
| `Product` | Product SIG |
| `Product Marketing` | Product marketing SIG |
| `Ops process` | Operations process |
| `Company` | Company-wide initiatives |
| `Recruiting` | Recruiting SIG |
| `Revenue` | Revenue-related |
| `Website` | Website improvements |
| `Content` | Content SIG |
| `Events` | Events SIG |
| `Talks` | Conference talks |
| `Culture` | Company culture |

---

## Working Groups

**Format**: `working-group/<name>`

**Rule**: Optional. Temporary cross-team initiatives.

### Available Working Groups

| Label | Description |
|-------|-------------|
| `working-group/smart-factory` or `Smart Factory` | Smart factory initiative |
| `working-group/ai` or `AI` | AI-related projects |
| `working-group/capa-migration` or `CAPA Migration` | CAPA migration work |
| `working-group/non-gs-clusters-import` or `Non GS Clusters Import` | Import non-GS clusters |
| `working-group/hackathon` or `Hackathon` | Hackathon projects |
| `working-group/roadmap` or `Roadmap` | Roadmap planning |

---

## Providers

**Format**: `provider/<name>`

**Rule**: Optional. Use when issue is specific to a cloud provider.

### Available Providers

| Label | Description |
|-------|-------------|
| `provider/aws` or `provider/capa` | Amazon Web Services |
| `provider/azure` or `provider/capz` | Microsoft Azure |
| `provider/vsphere` or `provider/capv` | VMware vSphere |
| `provider/cloud-director` or `provider/capvcd` | VMware Cloud Director |

---

## Customers

**Format**: `customer/<customer-name>`

**Rule**: Optional. Use for customer-specific issues.

### Usage

- Add when issue is specific to a particular customer
- Links issue to customer in HubSpot or CRM
- Helps with customer account management
- Format: lowercase, hyphens for spaces
- Example: `customer/acme-corp`, `customer/wepa`

---

## Installations

**Format**: `installation/<installation-name>`

**Rule**: Optional. Use for installation-specific issues.

### Usage

- Add when issue affects a specific installation
- Helps track installation health
- Useful for debugging and support
- Example: `installation/gazelle`, `installation/wallaby`, `installation/alba`

---

## Impact

**Format**: `impact/<level>`

**Rule**: Optional but recommended for bugs and operational issues.

### Available Impact Levels

| Label | When to Use |
|-------|-------------|
| `impact/high` | Critical business impact, customer-facing outage, revenue loss, security issue |
| `impact/medium` | Moderate impact, degraded performance, workaround exists |
| `impact/low` | Minor impact, cosmetic issues, nice-to-have improvements |

---

## Effort

**Format**: `effort/<size>`

**Rule**: Optional. Used for estimation and sprint planning.

### Available Effort Sizes

| Label | Description |
|-------|-------------|
| `effort/s` | Small (hours to 1 day) |
| `effort/m` | Medium (1-3 days) |
| `effort/l` | Large (3-5 days) |
| `effort/xl` | Extra Large (1+ weeks) |

---

## Priority

**Format**: `priority/<level>`

**Rule**: Optional. Used by teams for backlog prioritization.

### Usage

- Teams define their own priority schemes
- Common values: `priority/high`, `priority/medium`, `priority/low`
- Or: `priority/p0`, `priority/p1`, `priority/p2`, `priority/p3`

---

## Availability

**Format**: `availability/<timeline>` or `<Availability Label>`

**Rule**: Optional. Helps set customer expectations and roadmap planning.

### Available Availability Labels

| Label | Description |
|-------|-------------|
| `Ready Soon (<4 weeks)` | Available within 4 weeks |
| `Near Term (1-3 months)` | Available in 1-3 months |
| `Mid Term (3-6 months)` | Available in 3-6 months |
| `Future (>6 months)` | Available in 6+ months |
| `Under Consideration 🤔` | Being evaluated, not committed |

---

## Lifecycle

**Format**: `lifecycle/<state>`

**Rule**: Optional. Special lifecycle handling.

### Available Lifecycle Labels

| Label | Description |
|-------|-------------|
| `lifecycle/keep` | Prevents auto-closure, keep issue open |
| `lifecycle/frozen` | Issue is frozen, no active work |
| `lifecycle/stale` | Issue has gone stale |

---

## Label Selection Guidelines

### Required Labels

Every issue **MUST** have:
- Exactly **ONE** `team/<name>` label

### Recommended Labels

Most issues should have:
- `kind/<type>` - Issue type
- `area/kaas` or `area/platform` - Product area (if applicable)

### Optional Labels (Add as Relevant)

- `function/<area>` - For cross-functional work
- `workstream/<name>` - For long-running initiatives
- `provider/<provider>` - For provider-specific issues
- `customer/<customer>` - For customer-specific issues
- `installation/<installation>` - For installation-specific issues
- `impact/<level>` - For bugs and operational issues
- `effort/<size>` - For estimation
- `priority/<level>` - For prioritization
- `availability/<timeline>` - For roadmap items
- `sig/<name>` - For SIG collaboration
- `working-group/<name>` - For working group initiatives

---

## Common Label Combinations

### For Epics
- `team/<name>` (required)
- `kind/epic` (required)
- `area/<domain>` (recommended)
- `working-group/<name>` (if applicable)
- `quarter` field populated

### For Stories
- `team/<name>` (required)
- `kind/story` (required)
- `area/<domain>` (recommended)
- `function/<area>` (if cross-functional)

### For Bugs
- `team/<name>` (required)
- `kind/bug` (required)
- `provider/<provider>` (if provider-specific)
- `customer/<customer>` (if customer-specific)
- `installation/<installation>` (if applicable)
- `impact/<level>` (recommended)

### For Postmortems
- `team/<name>` (required)
- `kind/postmortem` (required)
- `provider/<provider>` (if applicable)
- `installation/<installation>` (affected installations)
- `impact/high` (typically)

---

## Tips for Suggesting Labels

When suggesting labels to users:

1. **Always suggest a team label** (required)
2. **Always suggest a kind label** (issue type)
3. **Look for provider mentions** in the issue (aws, azure, vsphere, cloud-director)
4. **Look for customer names** - suggest `customer/<name>` label
5. **Look for cluster/installation names** - suggest `installation/<name>` label
6. **For bugs**, suggest `impact/<level>` based on severity
7. **For epics**, suggest `area/<domain>` and relevant `working-group/<name>`
8. **For cross-functional work**, suggest `function/<area>`

Present labels in order of importance: Required → Recommended → Optional
