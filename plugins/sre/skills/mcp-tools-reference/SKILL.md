---
name: mcp-tools-reference
description: MCP tools quick reference for Giant Swarm operations
---

# MCP Tools Quick Reference

## Discovery

- `mcp_muster_list_core_tools`: List core platform tools
- `mcp_muster_filter_tools`: Search tools by pattern (e.g., `workflow_*`, `x_kubernetes*`, `*capi*`, `*_teleport_*`)
- `core_workflow_list`: List available workflows

## Execution

**All tools execute via:** `mcp_muster_call_tool`
- `core_*` tools: Core platform building blocks
- `x_*` tools: Extended tools (kubernetes, prometheus, teleport, flux, capi)
- `workflow_*` tools: High-level automated workflows (composable)

## Critical Parameters

**Kubernetes (`x_kubernetes_*`):**
- `kubeContext`: **REQUIRED** - Always set explicitly (current context ignored)
- Format: `teleport.giantswarm.io-{mc}` or `teleport.giantswarm.io-{mc}-{wc}`

**Prometheus (`x_prometheus_*`):**
- `prometheus_url`: **REQUIRED** - Format: `http://localhost:{localPort}/prometheus`
- Port from `workflow_login-management-cluster` (unique per MC)
- Verify port works before queries

**Teleport (`x_teleport_*`, workflows):**
- `localPort`: **MUST be string**, not integer (e.g., `"18001"`, not `18001`)

**CAPI (`*capi*`):**
- **MC context only** - Tools fail on WC context

## Common Workflows

**Login Management Cluster:**
- Tool: `workflow_login-management-cluster`
- Args: `installation` (MC name), `localPort` (string)
- Creates: kubectl context + Mimir port-forward

**Login Workload Cluster:**
- Tool: `workflow_login-workload-cluster`
- Args: `installation` (MC name), `localPort` (string), `workloadCluster` (WC name)
- Creates: kubectl context

**List Clusters:**
- Tool: `x_teleport_kube_list_clusters`
- Returns: All available MC/WC clusters

## Tool Categories

- `workflow_*`: Automated multi-step operations (prefer these)
- `x_kubernetes_*`: K8s resource operations, logs, exec
- `x_prometheus_*`: PromQL queries, metric fetching
- `x_teleport_*`: Cluster discovery, access management
- `x_flux_*`: GitOps operations, Kustomization inspection
- `*capi*`: Cluster API operations (MC only)
- `core_*`: Platform primitives (workflow building blocks)

## Workflow Debugging

- Inspect: `core_workflow_get`
- Execution history: `core_workflow_execution_list`
- On error: Check workflow definition + execution logs

## Best Practices

1. **Check existing workflows first** - Use `mcp_muster_filter_tools` with `workflow_*` pattern
2. **Prefer MCP tools over kubectl/CLI** - Better integration, error handling
3. **Create workflows from multi-step tasks** - Makes platform composable
4. **Verify ports before Prometheus queries** - Login workflow creates port-forward
5. **Always set kubeContext** - Never rely on current context
