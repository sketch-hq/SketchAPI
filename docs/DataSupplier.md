---
title: Data Supplier
order: 303
section: API
hidden: true
---

```js
var DataSupplier = require('sketch/data-supplier')
```

## registerDataSupplier

> Example

```js
var DataSupplier = require('sketch/data-supplier')

// onStartup would be the handler for the `Startup` action defined in the manifest.json
export function onStartup() {
  DataSupplier.registerPluginDataSupplier(
    'public.text',
    'My Custom Data',
    'SupplyKey'
  )
}
```

Register some data with a name and a key.

| Parameter             | type   | Description                                                                                        |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| dataType _(required)_ | String | The data type. Currently `public.text` or `public.image` are the only allowed values.              |
| dataName _(required)_ | String | The data name, will be used as the menu item title for the data.                                   |
| action _(required)_   | String | The name of the Action that will be dispatched when the user requests some data. See `supplyData`. |

## supplyData

> Example

```js
var DataSupplier = require('sketch/data-supplier')

// onSupplyKeyNeeded would be the handler for the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var count = context.data.count
  var key = context.data.key

  var data = Array.from(Array(count)).map(i => 'foo')

  DataSupplier.supplyData(key, data)
}
```

When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.

| Parameter         | type     | Description                                                                                                                                                |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key _(required)_  | String   | Should be equal to `context.data.key`                                                                                                                      |
| data _(required)_ | String[] | The list of values to provide. In case of `public.image`, the string is the path to the image. It needs to have a length equal to the `context.data.count` |

## deregisterDataSuppliers

> Example

```js
var DataSupplier = require('sketch/data-supplier')

// onShutdown would be the handler for the `Shutdown` action defined in the manifest.json
export function onShutdown() {
  DataSupplier.deregisterDataSuppliers()
}
```

When registering something, it is good practice to clean up after it. This is especially useful if when your plugin will be updated: the `Shutdown` Action will be called before the `Startup` will. It gives you the opportunity to update your handler cleanly.
