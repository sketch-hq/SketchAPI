---
title: Symbol Override
order: 211
section: components
---

```javascript
var overrides = symbolInstance.overrides
```

A [Symbol](https://www.sketchapp.com/docs/symbols/) override. This component is not exposed, it is only returned when accessing the `overrides` of a [Symbol Instance](#symbol-instance).

| Properties     | type                             | Description                                                                                                                                                    |
| -------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path           | string                           | The path to the override. It's formed by the symbolId of the nested symbols separated by a `/`.                                                                |
| property       | string                           | The property that this override controls. It can be `"stringValue"` for a text override, `"symbolID"` for a nested symbol, or `"image"` for an image override. |
| id             | string                           | The unique ID of the override (`${path}_${property}`).                                                                                                         |
| symbolOverride | Boolean                          | If the override is a nested symbol override.                                                                                                                   |
| value          | String / [ImageData](#imagedata) | The value of the override which can be change.                                                                                                                 |
| isDefault      | Boolean                          | If the override hasn't been changed and is the default value.                                                                                                  |
