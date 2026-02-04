---
title: <Descriptive Title>
linkTitle: <Short Title>
description: <One-line description of what problem this solves>
weight: 50
last_review_date: <YYYY-MM-DD>
owner:
  - https://github.com/orgs/giantswarm/teams/<team-name>
user_questions:
  - <Question this runbook answers>
variables:
  - name: INSTALLATION
    description: The installation name
  - name: CLUSTER
    description: The workload cluster name
---

## Overview

Brief description of the issue or scenario this runbook addresses.

## Symptoms

- Symptom or alert that triggers this runbook
- Additional symptoms to look for

## Diagnosis

Steps to diagnose and understand the issue.

{{< highlight shell >}}
kubectl --context $WC_CONTEXT \
  get pods \
  --namespace <namespace> \
  --selector <label-selector>
{{< /highlight >}}

## Resolution

Steps to resolve the issue.

### Option 1: <First approach>

Description of when to use this approach.

{{< highlight shell >}}
kubectl --context $WC_CONTEXT \
  <command>
{{< /highlight >}}

### Option 2: <Alternative approach>

Description of when to use this alternative.

## Verification

How to verify the issue is resolved.

{{< highlight shell >}}
kubectl --context $WC_CONTEXT \
  get <resource> \
  --namespace <namespace>
{{< /highlight >}}

## Related

- [Related Runbook]({{< relref "/docs/support-and-ops/runbooks/related-runbook" >}})
- [External Documentation](https://example.com)
