---
name: software-engineering
description: Software engineering base skills for Giant Swarm staff
---

## Conventions

- Use git for revision control with GitHub via https://github.com/
- Default branch is called `main`, some repositories use the legacy name `master`
- Releases are usually created based on the default branch
- We must **keep the default branch functional** for a new release any time
- New software is usually written in the **Go** language
- Our repositories are usually **public** and licensed under the **Apache 2.0 License**. Private repositories are an exception.
- Private repositories should be maintained so that we can make them public any time.
- We use **Semantic Versioning** for releases, sometimes with and sometimes without a `v` prefix in the release tag, per repository.
- We usually maintain a CHANGELOG.md file in each repository, following the https://keepachangelog.com/en/1.1.0/ convention.
- Each repository must have a README.md file in the root folder.
- Additional documentation in Markdown format should be placed in the `docs/` folder.
- Maintain `.gitignore` to exclude things like Go binaries and private files.

## Pre-commit

- Some repositrories have pre-commit tools based on the https://pre-commit.com/ framework configured via a `.pre-commit-config.yaml` file in the repository root
- Not all users have the pre-commit hooks installed, so they are not guaranteed to be executed before committing
- To prepare changes before committing, run the `pre-commit` command on moodified files

## Security

- Never disclose customer-related information in code, commit messages, or pull requests.
- Never disclose credentials in code under revision control. If there is a risk of this happening, present a clear warning to the user.
