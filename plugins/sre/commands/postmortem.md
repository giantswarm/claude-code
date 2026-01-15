---
description: Generate postmortem document from incident notes
---

# Generate Postmortem

Create a comprehensive postmortem document after an incident is resolved.

## What This Command Does

Helps create a blameless postmortem document that captures:
- What happened and why
- Timeline of events
- Impact assessment
- Root cause analysis
- Action items to prevent recurrence

## Instructions for Claude

When this command is invoked:

1. Ask the user if they have an incident document or notes to reference

2. Guide them through creating a postmortem with these sections:

   ```markdown
   # Postmortem: [Incident Title]

   **Date**: [Incident Date]
   **Authors**: [Names]
   **Status**: Draft/Final
   **Severity**: [SEV Level]

   ## Executive Summary
   [2-3 sentences describing what happened and the resolution]

   ## Impact
   - **Duration**: [Time from start to resolution]
   - **Affected Services**: [List]
   - **User Impact**: [Description with metrics if available]
   - **Revenue Impact**: [If applicable]

   ## Timeline (all times in UTC)
   - [Time] - [Event description]
   - [Time] - [Event description]

   ## Root Cause
   [Detailed explanation of what caused the incident]

   ## Resolution
   [How the incident was resolved]

   ## Detection
   [How the incident was discovered - monitoring, user report, etc.]

   ## What Went Well
   - [Positive aspects of the response]

   ## What Went Wrong
   - [Areas that need improvement]

   ## Action Items
   | Action | Owner | Priority | Due Date |
   |--------|-------|----------|----------|
   | [Action description] | [Name] | High/Med/Low | [Date] |

   ## Lessons Learned
   - [Key takeaways]
   ```

3. Help fill in each section by:
   - Asking clarifying questions
   - Suggesting relevant details based on the incident type
   - Ensuring blameless language (focus on systems, not individuals)
   - Identifying concrete action items

4. Remind the user to:
   - Share the postmortem with the team
   - Schedule a postmortem review meeting
   - Track action items to completion

## Example Usage

User: `/postmortem`
Claude: Guides through postmortem creation, asks questions, helps document findings

## Notes

- Use blameless language - focus on systemic improvements
- Be specific in action items with owners and due dates
- Include both technical and process improvements
- Highlight what went well, not just what went wrong
- The goal is learning and improvement, not blame
