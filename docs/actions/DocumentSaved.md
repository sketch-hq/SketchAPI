---
title: DocumentSaved
summary: Triggered when a document is saved
documented: true
---

This action is triggered when a document is saved.

This can happen in a number of situations:

- when the user manually saves a document
- when a document is auto-saved by the operating system

## Action Context

The action context for this action contains three keys:

- `document`: The document where the action was triggered
- `size`: The filesize of the saved document, in bytes
- `autoSaved`: A BOOL that is `true` if the document was auto saved by the operating system, and `false` otherwise