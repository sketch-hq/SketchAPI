---
title: Data Supplier
order: 303
section: API
hidden: true
---

```js
var DataSupplier = sketch.DataSupplier

var dataSupplier = new DataSupplier(context)
```

Sketch data supplier manager.

| Parameter            | type    | Description                                                  |
| -------------------- | ------- | ------------------------------------------------------------ |
| context _(required)_ | Context | The context object passed to the script when it was invoked. |

### Return

Return a DataSupplier object with the following methods:

## registerStaticSupplier

> Example

```js
// onStartup would the handler for the `Startup` action defined in the manifest.json
export function onStartup(context) {
  var dataSupplier = new sketch.DataSupplier(context)

  dataSupplier.registerStaticSupplier('public.text', 'My Custom Data', [
    'foo',
    'bar',
    'baz',
  ])
}
```

Register some data with a name.

| Parameter             | type     | Description                                                                                    |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| dataType _(required)_ | String   | The data type. Currently `public.text` or `public.image` are the only allowed values.          |
| dataName _(required)_ | String   | The data name, will be used as the menu item title for the data.                               |
| data _(required)_     | String[] | The list of values to provide. In case of `public.image`, the string is the path to the image. |

## registerPluginDataSupplier

> Example

```js
// onStartup would be the handler for the `Startup` action defined in the manifest.json
export function onStartup(context) {
  var dataSupplier = new sketch.DataSupplier(context)

  dataSupplier.registerPluginDataSupplier(
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
// onSupplyKeyNeeded would be the handler for the `SupplyKey` action defined in the manifest.json
export function onSupplyKeyNeeded(context) {
  var count = context.data.count

  var dataSupplier = new sketch.DataSupplier(context)

  var data = Array.from(Array(count)).map(i => 'foo')

  dataSupplier.supplyData(data)
}
```

When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.

| Parameter         | type     | Description                                                                                                                                                |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data _(required)_ | String[] | The list of values to provide. In case of `public.image`, the string is the path to the image. It needs to have a length equal to the `context.data.count` |

## deregisterDataSuppliers

> Example

```js
// onShutdown would be the handler for the `Shutdown` action defined in the manifest.json
export function onShutdown(context) {
  var dataSupplier = new sketch.DataSupplier(context)

  dataSupplier.deregisterDataSuppliers()
}
```

When registering something, it is good practice to clean up after it. This is especially useful if when your plugin will be updated: the `Shutdown` Action will be called before the `Startup` will. It gives you the opportunity to update your handler cleanly.
