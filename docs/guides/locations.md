---
title: Plugin Locations
summary: Where plugins live, how to install/remove them
permalink: /guides/installing-plugins/
order: 350
---

When Sketch starts up, it scans a folder on your disk looking for Plugins.

```
~/Library/Application Support/com.bohemiancoding.sketch3/Plugins
```

_(~ here is shorthand for your home folder, e.g. `/Users/joe`)_

You can access this Plugins folder easily by holding `Alt` while opening the Plugins menu and then choosing 'Reveal Plugins Folder'.

### Installing Plugins

If you double-click a `.sketchplugin` file, Sketch will copy it into the Plugins folder for you. Any commands that it implements should immediately show up in the **Plugins** menu.

Alternatively, you can install plugins by simply moving them into the Plugins folder yourself.

_Note: Sketch also supports using aliases and links to individual Plugins, or to the Plugins folder itself. This allows you to place them elsewhere (for example, a Dropbox folder to keep multiple installs of Sketch synced)._

### Removing Plugins

To remove a Plugin, just select the **Plugins › Manage Plugins…** menu option, select the Plugin you want to remove from the list, and either right click the plugin or click the gear icon and select _Uninstall "Plugin Name"_:

![](/images/developer/plugin-uninstall.png)

Any commands that the Plugin provided will be removed from the **Plugins** menu immediately.

Alternatively, you can just uncheck any Plugin on the list to disable it without uninstalling it.
