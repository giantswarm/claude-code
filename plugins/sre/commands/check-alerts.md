---
description: Investigate and triage active alerts
---

# Check and Triage Alerts

Systematically investigate active alerts and determine appropriate actions.

## What This Command Does

Helps triage and investigate alerts by:
- Gathering context about the alert
- Checking related metrics and logs
- Determining severity and urgency
- Suggesting investigation steps

## Instructions for Claude

When this command is invoked:

1. Ask the user:
   - Which alert is firing (alert name or description)
   - Which service/component is affected
   - How long the alert has been firing
   - Any recent changes to the system

2. Guide the investigation with this framework:

   **A. Understand the Alert**
   - What is the alert measuring?
   - What threshold was crossed?
   - Is this a symptom or root cause alert?
   - What is the expected impact on users/services?

   **B. Assess Current State**
   - Check current values of the alerting metric
   - Look at metric trends (last 1h, 6h, 24h)
   - Check if related services are affected
   - Verify if users are reporting issues

   **C. Determine Severity**
   - Is service degraded or down?
   - How many users/customers affected?
   - Is this getting worse or stabilizing?
   - Suggest severity level: SEV1 (critical), SEV2 (major), SEV3 (minor)

   **D. Investigation Steps**
   Suggest relevant commands based on alert type:

   For **High Error Rate** alerts:
   ```bash
   # Check application logs for errors
   kubectl logs -l app=<service> --tail=100 -n <namespace>

   # Check recent deployments
   kubectl rollout history deployment/<name> -n <namespace>
   ```

   For **High Latency** alerts:
   ```bash
   # Check resource usage
   kubectl top pods -n <namespace>

   # Check for network issues
   kubectl get pods -n <namespace> -o wide
   ```

   For **Pod Not Ready** alerts:
   ```bash
   # Check pod status
   kubectl get pods -n <namespace>
   kubectl describe pod <pod-name> -n <namespace>
   ```

   For **High CPU/Memory** alerts:
   ```bash
   # Check resource usage
   kubectl top pods -n <namespace>
   kubectl top nodes
   ```

3. Provide recommended actions:
   - **Immediate**: Actions to take right now to mitigate
   - **Short-term**: Investigation steps to understand root cause
   - **Communication**: Who to notify and what to say

4. Help create an action plan:
   ```markdown
   ## Alert Triage Summary

   **Alert**: [Name]
   **Status**: [Firing/Resolved]
   **Severity**: [SEV1/2/3]
   **Started**: [Time]

   **Current Impact**:
   - [Description]

   **Immediate Actions**:
   - [ ] [Action 1]
   - [ ] [Action 2]

   **Investigation**:
   - [ ] [Step 1]
   - [ ] [Step 2]

   **Decision**: [Escalate to incident / Continue monitoring / Resolve]
   ```

## Example Usage

User: `/check-alerts`
Claude: Asks about the alert, guides investigation, suggests actions

## Notes

- Not all alerts require immediate action - assess severity first
- Check for related alerts that might indicate a broader issue
- Document your findings even if you resolve quickly
- Consider if the alert threshold needs adjustment
- Escalate to incident if user impact is significant
