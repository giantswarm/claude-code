---
name: issue-patterns
description: Giant Swarm issue patterns, types, and naming conventions
---

# Issue Patterns

Reference for Giant Swarm issue types, naming patterns, and structural conventions.

## Issue Type Quick Reference

| Type | Duration | When to Use | Required Sections |
|------|----------|-------------|-------------------|
| **Epic** 🎯 | Weeks-months | Strategic initiatives | Motivation, Scope, Outcome, AC |
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

## Naming Patterns by Type

**Epic:**
- Format: `[EPIC]: <Strategic outcome>`
- Example: `[EPIC] Kubernetes v1.31 Support`

**Story:**
- Format: `<Action that creates value>`
- Example: `Enable self-service troubleshooting via enhanced logs`

**Task:**
- Format: `<Action> <specific thing>`
- Example: `Add SCIM references to PagerDuty docs`

**Bug:**
- Format: `<Component>: <What's broken>`
- Example: `cilium-app: Pods stuck in CrashLoopBackOff`

**Postmortem:**
- Format: `<Cluster>: <What happened>`
- Example: `gazelle/operations: Ingress unavailable 2h`

**Discovery:**
- Format: `Spike: <Question to answer>`
- Example: `Spike: Evaluate Cilium for cost visibility`

## Common Anti-Patterns

❌ **Avoid:**
- Vague titles: "Fix issue", "Update docs"
- Empty bodies (title-only)
- No acceptance criteria
- Missing team label
- Orphaned stories (no parent epic)
- Placeholder text ("TODO", "TBD")

✅ **Use instead:**
- Specific titles with component and action
- Complete bodies with all required sections
- Measurable acceptance criteria
- Exactly ONE team label
- Epic links for stories/tasks
- Complete information before creating

## Quality Standards (The 3 C's)

1. **CLEAR**: Specific, unambiguous, well-explained
2. **COMPLETE**: All required sections, sufficient detail
3. **CONNECTED**: Linked to related work, epic, team

## Markdown Conventions

- **Headings**: Use `##` for main sections, `###` for subsections
- **Lists**: `-` for bullets, `1.` for numbered, `- [ ]` for checkboxes
- **Code**: ` `inline` ` for terms, ` ```yaml ` for blocks
- **Links**: `#12345` for issues, `[text](URL)` for external

## Issue Relationships

- **Epics** → contain **Stories** and **Tasks**
- **Stories** → link to parent **Epic** ("Towards #XXX")
- **Tasks** → link to parent **Story** or **Epic**
- All issues → link **Related** work

## Based On

Analysis of 1,710 real Giant Swarm issues (2023-2025) across 11 teams.
