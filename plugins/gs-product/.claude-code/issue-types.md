# Issue Type Decision Tree

Use this decision tree to help users choose the appropriate issue type.

## Quick Decision Flow

```
START: User wants to create an issue
  ↓
┌─────────────────────────────────────────┐
│ Is it strategic and multi-month?        │
│ (Major initiative, multiple teams,      │
│  clear business outcomes)                │
└─────────────────────────────────────────┘
  ↓ YES → **EPIC** 🎯
  ↓ NO

┌─────────────────────────────────────────┐
│ Does it deliver user-facing value?      │
│ (User can see/feel the benefit,          │
│  improves user experience)               │
└─────────────────────────────────────────┘
  ↓ YES → **STORY** 📑
  ↓ NO

┌─────────────────────────────────────────┐
│ Is something broken or not working?      │
│ (Defect, error, unexpected behavior)    │
└─────────────────────────────────────────┘
  ↓ YES → **BUG** 🐞
  ↓ NO

┌─────────────────────────────────────────┐
│ Are you documenting an incident?         │
│ (Outage, service disruption,             │
│  production issue post-resolution)       │
└─────────────────────────────────────────┘
  ↓ YES → **POSTMORTEM** 🚧
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this research or exploration?         │
│ (Answering "should we?", evaluating      │
│  options, time-boxed investigation)      │
└─────────────────────────────────────────┘
  ↓ YES → **DISCOVERY** 👀 or **EXPERIMENT** 🥼
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this a customer/stakeholder ask?      │
│ (Requires evaluation before becoming     │
│  actionable work)                        │
└─────────────────────────────────────────┘
  ↓ YES → **REQUEST** 🛎️
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this a new platform capability?       │
│ (Adding functionality, API extensions,   │
│  integrations)                           │
└─────────────────────────────────────────┘
  ↓ YES → **FEATURE** 💫
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this a quarterly strategic bet?       │
│ (Company-wide initiative with metrics,   │
│  market positioning)                     │
└─────────────────────────────────────────┘
  ↓ YES → **ROCK** 🪨
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this a recurring/scheduled task?      │
│ (Monthly admin, quarterly review,        │
│  regular maintenance)                    │
└─────────────────────────────────────────┘
  ↓ YES → **RECURRING** ⥁
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this operational improvement?         │
│ (Platform health, performance,           │
│  infrastructure maintenance)             │
└─────────────────────────────────────────┘
  ↓ YES → **OPERATIONAL** ⚙️
  ↓ NO

┌─────────────────────────────────────────┐
│ Capturing information for reference?     │
│ (Research findings, decisions,           │
│  conference notes, market analysis)      │
└─────────────────────────────────────────┘
  ↓ YES → **NOTE** 📜
  ↓ NO

┌─────────────────────────────────────────┐
│ Is this a specific action item?          │
│ (Concrete work, clear completion,        │
│  hours to days)                          │
└─────────────────────────────────────────┘
  ↓ YES → **TASK** 🗒️
  ↓ NO

→ Ask user for more details to clarify
```

## Issue Type Summary

| Type | Duration | When to Use | Required Sections |
|------|----------|-------------|-------------------|
| **Epic** 🎯 | Weeks-months | Strategic initiatives, major features | Motivation, Scope, Outcome, AC |
| **Story** 📑 | Days-weeks | User-facing value | Motivation, Todo, Outcome, AC |
| **Task** 🗒️ | Hours-days | Specific actions | Description, Done |
| **Bug** 🐞 | Varies | Something broken | Description, Repro, Logs |
| **Postmortem** 🚧 | After incident | Document incidents | What/Why/Fix/Prevent |
| **Discovery** 👀 | Time-boxed | Research questions | Questions, Deliverables |
| **Request** 🛎️ | N/A | Customer asks | Requestor, Use Case, Value |
| **Feature** 💫 | Varies | New capabilities | Description, AC |
| **Rock** 🪨 | Quarterly | Strategic bets | Hypothesis, Metrics, Benefits |
| **Recurring** ⥁ | Ongoing | Scheduled tasks | Description, Frequency |
| **Operational** ⚙️ | Varies | Platform health | Description, Impact, Resolution |
| **Note** 📜 | N/A | Reference info | Summary, Content, Takeaways |
| **Experiment** 🥼 | Time-boxed | POCs, validation | Hypothesis, Success Criteria |

## Detailed Type Descriptions

### Epic 🎯
**Purpose**: Major initiatives that span multiple teams or take months to complete.

**Characteristics**:
- Strategic in nature
- Clear business value
- Multiple child stories/tasks
- Measurable outcomes
- Significant scope

**Examples**:
- `[EPIC] Kubernetes v1.31 Support`
- `[EPIC] Production-Ready KubeEdge Solution`

---

### Story 📑
**Purpose**: User-facing features that deliver value to a specific persona.

**Characteristics**:
- User benefit is clear
- Solves a user problem
- Days to weeks to complete
- Part of a larger epic
- User-observable outcome

**Examples**:
- `Enable self-service troubleshooting via enhanced logs`
- `Collect Product Signals for Data Ingestion Activity`

---

### Task 🗒️
**Purpose**: Specific, actionable work items with clear completion criteria.

