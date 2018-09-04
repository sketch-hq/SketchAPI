---
title: Data Supplier
order: 403
section: API
---

```javascript
var DataSupplier = require('sketch/data-supplier')
```

When you plugin supplies some data, do not forget to set the [`suppliesData`](/guides/plugin-bundles/#suppliesdata) field to `true` in your `manifest.json`!

## Register a Data Supplier

```javascript
var DataSupplier = require('sketch/data-supplier')

// onStartup would be the handler for the `Startup` action defined in the manifest.json
export function onStartup() {
  DataSupplier.registerDataSupplier(
    'public.text',
    'My Custom Data',
    'SupplyKey'
  )
}
```

Register some data with a name and a key.

| Parameters                                              |                                                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| dataType<span class="arg-type">string - required</span> | The data type. Currently `public.text` or `public.image` are the only allowed values.              |
| dataName<span class="arg-type">string - required</span> | The data name, will be used as the menu item title for the data.                                   |
| action<span class="arg-type">string - required</span>   | The name of the Action that will be dispatched when the user requests some data. See `supplyData`. |

## Supply some Data

You have two different methods at your disposition to supply some data.

### Context of the action

```javascript
var util = require('util')
var sketch = require('sketch/dom')
var DataSupplier = require('sketch/data-supplier')

// onSupplyKeyNeeded would be the handler for
// the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var count = context.data.count
  var key = context.data.key
  var items = context.data.items

  // you will often want to get wrapped objects instead
  // of the native ones supplied in the context
  var wrappedItems = util.toArray(items).map(sketch.fromNative)
}
```

The argument of the function called when you need to supply some data contains some very important information.

| Key                  |                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context.data.count` | The number of data you need to supply                                                                                                                                                                                                       |
| `context.data.key`   | A unique key to identify the supply request. You need to pass it to the supply method untouched.                                                                                                                                            |
| `context.data.items` | The array of native model objects for which we want some data. It can be either a native [Text](#text), a native [Image](#image) or a native [DataOverride](#dataoverride) (a special object when the data is for an [Override](#override)) |

### Supply all the data in one go

```javascript
var DataSupplier = require('sketch/data-supplier')

// onSupplyKeyNeeded would be the handler for
// the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var count = context.data.count
  var key = context.data.key

  var data = Array.from(Array(count)).map(i => 'foo')

  DataSupplier.supplyData(key, data)
}
```

When the plugin providing the dynamic data has finished generating the data (could be an asynchronous operation), it will call this function with the data key and the data.

| Parameters                                            |                                                                                                                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key<span class="arg-type">string - required</span>    | Should be equal to `context.data.key`                                                                                                                      |
| data<span class="arg-type">string[] - required</span> | The list of values to provide. In case of `public.image`, the string is the path to the image. It needs to have a length equal to the `context.data.count` |

### Supply the data one by one

```javascript
var util = require('util')
var sketch = require('sketch/dom')
var DataSupplier = require('sketch/data-supplier')

// onSupplyKeyNeeded would be the handler for
// the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var key = context.data.key
  var items = util.toArray(context.data.items).map(sketch.fromNative)

  items.forEach((item, i) => {
    // item is either a Layer or a DataOverride
    DataSupplier.supplyDataAtIndex(key, 'foo', i)
  })
}
```

When the plugin providing the dynamic data has finished generating the datum (could be an asynchronous operation), it will call this function with the data key and the datum.

| Parameters                                           |                                                                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| key<span class="arg-type">string - required</span>   | Should be equal to `context.data.key`                                                                                                             |
| datum<span class="arg-type">string - required</span> | The value to provide. In case of `public.image`, the string is the path to the image. It needs to have a length equal to the `context.data.count` |
| index<span class="arg-type">number - required</span> | The index of the item you are providing a value for.                                                                                              |

## DataOverride

A special object passed in the context of the action to supply data when the item is an [Override](#override).

| Properties                                                                    |                                                                               |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                                        | The name of the override.                                                     |
| override<span class="arg-type">[Override](#override)</span>                   | The override whose value will replaced by the supplied data.                  |
| symbolInstance<span class="arg-type">[SymbolInstance](#symbolinstance)</span> | The symbol instance that the override is on that will have the data replaced. |

## Deregister your Data Suppliers

```javascript
var DataSupplier = require('sketch/data-supplier')

// onShutdown would be the handler for the `Shutdown` action defined in the manifest.json
export function onShutdown() {
  DataSupplier.deregisterDataSuppliers()
}
```

When registering something, it is good practice to clean up after it. This is especially useful if when your plugin will be updated: the `Shutdown` Action will be called before the `Startup` will. It gives you the opportunity to update your handler cleanly.
