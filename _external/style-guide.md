## Example Plugins Style Guide

This is a guide for our own benefit, with few rules that we should follow when writing example plugins.


### Manifest

The manifest should list keys in a sensible order, eg:

```
"name" : "SelectionChanged Example",
"description" : "Example plugin which handles the SelectionChanged action.",
"version" : "1.0",
"identifier" : "com.sketchapp.examples.selection-changed",
"author" : "Sam Deane",
"authorEmail" : "sam@sketchapp.com",
"commands" : [
    {
      "name" : "SelectionChanged Example",
      "identifier" : "selection-changed",
      "script" : "selection-changed.js",
      "handlers" : {
        "actions" : {
          "SelectionChanged.finish": "onSelectionChanged"
        }
    ],
  },
```

The bundle id should be com.sketchapp.examples.XXX, where XXX is the name of the plugin. Hyphens in the <name> part are fine, eg com.sketchapp.examples.selected-layers.

The author email should be a sketchapp.com address.

Handler names should be `onXXX`, where `XXX` is the name of the action to intercept, or "run", "setUp", "tearDown" etc for the other standard handlers.

For simple examples with only one command, the name should match the plugin name, the identifier can just be the last part of the plugin bundle's id, and the script name should match the name of the command.


## Comments

Don't include the version in the comment - it'll only get out of date with the one in the manifest!

## Code

Don't use Cocoa syntax.

Use ES5 syntax for functions etc.





```
