# Upstream Sync Command

You are helping the user sync their GiantSwarm chart/bundle with upstream releases. This workflow manages the relationship: **Application repository (this) -> GiantSwarm Fork (vendir) -> Upstream (origin)**

## Arguments
$ARGUMENTS

## Step-by-Step Workflow

### Phase 1: Discovery

1. **Find and parse vendir configuration**
   - Look for `vendir.yml` in the current directory
   - Extract the GiantSwarm fork URL from the git configuration
   - Identify the branch reference (usually `master` or `main`)
   - Tell the user what you found

2. **Determine the upstream repository**
   - The GiantSwarm fork URL typically follows the pattern: `https://github.com/giantswarm/<project>-upstream`
   - The original upstream is usually at: `https://github.com/<org>/<project>` (without `-upstream` suffix)
   - If you cannot determine the upstream automatically, use AskUserQuestion to ask the user

### Phase 2: Fork Analysis

3. **Clone the GiantSwarm fork to a temporary location**
   - Use the `repositories/` directory (create if needed)
   - Ensure `repositories` is in `.gitignore`
   - Clone with full history (no shallow clone) to analyze commits

4. **Set up remotes in the cloned fork**
   - The clone's `origin` is the GiantSwarm fork
   - Add `upstream` remote pointing to the original upstream repository
   - Fetch from upstream

5. **Check for new upstream commits**
   - Compare the fork's branch with upstream's equivalent branch
   - Count commits that exist in upstream but not in the fork
   - If there are no new commits, inform the user that the app is up to date and stop

### Phase 3: User Decision

6. **If there are new commits, summarize the changes**
   - Show a summary of new commits (commit messages, authors, dates)
   - Highlight any version tags in the new commits
   - List files that were changed
   - Use AskUserQuestion to ask if they want to proceed with the sync

### Phase 4: Sync Process (if user agrees)

7. **Pull upstream changes into the fork**
   - In the cloned fork directory, merge upstream changes
   - If there are merge conflicts:
     - List the conflicting files
     - Explain what each conflict is about
     - Attempt to resolve conflicts caused by GiantSwarm customizations
     - Use AskUserQuestion if you need guidance on how to resolve specific conflicts

8. **Check for version tags**
   - Look for the latest version tag in upstream
   - This will be used for the branch name

9. **Push changes to the GiantSwarm fork**
   - Commit the merge (if there were conflicts resolved)
   - Push to the GiantSwarm fork's branch

### Phase 5: Application Repository Updates

10. **Create a new branch in this repository**
    - Branch name format: `upgrade-<version_slug>` (e.g., `upgrade-v1-2-3`)
    - If no version tag found, use a date-based slug

11. **Run vendir sync**
    - Execute `vendir sync` to pull the updated fork content
    - Check for any vendir sync errors

12. **Handle values.yaml changes**
    - Compare the upstream values.yaml with the local values.yaml
    - values.yaml is NOT managed by vendir, so changes must be handled manually
    - If there are new fields or changes:
      - Show a diff of the changes
      - Use AskUserQuestion to ask how the user wants to handle each change
      - Apply changes as directed or note them for the user
      - Use `helm schema-gen values.yaml > values.schema.json` to regenerate values.schema.json

13. **Verify container images exist in GiantSwarm registry**
    - After updating image tags in values.yaml, verify the images exist in `gsoci.azurecr.io`
    - Use the Azure ACR API to check each image (see Image Verification section below)
    - Show results in a table format:
      - EXISTS = image is available
      - MISSING = image not found (retagger may have failed)
      - ERROR = could not check
    - If any images are MISSING:
      - Warn the user that deployment will fail without these images
      - Use AskUserQuestion to ask if they want to:
        a) Continue anyway (they'll fix images later)
        b) Revert to previous image tags
        c) Stop and fix the retagger first
    - If all images exist, continue to the next step

