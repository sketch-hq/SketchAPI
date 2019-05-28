---
title: Overview
section: file-format
chapter: Reference files
permalink: /file-format/reference

order: 101
excerpt: Reference files overview
---

While the JSON encoded Sketch [File Format](/file-format) is both human and machine-readable, it is nevertheless something of a moving target since the underlying schema is subject to potential change with each new version of Sketch.

When files with an older schema are opened in a newer version of Sketch the application will attempt to automatically apply some migrations, although this approach will fail once the versions diverge sufficiently (see `compatibilityVersion` discussion on the [versioning](/file-format/versioning) page).

In order to aid integration developers and those working manually with the Sketch file format outside of the SketchAPI this section of the documentation attempts to shed some light on these schema changes over time. This involves a set of _reference files_ which illustrate the result of invoking common plugin activities for a specific version of Sketch.
