# Issue Validation Checklist

Use this checklist to validate issue quality before presenting to the user.

## Universal Checks (All Issue Types)

### Title Quality
- [ ] Title is specific and descriptive (not vague)
- [ ] Title is not too short (< 20 characters is a red flag)
- [ ] Title is not too long (> 120 characters should be shortened)
- [ ] Title follows the pattern for its issue type
- [ ] Title includes key identifiers when relevant (cluster, component, customer)
- [ ] Title uses sentence case (not ALL CAPS except acronyms)

### Body Content
- [ ] Body is not empty (title-only issues are unacceptable)
- [ ] All required sections for issue type are present
- [ ] No placeholder text ("TODO", "TBD", "Fill in later")
- [ ] Language is clear and professional
- [ ] Technical terminology is used appropriately
- [ ] No typos in common technical terms

### Labels
- [ ] Exactly ONE `team/<name>` label present
- [ ] `kind/<type>` label suggested
- [ ] Additional labels appropriate to content
- [ ] Labels are from the approved list (check `labels.md`)

### Links and References
- [ ] Internal issues referenced with `#12345` syntax
- [ ] External links use full URLs with `[text](URL)` format
- [ ] Parent epic linked (for stories/tasks): "Towards #XXX" or "Parent Epic: #XXX"
- [ ] Related issues referenced when applicable
- [ ] No broken links

### Formatting
- [ ] Headings use `##` for main sections, `###` for subsections
- [ ] Lists use proper markdown (`-` for bullets, `1.` for numbered, `- [ ]` for checkboxes)
- [ ] Code blocks use triple backticks with language specified
- [ ] Inline code uses single backticks
- [ ] No formatting errors

### Security
- [ ] No credentials, tokens, or secrets in issue
- [ ] No sensitive customer data exposed
- [ ] If security-related, appropriate handling indicated

---

## Issue Type-Specific Checks

### Epic 🎯

- [ ] Has "## Motivation" or "## Summary" section explaining strategic context
- [ ] Has "## Scope" section with "In Scope" and "Out of Scope" clearly defined
- [ ] Has "## Outcome" or "## Goals" section with measurable outcomes
- [ ] Has "## Acceptance Criteria" section with verifiable criteria
- [ ] Acceptance criteria are measurable and specific
- [ ] Business value is clearly articulated
- [ ] Timeline or duration indicated (in optional sections)
- [ ] Dependencies identified (optional but recommended)
- [ ] Title starts with "[EPIC]:" or "Epic:"

**Quality Test**:
- Can someone unfamiliar understand the strategic value?
- Is it clear what's in scope vs out of scope?
- Will we know when this epic is done?

---

### Story 📑

- [ ] Has "## Motivation" section explaining user problem
- [ ] Has "## Todo" section with implementation steps
- [ ] Has "## Outcome" section describing user benefit
- [ ] Has "## Acceptance Criteria" section with user-observable criteria
- [ ] User persona or beneficiary identified
- [ ] Problem being solved is clear
- [ ] Value delivered is articulated
- [ ] Linked to parent epic: "Towards #XXX" or "Parent Epic: #XXX"

**Quality Test**:
- Is the user problem clear?
- Will users notice when this is done?
- Is the value proposition obvious?

---

### Task 🗒️

- [ ] Has clear description of what needs to be done
- [ ] Has "## Todo" section or checklist of actions
- [ ] Has "## Done When" or clear completion state
- [ ] Context provided if the task isn't self-explanatory
- [ ] Linked to parent issue (story or epic) when applicable

**Quality Test**:
- Can someone start this task without asking questions?
- Is the done state unambiguous?

---

### Bug 🐞

- [ ] Has "## Description" with expected vs actual behavior
- [ ] Has "## Reproduction Steps" with numbered steps
- [ ] Has "## Error Logs" or "## Evidence" section
- [ ] Impact and severity described
- [ ] Affected clusters/installations listed
- [ ] Environment details provided (provider, version, component)
- [ ] Error messages or logs included

