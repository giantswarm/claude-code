---
description: Clean up replacements in go.mod
model: claude-haiku-4-5-20251001
---

The goal is to remove obsolete `replace` directives from the `go.mod` file.

Use the code-cleaner subagent.

1. Read the `go.mod` file in the current repository's root directory.

2. Identify all `replace` directives in the `go.mod` file.

3. Check if the git history for the current branch has any changes. Make sure to be in a branch without prior changes, not in the default branch.

4. Now iterate over all replace directives like this:

    1. Remove the `replace` directive from `go.mod`.

    2. Execute `go mod tidy` to clean up the module dependencies.

    3. Use `git diff` to check whether `go.sum` has changed.
    
    4. If `go.sum` has changed through the removal of the replace directive, revert the removal. If it hasn't changed, we know the replace directive was obsolete.

    5. If any untested replace directives are left, continue with the next one.

5. Finally test using `go build .` and `go test ./...`.

6. If everything works, commit the changes with the message "Clean up obsolete replace directives in go.mod".
