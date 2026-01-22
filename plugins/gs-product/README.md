# Giant Swarm Product Plugin (gs-product) for Claude Code

> **Production-ready Claude Code plugin for creating high-quality GitHub issues**

Based on comprehensive analysis of **1,710 real Giant Swarm roadmap issues** across all teams.

---

## 🚀 Quick Start (3 Steps)

### 1. Install the Plugin

```bash
# From the Giant Swarm monorepo
# The plugin is located in plugins/gs-product/

# Claude Code will automatically load plugins from the monorepo
```

### 2. Print the Cheatsheet

```bash
# Print for your desk
open CHEATSHEET.md
# Click Print (⌘+P)
```

### 3. Create Your First Issue

```bash
# In Claude Code, use the /create-issue command:
/create-issue

# Or just ask Claude:
"Help me create an epic for improving cluster upgrade reliability"
```

**You're ready to go!** 🎉

---

## 📦 What's Included

| File/Directory | Purpose | Read Time |
|----------------|---------|-----------|
| **.claude-plugin/plugin.json** | Plugin manifest for Claude Code | - |
| **commands/** | Command definitions for /create-issue, /validate-issue, /suggest-labels | - |
| **skills/** | Background knowledge skills (patterns, labels, quality standards) | - |
| **.claude-code/** | Templates, guidelines, and reference documentation | - |
| **GUIDE.md** | Complete guide with templates & examples | 20 min |
| **CHEATSHEET.md** | 1-page printable reference | 3 min |
| **PLUGIN.md** | Detailed installation and usage guide | 10 min |

---

## 🎯 Issue Types Covered

This plugin handles **all 13 issue types** used at Giant Swarm:

### Core Types (Most Common)

| Type | Symbol | Use For | Example |
|------|--------|---------|---------|
| **Epic** | 🎯 | Strategic initiatives | `/create-issue` |
| **Story** | 📑 | User-facing value | `/create-issue` |
| **Task** | 🗒️ | Specific actions | `/create-issue` |
| **Bug** | 🐞 | Defects | `/create-issue` |

### Specialized Types

| Type | Symbol | Use For |
|------|--------|---------|
| **Postmortem** | 🚧 | Incident documentation |
| **Discovery** | 👀 | Research spikes |
| **Request** | 🛎️ | Customer asks |
| **Feature** | 💫 | New capabilities |
| **Rock** | 🪨 | Quarterly bets |
| **Recurring** | ⥁ | Ongoing tasks |
| **Operational** | ⚙️ | Platform health |
| **Note** | 📜 | Reference docs |
| **Experiment** | 🥼 | POCs and validation |

**Complete templates and examples** in [GUIDE.md](GUIDE.md).

---

## 🏷️ Labels System

### Required
- `team/<name>` - Exactly ONE (delivery owner)

### Recommended
- `kind/<type>` - Issue type
- `area/kaas` or `area/platform`
- `function/<area>` - Cross-functional work

### Teams Available
`atlas` `cabbage` `honey-badger` `phoenix` `planeteers` `rocket` `shield` `tenet` `up` `turtles` `nifflers`

**200+ labels documented** in `.claude-code/labels.md`.

---

## ✨ What Makes This Special

### 1. AI-Powered Creation
Claude Code integration provides:
- Real-time template injection
- Smart validation
- Automatic label suggestions
- Quality checks before submission

### 2. Data-Driven Rules
Based on 1,710 real issues:
- Not theoretical "best practices"
- Reflects actual Giant Swarm team behavior
- Validated patterns, not imposed standards

### 3. Comprehensive Coverage
- All 13 issue types
- 200+ labels documented
- 11 teams analyzed
- 30+ complete examples

### 4. Production Ready
- Install to Claude Code today
- No customization required
- Use immediately
- Iterate based on feedback

---

## 🎮 Available Commands

Once installed, use these commands in Claude Code:

### `/create-issue`
Create a new issue with proper structure and validation.

**Usage**:
```bash
/create-issue
```

Claude will ask clarifying questions to determine the appropriate issue type.

Or just ask Claude naturally:
```
"Create an epic for Kubernetes v1.32 support"
"Help me write a bug report for pod crashes"
"I need to create a story for enabling self-service scaling"
```

### `/validate-issue`
Validate an existing issue against quality standards.

**Examples**:
```bash
/validate-issue

# Then provide the issue content when prompted
```

Claude will check:
- All required sections present
- Title follows patterns
- Acceptance criteria are measurable
- Proper labeling
- Links formatted correctly

### `/suggest-labels`
Suggest appropriate labels based on issue content.

**Examples**:
```bash
/suggest-labels

# Then provide the issue content when prompted
```

Claude will suggest:
- Required team label
- Recommended kind label
- Optional labels based on content (provider, customer, impact, etc.)

---

## 📈 Key Findings from Analysis

### Dataset Overview
- **Total Issues**: 1,710
- **Date Range**: 2023-2025
- **Teams**: 11
- **Issue Types**: 13 identified
- **Labels**: 200+ catalogued

---

## 📚 Documentation Structure

### For Quick Reference
→ [CHEATSHEET.md](CHEATSHEET.md) - Print and keep at desk

### For Learning & Deep Dive
→ [GUIDE.md](GUIDE.md) - Complete templates and examples

### For Installation & Usage
→ [PLUGIN.md](PLUGIN.md) - Plugin installation and configuration

### For Development
→ `.claude-code/` - Templates, guidelines, and reference files

---

## 💡 Pro Tips

### Tip 1: Start with Cheatsheet
Print `CHEATSHEET.md` and keep it visible while creating issues.

### Tip 2: Use Skills
Instead of typing templates manually, use `/create-issue [type]` for guided creation.

### Tip 3: Validate Before Submitting
Run `/validate-issue` before submitting to catch issues early.

### Tip 4: Copy Good Examples
Don't start from scratch. Find a similar closed issue and adapt it.

### Tip 5: Write for Future You
In 6 months, will you understand this issue without additional context?

---



## 🔧 Technical Details


### How It Works

1. **User invokes command**: `/create-issue`
2. **Command loads**: Instructions guide Claude's behavior
3. **Skills provide context**: Background knowledge from skills directory
4. **Claude reads templates**: Loads from `.claude-code/templates/`
5. **Interactive creation**: Claude asks questions and generates issue
6. **Validation**: Claude checks against quality standards
7. **Presentation**: User reviews and confirms




