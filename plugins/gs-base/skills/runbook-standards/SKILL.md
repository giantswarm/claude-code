---
name: runbook-standards
description: Quality standards and best practices for Giant Swarm runbooks. Use when creating or migrating runbooks.
---

## Runbook Location

- **Runbooks**: `content/docs/support-and-ops/runbooks/<name>/index.md`
- **Ops-recipes** (legacy): `content/docs/support-and-ops/ops-recipes/`
- **Alert mappings**: `data/alerts.yaml`

## Required Front Matter

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Descriptive title |
| `description` | Yes | One-line summary |
| `last_review_date` | Yes | YYYY-MM-DD format, set to current date |
| `layout` | Yes | Must be `runbook` |
| `owner` | Yes | Team GitHub URL (e.g., `https://github.com/orgs/giantswarm/teams/team-name`) |
| `toc_hide` | Yes | Set to `true` |
| `runbook.variables` | No | Variables for interactive commands |

## Variables for Interactive Runbooks

Define under `runbook.variables` when kubectl or installation-specific commands are used:

```yaml
runbook:
  variables:
    - name: INSTALLATION
      description: Installation name
    - name: CLUSTER
      description: Cluster name
```

## Code Block Standards

### Use Highlight Shortcode

Instead of fenced code blocks, use:
```
{{< highlight shell >}}
kubectl --context $WC_CONTEXT get pods
{{< /highlight >}}
```

### kubectl Context Rules

- `--context` MUST be the FIRST flag after `kubectl`
- Use `$MC_CONTEXT` for management cluster operations
- Use `$WC_CONTEXT` for workload cluster operations
- Use long flag names (`--namespace` not `-n`, `--selector` not `-l`)

### Multi-line Commands

Wrap long commands with backslashes:
```shell
kubectl --context $WC_CONTEXT \
  get pods \
  --namespace kube-system \
  --selector app=coredns \
  --output wide
```

## Internal Links

Always use `relref` shortcode for internal links:
```markdown
See [related runbook]({{< relref "/docs/support-and-ops/runbooks/other-runbook" >}})
```

## Runbook Features

| Feature | Use Case | Documentation |
|---------|----------|---------------|
| Variables | Installation/cluster-specific commands | Front matter `runbook.variables` |
| Dashboard links | Link to Grafana with correct context | Showcase docs |
| Known issues | Structured upstream/internal issue tracking | Showcase docs |
| Grafana Explore | Pre-built metric/log queries | Showcase docs |

## Quality Checklist

- [ ] Clear, actionable title describing the problem or task
- [ ] Description explains what problem this runbook solves
- [ ] `layout: runbook` is set
- [ ] `last_review_date` is set to current date
- [ ] `toc_hide: true` is set
- [ ] Owner team is assigned
- [ ] All kubectl commands have `--context` as first flag
- [ ] Code blocks use `highlight` shortcode
- [ ] Internal links use `relref` shortcode
- [ ] Long commands are wrapped with backslashes
- [ ] Build passes without front matter or `REF_NOT_FOUND` errors
