---
title: ExportSlices
summary: Triggered whenever the user exports some artboards, layers or slices
documented: true
---

{{page.summary}}

## Action Context

The action context for this action contains two keys:

- `document`: the document that the change occurred in. **Note:** currently, this is an instance of `MSImmutableDocumentData`, and not the more usual `MSDocument` instance. This is likely to be corrected in a future update of Sketch.
- `exports`: a list of the items that were exported. Each entry in this list is a dictionary -- see [Exports List](#exports-list) below for more details.

## Exports List

Each entry in the `exports` property of the action context is a dictionary containing two keys:

- `request`: an `MSExportRequest` object, which contains the details of the export, such as the scale, the format, whether trimming was enabled, and so on.
- `path`: the path of the exported file on disc. Examining the file extension of this path is a quick way to filter out exports of a particular type (eg ".svg").

## Example

For an example of this action, see [the SVGO Export Plugin]({{ site.github_repo }}/tree/develop/examples/svgo-export/)
