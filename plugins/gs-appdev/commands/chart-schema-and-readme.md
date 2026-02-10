---
description:
  Create helm chart configuration to use JSON schema and README.md generation tools that are based on
  values.yaml comments.
---

## Summary

The goal is to help the user to setup tools that aid in generation of a JSON schema and a README.md file
describing a helm chart. Both tools base on specific comments that need to be placed in the `values.yaml`
file. The tool to generate the schema is https://github.com/losisin/helm-values-schema-json, while the tool to
generate the README.md file is https://github.com/norwoodj/helm-docs. Additionally, we will use
https://github.com/giantswarm/schemalint to validate and lint the schema and pre-commit to execute all the
tools: https://pre-commit.com/index.html.

Execute the following steps in sequence. Make sure to move to the next step only when the previous step is
complete.

## Step 1

Validate that the `pre-commit` tool is installed. Try to execute the tool. If it is not available, print a
message asking the user to install it and stop processing this command.

When the tool is available, execute the `pre-commit install --install-hooks` command to install necessary
tools.

## Step 2

Prepare files and pre-commit configuration.

1. Make sure a git branch is checked out that is not the default branch, that is clean (no unstaged changes).
2. Find all Helm charts in the `helm` directory.
3. For each chart, check if it has a `values.yaml` file.
4. For each chart directory, like `helm/my-chart/`, make sure that a file called `.schema.yaml` exists in that
   directory. If it doesn't, create it by templating the following content:

   ```
   # .schema.yaml
   # yaml-language-server: $schema=https://github.com/losisin/helm-values-schema-json/raw/refs/heads/main/config.schema.json

   values:
     - helm/[DETECTED_HELM_CHART_NAME]/values.yaml

   draft: 2020
   indent: 4
   output: helm/[DETECTED_HELM_CHART_NAME]/values.schema.json

   bundle: false

   k8sSchemaURL:
     https://raw.githubusercontent.com/yannh/kubernetes-json-schema/refs/heads/master/{{ .K8sSchemaVersion }}/
   k8sSchemaVersion: "v1.33.1"

   useHelmDocs: true

   noAdditionalProperties: true
   noDefaultGlobal: false

   schemaRoot:
     additionalProperties: false
   ```

5. Make sure a configuration for the `pre-commit` tool exists for each chart. If the `.pre-commit-config.yaml`
   file doesn't exist in the repository root - create an empty file. Then, append to this file the following
   snippet for each helm chart directory, like `helm/my-chart/`:

   ```
   repos:
   - repo: https://github.com/losisin/helm-values-schema-json
     rev: v2.3.1
     hooks:
       - id: helm-schema
         args:
           - --config
           - helm/[DETECTED_HELM_CHART_NAME]/.schema.yaml
   - repo: https://github.com/giantswarm/schemalint
     rev: v2.6.1
     hooks:
       - id: schemalint-normalize
         args:
           - helm/[DETECTED_HELM_CHART_NAME]/values.schema.json
           - -o
           - helm/[DETECTED_HELM_CHART_NAME]/values.schema.json
           - --force
       - id: schemalint-verify
         args:
           - helm/[DETECTED_HELM_CHART_NAME]/values.schema.json
   - repo: https://github.com/norwoodj/helm-docs
     rev: "v1.14.2"
     hooks:
       - id: helm-docs
         args:
           - --chart-search-root=[DETECTED_HELM_CHART_NAME]
           - --sort-values-order=file
   ```

## Step 3

Generate attribute comments for usage with `helm-docs` and `helm schema` tools. Analyze the documentation in
the current project to understand the purpose and configuration options of the project. If the docs mention
that the project is a fork of another repository with a helm chart, fetch also documentation for that source
chart.

Generate and fix the comments in `values.yaml` for the purpose of using `helm-docs`. Make sure the comments in
`values.yaml` file for each chart detected in the `helm/` directory are formatted according to the
documentation of the `helm-docs` project: https://github.com/norwoodj/helm-docs.

Ask the user if he also wants help with generation of missing comments for existing attributes. If the user
confirms, analyze the full `values.yaml` file and generate comments for attributes that miss them. All the
attributes are meant to be used in a context of a helm chart used to deploy and application on a kubernetes
cluster. Be succinct and specific.

At the same time, generate attributes' comments for the purpose of the
https://github.com/losisin/helm-values-schema-json tool. Read the docs available here to understand available
annotations: https://github.com/losisin/helm-values-schema-json/blob/main/docs/README.md. Do not use
annotations other than specified on this page. Assume the schema tool will be run in the `helm-docs`
compatibility mode, so don't change existing helm-docs comments. Where possible, use
`@schema $ref: $k8s/_definitions.json#` remote reference to reference a sub schema of a well known kubernetes
definition. Add schema to every attribute in the `values.yaml` file. As the very minimum, add `@schema: type`
attribute with the type based on the current value of the attribute. Make sure to always place the schema
related comment one line above the `helm-docs` one, so the one starting with `# --`.

## Step 4

Run all the tools with `pre-commit`. Execute the command `pre-commit run -a`. The command might exit with
error on the first run, when some of the files were modified by the executed tools. In that case run the
command again. If the command still fails, fix all the errors until the command finally passes.

Check if there's the tool `dabs.sh` available. If it's not, print a warning to the user that it was not found
and the full build and validation was not possible. If the tool is available, run this command for each chart
in the `helm` directory from the repository root: `dabs.sh -c helm/[DETECTED_HELM_CHART_NAME]`. If the command
fails, fix all the errors until the command finally passes.

If they don't exist, add information to the main repository's `README.md` file about the generated
per-helm-chart `README.md` files that describe the configuration values and about the generated schema files
that can be used to validate users' `values.yaml` files.

## Step 5

Commit the changes. Do the following:

1. Add an entry to the CHANGELOG.md file, if it exists.
2. Create a git commit adding all the new and modified files. Describe the commit as "chg: enable `helm-docs`
   and `helm schema` tools".
3. Create a pull request using MCP tools or using the `gh` CLI. If neither of these is present, generate a PR
   title and description and present it in a copy-paste-friendly format. Avoid the use of emoji in the PR
   description.
