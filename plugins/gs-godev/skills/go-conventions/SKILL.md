---
name: go-conventions
description: Conventions for Go development at Giant Swarm
---

All Giant Swarm specific Go conventions are documented in the files in https://github.com/giantswarm/fmt/tree/main/go

## Formatting and imports

Ensure the Go code is formatted and imports are organized using the following command, where $REPO is the name of the current repository:

```bash
go install golang.org/x/tools/cmd/goimports@latest
goimports -local github.com/giantswarm/$REPO -w .
```

## Static checks

If available, run `golangci-lint` in the following way to find any problems that would otherwise only surface in CI, and mitigate them:

```bash
GOGC=20 golangci-lint run -E gosec -E goconst -E asciicheck \
  --timeout 3m \
  --max-same-issues 0 \
  --max-issues-per-linter 0
```