**Quality Test**:
- Can someone reproduce this bug?
- Is the impact clear?
- Are there enough details to start debugging?

---

### Postmortem 🚧

- [ ] Has "## Current Status / tl;dr" summarizing the incident
- [ ] Has "## Description" or "## What Happened" with timeline
- [ ] Has "## Root Cause" explaining why it happened
- [ ] Has "## Resolution" describing how it was fixed
- [ ] Has "## Prevention" or "## Action Items" with follow-up tasks
- [ ] Affected clusters/installations listed
- [ ] Follow-up tasks created and linked (with issue numbers)
- [ ] Incident is resolved (not ongoing)

**Quality Test**:
- Is the timeline clear?
- Is the root cause identified?
- Are follow-up actions specific and tracked?

---

### Discovery/Spike 👀

- [ ] Has "## Context" explaining why research is needed
- [ ] Has "## Objective" or "## Research Questions" with clear questions
- [ ] Has "## Deliverables" or "## Acceptance Criteria" with artifacts to produce
- [ ] Has "## Research Scope" or boundaries
- [ ] Time-box specified (in timeline section)
- [ ] Decision this informs is clear
- [ ] Title starts with "Spike:" or "Investigation:" or "Discovery:"

**Quality Test**:
- Is it clear what question we're answering?
- Will we know when the research is complete?
- Is there a clear time-box?

---

### Request 🛎️

- [ ] Has "## Requestor" section identifying who is asking
- [ ] Has "## Request Summary" describing what they want
- [ ] Has "## Use Case" explaining why they need it
- [ ] Contact information provided
- [ ] Business value or urgency explained (optional but helpful)
- [ ] Next steps for evaluation defined

**Quality Test**:
- Is it clear who wants this and why?
- Can we follow up with the requestor?
- Is there enough context to evaluate the request?

---

### Feature 💫

- [ ] Has "## Description" explaining what capability is being added
- [ ] Has "## Acceptance Criteria" with completion criteria
- [ ] Who benefits is identified
- [ ] How it works is described (high-level)
- [ ] Technical approach outlined (optional but helpful)

**Quality Test**:
- Is the new capability clear?
- Will we know when it's done?
- Is the value obvious?

---

### Rock 🪨

- [ ] Has "## WE THINK BY (HYPOTHESIS)" with strategic hypothesis
- [ ] Has "## WE WILL" with key activities
- [ ] Has "## WHICH WILL HAVE THESE BENEFITS" with benefits
- [ ] Has "## Metrics & Goals" with quantifiable targets
- [ ] Business outcomes defined
- [ ] Customer benefits stated
- [ ] Timeline specified (quarter or timeframe)
- [ ] Title includes emoji or "[Rock]" prefix

**Quality Test**:
- Is the strategic bet clear?
- Are metrics quantifiable?
- Is the timeline specified?

---

### Recurring ⥁

- [ ] Has "## Description" of what needs to be done
- [ ] Has "## Frequency" specifying schedule
- [ ] Has "## Responsible" identifying owner
- [ ] Checklist of steps provided
- [ ] Purpose explained (why this is recurring)

**Quality Test**:
- Is the frequency clear?
- Is ownership assigned?
- Are the steps documented?

---

### Operational ⚙️

- [ ] Has "## Description" of the operational issue
- [ ] Has "## Impact" on platform/customers
- [ ] Has "## Resolution" approach
- [ ] Has "## Expected Outcome" with measurable improvement
- [ ] Current state vs desired state defined
- [ ] Affected systems identified

**Quality Test**:
- Is the operational problem clear?
- Is the solution approach defined?
- Will we know when it's resolved?

---

### Note 📜

- [ ] Has "## Summary" or overview
- [ ] Has "## Content" or main information
- [ ] Has "## Key Takeaways" highlighting important points
- [ ] References or sources provided
- [ ] Searchable tags or keywords (optional)

**Quality Test**:
- Is the information useful for reference?
- Are sources cited?
- Is it easy to find later?

---

