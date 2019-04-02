---
title: Use an external text editor
section: plugins
chapter: Guides
permalink: /plugins/external-text-editor

order: 110
---

## Define a code editor for Plugins

Have a favorite code editor? You can tell Sketch to use it to edit Plugins. For example, if you use [Atom](https://atom.io) you can do this:

```shell
defaults write com.bohemiancoding.sketch3 "Plugin Editor" "/usr/local/bin/atom"
```

and relaunch Sketch, you'll see a couple of new menu items:

- Go to Preferences › Plugins and right click any of the listed Plugins. You'll see an 'Edit Code…' option that will launch your editor with the selected Plugin's code open.
- Open the Plugins menu, and you'll see an 'Edit Plugins…' option, that will launch your editor with the whole 'Plugins' folder open.
