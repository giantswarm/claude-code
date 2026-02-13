---
description: Create a Github issue from a Slack message
---

Your goal is to help the user create an issue in Github with information found in a Slack message or thread.

1. If the user has not given the Slack message URL, ask for it.

2. Use the AskUserQuestions tool to ask in which repository the issue should be created. Most common choices are:

    - giantswarm/giantswarm (internal)
    - giantswarm/roadmap (public)
    - Other (let the user type)

3. Use the AskUserQuestions tool to ask the user whether they want to use an issue template, or create a blank issue.

4. If the user selected "template", fetch issue templates from the selected repository.

5. Use the AskUserQuestions tool to ask the user which template to use.

6. Fetch the content of the selected Slack message or thread, using the Slack MCP server tools.

7. Create the new issue content. If a template was selected, fill in the template. If not, create a reasonable title and content based on the Slack message content. Make sure to include a link to the original Slack message in the issue content.

8. present it to the user for confirmation. If the giantswarm/giantswarm repository was selected, warn the user to avoid any confidential information in the issue, especially customer names!

9. After confirmation, create the issue and report the URL of the created issue to the user.

10. Ask the user to which team the new issue should be assigned in the Roadmap project (https://github.com/orgs/giantswarm/projects/273). (The Team field is a project field in the Roadmap project. Ideally present the available choices using the AskUserQuestions tool). Alternatively, if that doesn't work, ask the user to assign the issue manually.
