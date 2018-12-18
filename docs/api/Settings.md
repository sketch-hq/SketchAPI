---
title: Settings
order: 401
section: API
---

```js
var Settings = require('sketch/settings')
```

A set of functions to handle user settings. The settings are persisted when the user closes Sketch.

## Get a plugin setting

```js
var setting = Settings.settingForKey('my-key')
```

Return the value of a setting scoped to your plugin for a given key.

| Parameters                                         |                         |
| -------------------------------------------------- | ----------------------- |
| key<span class="arg-type">string - required</span> | The setting to look up. |

### Returns

The setting that was stored for the given key. `undefined` if there was nothing.

## Set a plugin setting

```js
Settings.setSettingForKey('my-key', 0.1)
```

Store a value of a setting scoped to your plugin for a given key.

| Parameters                                         |                         |
| -------------------------------------------------- | ----------------------- |
| key<span class="arg-type">string - required</span> | The setting to set.     |
| value<span class="arg-type">any - required</span>  | The value to set it to. |

## Get a Sketch setting

```js
var setting = Settings.globalSettingForKey('my-key')
```

Return the value of a Sketch setting for a given key.

| Parameters                                         |                         |
| -------------------------------------------------- | ----------------------- |
| key<span class="arg-type">string - required</span> | The setting to look up. |

### Returns

The setting that was stored for the given key. `undefined` if there was nothing.

## Set a Sketch setting

```js
Settings.setGlobalSettingForKey('my-key', 0.1)
```

Store a value of a Sketch setting for a given key.

| Parameters                                         |                         |
| -------------------------------------------------- | ----------------------- |
| key<span class="arg-type">string - required</span> | The setting to set.     |
| value<span class="arg-type">any - required</span>  | The value to set it to. |

## Get a Layer setting

```js
var setting = Settings.layerSettingForKey(layer, 'my-key')
```

Return the value of a setting for a given key on a specific [Layer](#layer) or [DataOverride](#dataoverride) or [Override](#override).

| Parameters                                                                                                            |                                         |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| layer<span class="arg-type">[Layer](#layer) / [DataOverride](#dataoverride) / [Override](#override) - required</span> | The layer on which a setting is stored. |
| key<span class="arg-type">string - required</span>                                                                    | The setting to look up.                 |

### Returns

The setting that was stored for the given key. `undefined` if there was nothing.

## Set a Layer setting

```js
Settings.setLayerSettingForKey(layer, 'my-key', 0.1)
```

Store a value of a setting for a given key on a specific [Layer](#layer) or [DataOverride](#dataoverride) or [Override](#override).

| Parameters                                                                                                            |                                        |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| layer<span class="arg-type">[Layer](#layer) / [DataOverride](#dataoverride) / [Override](#override) - required</span> | The layer on which the setting is set. |
| key<span class="arg-type">string - required</span>                                                                    | The setting to set.                    |
| value<span class="arg-type">any - required</span>                                                                     | The value to set it to.                |

## Get a Document setting

```js
var setting = Settings.documentSettingForKey(document, 'my-key')
```

Return the value of a setting for a given key on a specific document.

| Parameters                                                             | Description                                |
| ---------------------------------------------------------------------- | ------------------------------------------ |
| document<span class="arg-type">[Document](#document) - required</span> | The document on which a setting is stored. |
| key<span class="arg-type">string - required</span>                     | The setting to look up.                    |

### Returns

The setting that was stored for the given key. `undefined` if there was nothing.

## Set a Document setting

```js
Settings.setDocumentSettingForKey(document, 'my-key', 0.1)
```

Store a value of a setting for a given key on a specific document.

| Parameters                                                             |                                           |
| ---------------------------------------------------------------------- | ----------------------------------------- |
| document<span class="arg-type">[Document](#document) - required</span> | The document on which the setting is set. |
| key<span class="arg-type">string - required</span>                     | The setting to set.                       |
| value<span class="arg-type">any - required</span>                      | The value to set it to.                   |

## Get a session variable

```js
var myVar = Settings.sessionVariable('myVar')
```

Return the value of a variable which is persisted when the plugin finishes to run but is _not_ persisted when Sketch closes. It is useful when you want to keep a value between plugin's runs.

| Parameters                                         |                          |
| -------------------------------------------------- | ------------------------ |
| key<span class="arg-type">string - required</span> | The variable to look up. |

### Returns

The setting that was stored for the given key. `undefined` if there was nothing.

## Set a plugin setting

```js
Settings.setSessionVariable('myVar', 0.1)
```

Store a value of a variable which is persisted when the plugin finishes to run but is _not_ persisted when Sketch closes. It is useful when you want to keep a value between plugin's runs.

| Parameters                                         |                         |
| -------------------------------------------------- | ----------------------- |
| key<span class="arg-type">string - required</span> | The variable to set.    |
| value<span class="arg-type">any - required</span>  | The value to set it to. |
