# Giant Swarm Issue Creation Guide

> **Complete guide with templates, examples, and best practices**

---

## Table of Contents

- [Quick Start](#quick-start)
- [Issue Type Decision Tree](#issue-type-decision-tree)
- [Templates](#templates)
- [Good Examples](#good-examples)
- [Anti-Patterns](#anti-patterns)
- [Tips for Quality](#tips-for-quality)
- [Label Reference](#label-reference)

---

## Quick Start

### Using in Cursor

Once the ruleset is installed:

1. **Create an Epic**: Type `"Create an epic for improving cluster reliability"`
2. **Create a Story**: Type `"Create a story for enabling self-service debugging"`
3. **Create a Bug**: Type `"Create a bug report for pods stuck in CrashLoopBackOff"`

Cursor will:
- ✅ Inject the appropriate template
- ✅ Validate required sections
- ✅ Suggest labels
- ✅ Check quality before submission

---

## Issue Type Decision Tree

```
Is it strategic and multi-month?
  YES → Epic 🎯
  NO ↓

Does it deliver user value?
  YES → Story 📑
  NO ↓

Is something broken?
  YES → Bug 🐞
  NO ↓

Documenting an incident?
  YES → Postmortem 🚧
  NO ↓

Research or exploration?
  YES → Discovery 👀
  NO ↓

Customer/stakeholder ask?
  YES → Request 🛎️
  NO ↓

Specific action needed?
  YES → Task 🗒️
```

---

## Templates

### Epic Template 🎯

**Use for:** Strategic initiatives spanning weeks to months

```markdown
## Motivation

[Why does this epic exist? What strategic problem are we solving?]

## Description

[What are we building/doing? High-level overview.]

## Scope

**In Scope**:
- [Item 1]
- [Item 2]

**Out of Scope**:
- [Item 1]
- [Item 2]

## Outcome

[What will be different when this is done? What value is created?]

## Acceptance Criteria

- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

## Dependencies

- **Blocked by**: [Issues or external factors]
- **Blocks**: [Issues depending on this]
- **Related**: [Related initiatives]

## Timeline

[Expected duration or key milestones]
```

**Labels**: `team/<name>`, `kind/epic`, `area/kaas` or `area/platform`

---

### Story Template 📑

**Use for:** User-facing features delivering value

```markdown
## Motivation

[User problem or business need]

## Todo

1. [ ] [Implementation step 1]
2. [ ] [Implementation step 2]
3. [ ] [Implementation step 3]

## Technical Hints

[Any technical guidance for implementer]

## Outcome

[User benefit - what changes from user perspective]

## Acceptance Criteria

- [ ] [User-observable criterion 1]
- [ ] [User-observable criterion 2]
- [ ] [Documentation updated]

---

Related to epic: #[EPIC-NUMBER]
```

**Labels**: `team/<name>`, `kind/story`, `area/<domain>`

---

### Task Template 🗒️

**Use for:** Specific action items

```markdown
## Context (if needed)

[Brief background]

## Todo

- [ ] [Action item 1]
- [ ] [Action item 2]

## Done When

[Clear completion state]
```

**Labels**: `team/<name>`, `kind/task`

---

### Bug Template 🐞

**Use for:** Defects and errors

```markdown
## Description

**Expected**: [What should happen]

**Actual**: [What is happening]

## Reproduction Steps

1. [Step 1]
2. [Step 2]
3. [Observe behavior]

## Clusters Affected

- [Installation/cluster name]

## Error Logs / Evidence

```
[Error messages or log snippets]
```

## Impact

- **Severity**: [High/Medium/Low]
- **Affected Users**: [Who is impacted]

## Suggested Fix (optional)

[If known]
```

**Labels**: `team/<name>`, `kind/bug`, `provider/<provider>`, `impact/<level>`

---

### Postmortem Template 🚧

**Use for:** Incident documentation

```markdown
## Current Status / tl;dr

[One-sentence summary of incident and resolution]

## Clusters

- [Affected installations]

## Description

[What happened - timeline of events]

## Root Cause

[Why it happened]

## Resolution

[How it was fixed]

## Prevention / Follow-Up Tasks

- [ ] #[issue] - [Prevention measure]
- [ ] #[issue] - [Process improvement]

## References

- Slack: [URL]
- Related: #[issue]
```

**Labels**: `team/<name>`, `kind/postmortem`, `impact/high`

---

### Discovery/Spike Template 👀

**Use for:** Time-boxed research

```markdown
## Context

[Why this research is needed]

**Parent Epic** (if applicable): #[EPIC]

## Objective

[What question are we answering]

## Research Questions

1. [Question 1]
2. [Question 2]
3. [Question 3]

## Acceptance Criteria

- [ ] [Research deliverable 1]
- [ ] [Research deliverable 2]
- [ ] Strategic Recommendation with rationale

## Deliverables

1. [Document 1]
2. [Architecture diagram]
3. [Decision document]

## Timeline

**Target**: [Time-box, e.g., 2 weeks]
```

**Labels**: `team/<name>`, `kind/discovery`, `label:SPIKE`

---

### Request Template 🛎️

**Use for:** Customer or stakeholder asks

```markdown
## Requestor

**Customer/Team**: [Name]
**Contact**: [Person]
**Date**: [Date]

## Request Summary

[What they want]

## Use Case

[Why they need it - business context]

## Desired Solution

[What they're asking for]

## Business Value

[Impact and importance]

## Next Steps

- [ ] [Evaluation step]
- [ ] [Decision step]
```

**Labels**: `team/<name>`, `kind/request`, `customer/<name>`

---

## Good Examples

### ✅ Excellent Epic

**Title**: `[EPIC] Production-Ready KubeEdge Solution for WEPA Edge Device Integration`

```markdown
## Motivation

**Customer Problem**: WEPA needs to integrate Nvidia Jetson edge devices running AI/ML visual inspection models into their existing Giant Swarm Kubernetes infrastructure. They want these devices managed as standard Kubernetes nodes rather than parallel infrastructure.

**Solution Approach**: Develop KubeEdge as a managed app that allows edge devices to appear as nodes in the workload cluster, enabling GitOps workflows to deploy and manage edge workloads seamlessly.

**Business Value**: Enable WEPA and similar manufacturing customers to adopt edge computing while maintaining operational consistency with their existing platform setup.

## Scope

**In Scope**:
- KubeEdge managed app with helm charts and production-ready defaults
- Automated edge device image building pipeline (Nvidia Jetson focus)
- GitOps integration for seamless edge workload deployment
- Comprehensive customer documentation and setup guides
- End-to-end testing environment with automated validation
- Security and compliance framework for edge devices

**Out of Scope**:
- Support for non-Kubernetes edge orchestration platforms
- Custom hardware support beyond Nvidia Jetson initially
- Edge-to-edge networking capabilities

## Acceptance Criteria

- [ ] KubeEdge managed app deployable on workload clusters
- [ ] Edge devices successfully join workload cluster as nodes
- [ ] GitOps workflows can deploy workloads to edge devices
- [ ] Complete customer onboarding documentation available
- [ ] End-to-end testing environment operational
- [ ] Monitoring integrated with observability stack

## Dependencies

- **Blocked by**: Platform team capacity allocation
- **Blocks**: WEPA edge device rollout timeline
- **Related**: Observability stack improvements
```

**Why This Is Excellent**:
- ✅ Clear customer problem and business value
- ✅ Explicit scope boundaries (in/out)
- ✅ Measurable acceptance criteria
- ✅ Dependencies identified
- ✅ Strategic context provided

---

### ✅ Excellent Story

**Title**: `Collect Product Signals for Data Ingestion Activity`

```markdown
## Motivation

Understanding data ingestion patterns helps us optimize platform performance, plan for scaling, and ensure customers can onboard their data sources efficiently.

## Todo

1. [ ] Investigate how to collect the following signals:
   - Amount of data per tenant
   - Number of data sources per tenant
   - Number of labels per data source
2. [ ] Implement the collection of these signals
3. [ ] Add signals to private product signals dashboard

## Technical Hints

- Align with existing data source registration mechanisms
- Ensure multi-tenant separation in signal reporting

## Outcome

We can monitor and improve the data onboarding process, ensuring customers have a smooth experience and the platform remains performant.

## Acceptance Criteria

- [ ] All listed signals tracked and visible in dashboard
- [ ] Signals reported per tenant
- [ ] Documentation updated

---

Related to epic: #3863
```

**Why This Is Excellent**:
- ✅ Clear motivation stating business value
- ✅ Actionable todo list
- ✅ Defined outcome
- ✅ Verifiable acceptance criteria
- ✅ Links to parent epic

---

### ✅ Excellent Bug Report

**Title**: `cilium-app HelmRelease fails during cluster upgrade`

```markdown
## Description

**Expected**: Cilium app should upgrade smoothly during cluster upgrade without rollback.

**Actual**: HelmRelease fails with error "timed out waiting for the condition" and performs automatic rollback.

## Reproduction Steps

1. Create CAPI cluster on v30.2.0
2. Upgrade cluster to v31.0.0
3. Watch cilium-app HelmRelease during upgrade
4. Observe: HelmRelease transitions to "Upgrading" → "Failed" → "Rolled Back"

## Error Logs

```
Status:
  Conditions:
  - message: 'Helm upgrade failed: timed out waiting for the condition'
    reason: UpgradeFailed
    status: "False"
    type: Ready
```

## Clusters Affected

- alba/deu01 (CAPA)
- wallaby/plant-test (CAPZ)
- Likely all CAPI clusters upgrading to v31.x

## Impact

- **Severity**: High
- **Affected Users**: All customers attempting cluster upgrades to v31.x
- **Workaround**: Manual HelmRelease suspension and resume

## Root Cause (Hypothesis)

Cilium app upgrade includes CRD change requiring pod restart. Default Flux timeout (5 minutes) insufficient for large clusters where restart takes 6-8 minutes.

## Suggested Fix

1. Increase HelmRelease timeout to 10 minutes
2. Add pre-upgrade hook to validate pods can restart
3. Consider splitting CRD updates from app version updates
```

**Why This Is Excellent**:
- ✅ Clear expected vs actual behavior
- ✅ Detailed reproduction steps
- ✅ Error logs included
- ✅ Impact and severity documented
- ✅ Root cause hypothesis provided
- ✅ Suggested fixes included

---

## Anti-Patterns

### ❌ The Vague Epic

**BAD**:
```markdown
Title: Improve platform

Body:
We need to make the platform better in Q4.

Goals:
- Better performance
- More features
- Happy customers
```

**Problems**:
- ❌ No specific scope
- ❌ No measurable outcomes
- ❌ Impossible to know when "done"
- ❌ No business value articulated

**FIX**: Break into focused epics with specific, measurable outcomes like:
- `[EPIC] Reduce P1 Incident Count by 50% through Proactive Monitoring`
- `[EPIC] Improve Cluster Upgrade Reliability to 99.5% Success Rate`

---

### ❌ The Orphaned Story

**BAD**:
```markdown
Title: Add button to UI

Body:
## Todo
- Add a button
- Make it work

## Done When
Button is added.
```

**Problems**:
- ❌ No parent epic
- ❌ No user problem
- ❌ No value articulation
- ❌ What button? Where? Why?

**FIX**:
```markdown
Title: Add cluster deletion confirmation to prevent accidental deletions

## Motivation

In the past 6 months, we've had 3 incidents of accidental cluster deletions via Backstage UI, including one production cluster. Users report single-click deletion is too easy to trigger accidentally.

**Parent Epic**: #4050 - Improve Backstage cluster lifecycle management safety

## Todo

1. [ ] Add "Delete Cluster" confirmation modal with:
   - Cluster name verification (user must type exact name)
   - Warning about data loss
   - "I understand" checkbox
2. [ ] Disable delete for clusters with `prevent-deletion` label
3. [ ] Log all deletion attempts

## Outcome

Zero accidental cluster deletions. Users feel confident the UI prevents mistakes.

## Acceptance Criteria

- [ ] Confirmation modal appears before deletion
- [ ] User must type exact cluster name to proceed
- [ ] Attempts logged with user identity
- [ ] UI tested with 5 users for usability
```

---

### ❌ The Mystery Bug

**BAD**:
```markdown
Title: Broken

Body:
It's not working. Please fix.

Error: Error occurred.
```

**Problems**:
- ❌ What is "it"?
- ❌ How to reproduce?
- ❌ What error?

**FIX**: Use the bug template above with complete information

---

### ❌ Empty or Minimal Issues

**BAD**:
- Title-only issues
- Body with just "TODO" or "TBD"
- No context or acceptance criteria

**FIX**: Always include:
- Why (motivation)
- What (description)
- When done (acceptance criteria)
- Context (links, references)

---

## Tips for Quality

### 1. Start with Why

Every issue should answer: **Why does this matter? What problem does it solve?**

### 2. Be Specific, Not Generic

❌ "Update documentation"  
✅ "Update cert-manager docs to include DNS01 challenge setup with IAM roles"

### 3. Link the Chain

- Stories link to parent Epics
- Tasks link to parent Stories  
- All reference related work

### 4. Make It Measurable

Acceptance criteria should be verifiable:
- ❌ "Documentation is better"
- ✅ "Documentation includes setup guide, examples, and troubleshooting section reviewed by 2 team members"

### 5. Consider the Reader

Write for someone who doesn't have your context:
- Define acronyms on first use
- Link to background docs
- Explain business impact

### 6. Use Checklists

Break work into checkable items:
```markdown
## Todo
- [ ] Research approach
- [ ] Implement prototype
- [ ] Write tests
- [ ] Update documentation
```

### 7. Label Thoughtfully

- **team** = delivery owner (required)
- **kind** = issue type (epic, story, task, bug)
- **function** = cross-functional domain
- **area** = product area (kaas, platform)
- **workstream** = long-running initiative

### 8. Update as You Go

- Check off completed items
- Add comments for decisions
- Update acceptance criteria if scope changes
- Close when truly done

---

## Label Reference

### Teams (Required - Choose ONE)

- `team/atlas` - Observability platform
- `team/cabbage` - Networking
- `team/honey-badger` - App platform, GitOps
- `team/phoenix` - Cloud providers (CAPA, CAPZ)
- `team/planeteers` - Product, cross-team coordination
- `team/rocket` - On-prem, edge (CAPV, CAPVCD)
- `team/shield` - Security, auth, RBAC
- `team/tenet` - Releases, testing, CAPI core
- `team/up` - Marketing, growth, people ops
- `team/turtles` - Platform foundations
- `team/nifflers` - (newer team)

### Kinds (Recommended)

- `kind/epic` 🎯 - Strategic initiatives
- `kind/story` 📑 - User-facing value
- `kind/task` 🗒️ - Specific actions
- `kind/bug` 🐞 - Defects
- `kind/postmortem` 🚧 - Incident docs
- `kind/discovery` 👀 - Research
- `kind/request` 🛎️ - Customer asks
- `kind/feature` 💫 - New capabilities
- `kind/rock` 🪨 - Quarterly bets
- `kind/recurring` ⥁ - Ongoing tasks
- `kind/operational` ⚙️ - Platform health
- `kind/note` 📜 - Reference docs

### Areas (Optional)

- `area/kaas` - Kubernetes as a Service
- `area/platform` - Platform capabilities

### Functions (Optional - for cross-functional work)

- `function/engineering`
- `function/customer-success`
- `function/product-strategy`
- `function/documentation`
- `function/security`
- `function/marketing`

### Providers (Optional)

- `provider/aws` or `provider/capa`
- `provider/azure` or `provider/capz`
- `provider/vsphere` or `provider/capv`
- `provider/cloud-director` or `provider/capvcd`

### Impact (Optional)

- `impact/high` - Critical business impact
- `impact/medium` - Moderate impact
- `impact/low` - Minor impact

---

## Common Pitfalls to Avoid

1. **Title-Only Issues**: Always include a body
2. **No Team Label**: Every issue needs exactly one team
3. **Missing Parent Epic**: Stories and tasks should link to epics
4. **Vague Acceptance Criteria**: Be specific and measurable
5. **No Context Links**: Reference Slack, docs, related issues
6. **Skipping Sections**: Include all required sections for issue type
7. **Assuming Knowledge**: Write for future readers who lack context
8. **No Outcome Statement**: Especially critical for stories and epics
9. **Orphaned Issues**: Not connected to any epic or initiative
10. **Missing Labels**: Use the full labeling system for better organization

---

## Quality Test: The 3 C's

### 1. CLEAR
- Specific titles
- Defined problem/goal
- No ambiguity
- Concrete examples

### 2. COMPLETE
- All required sections
- Sufficient context
- Links to related work
- Evidence/data included

### 3. CONNECTED
- Links to parent epic
- References related issues
- Team ownership clear
- Stakeholders identified

---

## Support

- **Slack**: #product-engineering or #roadmap
- **Training**: Request from Product team
- **Questions**: Post in relevant team channel

---

*Last updated: 2025-12-03*  
*Version: 2.0*  
*Maintainer: Product Team*