### Experiment 🥼

- [ ] Has "## Hypothesis" stating what we're testing
- [ ] Has "## Deliverables" specifying what will be produced
- [ ] Has "## Success Criteria" defining success
- [ ] Has "## Timeline" with time-box
- [ ] Expected outcome stated
- [ ] Decision criteria defined
- [ ] Title starts with "Experiment:" or "POC:"

**Quality Test**:
- Is the hypothesis clear?
- Is the time-box defined?
- Will we make a decision at the end?

---

## Common Anti-Patterns to Flag

### Title Issues
- ❌ "Fix issue" → Too vague
- ❌ "Update docs" → Not specific
- ❌ "Improve platform" → No clear scope
- ❌ "Bug" → Not descriptive

### Content Issues
- ❌ Empty body
- ❌ Only "TODO" or "TBD" placeholders
- ❌ No acceptance criteria
- ❌ No context for decision-making
- ❌ Assuming knowledge instead of explaining

### Structural Issues
- ❌ Missing required sections for issue type
- ❌ No team label
- ❌ Orphaned stories (not linked to epic)
- ❌ Vague acceptance criteria ("Done when better")

### Link Issues
- ❌ No parent epic for stories/tasks
- ❌ No related issues referenced
- ❌ Broken or malformed links

---

## Quality Scoring

Use this scoring system to assess issue quality:

### ⭐ Minimum Viable (50-69%)
- Title is not vague
- Body is not empty
- Team label present
- No critical errors

### ⭐⭐ Good (70-89%)
- All required sections present
- Clear acceptance criteria
- Appropriate labels suggested
- Proper formatting
- Links to related work

### ⭐⭐⭐ Excellent (90-100%)
- Complete context with background
- Measurable, specific outcomes
- Connected to strategy (epic/rock)
- Examples or diagrams included
- Anticipates questions
- No improvements needed

**Target**: ⭐⭐ minimum for tasks/bugs, ⭐⭐⭐ for epics/stories

---

## Pre-Submit Checklist

Before presenting an issue to the user, verify:

1. ✅ Issue type is appropriate for the content
2. ✅ Title follows patterns for that type
3. ✅ All required sections present and filled
4. ✅ Acceptance criteria are specific and measurable
5. ✅ Labels suggested (at minimum: team and kind)
6. ✅ Links properly formatted
7. ✅ No placeholder text remaining
8. ✅ No obvious typos or formatting errors
9. ✅ No sensitive data exposed
10. ✅ Quality level is at least ⭐⭐

---

## Validation Process

When user asks to validate an issue:

1. **Identify issue type** from title and content
2. **Run universal checks** (title, body, labels, links, formatting)
3. **Run type-specific checks** for that issue type
4. **Check for anti-patterns** (common mistakes)
5. **Score the issue** (⭐, ⭐⭐, or ⭐⭐⭐)
6. **Provide feedback** with specific improvements needed
7. **Highlight strengths** (what's already good)
8. **Offer to help fix** any identified issues

---

## Example Feedback Format

```markdown
## Validation Results

**Issue Type**: Story
**Quality Score**: ⭐⭐ Good

### ✅ Strengths
- Clear motivation section explaining user problem
- Specific todo steps
- Proper labels suggested

### ⚠️ Needs Improvement
1. **Missing parent epic link**: Add "Parent Epic: #XXX" at the bottom
2. **Vague acceptance criterion**: "Documentation updated" should specify what docs and how
3. **Title could be more specific**: Consider "Enable self-service cluster scaling via Backstage UI" instead of "Add scaling feature"

### 💡 Suggestions
- Consider adding a "Technical Hints" section to guide the implementer
- Link to related design doc if available

Would you like me to help refine any of these sections?
```

---

## Remember

- Validation should be **constructive**, not critical
- **Highlight what's good** before suggesting improvements
- **Be specific** about what needs to change
- **Offer to help** make the improvements
- **Prioritize** critical issues over minor formatting
- **Focus on clarity** - will someone 6 months from now understand this?
