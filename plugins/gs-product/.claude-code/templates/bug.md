# Bug Template 🐞

**Use for:** Defects, errors, or unintended behavior

## Required Sections

### Description

**Expected Behavior**: [What should happen]

**Actual Behavior**: [What is happening instead]

**Impact**: [Who/what is affected? Severity of the issue]

### Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Observe behavior]

**Environment**:
- Cluster/Installation: [name]
- Provider: [AWS/Azure/vSphere/Cloud Director]
- Version: [platform version]
- Component: [affected component/app]

### Error Logs / Evidence
```
[Paste relevant error messages, log snippets, or stack traces]
```

**Metrics/Screenshots** (if applicable):
[Any relevant monitoring data, screenshots, or visual evidence]

## Optional Sections

### Root Cause (if known)
[Why this is happening - can be filled in during investigation]

### Workaround
[Temporary solution or mitigation if one exists]

### Suggested Fix
[If you have ideas about how to fix this]

### References
- Slack thread: [URL]
- Related bug: #[issue]
- Monitoring dashboard: [URL]

### Affected Clusters/Installations
- [Installation 1]
- [Installation 2]
- [Scope of impact]

---

## Labels

**Required:**
- `team/<name>` - Delivery owner
- `kind/bug`

**Recommended:**
- `provider/<provider>` - aws, azure, vsphere, cloud-director
- `customer/<customer>` - If customer-specific
- `installation/<installation>` - Affected installation
- `impact/high`, `impact/medium`, or `impact/low`

## Examples

Good bug titles:
- `gazelle/operations: Node had untolerated taint karpenter.sh/unregistered`
- `cilium-app: HelmRelease fails during cluster upgrade with timeout`
- `ingress-nginx: PDB resources not being created`

## Quality Checklist

- [ ] Expected vs actual behavior clearly stated
- [ ] Reproduction steps are detailed
- [ ] Environment/cluster information provided
- [ ] Error logs or evidence included
- [ ] Impact and severity documented
- [ ] Affected installations listed
