---
title: Run a script
section: plugins
chapter: Guides
permalink: /plugins/run-a-script

order: 100
---

Sketch can run scripts from two places:

1. The built-in script editor in the _Plugins_ menu
2. A JavaScript file [bundled with a plugin](/plugins/plugin-bundle)

## 1. Write a script using the built-in script editor

The script editor provides full access to the JavaScript API and Internal API.

<img src="/images/developer/menu-run-script.png"
     alt="Run script menu"
     width="235" />

1. Open a new or existing file in Sketch
2. Select _Run Script…_ from the _Plugins_ menu or use the keyboard shortcut `control + shift + k` to bring up the code editor
3. Paste in the code below

```javascript
const sketch = require('sketch')

sketch.UI.message('Hello Sketch 👋')
```

## 2. Run the script

Click _Run_ in the script panel or use `command + return` keyboard shortcut and a message will be shown at the bottom of your Sketch Document window saying _Hello Sketch 👋_.

<img src="/images/developer/ui-message.png"
     alt="Message shows after running the script"
     width="167" />

## 3. Save the script as a plugin

Save the script as a plugin to use it later by clicking the _Save_ button in the _Run Script…_ panel.

1. Enter a name for the plugin, e.g. _show message_
2. Click _Save_

The newly created plugin is now available from the _Plugins_ menu.

<img src="/images/developer/plugin-command.png"
     alt="The save script is available as a command from the plugins menu"
     width="347" />

## Next Steps

Check out these resources to learn more about plugins.

- [Plugin bundles](/plugins/plugin-bundle)
- [JavaScript API](/plugins/javascript-api)
