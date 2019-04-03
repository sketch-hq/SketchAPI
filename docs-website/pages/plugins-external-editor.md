---
title: Use an external text editor
section: plugins
chapter: Guides
permalink: /plugins/external-text-editor

order: 110
---

Use your favourite text editor such as [Atom](https://atom.io) or [Visual Studio Code](https://code.visualstudio.com) to write Sketch plugins by setting a user defaults on the command-line.

```shell
defaults write com.bohemiancoding.sketch3 "Plugin Editor" "/usr/local/bin/code"
```

**Note:** Restart Sketch for the changes to take effect.

### Usage

Open _Preferences_ › _Plugins_ from the menu and show the context menu on the plugin of the plugin you want to edit and select _Edit Code…_.

<img src="/images/developer/plugin-edit-code.png"
     alt="Run script menu"
     width="626" />