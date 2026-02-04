---
description: Migrate an ops-recipe to a runbook following Giant Swarm standards
---

Migrate the ops-recipe at the given URL or path to a runbook.

## Prerequisites

- Working in the `giantswarm/giantswarm` repository
- Branch is up to date with `main`

## Arguments

The ops-recipe URL or path to migrate, e.g.:
- `https://intranet.giantswarm.io/docs/support-and-ops/ops-recipes/cilium-troubleshooting/`
- `content/docs/support-and-ops/ops-recipes/cilium-troubleshooting.md`

## Instructions

### Step 1: Parse Input and Locate Source

1. Extract the ops-recipe path from the provided URL or path argument.
2. Locate the source markdown file in `content/docs/support-and-ops/ops-recipes/`.
3. If file not found, inform user and stop.

### Step 2: Check Alert References

1. Search `data/alerts.yaml` for the ops-recipe path.
2. Note any alerts that reference this ops-recipe.
3. Inform user: "This ops-recipe is referenced by X alerts that will need updating after migration."

### Step 3: Check for Existing Runbook

1. Search `content/docs/support-and-ops/runbooks/` for similar content or title.
2. If overlap found, ask user:
   - (a) Merge into existing runbook?
   - (b) Create new runbook anyway?
   - (c) Cancel migration?

### Step 4: Read and Understand Content

1. Read the full ops-recipe content.
2. Identify:
   - Main purpose and problem being solved
   - Key commands and code snippets
   - kubectl commands that need context flags
   - Variables that should be configurable (installation, cluster name, namespace etc.)

### Step 5: Create New Runbook

1. Derive a meaningful folder name from the title (lowercase, hyphens, not too long).
2. Create directory: `content/docs/support-and-ops/runbooks/<folder-name>/`
3. Create `index.md` with front matter (note: `layout: runbook` and `toc_hide: true` are required):

```yaml
---
title: <Descriptive Title>
description: <One-line description>
last_review_date: <today's date YYYY-MM-DD>
layout: runbook
owner:
  - https://github.com/orgs/giantswarm/teams/<team>
toc_hide: true
---
```

4. If kubectl commands are present, add variables under the `runbook` key:

```yaml
runbook:
  variables:
    - name: INSTALLATION
      description: Installation name
    - name: CLUSTER
      description: Cluster name
```

### Step 6: Migrate Content

1. Copy the content from ops-recipe.
2. Preserve all information accurately.

### Step 7: Improve Code Blocks

For each code block:

1. Convert fenced code blocks to `highlight` shortcode:
   ```
   {{< highlight shell >}}
   command here
   {{< /highlight >}}
   ```

2. For kubectl commands:
   - Ensure `--context` is the FIRST flag after `kubectl`.
   - Use `$MC_CONTEXT` for management cluster operations.
   - Use `$WC_CONTEXT` for workload cluster operations.

3. Wrap long commands with backslashes for readability:
   ```shell
   kubectl --context $WC_CONTEXT \
     get pods \
     --namespace kube-system \
     --selector app=coredns
   ```

4. Create one code block per command where practical.

### Step 8: Update Internal References

1. Search the repository for `relref` links pointing to the old ops-recipe path.
2. Update them to point to the new runbook location.
3. Also search for plain markdown links to the ops-recipe URL.

### Step 9: Verify Build

1. Run: `./run-dev-server-with-merge.sh` with a timeout of 60 seconds
2. Wait for "Press Ctrl+C to stop" (success) or errors.
3. Fix any `REF_NOT_FOUND` errors by correcting the relref paths.
### Step 10: Ask About Pull Request

Ask user: "Would you like me to create a pull request for this migration?"

If yes:
1. Create feature branch: `migrate-runbook-<folder-name>`
2. Stage and commit changes with message: `docs: Migrate <ops-recipe-name> to runbook`
3. Push branch.
4. Create PR using `gh pr create`:
   - Title: `docs: Migrate <ops-recipe-name> to runbook`
   - Body: Include migration summary, link to old ops-recipe, and checklist
   - Reviewers: `giantswarm/sig-docs`
5. Provide PR link to user.

### Step 11: Report Alert Updates Needed

If alerts were found in Step 2:
1. List each alert that needs updating.
2. Provide the path in `data/alerts.yaml` where each reference was found.
3. Explain that PRs are needed in:
   - `giantswarm/prometheus-rules`
   - `giantswarm/sloth-rules`

Ask: "Would you like me to create PRs to update the alerting rules?"

### Step 12: Update Alerting Rules (if requested)

For each affected repo (`prometheus-rules` and/or `sloth-rules`):
1. Clone to a temporary directory outside the current workspace.
2. Create branch: `update-runbook-link-<folder-name>`
3. Find and replace old ops-recipe URL with new runbook URL.
4. Search for unit tests that may reference the URL (especially in `prometheus-rules`).
5. Commit changes with message referencing the content migration PR.
6. Create PR linking to the content migration PR.
7. Provide PR link to user.

## Notes

- Always verify the build passes before creating a PR.
- Keep PRs focused on one runbook at a time for easier review.
- The `sig-docs` team should review all runbook content changes.
- Alert rule PRs can be created after the content PR is merged.
