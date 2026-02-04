---
title: <Title>
description: <One-line description of what problem this solves>
last_review_date: <YYYY-MM-DD>
layout: runbook
owner:
  - https://github.com/orgs/giantswarm/teams/<team-name>
toc_hide: true
runbook:
  variables:
    - name: INSTALLATION
      description: Installation name
    - name: CLUSTER
      description: Cluster name
---

## Overview

Brief description of the issue/scenario this runbook addresses.

## Symptoms

- Symptom 1
- Symptom 2

## Diagnosis

Steps to diagnose the issue.

{{< highlight shell >}}
kubectl --context $WC_CONTEXT \
  get pods \
  --namespace <namespace>
{{< /highlight >}}

## Resolution

Steps to resolve the issue.

## Related

- [Related Runbook]({{< relref "/docs/support-and-ops/runbooks/related" >}})
