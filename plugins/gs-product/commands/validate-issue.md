---
description: Validate an issue against Giant Swarm quality standards
---

# Validate Issue

Validate a GitHub issue against Giant Swarm's quality standards and provide scored feedback with specific improvement suggestions.

## What This Command Does

This command analyzes an existing issue (or draft issue) and validates it against Giant Swarm's quality standards, checking for completeness, clarity, proper structure, and appropriate labeling. It provides a quality score and specific, actionable feedback.

## Instructions for Claude

When the user invokes this command, follow these steps:

### 1. Get Issue Content

Prompt the user:
```
Please provide the issue you'd like me to validate. You can either:
1. Paste the title and body
2. Provide a GitHub issue URL or number
```

### 2. Identify Issue Type

Determine the issue type from the title and content:
- Starts with "[EPIC]" or "Epic:" → Epic
- Starts with "Spike:" or "Investigation:" → Discovery
- Component name + problem → Bug
- User-focused benefit → Story
- Specific action → Task

Reference `.claude-code/issue-types.md` for patterns.

### 3. Run Validation Checks

Reference `.claude-code/validation-checklist.md` and check:

**Universal Checks (all types):**
- Title quality (specific, not vague, appropriate length)
- Body is not empty
- Labels present (especially team label)
- Formatting is correct
- Links are properly formatted
- No placeholder text

**Type-Specific Checks:**
- All required sections present for that type
- Acceptance criteria appropriate
- Parent epic linked (for stories/tasks)
- Special format requirements met

**Anti-Pattern Detection:**
- Vague titles ("Fix issue", "Update docs")
- Empty or minimal bodies
- Missing acceptance criteria
- Orphaned stories (no parent epic)
- No team label

### 4. Score the Issue

Assign a quality score:

- **⭐ Minimum Viable (50-69%)**: Needs significant improvement
- **⭐⭐ Good (70-89%)**: Meets standards
- **⭐⭐⭐ Excellent (90-100%)**: Exemplary quality

### 5. Provide Structured Feedback

Use this format:

```markdown
## Validation Results

**Issue Type**: [Identified type]
**Quality Score**: [Stars] [Level]

### ✅ Strengths
- [What's already good]
- [Positive aspects]
- [Well-executed elements]

### ⚠️ Needs Improvement
1. **[Category]**: [Specific problem]
   - Fix: [How to address it]
   - Example: [Show what it should be]

2. **[Category]**: [Specific problem]
   - Fix: [How to address it]

### 💡 Suggestions (Optional)
- [Nice-to-have improvements]
- [Additional context that would help]

Would you like me to help refine any of these sections?
```

### 6. Prioritize Feedback

**Critical (must fix):**
- Missing team label
- Empty body
- No acceptance criteria (for epics/stories)
- Vague title

**Important (should fix):**
- Missing parent epic link (for stories/tasks)
- Vague acceptance criteria
- Poor formatting

**Nice-to-have (suggest):**
- Additional context
- More specific wording

### 7. Be Constructive

- Start with what's good (strengths first)
- Be specific about improvements needed
- Offer to help make changes
- Focus on high-impact issues first

## Example Usage

**User:**
```
/validate-issue

Title: Fix the bug
Body: It's broken
```

**Your response:**
```markdown
## Validation Results

**Issue Type**: Bug (inferred from title)
**Quality Score**: ⭐ Minimum Viable (55%)

### ✅ Strengths
- Issue was created (that's a start!)

### ⚠️ Needs Improvement
1. **Vague title**: "Fix the bug" doesn't specify what's broken
   - Fix: Include component and specific issue
   - Example: "cilium-app: Pods stuck in CrashLoopBackOff on AWS clusters"

2. **Missing required sections**: Bug reports need:
   - Description (expected vs actual behavior)
   - Reproduction steps
   - Error logs/evidence
   - Affected clusters/installations

3. **No labels**: Need at minimum a `team/` label

### 💡 Suggestions
Use the bug template from `.claude-code/templates/bug.md` to ensure all required sections are included.

Would you like me to help you create a proper bug report?
```

## Validation Checklist Reference

The complete validation checklist is in `.claude-code/validation-checklist.md`

Key items to check:
- Title: Specific, appropriate length, follows patterns
- Body: Not empty, required sections present
- Acceptance criteria: Measurable, verifiable
- Labels: Team label required, kind label recommended
- Links: Parent epic for stories/tasks, proper formatting
- Quality: Meets "3 C's" - Clear, Complete, Connected

## Notes

- Be constructive, not critical
- Highlight what's good before suggesting improvements
- Be specific about what needs to change
- Offer to help make improvements
- Focus on clarity - will someone 6 months from now understand this?
