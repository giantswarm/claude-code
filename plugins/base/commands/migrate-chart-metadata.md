---
description: Migrate chart metadata to the recent OCI-compatible format
---

The goal is to convert the Helm charts in this repositoriy to using Giant Swarm's new `Chart.yaml` annotations, documented in https://docs.giantswarm.io/reference/platform-api/chart-metadata/

1. Make sure a git branch is checked out that is not the default branch, that is clean (no unstaged changes).

2. Find all Helm charts in the `helm` directory.

3. For each chart, check if it has a `Chart.yaml` file.

4. Modify the Chart.yaml file like follows:
   - Set `apiVersion` to `v2`.
   - Make sure a `description` field is present, describing what the chat provides.
   - Make sure the `home` field has the GitHub URL of the current repository as a value.
   - If the `restrictions` fields is present, convert it to annotations, like follows:
     - `clusterSingleton` becomes `io.giantswarm.application.restrictions.cluster-singleton`.
     - `compatibleProviders` becomes `io.giantswarm.application.restrictions.compatible-providers`.
     - `fixedNamespace` becomes `io.giantswarm.application.restrictions.fixed-namespace`.
     - `gpuInstances` becomes `io.giantswarm.application.restrictions.gpu-instances`.
     - `namespaceSingleton` becomes `io.giantswarm.application.restrictions.namespace-singleton`.
   - Change the annotation key `application.giantswarm.io/team` to `io.giantswarm.application.team`.
   - Change the annotation key `application.giantswarm.io/app-type` to `io.giantswarm.application.app-type`.
   - Change the annotation key `application.giantswarm.io/upstream-chart-url` to `io.giantswarm.application.upstream-chart-url`.
   - Change the annotation key `application.giantswarm.io/upstream-chart-version` to `io.giantswarm.application.upstream-chart-version`.
   - Change the annotation key `ui.giantswarm.io/logo` to `io.giantswarm.application.logo`.
   - Remove the annotation `config.giantswarm.io/version` if it exists.

5. Adapt the chart's templates to use the new annotations. Check any use for `.Chart.Annotations` and adapt the key according to the changes made previously.

6. Make sure the architerct-orb version used is at least 6.10.0. This is specified in the file /.circleci/config.yml.

7. Add an entry to the CHANGELOG.md file, if it exists.

8. Create a pull request using MCP tools or using the `gh` CLI. If neither of these is present, generate a PR title and description and present it in a copy-paste-friendly format. Avoid the use of emoji in the PR description.
