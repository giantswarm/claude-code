# Operational Template ⚙️

**Use for:** Platform health, maintenance, or operational improvements

## Required Sections

### Description
[What operational issue exists? What aspect of platform health is affected?]

**Current State**: [What's happening now]

**Desired State**: [What should be happening]

### Impact
**Affected Systems**:
- [System/component 1]
- [System/component 2]

**Impact on Platform/Customers**:
- [Impact description]
- **Severity**: [High/Medium/Low]

### Resolution
[How will we address this? What changes are needed?]

**Action Items**:
- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

### Expected Outcome
[What will improve? What metrics will change? How will we measure success?]

## Optional Sections

### Root Cause
[If this is addressing an operational issue, what's causing it?]

### Monitoring
[How will we track this? What alerts or dashboards are relevant?]

### References
- Alert: [URL or alert name]
- Monitoring: [Dashboard URL]
- Runbook: [URL]
- Related: #[issue]

---

## Labels

**Required:**
- `team/<name>` - Owning team
- `kind/operational`

**Recommended:**
- `provider/<provider>` - If provider-specific
- `installation/<installation>` - If installation-specific
- `impact/<level>` - high, medium, or low

## Examples

Good operational titles:
- `Reduce PVC provisioning latency in AWS clusters`
- `Implement automated cleanup of stale test namespaces`
- `Fix KSM alerts paging on alba and tackle other alerts in error state`

## Quality Checklist

- [ ] Operational issue clearly described
- [ ] Current vs desired state defined
- [ ] Impact on platform/customers stated
- [ ] Resolution approach outlined
- [ ] Success metrics identified
