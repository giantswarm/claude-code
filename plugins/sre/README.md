# Giant Swarm SRE Plugin

Site Reliability Engineering tools and commands for incident response, debugging, and operational excellence.

## Version

0.1.0

## Description

This plugin provides specialized commands and workflows for SRE tasks at Giant Swarm. It includes tools for:
- Incident response and management
- Postmortem documentation
- Kubernetes debugging and troubleshooting
- Alert investigation and triage

Designed for SRE team members and on-call engineers who need quick access to diagnostic workflows and documentation templates.

## Available Commands

### `/incident-start`
Start the incident response workflow. Creates an incident document with timeline, impact tracking, and communication templates. Helps you quickly organize response efforts during critical issues.

### `/postmortem`
Generate a comprehensive postmortem document after an incident is resolved. Guides you through creating a blameless postmortem with root cause analysis, timeline, and action items.

### `/debug-pod`
Debug a Kubernetes pod with comprehensive diagnostics. Runs systematic checks including pod status, events, logs, resource usage, and provides analysis with remediation steps.

### `/check-alerts`
Investigate and triage active alerts. Helps determine severity, gather context, and decide on appropriate actions. Provides investigation framework and relevant diagnostic commands.

## Available Skills

### `giantswarm-platform`
Comprehensive Giant Swarm platform knowledge including:
- Platform architecture (MCs, WCs, CAPI, installations)
- Access and authentication via Teleport
- Observability stack (Mimir, Loki, Alloy, Grafana)
- App Platform components and CRDs
- GitOps workflows with Flux
- Debugging philosophy and best practices
- Security tooling interaction guidelines
- Silence management

This skill provides context-aware assistance for Giant Swarm-specific operations and troubleshooting.

### `mcp-tools-reference`
Quick reference for MCP tools usage including:
- Tool discovery and execution patterns
- Critical parameters (kubeContext, prometheus_url, localPort)
- Common workflows (cluster login, access)
- Tool categories and best practices
- Workflow debugging methods

Essential for efficient use of the MCP tool ecosystem in Giant Swarm operations.

## Installation

See the main [INSTALLATION.md](../../../INSTALLATION.md) for general installation instructions.

To use this plugin specifically:
```bash
claude --plugin ~/claude-code-plugins/plugins/sre
```

Or add to your Claude Code settings:
```json
{
  "plugins": [
    "~/claude-code-plugins/plugins/sre"
  ]
}
```

## Usage Examples

**Starting incident response:**
```
/incident-start
```
Claude will guide you through creating an incident document and provide relevant diagnostic commands.

**Creating a postmortem:**
```
/postmortem
```
Claude will help you document the incident with a structured postmortem template.

**Debugging a failing pod:**
```
/debug-pod my-app-7d8f9c-xyz --namespace production
```
Claude will run diagnostics and provide analysis of the pod issue.

**Investigating alerts:**
```
/check-alerts
```
Claude will help you triage alerts and determine appropriate response actions.

## Requirements

- kubectl configured with access to your clusters
- Appropriate RBAC permissions for pod inspection and logs
- Access to monitoring/alerting systems (Prometheus, Grafana, etc.)
- GitHub access (for creating incident issues if integrated)

## Best Practices

1. **Incident Response**: Always start with `/incident-start` to create proper documentation
2. **Communication First**: Update stakeholders early and often during incidents
3. **Document Everything**: Keep timeline updated throughout the incident
4. **Blameless Culture**: Focus on system improvements, not individual blame
5. **Follow Through**: Complete action items from postmortems

## Changelog

### 0.1.0 (2026-01-14)
- Initial release
- Added incident-start command for incident response
- Added postmortem command for post-incident documentation
- Added debug-pod command for Kubernetes troubleshooting
- Added check-alerts command for alert triage
- Added giantswarm-platform skill with comprehensive platform knowledge
- Added mcp-tools-reference skill for MCP tools usage patterns

## Support

For questions or issues with this plugin, contact the SRE team or open an issue in the repository.

## Related Resources

- [Giant Swarm SRE Runbooks](internal-link)
- [Incident Response Procedures](internal-link)
- [On-Call Guide](internal-link)
