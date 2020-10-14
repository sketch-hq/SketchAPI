# Sketch JavaScript API

JavaScript API for [Sketch](https://sketch.com) for writing scripts and creating plugins.

<img src="https://user-images.githubusercontent.com/69443/95841168-b8436700-0d4d-11eb-8343-49eebea95fb9.png" alt="Sketch JavaScript API Architecture" width="568">

## Usage

For guides, concepts and regular updates on what's new in the latest version of Sketch, see the [Plugin Developer Documentation](https://developer.sketch.com/plugins/).

- ℹ️ [**API Reference**](https://developer.sketch.com/reference/api/)
- 🐛 [**Issues**](https://github.com/sketch-hq/SketchAPI/issue) for bug reports and API feature requests

### Example

Try the following script within the _Plugins_ › _Run Script…_ panel.

```js
// The Sketch JavaScript API is bundled with the Sketch Mac app
// and must be imported before it can be used.
const sketch = require('sketch')
const { Group, Shape, Rectangle } = sketch

// Get the current Document and Page
const doc = sketch.getSelectedDocument()
const page = doc.selectedPage

// Create and select a new Group within the current Page
var group = new Group({
  parent: page,
  frame: new Rectangle(0, 0, 100, 100),
  name: 'Test',
  selected: true,
})

// Add a new Rectangle Shape Layer to newly created Group
var rect = new Shape({
  parent: group,
  frame: new Rectangle(10, 10, 80, 80),
})

// Get and log the current selection
var sel = doc.selectedLayers
console.log(sel.isEmpty)

sel.forEach(function (elem) {
  console.log(elem.name)
})
```

## Development

### Prerequisits

- Have [Node](https://nodejs.org) installed
- [Visual Studio Code](https://code.visualstudio.com) (recommended)

### Overview

The Sketch API is written in JavaScript/CocoaScript and gets bundled as part of the build process using webpack.

In addition to the API, this project also defines core modules to be included in Sketch as part of the official release process. Both are written to the `build` output folder when the build script is run:

```sh
./build.sh
```

#### Scripts

The following npm scripts are available for development of the API.

| Script                        | Description                             |
| ----------------------------- | --------------------------------------- |
| `npm run build`               | Build SketchAPI into the `build` folder |
| `npm run test`                | Run integreation tests                  |
| `npm run lint`                | Lint the source code                    |
| `npm run format-check`        | Check the format with Prettier          |
| `npm run api-location:write`  | Tell Sketch to use your local SketchAPI |
| `npm run api-location:delete` | Undo `npm run api-location:write`       |

### Build and run

Follow the steps below to use a local copy of the API with your installation of Sketch.

Note, any plugins you have installed or code you invoke in Sketch's _Plugins_ › _Run Script…_ sheet will use your local copy of the API.

1. Checkout this repository.
1. Configure Sketch to use your local version of `SketchAPI` instead of the built-in.
   ```sh
   npm run api-location:write
   ```
1. Ensure you've installed the dependencies with npm, and then build SketchAPI.
   ```sh
   npm install
   npm run build
   ```
1. Start Sketch and your changes will be picked up.

> ⚠️ Sketch must be restarted for API changes to take effect after running `npm run build`.

> ⚠️ You must remove the custom location configuration to make your installation of Sketch use the version of the API included with the app.
>
> ```
> npm run api-location:delete
>
> ```

### Testing

The `*.test.js` files in this repository are integration tests that run in Sketch's plugin environment and can be run using:

```bash
npm run test
```

To run the tests with a specific installation of Sketch, run:

```sh
SKETCH_PATH=/path/to/sketch.app npm run test
```

> ℹ️ There is no need to re-build SketchAPI between test runs or use `defaults write` to set the API location; the test runner handles re-compiling test and source files and injecting them into Sketch.

## Acknowledgements

We would like to thank:

- [Logan Collins](https://github.com/logancollins) for [Mocha](https://github.com/logancollins/Mocha), which powers Cocoascript.
- [Gus Mueller](https://github.com/ccgus) for [Cocoascript](https://github.com/ccgus/CocoaScript), which powers our plugin engine.
- [Andrey Shakhmin](https://github.com/turbobabr), for his inspiration during the [Hamburg Hackathon](http://designtoolshackday.com), where he showed us a clean way to use node modules inside Sketch.
- The Sketch plugin community everywhere, for such awesome work.