**Characteristics**:
- Concrete action
- Hours to days
- Clear done state
- Often part of story/epic
- Minimal justification needed

**Examples**:
- `Add SCIM references to PagerDuty docs`
- `Team Cabbage - Catalog ConfigMaps Cleanup`

---

### Bug 🐞
**Purpose**: Document defects, errors, or unintended behavior.

**Characteristics**:
- Something is broken
- Reproducible (ideally)
- Has error logs/evidence
- Affects users or systems
- Clear expected behavior

**Examples**:
- `cilium-app: Pods stuck in CrashLoopBackOff`
- `gazelle/operations: Node had untolerated taint`

---

### Postmortem 🚧
**Purpose**: Document incidents after they've been resolved.

**Characteristics**:
- Incident occurred
- Currently resolved or stable
- Root cause known or investigated
- Learning opportunity
- Follow-up actions needed

**Examples**:
- `wallaby: Workload clusters were unreachable for 2 hours`
- `Grafana admin user was blocked on golem`

---

### Discovery 👀
**Purpose**: Time-boxed research to answer questions or evaluate options.

**Characteristics**:
- Strategic question to answer
- Time-boxed investigation
- Delivers knowledge, not features
- Decision-oriented
- Multiple options considered

**Examples**:
- `Spike: K3s Integration Evaluation for Edge Device Management`
- `Investigation: Detect breaking changes in releases`

---

### Request 🛎️
**Purpose**: Capture customer or stakeholder requests for evaluation.

**Characteristics**:
- External request
- Needs evaluation
- Not yet committed
- Business value unclear or needs assessment
- May become story/epic later

**Examples**:
- `Customer Request: SCIM provisioning for PagerDuty`
- `ACME Corp: Support for custom CNI plugins`

---

### Feature 💫
**Purpose**: New platform capabilities or product enhancements.

**Characteristics**:
- Adding new capability
- Focus on WHAT, not WHY
- Platform enhancement
- Clear acceptance criteria
- Technical in nature

**Examples**:
- `Add cluster autoscaling configuration to Backstage UI`
- `Enable custom CNI plugin support in CAPA clusters`

---

### Rock 🪨
**Purpose**: Quarterly strategic bets with clear business metrics.

**Characteristics**:
- Company/quarterly level
- Market positioning
- Quantifiable goals
- Strategic hypothesis
- Cross-functional

**Examples**:
- `🏭 Q1 2026: Expand into Smart Factory Manufacturing Segment`
- `Rock: Achieve 99.9% platform availability`

---

### Recurring ⥁
**Purpose**: Ongoing tasks that happen on a regular schedule.

**Characteristics**:
- Scheduled cadence
- Predictable work
- Often administrative
- Clear owner
- Automation opportunity

**Examples**:
- `Monthly: Review PagerDuty on-call schedules`
- `Quarterly: Security audit of cluster access`

---

### Operational ⚙️
**Purpose**: Platform health, performance, or infrastructure maintenance.

**Characteristics**:
- Operational concern
- Platform health
- Performance related
- Infrastructure focused
- Measurable improvement

**Examples**:
- `Reduce PVC provisioning latency in AWS clusters`
- `Fix KSM alerts paging on alba`

---

### Note 📜
**Purpose**: Capture information, decisions, or research for reference.

**Characteristics**:
- Informational
- Reference material
- Not actionable work
- Knowledge capture
- Searchable

**Examples**:
- `KubeCon NA 2025: Key Trends in Platform Engineering`
- `Decision Record: Adopting Cilium`

---

### Experiment 🥼
**Purpose**: Time-boxed explorations to validate hypotheses or test approaches.

**Characteristics**:
- Time-boxed
- Hypothesis-driven
- Success criteria defined
- POC or prototype
- Decision at the end

**Examples**:
- `Experiment: Validate KubeEdge for edge device management`
- `POC: Test Cilium network policies for multi-tenant isolation`

---

## Common Confusion Points

### Epic vs Story
- **Epic**: Strategic, months-long, multiple child issues
- **Story**: User-focused, days-weeks, single deliverable

### Discovery vs Experiment
- **Discovery**: Open-ended research, answering questions
- **Experiment**: Hypothesis-testing, POC, go/no-go decision

### Task vs Story
- **Task**: Specific action, minimal context needed
- **Story**: User value, requires motivation and outcome

### Bug vs Operational
- **Bug**: Specific defect, unexpected behavior
- **Operational**: General platform health, performance improvement

### Request vs Story
- **Request**: Unvalidated ask, needs evaluation
- **Story**: Committed work, validated value

## Tips for Choosing

1. **Start with duration**: Long → Epic, Medium → Story, Short → Task
2. **Consider audience**: User-facing → Story, Internal → Task/Operational
3. **Is it broken?**: Yes → Bug, Was broken → Postmortem
4. **Need to research?**: Yes → Discovery/Experiment
5. **Strategic level?**: Quarterly → Rock, Multi-month → Epic, Weeks → Story

## When in Doubt

If unclear which type to use:
1. Ask the user about **duration** and **scope**
2. Ask about **who benefits** (users vs internal)
3. Ask if this is **new work** vs **fixing something**
4. Default to **Task** for simple items, **Story** for user-facing work
