---
title: Command line interface
section: cli
permalink: /cli/

redirect_from:
  - /guides/sketchtool/

order: 2
---

Sketch includes `sketchtool`, a command line interface to export assets, inspect documents and run plugins.

> **Important:** The Sketch command line interface is free to use but requires a valid license to run plugins. `sketchtool` is provided "as is" without warranty of any kind.

## Usage

The `sketchtool` binary is located within the Sketch application bundle.

```sh
Sketch.app/Contents/Resources/sketchtool/bin/sketchtool
```

To run `sketchtool` from anywhere on the command line, add the cli location to `$PATH` or use a convenience script to look up the correct path using `mdfind`.

```sh
#!/bin/sh

SKETCH=$(mdfind kMDItemCFBundleIdentifier == 'com.bohemiancoding.sketch3' | head -n 1)

# pass on all given arguments
"$SKETCH/Contents/Resources/sketchtool/bin/sketchtool" $@
```

> **Note:** `sketchtool` requires macOS 10.11 or later.

## Versioning

Each Sketch release includes its own `sketchtool`. If your application is designed to work with a specific version of Sketch, make sure to use the correct path to the command.
