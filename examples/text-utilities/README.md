# Text Utilities

Fun story: when [Johnnie](https://twitter.com/mrwalker) works on the rendering of text layers in Sketch, he often use some kind of plugins to automate some operations and inspect the objects that he is working with.

This plugin provides some debugging tools which annotate text layers to show where their baselines and bounding boxes are.

The plugin illustrates a few techniques:

- iterating over the selected layers
- iterating over the position of each line in a text layer
- creating new layers
- defining multiple commands in a single plugin

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Usage

Download the example or [clone the repo](https://github.com/sketch-hq/SketchAPI):

```bash
curl https://codeload.github.com/sketch-hq/SketchAPI/tar.gz/develop | tar -xz --strip=2 SketchAPI-develop/examples/text-utilities
cd text-utilities
```

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Open `Console.app` and look for the sketch logs
- Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input
