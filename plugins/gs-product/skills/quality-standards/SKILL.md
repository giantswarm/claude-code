---
name: quality-standards
description: Quality standards and validation criteria for Giant Swarm issues
---

# Quality Standards

Quality criteria and validation standards for Giant Swarm GitHub issues.

## Quality Levels

### ⭐ Minimum Viable (50-69%)
- Title is not vague
- Body is not empty
- Team label present
- No critical errors

### ⭐⭐ Good (70-89%)
- All required sections present
- Clear acceptance criteria
- Appropriate labels
- Proper formatting
- Links to related work

### ⭐⭐⭐ Excellent (90-100%)
- Complete context with background
- Measurable, specific outcomes
- Connected to strategy (epic/rock)
- Examples or diagrams
- Anticipates questions
- No improvements needed

## The 3 C's Test

Every quality issue must be:

1. **CLEAR**
   - Specific, not vague
   - Unambiguous language
   - Well-explained context
   - Concrete examples where helpful

2. **COMPLETE**
   - All required sections present
   - Sufficient detail to act on
   - Proper links and references
   - No placeholder text

3. **CONNECTED**
   - Linked to related work
   - Epic connection (for stories/tasks)
   - Team ownership clear
   - Stakeholders identified

## Universal Requirements

**All issue types must have:**
- Non-vague, descriptive title
- Non-empty body
- Exactly ONE team label
- Proper markdown formatting
- No sensitive data (credentials, tokens)

## Type-Specific Requirements

**Epic:**
- Motivation/strategic context
- Scope (in/out)
- Measurable outcomes
- Verifiable acceptance criteria

**Story:**
- User problem (motivation)
- Implementation steps (todo)
- User benefit (outcome)
- User-observable acceptance criteria
- Link to parent epic

**Task:**
- What needs to be done
- Clear done state
- Context if not obvious

**Bug:**
- Expected vs actual behavior
- Reproduction steps
- Error logs/evidence
- Impact and affected systems

**Postmortem:**
- What happened (timeline)
- Root cause
- How it was fixed
- Prevention measures with follow-up tasks

## Validation Priorities

**Critical (must fix):**
- Missing team label
- Empty body
- No acceptance criteria (epics/stories)
- Vague title

**Important (should fix):**
- Missing parent epic link (stories/tasks)
- Vague acceptance criteria
- Missing kind label
- Poor formatting

**Nice-to-have (suggest):**
- Additional context
- More specific wording
- Additional labels
- Technical diagrams

## Common Failure Patterns

❌ **Vague titles**
- "Fix issue" → Specify component and problem
- "Update docs" → Specify what docs and what update

❌ **Empty/minimal bodies**
- Title-only → Add context and details
- "TODO" → Provide actual information

❌ **Unmeasurable AC**
- "Done when better" → Define specific, verifiable criteria
- "Documentation updated" → Specify what docs, what sections

❌ **Orphaned stories**
- No parent epic → Link with "Towards #XXX"

❌ **No team ownership**
- Missing team label → Add exactly ONE team

## Title Quality Checklist

✅ Good title:
- Specific: Names components, actions, outcomes
- Right length: 20-120 characters
- Follows type pattern: Epic starts with "[EPIC]", etc.
- Includes identifiers: Cluster names, components when relevant

❌ Bad title:
- Too vague: "Fix bug", "Improve platform"
- Too long: > 120 characters
- Doesn't follow patterns
- Missing context

## Acceptance Criteria Quality

✅ Good AC:
- Specific and measurable
- Verifiable when complete
- Clear done state
- No ambiguity

❌ Bad AC:
- "Better performance" → Define metrics
- "Documentation updated" → Specify which docs
- "Works well" → Define what "well" means

## Feedback Format

When providing validation feedback:

1. **Start with strengths** (what's good)
2. **Prioritize critical issues** (must fix)
3. **Be specific** (show examples)
4. **Offer to help** (not just critique)
5. **Focus on impact** (why it matters)

## Target Quality

- **Epics & Stories**: Aim for ⭐⭐⭐ (Excellent)
- **Tasks & Bugs**: Aim for ⭐⭐ (Good) minimum
- **All types**: Never below ⭐ (Minimum Viable)

## Based On

Quality patterns from 1,710 analyzed Giant Swarm issues:
- 94% of epics have motivation section
- 87% of epics have acceptance criteria
- 91% of stories have motivation
- 88% of stories have acceptance criteria
- 100% of active issues have team label
