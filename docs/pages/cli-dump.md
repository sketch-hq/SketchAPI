---
title: Dump JSON data
section: cli
chapter: Command-line interface
permalink: /cli/dump

order: 105
excerpt: Export a Sketch document to JSON
---

Before the open file format got introduced `sketchtool dump` allowed to export a Sketch document to JSON.

```sh
sketchtool dump /path/to/document.sketch
```

> **Note:** We strongly recommend [using the file format directly](/file-format) instad of `sketchtool dump` because the command uses an undocumented and different JSON structure than the file format.
