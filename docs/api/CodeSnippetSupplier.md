---
title: Code Snippet Supplier
order: 404
section: API
---

```javascript
var CodeSnippetSupplier = require('sketch/code-snippet-supplier')
```

## Register a Code Snippet Supplier

```javascript
var CodeSnippetSupplier = require('sketch/code-snippet-supplier')

// onStartup would be the handler for the `Startup` action defined in the manifest.json
export function onStartup() {
  CodeSnippetSupplier.registerCodeSnippetSupplier(
    'My Custom Snippet',
    'SupplyKey'
  )
}
```

Register a code snippet with a name and a key.

| Parameters                                                 |                                                                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| snippetName<span class="arg-type">string - required</span> | The code snippet name, used as the menu item title for the code snippet.                           |
| action<span class="arg-type">string - required</span>      | The name of the Action that will be dispatched when the user requests a snippet. See `supplyData`. |

## Context of the action

When a user runs a code snippet plugin, Sketch will forward the request to your plugin, passing a `context.data` object with all the information you need to fulfill the request:

| Key                  |                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| `context.data.key`   | A unique key to identify the supply request. You need to pass it to the supply method untouched. |
| `context.data.items` | The array of native [Layer](#layer) for which we want some data.                                 |

```javascript
var util = require('util')
var sketch = require('sketch/dom')
var CodeSnippetSupplier = require('sketch/code-snippet-supplier')

// onSupplyKeyNeeded would be the handler for
// the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var key = context.data.key
  var items = context.data.items

  // you will often want to get wrapped objects instead
  // of the native ones supplied in the context
  var wrappedItems = util.toArray(items).map(sketch.fromNative)
}
```

## Supply the code snippet

```javascript
var CodeSnippetSupplier = require('sketch/code-snippet-supplier')

// onSupplyKeyNeeded would be the handler for
// the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var key = context.data.key
  var items = context.data.items

  // you will often want to get wrapped objects instead
  // of the native ones supplied in the context
  var wrappedItems = util.toArray(items).map(sketch.fromNative)

  var snippet = wrappedItems
    .map(layer => {
      return 'my snippet from the layer'
    })
    .join('\n\n')

  CodeSnippetSupplier.supplyCodeSnippet(key, snippet)
}
```

When the plugin has finished generating the snippet (could be an asynchronous operation), it will call this function with the snippet key and the snippet.

| Parameters                                             |                                                                  |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| key<span class="arg-type">string - required</span>     | Should be equal to `context.data.key`                            |
| snippet<span class="arg-type">string - required</span> | The snippet to put in the Pasteboard. Should be a single string. |

## Deregister your Code snippet Suppliers

```javascript
var CodeSnippetSupplier = require('sketch/code-snippet-supplier')

// onShutdown would be the handler for the `Shutdown` action defined in the manifest.json
export function onShutdown() {
  CodeSnippetSupplier.deregisterCodeSnippetSuppliers()
}
```

When registering something, it’s good practice to clean up after it. This is specially useful when your plugin is updated: the `Shutdown` Action will be called before the `Startup` will. It gives you the opportunity to update your handler cleanly.
