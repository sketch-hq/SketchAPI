# Sketch API

This is a prototype Javascript API for Sketch. It's still a work in progress, but the intention is to make something which is:

* native Javascript
* an easily understandable subset of the full internals of Sketch
* fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
* still allows you to drop down to our internal API when absolutely necessary.

The idea is to keep this API as lean-and-mean as possible. The main reason for that is that if we (Bohemian) are committing ourselves to making sure that we don't break it, then it's essential that doing so doesn't become an unmanageable task.

> The API would be a very core layer which interfaces with Sketch itself. Even with the small amount that I've done so far, I can definitely see the temptation to broaden the API and add lots of convenience methods and/or higher-level code that builds on the API. I think that's something that we should do as a community, but it makes sense to try to keep it separate from the core API effort. — @samdeane

![api layers](https://cloud.githubusercontent.com/assets/206306/19645098/f7d3615c-99ea-11e6-962a-439fb553bf2d.png)

There's no reason why we couldn't maintain two libraries, and have the utilities one _only_ work with calls to the _api_ one. That could have a lot more community input, and as long as it just calls the API, it should stay stable (if the API does!).

Again, this is very much a work in progress, so comments and suggestions for this API are welcome - send them to developers@sketchapp.com, or open an issue to have a public discussion.

## Installation

The API comes bundled inside Sketch, so no installation is required. You access it by obtaining a global `SketchAPI` object:

```javascript
var api = SketchAPI
```

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

On `api.Settings`, there is also some support for more global tasks such as reading/writing preferences.

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
if (obj1.isEqual(obj2.sketchObject)) {
  /* do stuff */
}
```

## Usage

Here's a very simple example script:

```javascript
var api = SketchAPI

log(api.version.api)
log(api.version.sketch)

var document = api.fromNative(context.document)
var selection = document.selectedLayers
var page = document.selectedPage

var Group = api.Group
var Shape = api.Shape

var group = new Group({
  parent: page,
  frame: new sketch.Rectangle(0, 0, 100, 100),
  name: 'Test',
})
var rect = new Shape({
  parent: group,
  frame: new Sketch.rectangle(10, 10, 80, 80),
})

log(selection.isEmpty)
selection.layers.forEach(function(item) {
  log(item.name)
})

selection.clear()
log(selection.isEmpty)

group.select()
rect.addToSelection()

var outputString = api.UI.getStringFromUser('Test', 'default')
var outputSelection = api.UI.getSelectionFromUser('Test', ['One', 'Two'], 1)
api.UI.message(document, 'Hello mum!')
api.UI.alert('Title', 'message')

api.Settings.setSettingForKey(context, 'setting-to-remember', outputString)
log(api.Settings.settingForKey(context, 'setting-to-remember'))
```

For more examples, we recommend checking out the [examples section of the developer website](http://developer.sketchapp.com/examples/).

Happy coding!

## Development

The API is organised as a series of files defining javascript classes, and written with ES6 syntax.

However, the version that is embedded in Sketch is a single minified and transpiled library file called `SketchAPI.js`.

If you want to build this library file locally, you need to have [node](https://nodejs.org) installed, and then to run the following in the project's root folder:

```
npm install --no-shrinkwrap
```

Once that's ready, you can run:

```
npm start
```

to compile the library. By default, it will be saved to `../SketchPluginManager/Source/SketchAPI.js` (which is where the build process for Sketch expects to find it).

Unless you're part of the Bohemian team and are actually building Sketch, you'll probably want to put it somewhere else. You can specify your own output path by running

```
npm config set sketch-api:output your/output/path/file.js
```

To restore the default setting, run

```
npm config delete sketch-api:output
```

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

## Acknowledgements

We would like to thank:

* [Logan Collins](https://github.com/logancollins) for [Mocha](https://github.com/logancollins/Mocha), which powers Cocoascript.
* [Gus Mueller](https://github.com/ccgus) for [Cocoascript](https://github.com/ccgus/CocoaScript), which powers our plugin engine.
* [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us a clean way to use node modules inside Sketch.
* The Sketch plugin community everywhere, for such awesome work.
