---
title: Overview
section: file-format
chapter: Reference files
permalink: /file-format/reference

order: 101
excerpt: Reference files overview
---

While the JSON encoded Sketch [File Format](/file-format) is both human and machine-readable, the format may change with each new version of Sketch.

When files with an older schema are opened in a newer version of Sketch the application will automatically apply migrations, although this approach can fail if the versions are incompatible (see `compatibilityVersion` discussion on the [versioning](/file-format/versioning) page).

In order to help integration developers and those working manually with the Sketch file format outside of the SketchAPI this section of the documentation shows how the schema changes over time. This involves a set of _reference files_ which are the result of running a set of example plugins for a specific version of Sketch.
