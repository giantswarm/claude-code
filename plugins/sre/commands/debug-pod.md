---
description: Debug a Kubernetes pod with comprehensive diagnostics
---

# Debug Kubernetes Pod

Run a comprehensive set of diagnostic commands to troubleshoot a Kubernetes pod issue.

## What This Command Does

Performs systematic debugging of a Kubernetes pod by collecting:
- Pod status and events
- Container logs
- Resource usage
- Network connectivity
- Configuration issues

## Instructions for Claude

When this command is invoked:

1. Ask the user for:
   - Pod name (or pattern to match)
   - Namespace (default to current context if not provided)
   - Specific issue they're seeing (optional, helps focus the investigation)

2. Run the following diagnostic commands in sequence:

   **Basic Pod Information:**
   ```bash
   kubectl get pod <pod-name> -n <namespace> -o wide
   kubectl describe pod <pod-name> -n <namespace>
   ```

   **Pod Events:**
   ```bash
   kubectl get events -n <namespace> --field-selector involvedObject.name=<pod-name> --sort-by='.lastTimestamp'
   ```

   **Container Logs:**
   ```bash
   kubectl logs <pod-name> -n <namespace> --all-containers=true --tail=100
   ```
   If the pod has restarted:
   ```bash
   kubectl logs <pod-name> -n <namespace> --previous --all-containers=true
   ```

   **Resource Usage:**
   ```bash
   kubectl top pod <pod-name> -n <namespace>
   ```

   **Node Information (if pod is scheduled):**
   ```bash
   kubectl get node <node-name> -o wide
   kubectl describe node <node-name>
   ```

3. Analyze the output and look for common issues:
   - **ImagePullBackOff**: Check image name, registry access, credentials
   - **CrashLoopBackOff**: Check logs for application errors, liveness probe failures
   - **Pending**: Check node resources, affinity rules, taints/tolerations
   - **OOMKilled**: Check memory limits and actual usage
   - **Error/Completed**: Check exit code and logs

4. Provide a summary with:
   - Current pod state and what it means
   - Likely root cause based on diagnostics
   - Specific remediation steps
   - Additional commands to run if needed

5. If appropriate, suggest:
   - Checking the deployment/statefulset configuration
   - Reviewing service and ingress configuration
   - Testing network connectivity to dependencies
   - Checking ConfigMaps and Secrets

## Example Usage

User: `/debug-pod my-app-7d8f9c-xyz --namespace production`
Claude: Runs diagnostics, analyzes output, provides root cause and remediation

## Notes

- Always check logs and events first - they contain most useful information
- Consider recent changes (deployments, config updates) as potential causes
- Check resource limits vs actual usage
- Look at the node if pod scheduling issues occur
- Use `kubectl exec` for interactive debugging if needed
