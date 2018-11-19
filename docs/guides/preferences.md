---
title: Dev Environment
summary: Some preferences to make developing Plugins a bit more pleasant
permalink: /guides/preferences/
redirect_from: /introduction/preferences/
order: 120
---

If you spend non-trivial amounts of time developing Plugins for Sketch, there are some improvements you can make to your workflow using these preferences.

Since not all Sketch users are Plugin developers, it didn't make sense to give these preferences a UI in the Preferences panel. You'll need to use Terminal.app to enable / disable them.

## Disable safe mode reload behavior when your plugin crashes Sketch

If a plugin crashes sketch, we disable plugins when relaunching sketch to make sure users don't end up in an infinite crashing loop. When developing a plugin, it might crash Sketch before you fix the bug and this behavior can become annoying as you need to go to the plugin menu to re-enable you plugin. You can use `defaults write com.bohemiancoding.sketch3 disableAutomaticSafeMode true` to disable that behavior.

If you’re using the Beta version, you’ll need to run `defaults write com.bohemiancoding.sketch3.beta disableAutomaticSafeMode true`.

If you want to restore the default behaviour, run `defaults delete com.bohemiancoding.sketch3 disableAutomaticSafeMode`.


## Listen to all actions in the Action API

<p class="warning">
  <strong>Warning:</strong> This is an extremely expensive operation, and will impact Sketch’s performance. Please use this <em>on your development system only</em> and <strong>never enable this on a customer’s computer</strong>.
</p>

When working with the new [Action API](/reference/action/) you might want to listen to multiple events (specially when trying to find _which_ event is the one you want to use).

To do that, use the `actionWildcardsAllowed` preference. If set to `YES`, scripts are allowed to register a wildcard handler for events. This is off by default, and it could have a bad effect on performance, so handle it with care.

```shell
defaults write com.bohemiancoding.sketch3 actionWildcardsAllowed -bool YES
```

Once you do that, you can tell your Plugin to call a method for every action by adding a `*` key to your `handlers.actions` object in `manifest.json`:

```diff
{
  ...
  "handlers": {
+    "actions": {
+      "*": "onActionHandler"
+    }
  }
  ...
}
```

## Always reload scripts before running

For performance reasons, Sketch caches the contents of the Plugins folder. This is very convenient for users, since Plugins run very fast, but makes your life hard if you’re a developer. That’s why we added a preference to disable this caching mechanism and force Sketch to always reload a Plugin’s code from disk:

```shell
defaults write com.bohemiancoding.sketch3 AlwaysReloadScript -bool YES
```

If you enable this, as soon as you save your script it will be ready for testing in Sketch (bye bye relaunching it just to test a small change!)

Please note that this setting determines whether the source of the script is reloaded from disc whenever Sketch makes a new javascript context for the script. If it’s `NO`, the source is cached, if it’s `YES`, the source is always reloaded from disc.

What it doesn’t do, however, is change when a new JavaScript context is made. For long-running scripts, the same context is held in memory (it has to be — the running script is using it) until the script exits. So if you’re testing a long-running script, you will still have to find a way to stop the script, so that the context gets thrown away (that usually means relaunching Sketch, or setting `coscript.setShouldKeepAround(false)`).

### Always restarting sketch after changes to plugin JavaScript

If you find yourself in the latter category, of needing to restart long-running JavaScript contexts regularly during development, the unix utility [`entr`](http://entrproject.org/) may come in handy. Given a list of files on stdin, it will run a command (or restart a long-running process given `-r`) every time one of those files is modified:

`find /your/plugin/build/dest -name '*js' | entr -r /Applications/Sketch.app/Contents/MacOS/Sketch`

#### In conjunction with WebView JavaScript

And if you so happen to also have WebView JavaScript that doesn't require rebooting Sketch (because right-click + reload is fine), just make sure to avoid passing those files to `entr`:

`find ... | grep -v 'web\.js' | entr ...`


## Inspect a WebView

If your plugin is using a WebView, chances are that you will need to inspect it at some point.

To do so, you need to add the preference:

```shell
defaults write com.bohemiancoding.sketch3 WebKitDeveloperExtras -bool true
```

Then you can simply right-click on your webview and click on `Inspect`. The inspector should show up.


## Define a code editor for Plugins

Have a favorite code editor? You can tell Sketch to use it to edit Plugins. For example, if you use [Atom](https://atom.io) you can do this:

```shell
defaults write com.bohemiancoding.sketch3 "Plugin Editor" "/usr/local/bin/atom"
```

and relaunch Sketch, you'll see a couple of new menu items:

* Go to Preferences › Plugins and right click any of the listed Plugins. You'll see an 'Edit Code…' option that will launch your editor with the selected Plugin's code open.
* Open the Plugins menu, and you'll see an 'Edit Plugins…' option, that will launch your editor with the whole 'Plugins' folder open.

## Tweak the 'Custom Plugin…' editor

To change the font used in the 'Run Script…' panel (for example, to use SF Mono) you can do this:

```shell
defaults write com.bohemiancoding.sketch3 scriptEditorFont "SF Mono Light"
```

To go back to the default (Andale Mono), just delete the preference:

```shell
defaults delete com.bohemiancoding.sketch3 scriptEditorFont
```

To change the font size for the editor (the default is 12), use

```shell
defaults write com.bohemiancoding.sketch3 scriptEditorFontSize 14
```
