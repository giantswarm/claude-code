# Postmortem Template 🚧

**Use for:** Documenting incidents, outages, or significant operational issues

## Required Sections

### Current Status / tl;dr
[One-sentence summary: What happened, current state, whether it's resolved]

### Clusters
**Affected Installations**:
- [Installation/cluster 1]
- [Installation/cluster 2]
- [Scope of impact]

### Description
**What Happened**:
[Detailed timeline of events - when did it start, what was observed, how did it progress?]

**Who Was Impacted**:
- Customers: [list or "all customers" or "internal only"]
- Services affected: [list]
- Duration: [X hours/minutes]
- Severity: [High/Medium/Low]

### Root Cause
[Why did this happen? What was the underlying cause? What contributing factors existed?]

**Contributing Factors**:
- [Factor 1]
- [Factor 2]

### Resolution
**How It Was Fixed**:
[Step-by-step description of how the incident was resolved]

**Who Fixed It**: @[username] and team

**Type**:
- [ ] Temporary fix (permanent solution needed)
- [ ] Permanent fix

### Prevention / Action Items
**Follow-Up Tasks**:
- [ ] #[issue] - [Prevention measure 1]
- [ ] #[issue] - [Process improvement 2]
- [ ] #[issue] - [Monitoring enhancement 3]

**What We'll Do Differently**:
[Process changes, architectural improvements, monitoring additions]

## Optional Sections

### Timeline (Detailed)
- `[Time]` - [Event description]
- `[Time]` - [Event description]
- `[Time]` - [Resolution action]

### Suggestions
[Additional recommendations, learnings, systemic issues identified]

### References
- Slack thread: [URL]
- Monitoring dashboard: [URL]
- Related postmortem: #[issue]
- Runbook: [URL]

---

## Labels

**Required:**
- `team/<name>` - Owning team
- `kind/postmortem` or `label:postmortem`

**Recommended:**
- `provider/<provider>` - If provider-specific
- `customer/<customer>` - If customer-specific
- `installation/<installation>` - Affected installation
- `impact/high` - For significant incidents

## Examples

Good postmortem titles:
- `gazelle/operations: Node had untolerated taint karpenter.sh/unregistered: karpenter`
- `wallaby: Workload clusters were unreachable for 2 hours`
- `Grafana admin user was blocked on golem installation`

## Quality Checklist

- [ ] Clear incident summary
- [ ] Affected clusters/installations listed
- [ ] Timeline of events provided
- [ ] Root cause identified and explained
- [ ] Resolution steps documented
- [ ] Follow-up tasks created and linked
- [ ] Prevention measures defined
