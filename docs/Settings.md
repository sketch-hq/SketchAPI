---
title: Settings
order: 301
section: API
---

```js
var Settings = sketch.Settings

import { Settings } from 'sketch-api'
```

A set of functions to handle user settings. The settings are persisted when the user closes Sketch.

## settingForKey

```js
var setting = Settings.settingForKey(context, 'my-key')
```

Return the value of a setting scoped to your plugin for a given key.

| Parameter            | type    | Description                                                  |
| -------------------- | ------- | ------------------------------------------------------------ |
| context _(required)_ | Context | The context object passed to the script when it was invoked. |
| key _(required)_     | String  | The setting to look up.                                      |

### Return

The setting that was stored for the given key. `undefined` if there was nothing.

## setSettingForKey

```js
Settings.setSettingForKey(context, 'my-key', 0.1)
```

Store a value of a setting scoped to your plugin for a given key.

| Parameter            | type    | Description                                                  |
| -------------------- | ------- | ------------------------------------------------------------ |
| context _(required)_ | Context | The context object passed to the script when it was invoked. |
| key _(required)_     | String  | The setting to set.                                          |
| value _(required)_   | Any     | The value to set it to.                                      |

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
