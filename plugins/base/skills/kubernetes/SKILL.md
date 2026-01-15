---
name: kubernetes
description: To keep in mind when working with Kubernetes
---

## Best Practices

### kubectl

- Specify the `--context` with every kubectl command
- When unsure, check if the kubectl CLI version is compatible with the server
- Avoid abbreviations when listing resources, use long forms. Don't: `kubectl get po`. Do: `kubectl get pods`.
- Use `--output jsonpath='...'` to get exactly the desired output.
- When showing a command to the user, use the long form of flags, as they are easier to understand. E. g. `--all-namespaces` instead of `-A`, `--selector` instead of `-l`.
