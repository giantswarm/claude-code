# Giant Swarm Issue Creation Guidelines for Claude Code

## Purpose

This guide helps you assist users in creating high-quality GitHub issues following Giant Swarm's established patterns, based on analysis of 1,710 real issues across 11 teams.

## Core Principles

1. **Every issue MUST have a body** - Empty or minimal bodies are unacceptable
2. **One team label required** - Exactly ONE `team/<name>` label per issue
3. **Clear acceptance criteria** - Verifiable, measurable completion criteria
4. **Link the chain** - Stories link to epics, tasks link to stories
5. **Be specific, not vague** - "Update cert-manager docs with IRSA setup" not "Update docs"

## When User Asks to Create an Issue

### Step 1: Determine Issue Type
Ask clarifying questions to determine the appropriate issue type:
- **Strategic, multi-month initiative?** → Epic
- **User-facing value delivery?** → Story
- **Something broken?** → Bug
- **Incident documentation?** → Postmortem
- **Research/exploration?** → Discovery/Spike
- **Customer request?** → Request
- **Specific action item?** → Task

Reference `issue-types.md` for the complete decision tree.

### Step 2: Load the Appropriate Template
Read the template from `.claude-code/templates/{type}.md`

### Step 3: Ask Clarifying Questions
Based on the issue type, gather information for required sections:

**For Epic:**
- What strategic problem are we solving? (Motivation)
- What's in scope and out of scope?
- What are the measurable outcomes?
- What are the acceptance criteria?

**For Story:**
- What user problem does this solve? (Motivation)
- What needs to be done? (Todo steps)
- What's the user benefit? (Outcome)
- How do we know it's done? (Acceptance Criteria)

**For Task:**
- Brief context (if needed)
- What specific actions need to be taken?
- What's the done state?

**For Bug:**
- What's expected vs actual behavior?
- How to reproduce?
- What clusters/environments are affected?
- What are the error logs?

### Step 4: Generate the Issue Body
Fill in the template with the user's information, ensuring:
- All required sections are present
- Language is clear and professional
- Links use proper syntax (`#12345` for issues, full URLs for external)
- Lists use proper markdown (`-` for bullets, `1.` for numbered, `- [ ]` for checkboxes)

### Step 5: Suggest Labels
Based on the content, suggest appropriate labels:
- **Required**: `team/<name>` (ask user which team if unclear)
- **Recommended**: `kind/<type>`, `area/kaas` or `area/platform`
- **Optional**: `provider/<provider>`, `customer/<name>`, `impact/<level>`, `workstream/<name>`

Reference `labels.md` for the complete label taxonomy.

### Step 6: Validate Before Presenting
Use the checklist in `validation-checklist.md` to ensure quality:
- Title is specific and descriptive (not vague)
- All required sections present
- Acceptance criteria are clear and measurable
- Parent epic linked (for stories/tasks)
- No placeholder text ("TODO", "TBD")
- Proper markdown formatting

### Step 7: Present to User
Show the complete issue with:
- **Title**
- **Body** (formatted markdown)
- **Suggested labels**
- Brief explanation of your choices

Ask if they want to make any changes before submitting.

## When User Asks to Validate an Issue

1. Determine the issue type from title/content
2. Check all required sections are present
3. Verify labels:
   - Exactly ONE `team/<name>` label
   - `kind/<type>` label present
   - Additional labels appropriate to content
4. Validate acceptance criteria:
   - Specific and measurable
   - Not vague ("better", "improved")
   - Verifiable when complete
5. Check title quality:
   - Not too vague (< 20 chars is a red flag)
   - Not too long (> 120 chars)
   - Includes key identifiers when relevant
6. Verify links:
   - Parent epic referenced (for stories/tasks)
   - Related issues linked
   - External links use full URLs

Provide feedback with specific improvements needed.

## When User Asks for Label Suggestions

1. Read the issue content
2. Identify:
   - Which team should own this (if `team/` label missing)
   - Issue type (epic, story, task, bug, etc.)
   - Product area (kaas vs platform)
   - Cloud provider mentioned (aws, azure, vsphere, cloud-director)
   - Customer names mentioned
   - Impact level (high, medium, low)
3. Suggest labels in order of importance:
   - Required first
   - Recommended second
   - Optional last

Reference `labels.md` for all available labels.

## Title Formatting Patterns

Follow these patterns based on issue type:

| Type | Pattern | Example |
|------|---------|---------|
| Epic | `[EPIC]: <Strategic outcome>` | `[EPIC] Kubernetes v1.31 Support` |
| Story | `<Action that creates value>` | `Enable self-service troubleshooting via enhanced logs` |
| Task | `<Action> <specific thing>` | `Add SCIM references to PagerDuty docs` |
| Bug | `<Component>: <What's broken>` | `cilium-app: Pods stuck in CrashLoopBackOff` |
| Postmortem | `<Cluster>: <What happened>` | `gazelle/operations: Ingress unavailable` |
| Discovery | `Spike: <Question>` | `Spike: Evaluate Cilium for cost visibility` |

## Markdown Conventions

- Use `##` for main sections
- Use `###` for subsections
- Use `-` for unordered lists
- Use `1.` for ordered lists
- Use `- [ ]` for checkboxes
- Use `` `code` `` for inline code
- Use triple backticks for code blocks with language: ` ```yaml `
- Internal issues: `#12345`
- External links: `[Link text](URL)`
- Bold for **important terms**
- Italic for *emphasis*

## Common Anti-Patterns to Avoid

1. **Vague titles**: "Fix issue", "Update docs", "Improve platform"
2. **Empty bodies**: Title-only issues with no context
3. **No acceptance criteria**: "Done when better" instead of specific checklist
4. **Orphaned stories**: Stories with no parent epic reference
5. **Missing team label**: Every issue needs exactly ONE team
6. **No context**: Assuming knowledge instead of explaining
7. **Generic scope**: "Everything" instead of specific boundaries

## Quality Standards

Every issue should pass the "3 C's" test:

1. **CLEAR**: Specific, unambiguous, well-explained
2. **COMPLETE**: All required sections, sufficient detail, proper links
3. **CONNECTED**: Linked to related work, epic, team ownership clear

## Quick Reference Files

- `issue-types.md` - Decision tree for choosing issue type
- `templates/*.md` - Templates for each issue type
- `labels.md` - Complete label taxonomy
- `validation-checklist.md` - Pre-submit quality checklist
- `../GUIDE.md` - Full guide with examples (for user reference)
- `../CHEATSHEET.md` - One-page quick reference (for user reference)

## Notes

- Based on analysis of 1,710 Giant Swarm roadmap issues (2023-2025)
- Covers 16 issue types across 11 teams
- 200+ labels documented
- Production-ready patterns, not theoretical best practices
