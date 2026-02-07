---
description: Specify a proper icon for a Helm chart
---

The goal is to help the user update the `Chart.yaml` file(s) of one or several Helm charts within a repository so that they provide a representative icon.

Make sure to read the chart-icons skill.

1. If you don't have a repository as a context, ask the user to provide a Github URL or a path.

2. Check what Helm charts are in the given repository. Look for subdirectories of the `helm` directory that contain a `Chart.yaml` file.

3. For each chart, check if it has an `icon` field in the `Chart.yaml` file.

4. If a chart has no icon, or the icon URL is not on the `s.giantswarm.io` server, make a TODO to update that icon. However, if a chart has an icon that is already on the `s.giantswarm.io` server, ask the user whether that icon can be kept.

5. For each chart that needs an icon update, gather information about the application the chart deploys. For example, if this is a third party application, try to determine which upstream project this is coming from.

   Now the goal is to find an appropriate icon.
   
   - Check in the web-assets repository whether there already is a promising candidate in the app-icons directory.
   - Try to find an SVG icon on their website or in their documentation site or repository. Present the URLs of image files found to the user, so they can review and select the most appropriate one.

6. If you found a new icon, guide the user in adding it to the web-assets repository.

7. Add the according `s.giantswarm.io` URL for the light-background version in Chart.yaml.

8. Update the changelog of your chart repository, create a pull request, get it approved. Note: CI will likely fail as long as that icon URL is not yet available.

9. Inform the user about the next steps: Get the PR merged, release the chart repository as a patch bump.
