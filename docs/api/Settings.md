---
title: Settings
order: 301
section: API
---

```js
var Settings = require('sketch/settings')
```

A set of functions to handle user settings. The settings are persisted when the user closes Sketch.

## settingForKey

```js
var setting = Settings.settingForKey('my-key')
```

Return the value of a setting scoped to your plugin for a given key.

| Parameter        | type   | Description             |
| ---------------- | ------ | ----------------------- |
| key _(required)_ | String | The setting to look up. |

### Return

The setting that was stored for the given key. `undefined` if there was nothing.

## setSettingForKey

```js
Settings.setSettingForKey('my-key', 0.1)
```

Store a value of a setting scoped to your plugin for a given key.

| Parameter          | type   | Description             |
| ------------------ | ------ | ----------------------- |
| key _(required)_   | String | The setting to set.     |
| value _(required)_ | Any    | The value to set it to. |

## globalSettingForKey

```js
var setting = Settings.globalSettingForKey('my-key')
```

Return the value of a Sketch setting for a given key.

| Parameter        | type   | Description             |
| ---------------- | ------ | ----------------------- |
| key _(required)_ | String | The setting to look up. |

### Return

The setting that was stored for the given key. `undefined` if there was nothing.

## setGlobalSettingForKey

```js
Settings.setGlobalSettingForKey('my-key', 0.1)
```

Store a value of a Sketch setting for a given key.

| Parameter          | type   | Description             |
| ------------------ | ------ | ----------------------- |
| key _(required)_   | String | The setting to set.     |
| value _(required)_ | Any    | The value to set it to. |

## layerSettingForKey

```js
var setting = Settings.layerSettingForKey(layer, 'my-key')
```

Return the value of a setting for a given key on a specific layer.

| Parameter          | type            | Description                             |
| ------------------ | --------------- | --------------------------------------- |
| layer _(required)_ | [Layer](#layer) | The layer on which a setting is stored. |
| key _(required)_   | String          | The setting to look up.                 |

### Return

The setting that was stored for the given key. `undefined` if there was nothing.

## setLayerSettingForKey

```js
Settings.setLayerSettingForKey(layer, 'my-key', 0.1)
```

Store a value of a setting for a given key on a specific layer.

| Parameter          | type            | Description                            |
| ------------------ | --------------- | -------------------------------------- |
| layer _(required)_ | [Layer](#layer) | The layer on which the setting is set. |
| key _(required)_   | String          | The setting to set.                    |
| value _(required)_ | Any             | The value to set it to.                |

## documentSettingForKey

```js
var setting = Settings.layerSettingForKey(document, 'my-key')
```

Return the value of a setting for a given key on a specific document.

| Parameter             | type                  | Description                                |
| --------------------- | --------------------- | ------------------------------------------ |
| document _(required)_ | [Document](#document) | The document on which a setting is stored. |
| key _(required)_      | String                | The setting to look up.                    |

### Return

The setting that was stored for the given key. `undefined` if there was nothing.

## setDocumentSettingForKey

```js
Settings.setDocumentSettingForKey(document, 'my-key', 0.1)
```

Store a value of a setting for a given key on a specific document.

| Parameter             | type                  | Description                               |
| --------------------- | --------------------- | ----------------------------------------- |
| document _(required)_ | [Document](#document) | The document on which the setting is set. |
| key _(required)_      | String                | The setting to set.                       |
| value _(required)_    | Any                   | The value to set it to.                   |
