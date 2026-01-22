---
description: Create a high-quality GitHub issue following Giant Swarm patterns
---

# Create Issue

Create a high-quality GitHub issue following Giant Swarm's established patterns and standards.

## What This Command Does

This command guides you through creating a properly structured GitHub issue based on Giant Swarm's data-driven patterns from 1,710 analyzed issues. It ensures all required sections are present, acceptance criteria are measurable, and appropriate labels are suggested.

## Instructions for Claude

When the user invokes this command, follow these steps:

### 1. Determine Issue Type

Ask clarifying questions to identify the appropriate issue type:
- **Strategic, multi-month initiative?** → Epic
- **User-facing value delivery?** → Story
- **Something broken?** → Bug
- **Incident documentation?** → Postmortem
- **Research/exploration?** → Discovery
- **Customer request?** → Request
- **Specific action item?** → Task

Reference `.claude-code/issue-types.md` for the complete decision tree.

If the user specifies a type (e.g., `/create-issue epic`), validate it's appropriate or suggest a better fit.

### 2. Load the Template

Read the appropriate template from `.claude-code/templates/{type}.md`

### 3. Gather Information

Ask focused, conversational questions to fill required sections:
- Don't overwhelm with too many questions at once
- Reference the template for required vs optional sections
- Adapt questions based on user's responses
- Fill in sections progressively

### 4. Generate the Issue

Create a properly formatted issue with:
- **Title**: Following the naming pattern for that issue type
- **Body**: All required sections filled with proper markdown
- **Structure**: Using `##` for sections, proper lists, code blocks
- **Links**: Formatted correctly (`#12345` for issues, `[text](URL)` for external)

### 5. Suggest Labels

Reference `.claude-code/labels.md` and suggest:

**Required:**
- ONE `team/<name>` label (ask user if unclear)

**Recommended:**
- `kind/<type>` based on issue type

**Optional (based on content):**
- `provider/<name>` if AWS, Azure, vSphere, Cloud Director mentioned
- `customer/<name>` if customer mentioned
- `installation/<name>` if cluster/installation mentioned
- `impact/<level>` for bugs (high/medium/low)
- `area/kaas` or `area/platform` when applicable

### 6. Validate Quality

Check against `.claude-code/validation-checklist.md`:
- All required sections present
- Title is specific (not vague)
- Acceptance criteria are measurable
- Parent epic linked (for stories/tasks)
- No placeholder text ("TODO", "TBD")
- Aim for ⭐⭐ (Good) or ⭐⭐⭐ (Excellent) quality

### 7. Present to User

Show the complete issue in this format:

```markdown
# Issue Preview

**Title**: [Generated title]

**Body**:
[Full markdown body with all sections]

**Suggested Labels**:
- team/[team-name]
- kind/[type]
- [additional labels]

**Quality Score**: ⭐⭐⭐ Excellent

Would you like to make any changes?
```

## Example Usage

**User request:**
```
/create-issue epic
```

**Your response:**
```
I'll help you create an epic. Let me ask a few questions:

1. What strategic problem are we solving with this epic?
```

**After gathering info:**
```
# Issue Preview

**Title**: [EPIC] Kubernetes v1.32 Support Across All Clusters

**Body**:
## Motivation
[User's content]
...

**Suggested Labels**:
- team/tenet
- kind/epic
- area/platform

Would you like any changes?
```

## Key Reminders

- Be specific, not vague (titles and descriptions)
- Every issue MUST have a body (no title-only issues)
- Acceptance criteria must be measurable
- Stories must link to parent epics: "Towards #XXX" or "Parent Epic: #XXX"
- Follow the "3 C's": Clear, Complete, Connected

## Available Issue Types

- **epic** - Strategic initiatives (weeks-months)
- **story** - User-facing value (days-weeks)
- **task** - Specific actions (hours-days)
- **bug** - Defects and errors
- **postmortem** - Incident documentation
- **discovery** - Research/spikes
- **request** - Customer asks
- **feature** - New capabilities
- **rock** - Quarterly bets
- **recurring** - Scheduled tasks
- **operational** - Platform health
- **note** - Reference info
- **experiment** - POCs/validation

## Notes

- Templates are in `.claude-code/templates/`
- Decision tree is in `.claude-code/issue-types.md`
- Label reference is in `.claude-code/labels.md`
- Validation rules are in `.claude-code/validation-checklist.md`
- Based on analysis of 1,710 real Giant Swarm issues
