# Weekly Customer Update

Generate a overview over issues for the given customer repository over a configurable timeframe.

## Input

The arguments are: $ARGUMENTS

Parse the arguments as follows:
- The **first argument** is the customer repository (required).
- The **second argument** is the timeframe (optional), e.g. `2w`, `4w`, `1m`, `3m`, `6m`. The format is `<number><unit>` where unit is `w` for weeks or `m` for months. **Default: `1w`** (1 week).

Examples:
- `/customer-update straumann` → repo=`giantswarm/straumann`, timeframe=1 week
- `/customer-update straumann 2w` → repo=`giantswarm/straumann`, timeframe=2 weeks
- `/customer-update straumann 3m` → repo=`giantswarm/straumann`, timeframe=3 months
- `/customer-update giantswarm/acme 6w` → repo=`giantswarm/acme`, timeframe=6 weeks

If the repo argument is a full GitHub URL (e.g. `https://github.com/org/repo`), extract the `owner/repo` from it. If it's just `owner/repo`, use it directly. If it's just a repository name, use `giantswarm/repo`.

## Timeframe Calculations

Given the timeframe T (default 1 week), compute these date boundaries relative to today:

| Boundary | Calculation | Used for |
|----------|------------|----------|
| **recent_cutoff** | T ago | "Recently Closed" and "Active This Period" sections |
| **comment_cutoff** | max(T, 4 weeks) ago | How far back to fetch comments |
| **stale_threshold** | max(T × 2, 2 months) ago | Boundary between "Recently Active" and "Stale" |

For the section headers, adapt the labels to the timeframe:
- 1w → "Active This Week", "Recently Closed (last 7 days)"
- 2w → "Active in Last 2 Weeks", "Recently Closed (last 2 weeks)"
- 1m → "Active This Month", "Recently Closed (last month)"
- 3m → "Active in Last 3 Months", "Recently Closed (last 3 months)"
- etc.

## Instructions

### Step 1: Find the repository

Use the GitHub MCP tools to list issues. If the repository is not found, search for repositories matching the name under the same org (the customer repo name might differ from what was given - e.g. it could be prefixed with the org name or have a different naming convention). If multiple candidate repos are found, pick the one that looks like the main customer project/issue tracker (not configs, not mirrors, not management-clusters).

### Step 2: Fetch all issues

Fetch in parallel:
- All **open** issues, ordered by `UPDATED_AT DESC`
- All **closed** issues updated since **recent_cutoff** (use `since` parameter with ISO 8601 timestamp)

### Step 3: Get comments on active issues

For any issue updated since **comment_cutoff**, fetch comments in parallel using `get_comments`. This provides the context needed to summarize what changed. Skip fetching comments for issues that haven't been updated since the comment cutoff (their staleness speaks for itself).

### Step 4: Generate the update

Write a structured update using this format (adapt section titles to the timeframe as described above):

```
## [Customer Name] Update (YYYY-MM-DD) — [timeframe label, e.g. "Last 2 Weeks", "Last 3 Months"]

### Overview
[Total open issues], [closed in period]. [One sentence summary of overall activity level.]

### Recently Closed ([period description])
[Table or list of issues closed in this period with links and brief summary of resolution]

### Active [period description]
[Issues with activity in the reporting period. For each issue include:]
- **[Issue Title](link)** (#number) - [status/label if relevant]
  - [What changed in this period based on comments]
  - [Current blocker or next step]

### Recently Active ([period] to [stale_threshold])
[Issues updated between stale_threshold and recent_cutoff. Briefer treatment.]

### Stale Issues (no activity since [stale_threshold date])
[Table format with columns: Issue (linked), Last Activity, Topic, Notes]

### Observations
[Numbered list of 3-6 actionable observations such as:]
- Unanswered customer questions
- Issues missing team ownership
- Approaching deadlines
- Items that could be closed
- Patterns (e.g. cluster of stale cost-related issues)
- Anything else notable
```

## Rules

- Always include the **issue title as a clickable link** to the GitHub issue
- Categorize staleness relative to today's date
- When an issue has 0 comments and is old, flag it prominently (especially if opened by a customer/external user)
- Mention relevant people by their GitHub handle when summarizing comments
- Keep individual issue summaries concise - focus on what changed and what's next
- If there are no issues in a category, omit that section
- Do NOT fabricate information - only report what's in the issues and comments
