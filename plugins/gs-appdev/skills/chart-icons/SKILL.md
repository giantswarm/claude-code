---
name: chart-icons
description: Knowledge about application icons at Giant Swarm.
---

## Goal

We want to represent every application we maintain, especially the customer-facing ones, with an icon. This helps users quickly identify the application and adds a visual element to our documentation and interfaces.

## Icon Sources

- We serve icons on our own server https://s.giantswarm.io/
- The source repository for that service is https://github.com/giantswarm/web-assets
- For example, the file https://github.com/giantswarm/web-assets/blob/main/assets/app-icons/kueue/1/light.svg is published as https://s.giantswarm.io/app-icons/kueue/1/light.svg

## Dealing with the web-assets repository

- App icons are stored under https://github.com/giantswarm/web-assets/tree/main/assets/app-icons
- In the app-icons directory, each icon is stored in a dedicated subdirectory, e. g. `athena`.
- Within each app icon subdirectory, there are version subdirectories, e. g. `1`, `2`, etc.
- We never overwrite files in the repository. Instead we add new versions.
- To add an icon, create a PR to the repository with the new files. After merging, create a release (minor bump). This is triggered by pushing the `main#release#minor` branch, as typical within Giant Swarm.

## File naming

- We want to store two versions of each icon: one for a light background and one for a dark background. The file names should be `light.svg` and `dark.svg` respectively.
- If you only have one version of the icon available, store the same file as both `light.svg` and `dark.svg`.

## Image format

- We prefer the SVG format.
- Icons are supposed to have a square aspect ratio, but we can also accept rectangular icons if they are designed to be used in a square format (e. g. with transparent padding).
- In case you provide a raster image (e. g. PNG), make sure it has a high enough resolution (minimum 200x200 pixels, ideal and maximum 512x512 pixels).

## Icon content

- The icon is supposed to be shown in very small sizes, so it should be simple and not contain too much detail.
- A logo like "Giant Swarm" next to the Bant mascot is not a useful icon! It has too much detail and the wrong aspect ratio.

## Finding icons

- Many upstream projects have their icon on the website or in documentation.
- If you don't find anything there, try a web search.
- For an application built within Giant Swarm originally, please ask for help designing the icon for you.
