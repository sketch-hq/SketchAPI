---
title: ArtboardChanged
summary: Triggered when the current Artboard changes
documented: true
---

This action is triggered when the current Artboard changes.

This can happen in a number of situations:

- when an Artboard is added to the document
- when an Artboard is selected
- when an Artboard is removed

## Action Context

The action context for this action contains three keys:

- `document`: The document where the action was triggered
- `oldArtboard`: The previously active Artboard
- `newArtboard`: The newly selected Artboard (this can be `null` if the action was triggered by removing an Artboard, for example)