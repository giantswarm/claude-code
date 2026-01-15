---
description: Start incident response workflow and create incident document
---

# Start Incident Response

Initiate the incident response process when a critical issue is detected.

## What This Command Does

This command helps you quickly start the incident response process by:
- Creating an incident document with key information
- Setting up initial timeline entries
- Generating a communication template
- Providing next steps for investigation

## Instructions for Claude

When this command is invoked:

1. Ask the user for the following information:
   - Brief description of the incident
   - Severity level (SEV1/SEV2/SEV3)
   - Affected services or customers
   - Initial observations

2. Create an incident document with the following structure:
   ```markdown
   # Incident: [Brief Title]

   **Status**: INVESTIGATING
   **Severity**: [SEV Level]
   **Started**: [Timestamp]
   **Incident Commander**: [User]

   ## Summary
   [Brief description]

   ## Impact
   - Affected services: [list]
   - Customer impact: [description]

   ## Timeline
   - [Timestamp] - Incident detected: [initial observations]

   ## Actions Taken
   - [ ] Assembled incident response team
   - [ ] Identified affected systems
   - [ ] Initiated investigation

   ## Communication
   - [ ] Notified stakeholders
   - [ ] Created status page update

   ## Next Steps
   1. [Add specific investigation steps]
   ```

3. Suggest relevant diagnostic commands based on the incident type:
   - For Kubernetes issues: kubectl commands to check pod status, logs, events
   - For network issues: connectivity checks, DNS resolution
   - For application issues: log analysis, metric queries

4. Remind the user to:
   - Update the timeline as actions are taken
   - Communicate with stakeholders
   - Document all findings

## Example Usage

User: `/incident-start`
Claude: Asks for incident details, creates document, provides diagnostic commands

## Notes

- This is the first step in the incident response process
- Keep the document updated throughout the incident
- Focus on mitigation first, root cause analysis later
- Document everything for the postmortem
