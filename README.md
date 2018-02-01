# Sketch API

This is a prototype Javascript API for Sketch. It's still a work in progress, but the intention is to make something which is:

* native Javascript
* an easily understandable subset of the full internals of Sketch
* fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
* still allows you to drop down to our internal API when absolutely necessary.

This API is a very core layer which interfaces with Sketch itself. It's intentionally simple, and we want to keep it that way. If you feel like adding some high-level code to it, it’s probably better to add it to a community-maintained library that can be used on top of the API, and keep it separate from the core API effort.

![api layers](https://cloud.githubusercontent.com/assets/206306/19645098/f7d3615c-99ea-11e6-962a-439fb553bf2d.png)

Comments and suggestions for this API are welcome - send them to developers@sketchapp.com, or [file an issue](https://github.com/BohemianCoding/SketchAPI/issues) to discuss it.

## Installation

The API comes bundled inside Sketch, so no installation is required. You access it by obtaining a root "sketch" object via the context that's passed to your script, like so:

```javascript
var sketch = context.api()
```


Sketch API
This is a prototype Javascript API for Sketch.

The intention is to make something which is:

native Javascript
an easily understandable subset of the full internals of Sketch
fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
still allows you to drop down to our internal API when absolutely necessary.
Comments and suggestions for this API are welcome - send them to developers@sketchapp.com, or hack on the code and send us a pull request at https://github.com/BohemianCoding/SketchAPI.

The API comes bundled inside Sketch, so no installation is required. You access it by obtaining a root "sketch" object via the context that's passed to your script, like so:

var sketch = context.api()

Calls to this object then give you access to the rest of the API.

## Overview

The API exposed is deliberately thin at the moment, and primarily covers the following areas:

* obtaining the selected document, page, and layers
* iterating over the selection
* iterating over any page, artboard or group
* finding layers by name or id
* creating new layers

The approach taken is to wrap the native Sketch model objects inside javascript objects. These are thin wrappers, and contain no state - they just exist as a way to provide a cleaner and more stable coding interface to the underlying model.

The layer hierarchy is deliberately simplified, with all shape layers being treated the same way. Thus there are currently wrapper classes for the following layer types: `Page`, `Artboard`, `Group`, `Shape`, `Text`, `Image`.

On top of this sits a `Document` class for each document.

One or two important properties of layers are exposed directly in the wrappers. For example `name`, `id`, and `frame`. Over time, more properties will be exposed this way, but for now you will often have to drop down to interrogating the underlying model object: `layer.sketchObject.`.

There is the beginning of a wrapper class `Style` for layer styles, but it's currently very simple. The plan here will be to allow a quick way to set up all the common properties of a style, in a way that is uniform and consistent.

On `sketch.Settings`, there is also some support for more global tasks such as reading/writing preferences.

The api object also exposes some utility classes. Currently the main one of note is `Rectangle`, which is a javascript-native representation of a rectangle. The plan is to use this class consistently within the API, in order to try to mask the fact that the model itself uses a confusing mix of `NSRect`, `CGRect`, `MSRect` and `MSAbsoluteRect`! In time more utility classes may be added. In time, also, we hope to clean up the model to be more consistent, at which point `Rectangle` might just turn into a thin wrapper for one of the native types.

Finally, there is some crude support for interaction with the user via alerts/sheets and the messages area at the bottom of the canvas. This stuff is _not_ final, and is currently just a re-working of some of our original code snippets. Ideally we'd like to come up with a more powerful and cleaner API to allow your plugin to interact with the user in a way that is consistent and compatible with the way Sketch itself interacts. It will probably take some time for us to get to this stuff!

## Performance and Identity

Because the API objects are thin wrappers, they are created on demand and are thrown away regularly.

No attempt is made to have a one-to-one correspondence between wrapper and model object - many wrapper instances may exist which point to the same model object.

This is not the most efficient solution in some respects, but it's pragmatic and works well for simple cases.

If you have a performance issue where you're iterating across very large numbers of model objects, you may need to drop down to a more direct access.

Because multiple wrappers might exist for a given model object, if you're testing two for equality, you should test the things that they wrap, rather than the wrapper objects themselves:

```javascript
// this is probably not what you meant
if (obj1 == obj2) {
  /* do stuff */
}

// this is better - both wrappers might represent the same object
if (obj1.isEqual(obj2)) {
  /* do stuff */
}
```

## Usage

Here's a very simple example script:

```javascript
log(sketch.version.api)
log(sketch.version.sketch)

var document = sketch.fromNative(context.document)
var selection = document.selectedLayers
var page = document.selectedPage

var Group = sketch.Group
var Shape = sketch.Shape
var Rectangle = sketch.Rectangle

var group = new Group({
  parent: page,
  frame: new Rectangle(0, 0, 100, 100),
  name: 'Test',
})
var rect = new Shape({
  parent: group,
  frame: new Rectangle(10, 10, 80, 80),
})

log(selection.isEmpty)
selection.layers.forEach(function(item) {
  log(item.name)
})

selection.clear()
log(selection.isEmpty)

group.select()
rect.addToSelection()

var outputString = sketch.UI.getStringFromUser('Test', 'default')
var outputSelection = sketch.UI.getSelectionFromUser('Test', ['One', 'Two'], 1)
sketch.UI.message('Hello mum!')
sketch.UI.alert('Title', 'message')

sketch.Settings.setSettingForKey(context, 'setting-to-remember', outputString)
log(sketch.Settings.settingForKey(context, 'setting-to-remember'))
```

For more examples, we recommend checking out the [examples section of the developer website](http://developer.sketchapp.com/examples/).

Happy coding!

## Development

The API is organised as a series of files defining javascript classes, and written with ES6 syntax.

However, the version that is embedded in Sketch is a single minified and transpiled library file called `SketchAPI.js`.

If you want to build this library file locally, you need to have [node](https://nodejs.org) installed, and then run the following in the project's root folder:

```
npm install --no-shrinkwrap
```

Once that's ready, you can run:

```
npm start
```

to compile the library. By default, it will be saved to `./build/SketchAPI.js`.

For your convenience, you can use

```
npm run watch
```

and a script will watch for any change in the `Source` folder, and build the .js file when anything has changed.

To test your changes, you need to get Sketch to use the version of `SketchAPI.js` you just built, instead of the one embedded inside it.

To do this you can run:

```
defaults write com.bohemiancoding.sketch3 SketchAPILocation "/path/to/your/SketchAPI.js"
```

Sketch will then load the external .js file instead of the bundled version.

### Testing

To run the tests, you can use

```
npm run test
npm run test:watch
```

If you want to run the tests with a specific version of Sketch, you can use

```
SKETCH_PATH=/path/to/sketch.app npm run test
```

## Acknowledgements

We would like to thank:

* [Logan Collins](https://github.com/logancollins) for [Mocha](https://github.com/logancollins/Mocha), which powers Cocoascript.
* [Gus Mueller](https://github.com/ccgus) for [Cocoascript](https://github.com/ccgus/CocoaScript), which powers our plugin engine.
* [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us a clean way to use node modules inside Sketch.
* The Sketch plugin community everywhere, for such awesome work.
