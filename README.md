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

The API exposed is deliberately thin at the moment, and primarily covers the following areas:

- obtaining the selected document, page, and layers
- iterating over the selection
- iterating over any page, artboard or group
- finding layers by name or id
- creating new layers

The approach taken is to wrap the native Sketch model objects inside javascript objects. These are thin wrappers, and contain no state - they just exist as a way to provide a cleaner and more stable coding interface to the underlying model.

The layer hierarchy is deliberately simplified, with all shape layers being treated the same way. Thus there are currently wrapper classes for the following layer types: `Page`, `Artboard`, `Group`, `Shape`, `Text`, `Image`.

On top of this sits a `Document` class for each document, and an `Application` class which is the root of the tree. It's an instance of this that you are given when you call `context.api()`, and it is this single object which gives you access to all the others.

One or two important properties of layers are exposed directly in the wrappers. For example `name`, `id`, and `frame`. Over time, more properties will be exposed this way, but for now you will often have to drop down to interrogating the underlying model object: `layer.sketchObject.`.

There is the beginning of a wrapper class `Style` for layer styles, but it's currently very simple. The plan here will be to allow a quick way to set up all the common properties of a style, in a way that is uniform and consistent.

On the `Application` class there is also some support for more global tasks such as reading/writing preferences. This stuff will be expanded over time.

The application object also exposes some utility classes. Currently the main one of note is `Rectangle`, which is a javascript-native representation of a rectangle. The plan is to use this class consistently within the API, in order to try to mask the fact that the model itself uses a confusing mix of `NSRect`, `CGRect`,  `MSRect` and `MSAbsoluteRect`! In time more utility classes may be added. In time, also, we hope to clean up the model to be more consistent, at which point `Rectangle` might just turn into a thin wrapper for one of the native types.

Finally, there is some crude support for interaction with the user via alerts/sheets and the messages area at the bottom of the canvas. This stuff is *not* final, and is currently just a re-working of some of our original code snippets. Ideally we'd like to come up with a more powerful and cleaner API to allow your plugin to interact with the user in a way that is consistent and compatible with the way Sketch itself interacts. It will probably take some time for us to get to this stuff!


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

Here's a very simple example script:

```javascript
var sketch = context.api()

log(sketch.apiVersion)
log(sketch.version)
log(sketch.build)
log(sketch.fullVersion)


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

For more examples, we recommend checking out the [examples section of the developer website](http://developer.sketchapp.com/examples/).

Happy coding!


## Acknowledgements

We would like to thank:

- [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us how to use node modules inside Sketch.
- The Sketch plugin community everywhere, for such awesome work.

## Development

If you want to build the library locally, you need to run this on the project's root folder (this assumes you already have [node](https://nodejs.org) installed):

```
npm install -g gulp
npm install
```

Once that's ready, you can run:

```
gulp
```

to compile the library. By default, it will be saved to `../SketchPluginManager/Source/SketchAPI.js`. You can specify your own output path by using the `--output` argument:

```
gulp --output Output/SketchAPI.js
```

To have Sketch use the .js file you just built, you can run this:

```
defaults write com.bohemiancoding.sketch3 SketchAPILocation "/path/to/SketchAPI.js"
```

and Sketch will load the external .js file instead of the bundled version.

### Testing

Each class has it's own series of tests. For example:

```javascript
"testInset" : function(tester) {
  var r = new Rectangle(0, 0, 40, 40)
  r.inset(5, 10)
  tester.assertEqual(r.x, 5)
  tester.assertEqual(r.y, 10)
  tester.assertEqual(r.width, 30)
  tester.assertEqual(r.height, 20)
},
```

There are 3 assert test functions:
```javascript
assertEqual
assertTrue
assertFalse
```

To run all of the tests launch Sketch and open the custom script editor through Plugins > Custom Plugin...

Then, paste the following into the editor to check for any failures:

```javascript
var sketch = context.api();
log(sketch.runUnitTests().failures);
```
