# Giant Swarm Issue Creation Cheatsheet

> **One-page reference for creating quality issues** | Print-friendly | Keep at desk

---

## IMPORTANT: Private repository and public roadmap project for issues

- Giant Swarm uses only GitHub ProjectsV2 projects (no more legacy Projects)
- At Giant Swarm, issues are created in the private https://github.com/giantswarm/giantswarm repository (org=giantswarm, repo=giantswarm).
- Giant Swarm's main roadmap project is https://github.com/orgs/giantswarm/projects/273, which lives in the public https://github.com/giantswarm/roadmap repository. All our issues are added to that project.
- Since https://github.com/giantswarm/roadmap is **public**, only create public issues in that repository. Confidential issues (e.g. containing Giant Swarm internal information or PII) usually created in private repositories (mainly giantswarm/giantswarm) and added to the roadmap project as an item.

## 🎯 When to Use Which Type

| Type | Use When... | Duration | Required Sections |
|------|-------------|----------|-------------------|
| **Epic** 🎯 | Multi-month strategic initiative | Weeks-months | Motivation, Scope, AC |
| **Story** 📑 | User-facing value delivery | Days-weeks | Motivation, Todo, Outcome, AC |
| **Task** 🗒️ | Specific action item | Hours-days | Description, Done |
| **Bug** 🐞 | Something is broken | Varies | Description, Repro, Logs |
| **Postmortem** 🚧 | Document incident | After incident | What/Why/Fix/Prevent |
| **Discovery** 👀 | Research/explore options | Time-boxed | Questions, Deliverables |
| **Request** 🛎️ | Customer/stakeholder ask | N/A | Requestor, Use Case, Value |

---

## 🏷️ Label Quick Reference

### Required
- `team/<name>` - **Exactly ONE** (delivery owner)

### Highly Recommended
- `kind/<type>` - Issue type (epic, story, task, bug, etc.)
- `area/kaas` or `area/platform` - Product domain
- `function/<area>` - Cross-functional work

### Common Teams
`atlas` `cabbage` `honey-badger` `phoenix` `planeteers` `rocket` `shield` `tenet` `up` `turtles`

### Common Functions
`engineering` `customer-success` `product-strategy` `documentation` `security` `marketing`

---

## ✍️ Title Patterns

| Type | Pattern | Example |
|------|---------|---------|
| Epic | `[EPIC]: <Strategic outcome>` | `[EPIC] Kubernetes v1.31 Support` |
| Story | `<Action that creates value>` | `Enable self-service troubleshooting via enhanced logs` |
| Task | `<Action> <specific thing>` | `Add SCIM references to PagerDuty docs` |
| Bug | `<Component>: <What's broken>` | `cilium-app: Pods stuck in CrashLoopBackOff` |
| Postmortem | `<Cluster>: <What happened>` | `gazelle/operations: Ingress unavailable 2h` |
| Discovery | `Spike: <Question to answer>` | `Spike: Evaluate Cilium for cost visibility` |

---

## 📝 Template Shortcuts

### Epic
```markdown
## Motivation
[Why + What problem]

## Scope
**In Scope**: [List]
**Out of Scope**: [List]

## Outcome
[What changes when done]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Dependencies
Related: #XXX
```

### Story
```markdown
## Motivation
[User problem]

## Todo
1. [ ] [Step 1]
2. [ ] [Step 2]

## Outcome
[User benefit]

## Acceptance Criteria
- [ ] [User-observable 1]
- [ ] [User-observable 2]

Related to epic: #XXX
```

### Task
```markdown
## Context (if needed)
[Brief background]

## Todo
- [ ] [Action 1]
- [ ] [Action 2]

## Done When
[Clear completion state]

Towards #XXX
```

### Bug
```markdown
## Description
**Expected**: [Should do]
**Actual**: [Does instead]

## Reproduction
1. [Step 1]
2. [Step 2]

## Logs
```
[Error messages]
```

## Impact
Severity: [High/Med/Low]
Clusters: [List]
```

---

## ✅ Pre-Submit Checklist

Before creating issue:

- [ ] Title is specific (not "Fix issue" or "Update docs")
- [ ] Body is not empty
- [ ] Team label present
- [ ] Kind label present (if known)
- [ ] Acceptance criteria clear and measurable
- [ ] Parent epic linked (for stories/tasks)
- [ ] No placeholders ("TODO", "Fill in later")
- [ ] No sensitive data (credentials, tokens)

---

## 🚫 Top 5 Anti-Patterns to Avoid

1. **Vague Titles**: ❌ "Update docs" → ✅ "Update cert-manager docs with IRSA setup"

2. **No Context**: ❌ "Fix the bug" → ✅ "Fix cilium-app upgrade timeout during v31 migration"

3. **Missing AC**: ❌ "Done when better" → ✅ "Done when: [specific checklist]"

4. **No Epic Link**: ❌ Orphaned story → ✅ "Related to epic: #12345"

5. **No Team**: ❌ Unassigned → ✅ `team/atlas` label

---