14. **Update the Changelog**
    - **IMPORTANT: Only add entries to the `[Unreleased]` section**
    - Do NOT create version entries or update version links - CI handles releases
    - Add appropriate subsections (Changed, Added, Fixed, Security, etc.)
    - Summarize the key changes from upstream

15. **Create/Update FORK_CHANGES.md**
    - Document all GiantSwarm customizations over the upstream
    - This file should list:
      - Files that are modified from upstream
      - Files that are added by GiantSwarm
      - Specific changes made and why (if known)
    - Compare fork vs upstream to identify all differences

### Phase 6: Final Steps

16. **Summary and next steps**
    - Show what was done
    - List any manual steps remaining
    - Remind the user to create a PR - CI will handle the release

## Important Rules

- **Always explain clearly** what you are doing at each step
- **Use AskUserQuestion** whenever you need user input or are unsure about something
- **Never create releases** - CI handles version bumps and releases automatically
- **Only modify `[Unreleased]` in CHANGELOG.md** - do not add version entries or links
- **Ensure `repositories` is in `.gitignore`** before cloning anything
- **Be careful with merge conflicts** - GiantSwarm customizations should be preserved
- **Handle values.yaml carefully** - it's not managed by vendir and needs special attention
- **Always verify images exist** before completing the sync

## Image Verification

To check if an image exists in the GiantSwarm Azure Container Registry (`gsoci.azurecr.io`), use this method:

```bash
check_image() {
  IMAGE="$1"
  REPO=$(echo $IMAGE | sed 's|gsoci.azurecr.io/||' | cut -d: -f1)
  TAG=$(echo $IMAGE | cut -d: -f2)
  TOKEN=$(curl -s "https://gsoci.azurecr.io/oauth2/token?service=gsoci.azurecr.io&scope=repository:${REPO}:pull" | jq -r '.access_token')
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
    "https://gsoci.azurecr.io/v2/${REPO}/manifests/${TAG}" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/vnd.docker.distribution.manifest.v2+json,application/vnd.oci.image.manifest.v1+json")
  if [ "$HTTP_CODE" = "200" ]; then
    echo "$IMAGE: EXISTS"
  elif [ "$HTTP_CODE" = "404" ]; then
    echo "$IMAGE: MISSING"
  else
    echo "$IMAGE: ERROR ($HTTP_CODE)"
  fi
}

# Example usage:
check_image "gsoci.azurecr.io/giantswarm/aws-efs-csi-driver:v2.3.0"
```

HTTP response codes:
- `200` = Image exists
- `404` = Image does not exist
- `401` = Authentication failed (token issue)

## Error Handling

- If vendir.yaml/yml is not found, inform the user and stop
- If the fork URL cannot be parsed, ask the user for help
- If merge conflicts cannot be resolved automatically, present them to the user
- If vendir sync fails, show the error and ask how to proceed
- If images are missing, warn user but allow them to continue if they choose

## Example Usage

```
/upgrade-vendir-app
/upgrade-vendir-app check-only  # Just check for updates without syncing
```

## Summary Output Format

After completing Phase 2 (or when running `check-only`), always display a summary in this format:

```markdown
## Summary: Upstream Updates Available

| Status | Details |
|--------|---------|
| **GiantSwarm Fork** | `giantswarm/<project>-upstream` @ <branch> |
| **Upstream** | `<org>/<project>` |
| **Commits behind** | **<N> commits** |
| **Chart changes** | **<N> commits** affecting the Helm chart |
| **Current app version** | `<version>` |
| **Latest upstream version** | `<version>` |
| **Latest helm chart tag** | `<tag>` |

### Key changes in upstream since your fork:

1. **<Version> Release** - Description
2. **<Feature/Fix>** - Description
3. ...

### GiantSwarm Fork customizations:
- List of custom commits/changes in the fork that differ from upstream
```

Begin by looking for the vendir configuration file and explaining what you find.
