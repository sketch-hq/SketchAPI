# Sketch API

This is a JavaScript API for Sketch. The intention is to make something which is:

- Idiomatic JavaScript.
- An easily understandable subset of the full internals of Sketch.
- Fully supported by Sketch between releases (ie. we try not to change it, unlike our internal API which we can and do change whenever we need to).
- Still allows you to drop down to our internal API when absolutely necessary.

This API is a very core layer which interfaces with Sketch itself. It's intentionally simple, and we want to keep it that way. If you feel like adding some high-level code to it, it’s probably better to add it to a community-maintained library that can be used on top of the API, and keep it separate from the core API effort.

![API layers](https://cloud.githubusercontent.com/assets/206306/19645098/f7d3615c-99ea-11e6-962a-439fb553bf2d.png)

_Comments and suggestions for this API are welcome - [file an issue](https://github.com/sketch-hq/SketchAPI/issues) to discuss it or send them to developer@sketch.com._

## Usage

The full documentation is available on [developer.sketch.com/reference/api](https://developer.sketch.com/reference/api).

Here's a very simple example script:

```js
// access the Sketch API - comes bundled inside Sketch, so no "installation" is required
var sketch = require('sketch')

// get the current Document and Page
var document = sketch.getSelectedDocument()
var page = document.selectedPage

var Group = sketch.Group
var Shape = sketch.Shape
var Rectangle = sketch.Rectangle

// create a new Group belonging to the current Page
var group = new Group({
  parent: page,
  frame: new Rectangle(0, 0, 100, 100),
  name: 'Test',
  selected: true,
})
// create a new rectangle Shape belonging to the previously created Group
var rect = new Shape({
  parent: group,
  frame: new Rectangle(10, 10, 80, 80),
})

// get the current selection
var selection = document.selectedLayers

console.log(selection.isEmpty)
selection.forEach(function (item) {
  console.log(item.name)
})

// deselect all the layers
selection.clear()
console.log(selection.isEmpty)

// select the rectangle we created
rect.selected = true
console.log(selection.isEmpty)

// ask the user for a string
sketch.UI.getInputFromUser(
  'Test',
  {
    type: 'String',
    initialValue: 'default',
  },
  (err, outputString) => {
    if (err) {
      return
    }
    // store the string in the settings
    // it will be remembered even when Sketch closes
    sketch.Settings.setSettingForKey('setting-to-remember', outputString)
    console.log(sketch.Settings.settingForKey('setting-to-remember'))

    sketch.UI.getInputFromUser(
      'Test',
      {
        type: 'Selection',
        possibleValues: ['Sketch', 'Paper'],
      },
      (err, outputSelection) => {
        if (err) {
          return
        }
        sketch.UI.message('Hello mum!')
        sketch.UI.alert('Title', outputSelection)
      }
    )
  }
)
```

For more examples, we recommend checking out the [examples section of the developer website](https://developer.sketch.com/examples/).

Happy coding!

## Development

This section of the readme is related to developing SketchAPI locally. If you're just interested in using SketchAPI to write Sketch Plugins you can stop reading here.

You'll need the following tools available on your system to work on this repository:

- Node 10 or greater

### Overview

SketchAPI is written in JavaScript, as a collection of files in the `./Source` folder.

Webpack is used to bundle the files, and we include this in each release of Sketch. However you can build, run and test SketchAPI locally too - continue reading to find out how.

### Build and run

Following these steps will allow you to build the source files, and inject the changes into your local copy of Sketch to see the results.

Any plugins you have installed or code you invoke in Sketch's _Plugins > Run Script_ dialogue box will run against your changed version of SketchAPI.

1. Checkout this repository.
1. Make your copy of Sketch use your local version of SketchAPI, rather than the one it has built-in. The value below should be an absolute path to the repository checkout location with `/build` appended.
   ```sh
   defaults write com.bohemiancoding.sketch3 SketchAPILocation "/path/to/your/SketchAPI/build"
   ```
1. Ensure you've installed the dependencies with npm, and then build SketchAPI.
   ```sh
   npm install
   npm run build
   ```
1. Start Sketch and your changes will be picked up.

> ⚠️ If you re-build SketchAPI by running `npm run build` again while Sketch is open you won't see your changes automatically reflected. You'll need to restart Sketch for this to happen.

> ⚠️ Once you've finished working on SketchAPI don't forget to stop Sketch using your customised version, to do this run:<br/>`defaults delete com.bohemiancoding.sketch3 SketchAPILocation`.

### Testing

The `*.test.js` files in this repository are integration tests that run in Sketch's plugin environment, using the skpm test runner.

To run these tests using your current version of the Sketch as the host environment invoke:

```bash
npm run test
```

Alternatively if you want to run the tests with a specific app binary run:

```bash
SKETCH_PATH=/path/to/sketch.app npm run test
```

> ℹ️ There is no need to re-build SketchAPI between test runs or use `defaults write` to set the API location; the test runner handles re-compiling test and source files and injecting them into Sketch.

## Website

This reposiotry also contains the content for https://developer.sketch.com, which is hosted on Netlify.

The website’s contents live in the [`docs`](./docs) folder, while code related to the website’s build process lives in the [`docs-website`](./docs-website) folder.

For further details read the docs-website [README](./docs-website/README.md).

## Acknowledgements

We would like to thank:

- [Logan Collins](https://github.com/logancollins) for [Mocha](https://github.com/logancollins/Mocha), which powers Cocoascript.
- [Gus Mueller](https://github.com/ccgus) for [Cocoascript](https://github.com/ccgus/CocoaScript), which powers our plugin engine.
- [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us a clean way to use node modules inside Sketch.
- The Sketch plugin community everywhere, for such awesome work.
