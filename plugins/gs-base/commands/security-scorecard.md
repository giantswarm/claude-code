---
description: Check OSSF Security Scorecard for a given GitHub repository
---

1. Determine which repository to check.

   If the current workspace is a clone of a GitHub repository, use that repository's owner and name.
   
   If you don't know which repository to fetch OSSF info for, ask the user for the name of the repository. Example: `giantswarm/hello-world-app`. If the no owner is provided, assume giantswarm.

2. Construct the URL to fetch the OSSF Security Scorecard for the given repository in the following format:

   https://api.scorecard.dev/projects/github.com/:owner/:repository

3. Fetch the OSSF Security Scorecard data from the constructed URL.

4. If no results were found, first attempt to verify that the GitHub repository exists and is public.

   If the repo exists and is public, check if the repository has the `zz_generated.run_ossf_scorecard.yaml` workflow and it has been executed successfully. (Example: https://github.com/giantswarm/hello-world-app/actions/workflows/zz_generated.run_ossf_scorecard.yaml)

   If this is not the case, inform the user that the repository needs to have the workflow set up and executed successfully for the OSSF Security Scorecard data to be available.

4. Parse the JSON response to extract relevant security metrics such as:

   - Overall Score
   - Issues to take action on

5. Offer further analysis or recommendations based on the extracted security metrics.
