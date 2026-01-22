# Giant Swarm Product Plugin (gs-product)

Complete installation and usage guide for the Claude Code plugin.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Skills Reference](#skills-reference)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Advanced Usage](#advanced-usage)
- [Troubleshooting](#troubleshooting)
- [Development](#development)

---

## Installation

### Option 1: From Claude Code Marketplace (Recommended)

```bash
# Install from the marketplace
claude plugin add giantswarm/claude-code

# Verify installation
claude plugin list
```

### Option 2: From Local Directory

```bash
# From the Giant Swarm monorepo
# The plugin is located in plugins/gs-product/

# Claude Code will automatically load plugins from the monorepo

# Verify plugins are loaded
claude plugin list
```

### Option 3: From GitHub URL

```bash
# Install directly from GitHub
claude plugin add https://github.com/giantswarm/claude-code

# Verify installation
claude plugin list
```

### Verification

After installation, you should see:
```
gs-product v1.0.0
  Create high-quality GitHub issues following Giant Swarm patterns
  Commands: create-issue, validate-issue, suggest-labels
```

---

## Quick Start

### Creating Your First Issue

```bash
# Start Claude Code
claude

# Use the skill
/create-issue epic
```

Claude will guide you through:
1. Confirming the issue type is appropriate
2. Asking questions to fill required sections
3. Generating the issue with proper structure
4. Suggesting appropriate labels
5. Validating the quality

### Or Use Natural Language

```
You: "Help me create an epic for improving cluster upgrade reliability"

Claude: I'll help you create an epic for improving cluster upgrade reliability.
Let me gather the information needed...
[Proceeds with guided creation]
```

---

## Skills Reference

### `/create-issue [type]`

Create a new GitHub issue following Giant Swarm patterns.

**Syntax**:
```bash
/create-issue [type]
```

**Arguments**:
- `type` (optional): Issue type (epic, story, task, bug, postmortem, discovery, request, feature, rock, recurring, operational, note, experiment)

**Examples**:
```bash
# With type specified
/create-issue epic
/create-issue story
/create-issue bug

# Without type (interactive selection)
/create-issue
```

**What It Does**:
1. Loads the appropriate template
2. Asks clarifying questions for required sections
3. Generates properly formatted issue body
4. Suggests labels based on content
5. Validates against quality standards
6. Presents complete issue for review

**Output**:
```markdown
# Issue Preview

**Title**: [EPIC] Production-Ready KubeEdge Solution

**Body**:
## Motivation
[Your content]

## Scope
**In Scope**:
- [Items]

**Out of Scope**:
- [Items]
...

**Suggested Labels**:
- team/rocket
- kind/epic
- area/platform
- working-group/smart-factory

Would you like to make any changes?
```

---

### `/validate-issue`

Validate an existing issue against Giant Swarm quality standards.

**Syntax**:
```bash
/validate-issue
```

**What It Does**:
1. Prompts for issue content (or GitHub URL)
2. Identifies the issue type
3. Checks all required sections present
4. Validates acceptance criteria quality
5. Verifies label presence
6. Checks formatting and links
7. Provides scored feedback with improvement suggestions

**Output**:
```markdown
## Validation Results

**Issue Type**: Story
**Quality Score**: ⭐⭐ Good

### ✅ Strengths
- Clear motivation section explaining user problem
- Specific todo steps
- Proper labels suggested

### ⚠️ Needs Improvement
1. **Missing parent epic link**: Add "Parent Epic: #XXX"
2. **Vague AC**: "Documentation updated" should be more specific

### 💡 Suggestions
- Consider adding Technical Hints section
- Link to design doc if available

Would you like me to help refine any sections?
```

---

### `/suggest-labels`

Suggest appropriate labels based on issue content.

**Syntax**:
```bash
/suggest-labels
```

**What It Does**:
1. Prompts for issue content
2. Analyzes content for keywords
3. Identifies appropriate labels
4. Explains reasoning for each suggestion
5. Presents in order of importance

**Output**:
```markdown
## Suggested Labels

### Required
- `team/rocket` - Issue mentions edge computing and on-prem (Rocket team focus)

### Recommended
- `kind/epic` - Strategic, multi-month initiative indicated
- `area/platform` - Platform capability enhancement

### Optional (Based on Content)
- `provider/vsphere` - Mentions vSphere integration
- `working-group/smart-factory` - Smart factory initiative referenced
- `workstream/CAPV 📘` - CAPV provider work

Total: 6 labels suggested
```

---

## Configuration

### Plugin Settings

The plugin reads configuration from `.claude-code/` directory:

```
.claude-code/
├── instructions.md          # Main behavior guidelines
├── issue-types.md           # Decision tree
├── labels.md                # Label taxonomy
├── validation-checklist.md  # Quality standards
└── templates/               # Issue templates
```

### Customization

To customize for your organization:

1. **Edit templates**: Modify files in `.claude-code/templates/`
2. **Update labels**: Edit `.claude-code/labels.md`
3. **Change validation rules**: Edit `.claude-code/validation-checklist.md`
4. **Adjust behavior**: Edit `.claude-code/instructions.md`

### Context Files

Claude automatically loads these files when using skills:
- Templates are read on-demand
- Guidelines are always in context
- Label taxonomy available for suggestions

---

## Usage Examples

### Example 1: Creating an Epic

```bash
You: /create-issue epic

Claude: I'll help you create an epic. Let me ask a few questions:

1. What strategic problem are we solving with this epic?

You: We need to support Kubernetes 1.32 across all our managed clusters to stay current with upstream releases and provide customers with latest features.

Claude: What deliverables are in scope for this epic?

You: Upgrading control plane components, updating node images, testing compatibility, and updating documentation.

Claude: What's explicitly out of scope?

You: Custom app compatibility testing (that's on customers) and legacy cluster upgrades (separate epic).

Claude: What are the measurable outcomes?

You: All management clusters running k8s 1.32 within 6 weeks, workload clusters can opt-in to 1.32, zero P1 incidents during rollout.

Claude: Here's your epic:

**Title**: [EPIC] Kubernetes v1.32 Support Across All Clusters

**Body**:
## Motivation
We need to support Kubernetes 1.32 across all our managed clusters...
[Complete epic with all sections filled]

**Suggested Labels**:
- team/tenet (Release management)
- kind/epic
- area/platform
- workstream/CAPI 📚

Would you like any changes?
```

---

### Example 2: Validating an Issue

```bash
You: /validate-issue

Claude: Please provide the issue you'd like me to validate (paste the title and body).

You:
Title: Fix the bug
Body: It's broken. Please fix.

Claude: ## Validation Results

**Issue Type**: Bug (inferred from title)
**Quality Score**: ⭐ Minimum Viable (55%)

### ⚠️ Critical Issues
1. **Vague title**: "Fix the bug" doesn't specify what's broken
   - Suggestion: "cilium-app: Pods stuck in CrashLoopBackOff on AWS clusters"

2. **Missing required sections**: Bug reports need:
   - Description (expected vs actual behavior)
   - Reproduction steps
   - Error logs/evidence
   - Impact assessment

3. **No labels suggested**: Need team label at minimum

### Recommended Actions
1. Rewrite title to specify component and issue
2. Add all required bug sections using template
3. Include error logs and affected clusters
4. Add reproduction steps

Would you like me to help you create a proper bug report?
```

---

### Example 3: Suggesting Labels

```bash
You: /suggest-labels

Claude: Please provide the issue content.

You:
Title: [EPIC] Production-Ready KubeEdge Solution for WEPA Edge Device Integration
Body: [Full epic about KubeEdge for edge devices on vSphere...]

Claude: ## Suggested Labels

### Required
- `team/rocket` - Edge computing and on-prem is Rocket's domain

### Recommended
- `kind/epic` - Strategic multi-month initiative (evident from title)
- `area/platform` - Platform capability enhancement

### Optional (Based on Content)
- `provider/vsphere` - vSphere integration mentioned in epic
- `customer/wepa` - WEPA customer explicitly referenced
- `working-group/smart-factory` - Smart factory use case described
- `workstream/CAPV 📘` - CAPV provider-related work

### Reasoning
- "Edge device management" → Rocket team
- Title starts with "[EPIC]" → kind/epic
- "KubeEdge solution", "platform setup" → area/platform
- "WEPA Edge Device" → customer/wepa
- Multiple references to vSphere → provider/vsphere
- "smart factory", "manufacturing" → working-group/smart-factory
```

---

## Advanced Usage

### Batch Creating Issues

```bash
# Create multiple related issues
/create-issue epic
# [Create parent epic]

/create-issue story
# Claude will ask for parent epic - provide the number

/create-issue story
# Link to same epic

/create-issue task
# Link to one of the stories
```

### Refining Generated Issues

```bash
You: /create-issue story

Claude: [Generates story]

You: Can you make the acceptance criteria more specific?

Claude: [Updates acceptance criteria with measurable details]

You: Also add a Technical Hints section

Claude: [Adds technical hints section]
```

### Using with GitHub CLI

```bash
# Generate issue with Claude
/create-issue bug

# Claude generates the issue
# Copy the output, then:

# Create the issue using gh CLI
gh issue create \
  --title "[Title from Claude]" \
  --body "[Body from Claude]" \
  --label "team/cabbage,kind/bug,provider/aws"
```

### Custom Workflows

**Workflow 1: Epic → Stories → Tasks**
```bash
1. /create-issue epic → Create parent epic (#1234)
2. /create-issue story → Link to #1234 (repeat for each story)
3. /create-issue task → Link to stories (for implementation tasks)
```

**Workflow 2: Bug → Postmortem**
```bash
1. /create-issue bug → Document the issue
2. [Fix the bug]
3. /create-issue postmortem → Document resolution and prevention
```

---

## Troubleshooting

### Skill Not Found

**Problem**: `/create-issue` command not recognized

**Solutions**:
```bash
# Check plugin is installed
claude plugin list

# Reinstall if needed
claude plugin remove giantswarm/claude-code
claude plugin add giantswarm/claude-code

# Restart Claude Code
claude quit
claude
```

---

### Templates Not Loading

**Problem**: Claude says "Cannot find template"

**Solutions**:
1. Check `.claude-code/templates/` directory exists
2. Verify template files are present
3. Ensure file names match: `epic.md`, `story.md`, etc.
4. Check file permissions (should be readable)

```bash
ls -la .claude-code/templates/
```

---

### Labels Not Suggesting Correctly

**Problem**: Labels suggested don't match your organization

**Solutions**:
1. Edit `.claude-code/labels.md` with your label taxonomy
2. Update team names and descriptions
3. Add/remove label categories as needed
4. Restart Claude Code to reload configuration

---

### Validation Too Strict/Lenient

**Problem**: Validation checklist doesn't match your standards

**Solutions**:
1. Edit `.claude-code/validation-checklist.md`
2. Adjust scoring thresholds
3. Add/remove validation rules
4. Modify quality levels

---

## Development

### Plugin Structure

```
gs-product/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
├── commands/                # Command definitions (markdown)
│   ├── create-issue.md
│   ├── validate-issue.md
│   └── suggest-labels.md
├── skills/                  # Background knowledge
│   ├── issue-patterns/
│   │   └── SKILL.md
│   ├── label-taxonomy/
│   │   └── SKILL.md
│   └── quality-standards/
│       └── SKILL.md
├── .claude-code/           # Context and templates
│   ├── instructions.md
│   ├── issue-types.md
│   ├── labels.md
│   ├── validation-checklist.md
│   └── templates/
│       └── [13 templates]
└── [Documentation files]
```

### Adding New Issue Types

1. **Create template**: Add `.claude-code/templates/newtype.md`
2. **Update decision tree**: Edit `.claude-code/issue-types.md`
3. **Update instructions**: Edit `.claude-code/instructions.md`
4. **Test**: Run `/create-issue newtype`

### Modifying Skill Behavior

Edit the skill scripts in `skills/*/skill.sh`:

```bash
# Example: Add custom validation rule
vim skills/validate-issue/skill.sh

# Add your rule to the validation section
# Restart Claude Code to apply changes
```

### Contributing

To contribute improvements:

1. Fork the repository
2. Make changes in a feature branch
3. Test thoroughly with Claude Code
4. Submit pull request with:
   - Description of changes
   - Rationale
   - Examples of before/after
   - Test results

---

## Tips for Best Results

### 1. Be Specific When Asked

Claude asks targeted questions. Specific answers = better issues.

**Good**: "We need to reduce P1 incidents by implementing proactive monitoring alerts for key platform metrics"

**Not as good**: "Better monitoring"

### 2. Reference Examples

If you have a great example issue, mention it:

"Create a bug report similar to #12345 but for this new issue"

### 3. Iterate

Don't expect perfection on first generation. Refine:

"Can you make the acceptance criteria more measurable?"
"Add more context about why this is strategic"

### 4. Use All Three Skills

- `/create-issue` - Generate new issues
- `/validate-issue` - Quality check before submitting
- `/suggest-labels` - Ensure proper labeling

### 5. Customize for Your Team

The plugin is based on Giant Swarm patterns but can be adapted:
- Edit templates for your structure
- Update labels for your organization
- Adjust validation rules for your standards

---

## FAQ

**Q: Can I use this for non-Giant Swarm issues?**

A: Yes! The templates and patterns are general-purpose. Just update the label taxonomy and team names.

**Q: Does this integrate with GitHub directly?**

A: Not yet. The plugin generates issue content. You copy/paste into GitHub or use `gh` CLI.

**Q: Can I add custom issue types?**

A: Yes! Add templates in `.claude-code/templates/` and update the decision tree.

**Q: What if my team uses different sections?**

A: Edit the templates in `.claude-code/templates/` to match your preferences.

**Q: How do I update the plugin?**

A: Pull latest changes from the monorepo. Plugins are automatically reloaded.

**Q: Can multiple people use this?**

A: Yes! Everyone with access to the monorepo can use the plugin.

**Q: Does this work offline?**

A: The plugin files are local, but Claude Code requires internet connection.

---

## Support

### Getting Help

- **Documentation**: Start with [GUIDE.md](GUIDE.md) and [CHEATSHEET.md](CHEATSHEET.md)
- **Examples**: See usage examples in this file
- **Issues**: Report bugs or request features on GitHub
- **Community**: Join Giant Swarm Slack (#product-engineering)

### Reporting Issues

When reporting issues with the plugin:

1. Include Claude Code version: `claude --version`
2. Include plugin version: `claude plugin list`
3. Describe expected vs actual behavior
4. Provide example commands and outputs
5. Include relevant error messages

### Feature Requests

We welcome feature requests! Please include:
- Use case description
- Why existing features don't meet the need
- Proposed solution or approach
- Examples of how it would work

---

## Changelog

### v1.0.0 (2026-01-22)
- Initial release
- Support for 13 issue types
- 3 skills: create-issue, validate-issue, suggest-labels
- Complete template library
- Label taxonomy for Giant Swarm
- Quality validation system

---

## License

Apache-2.0

---

## Acknowledgments

Based on analysis of 1,710 real Giant Swarm issues across 11 teams (2023-2025).

Thanks to all Giant Swarm team members whose excellent issues formed the basis of these patterns.

---

*For more information, see [README.md](README.md) and [GUIDE.md](GUIDE.md)*
