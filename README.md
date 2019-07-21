WHEEEEEE
This is so much fun.
Bunnies waz 'ere. And there! Everywhere!
SNAX.
All gone.
Still gone.
Snax will be back in the morning.


# Sketch API

This is a JavaScript API for Sketch. The intention is to make something which is:

- idiomatic JavaScript
- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie. we try not to change it, unlike our internal API which we can and do change whenever we need to)
- still allows you to drop down to our internal API when absolutely necessary

This API is a very core layer which interfaces with Sketch itself. It's intentionally simple, and we want to keep it that way. If you feel like adding some high-level code to it, it’s probably better to add it to a community-maintained library that can be used on top of the API, and keep it separate from the core API effort.

![API layers](https://cloud.githubusercontent.com/assets/206306/19645098/f7d3615c-99ea-11e6-962a-439fb553bf2d.png)

_Comments and suggestions for this API are welcome - [file an issue](https://github.com/BohemianCoding/SketchAPI/issues) to discuss it or send them to developer@sketch.com._

## Installation

The API comes bundled inside Sketch, so no installation is required. You access it by requiring the `sketch` package:

```js
var sketch = require('sketch')
```

## Usage

The full documentation is available on [https://developer.sketch.com/reference/api].

Here's a very simple example script:

```js
// access the Sketch API
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
selection.forEach(function(item) {
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

The API is organized as a series of files defining JavaScript classes, and written with ES6 syntax.

However, the version that is embedded in Sketch is a single minified and transpiled library file called `SketchAPI.js`.

If you want to build this library file locally, you need to have [Node.js](https://nodejs.org) installed, and then run the following in the project's root folder:

```bash
npm install
```

Once that's ready, you can run:

```bash
npm start
```

to compile the library. By default, it will be saved to `./build/SketchAPI.js`.

For your convenience, you can use

```bash
npm run watch
```

and a script will watch for any change in the `Source` folder, and build the `.js` file when anything has changed.

To test your changes, you need to get Sketch to use the version of `SketchAPI.js` you just built, instead of the one embedded inside it.

To do this you can run:

```bash
defaults write com.bohemiancoding.sketch3 SketchAPILocation "/path/to/your/SketchAPI.js"
```

Sketch will then load the external `.js` file instead of the bundled version.

### Testing

To run the tests, you can use

```bash
npm run test
npm run test:watch
```

If you want to run the tests with a specific version of Sketch, you can use

```bash
SKETCH_PATH=/path/to/sketch.app npm run test
```

If you want to run the tests with a the current regular version of Sketch, you can use

```bash
npm run test:no-variant
npm run test:no-variant:watch
```

## Website (https://developer.sketch.com)

The website’s contents live in the [`docs`](./docs) folder while the code lives in the [`docs-website`](./docs-website) folder.

If you want to edit the website content sections, switch to the branch your changes belong to (usually it'll be either `develop` or `release/XXX`) and do your changes there, in the `docs`. Once your changes are ready, you run the website locally with `npm run docs:start` from the branch you made your changes in.

_More information are available in the README of the respective folders._

## Acknowledgements

We would like to thank:

- [Logan Collins](https://github.com/logancollins) for [Mocha](https://github.com/logancollins/Mocha), which powers Cocoascript.
- [Gus Mueller](https://github.com/ccgus) for [Cocoascript](https://github.com/ccgus/CocoaScript), which powers our plugin engine.
- [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us a clean way to use node modules inside Sketch.
- The Sketch plugin community everywhere, for such awesome work.