## 🎯 Quality Test: The 5-Second Rule

Can someone read your issue title and immediately understand:
1. **WHAT** needs to be done?
2. **WHERE** in the platform?
3. **WHY** it matters?

If NO → Revise title

---

## 🔗 Essential Links

### Documentation
- **Full Guide**: `GUIDE.md`
- **Ruleset**: `giant-swarm-issue-creation-ruleset.yaml`
- **Main README**: `README.md`

### Internal Resources
- **Slack**: #product-engineering, #roadmap
- **Training**: Request from Product team
- **Examples**: Search `is:closed label:kind/<type>` on GitHub

---

## 💡 Pro Tips

1. **Copy Similar Issues**: Don't start from scratch. Find a similar closed issue and adapt it.

2. **Use Cursor Validation**: Type `@validate issue` before submitting.

3. **Link Early**: Add parent epic reference as you write, not after.

4. **Write for Future You**: 6 months from now, will you understand this issue?

5. **Acceptance Criteria = Contract**: Make them specific, measurable, and verifiable.

---

## 🎓 Training Resources

### 5-Minute Intro
→ Read this cheatsheet

### 30-Minute Deep Dive
→ Read `README.md` and `GUIDE.md`

### 1-Hour Workshop
→ Complete training with examples from `GUIDE.md`

### Ongoing Reference
→ Use `GUIDE.md` for templates, examples, and best practices

---

## 📊 Success Metrics Dashboard

Track your team's issue quality:

```
Weekly Check:
□ % issues with team label: _____% (target: 100%)
□ % issues with kind label: _____% (target: >80%)
□ % stories linked to epic: _____% (target: >85%)
□ % epics with AC: _____% (target: >95%)
□ Avg time to triage: _____ hours (target: <48h)

Monthly Review:
□ Issues created this month: _____
□ Issues meeting quality std: _____% (target: >90%)
□ Time saved vs. last month: _____ hours
□ Team satisfaction score: _____/10
```

---

## 🎪 Issue Type Selector (Decision Tree)

```
START
  ↓
Is it strategic and multi-month?
  YES → Epic 🎯
  NO ↓
    ↓
Does it deliver user value?
  YES → Story 📑
  NO ↓
    ↓
Is something broken?
  YES → Bug 🐞
  NO ↓
    ↓
Documenting an incident?
  YES → Postmortem 🚧
  NO ↓
    ↓
Answering "should we?" question?
  YES → Discovery 👀
  NO ↓
    ↓
Customer or stakeholder asking?
  YES → Request 🛎️
  NO ↓
    ↓
Specific action needed?
  YES → Task 🗒️
  NO ↓
    ↓
Check full guide for other types
```

---

## 🎨 Formatting Quick Guide

### Headings
```markdown
## Main Section (use ##)
### Subsection (use ###)
```

### Lists
```markdown
- Unordered item
- Another item

1. Ordered step 1
2. Ordered step 2

- [ ] Checkbox unchecked
- [x] Checkbox checked
```

### Links
```markdown
Internal issue: #12345
External: [Link text](https://example.com)
Slack: https://gigantic.slack.com/archives/...
```

### Code
```markdown
Inline: `code here`

Block:
```yaml
code: block
here: now
```
```

---

## ⚡ Cursor Commands (When Ruleset Active)

| Say This | Cursor Does This |
|----------|------------------|
| `Create epic for X` | Injects Epic template |
| `Create story for Y` | Injects Story template |
| `Create bug report` | Injects Bug template |
| `@validate issue` | Checks quality |
| `@suggest labels` | Recommends labels |
| `@find related` | Finds similar issues |

---

## 🎯 The 3 C's of Quality

1. **CLEAR**: Specific, unambiguous, well-explained
2. **COMPLETE**: All required sections, sufficient detail
3. **CONNECTED**: Linked to related work, epic, team

---

## 🏅 Quality Levels

### ⭐ Minimum Viable
- Title not vague
- Body not empty
- Team label present

### ⭐⭐ Good
- All required sections for type
- Clear acceptance criteria
- Appropriate labels

### ⭐⭐⭐ Excellent
- Complete context with links
- Measurable outcomes
- Connected to strategy
- Examples or diagrams
- Anticipates questions

**Aim for ⭐⭐⭐ on epics and stories**  
**⭐⭐ is fine for tasks and bugs**

---

## 🎓 Remember

> "A well-written issue is an investment. It saves time in triage, planning, implementation, and future reference."

**Time spent writing a quality issue: 15 minutes**  
**Time saved by team consuming it: Hours**

**Write once, benefit many times.** ✨

---

## 📱 Mobile-Friendly Summary

**Creating an issue?**

1. Choose type (Epic/Story/Task/Bug/etc.)
2. Use template for that type
3. Fill all required sections
4. Add team label
5. Add kind label
6. Link to related work
7. Validate with checklist
8. Submit!

**Questions?** → #product-engineering on Slack

---

*Keep this cheatsheet handy while creating issues*  
*Print-friendly | Last updated: 2025-12-01*

