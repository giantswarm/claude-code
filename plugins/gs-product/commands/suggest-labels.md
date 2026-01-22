---
description: Suggest appropriate labels for a GitHub issue based on content
---

# Suggest Labels

Analyze issue content and suggest appropriate labels based on Giant Swarm's label taxonomy.

## What This Command Does

This command analyzes the content of a GitHub issue and suggests appropriate labels from Giant Swarm's taxonomy of 200+ labels, providing reasoning for each suggestion and organizing them by importance.

## Instructions for Claude

When the user invokes this command, follow these steps:

### 1. Get Issue Content

Prompt the user:
```
Please provide the issue content (title and body) for label suggestions.
```

### 2. Identify Required Labels

**Team Label (exactly ONE required):**

Look for mentions of teams or areas of responsibility. Reference `.claude-code/labels.md` for team descriptions:
- `team/atlas` - Observability, monitoring, logging
- `team/cabbage` - Networking, service mesh
- `team/honey-badger` - App platform, GitOps
- `team/phoenix` - Cloud providers (AWS, Azure)
- `team/rocket` - On-prem, edge (vSphere, Cloud Director)
- `team/shield` - Security, auth, RBAC
- `team/tenet` - Releases, testing, CAPI
- `team/turtles` - Platform foundations
- `team/planeteers` - Product, cross-team
- `team/up` - Marketing, growth, people ops
- `team/nifflers` - (newer team)

If unclear, ask the user which team should own this.

### 3. Identify Issue Type

**Kind Label (recommended):**

Determine from title and content:
- Title starts with "[EPIC]" → `kind/epic`
- Title starts with "Spike:" → `kind/discovery`
- Describes broken behavior → `kind/bug`
- User benefit described → `kind/story`
- Specific action → `kind/task`
- Incident documentation → `kind/postmortem`
- Customer ask → `kind/request`
- New capability → `kind/feature`
- Quarterly bet → `kind/rock`
- Scheduled task → `kind/recurring`
- Platform health → `kind/operational`
- Reference info → `kind/note`
- POC/validation → `kind/experiment`

### 4. Scan for Context Clues

Look for these indicators in the content:

**Provider-specific:**
- AWS, CAPA, Amazon → `provider/aws` or `provider/capa`
- Azure, CAPZ → `provider/azure` or `provider/capz`
- vSphere, CAPV → `provider/vsphere` or `provider/capv`
- Cloud Director, CAPVCD → `provider/cloud-director` or `provider/capvcd`

**Customer names:**
- Company names mentioned → `customer/<name-in-lowercase>`
- Example: "ACME Corp" → `customer/acme-corp`

**Installation names:**
- gazelle, wallaby, alba, golem, etc. → `installation/<name>`

**Severity indicators:**
- "critical", "outage", "down", "blocking" → `impact/high`
- "degraded", "slow", "workaround exists" → `impact/medium`
- "cosmetic", "minor", "nice-to-have" → `impact/low`

**Product area:**
- Kubernetes-as-a-Service features → `area/kaas`
- Platform capabilities, infrastructure → `area/platform`

**Cross-functional work:**
- Documentation → `function/documentation`
- Security-related → `function/security`
- Customer success → `function/customer-success`
- Marketing/growth → `function/marketing`

**Workstreams (optional):**
- CAPA, AWS provider → `workstream/CAPA 📕`
- CAPZ, Azure → `workstream/CAPZ`
- CAPV, vSphere → `workstream/CAPV 📘`
- CAPVCD, Cloud Director → `workstream/CAPVCD 📗`
- CAPI generic → `workstream/CAPI 📚`
- SSO, authentication → `workstream/SSO 🪪`
- Certificates → `workstream/Certs 🧾`

### 5. Present Suggestions

Format labels in order of importance:

```markdown
## Suggested Labels

### Required
- `team/<name>` - [Explain why this team based on content]

### Recommended
- `kind/<type>` - [Issue type identified]
- `area/<domain>` - [Product area if applicable]

### Optional (Based on Content)
- `provider/<name>` - [Quote relevant text from issue]
- `customer/<name>` - [Customer mentioned in issue]
- `impact/<level>` - [Reasoning based on severity]
- `installation/<name>` - [Affected installation]
- `function/<area>` - [Cross-functional aspect]
- `workstream/<name>` - [Long-running initiative]

**Total**: X labels suggested
```

### 6. Explain Reasoning

For each suggested label:
- Quote relevant parts of the issue
- Explain why this label applies
- If uncertain (especially about team), ask the user

### 7. Label Selection Rules

- **EXACTLY ONE** team label (required)
- **One or more** kind labels (recommended)
- **Multiple** optional labels are fine
- **All labels must be** from approved list in `.claude-code/labels.md`
- **Don't invent** new labels

## Example Usage

**User:**
```
/suggest-labels

Title: [EPIC] Production-Ready KubeEdge Solution for WEPA Edge Device Integration
Body: [Epic about edge computing on vSphere for WEPA customer...]
```

**Your response:**
```markdown
## Suggested Labels

### Required
- `team/rocket` - Edge computing and on-prem infrastructure is Rocket's domain. Issue mentions "edge devices", "on-prem", and "vSphere integration"

### Recommended
- `kind/epic` - Strategic multi-month initiative (evident from "[EPIC]" prefix and scope)
- `area/platform` - Platform capability enhancement

### Optional (Based on Content)
- `provider/vsphere` - vSphere integration explicitly mentioned in body
- `customer/wepa` - WEPA customer explicitly referenced in title and throughout
- `working-group/smart-factory` - Smart factory use case described in motivation
- `workstream/CAPV 📘` - CAPV provider-related work

### Reasoning Quotes
- "WEPA needs to integrate Nvidia Jetson edge devices" → customer/wepa
- "vSphere infrastructure integration" → provider/vsphere
- "Smart Factory manufacturing" → working-group/smart-factory

**Total**: 7 labels suggested
```

## Common Label Patterns

**For Epics:**
- `team/<name>`, `kind/epic`, `area/<domain>`, possibly `working-group/<name>`

**For Stories:**
- `team/<name>`, `kind/story`, `area/<domain>`, possibly `function/<area>`

**For Bugs:**
- `team/<name>`, `kind/bug`, `provider/<provider>`, `impact/<level>`, possibly `customer/<name>`

**For Postmortems:**
- `team/<name>`, `kind/postmortem`, `installation/<name>`, `impact/high`

## Reference

Complete label taxonomy in `.claude-code/labels.md` includes:
- Teams (11 teams)
- Kinds (16 types)
- Functions (20+ cross-functional areas)
- Areas (2 domains)
- Workstreams (20+ initiatives)
- Providers (4 cloud providers)
- Impact levels (3 levels)
- And more...

## Notes

- Base suggestions on content analysis, not assumptions
- Be explicit about reasoning (quote from issue)
- If team ownership is unclear, ask the user
- All suggestions must be from the approved taxonomy
