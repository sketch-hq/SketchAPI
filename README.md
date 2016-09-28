# Sketch API

This is a prototype Javascript API for Sketch.

The intention is to make something which is:

- native Javascript
- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
- still allows you to drop down to our internal API when absolutely necessary.

Comments and suggestions for this API are welcome - send them to developers@sketchapp.com, or hack on the code and send us a pull request at https://github.com/BohemianCoding/SketchAPI.

The API comes bundled inside Sketch, so no installation is required. You access it by obtaining a root "sketch" object via the context that's passed to your script, like so:

```javascript
var sketch = context.api()
```

Calls to this object then give you access to the rest of the API.


## Overview

The approach that the API takes is to wrap the native Sketch model objects inside javascript objects.

These are thin wrappers, and contain no state - they just exist as a way to provide a cleaner and more stable coding interface to the underlying model.


## Performance and Identity

Because the API objects are thin wrappers, they are created on demand and are thrown away regularly.

No attempt is made to have a one-to-one correspondence between wrapper and model object - many wrapper instances may exist which point to the same model object.

This is not the most efficient solution in some respects, but it's pragmatic and works well for simple cases.

If you have a performance issue where you're iterating across very large numbers of model objects, you may need to drop down to a more direct access.

Because multiple wrappers might exist for a given model object, if you're testing two for equality, you should test the things that they wrap, rather than the wrapper objects themselves:

```javascript
if (obj1 == obj2)                           { /* do stuff */ }    // this is probably not what you meant
if (obj1.sketchObject == obj2.sketchObject) { /* do stuff */ }    // this is better - both wrappers might represent the same object
```





## Usage

Example script:

```javascript
var sketch = context.api()

log(sketch.api_version)
log(sketch.version)
log(sketch.build)
log(sketch.full_version)


var document = sketch.selectedDocument;
var selection = document.selectedLayers;
var page = document.selectedPage;

var group = page.newGroup({frame: new sketch.Rectangle(0, 0, 100, 100), name:"Test"});
var rect = group.newShape({frame: new sketch.Rectangle(10, 10, 80, 80)});

log(selection.isEmpty);
selection.iterate(function(item) { log(item.name); } );

selection.clear();
log(selection.isEmpty);

group.select();
rect.addToSelection();

sketch.getStringFromUser("Test", "default");
sketch.getSelectionFromUser("Test", ["One", "Two"], 1);
sketch.message("Hello mum!");
sketch.alert("Title", "message");
```

## Acknowledgements

We would like to thank:

- [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us how to use node modules inside Sketch.
- The Sketch plugin community everywhere, for such awesome work.
