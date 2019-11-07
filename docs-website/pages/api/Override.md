---
title: Symbol Override
order: 206
section: models
---

```javascript
var overrides = symbolInstance.overrides
```

A [Symbol](https://sketch.com/docs/symbols/) override. This component is not exposed, it is only returned when accessing the `overrides` of a [Symbol Instance](#symbol-instance) or [Symbol Master](#symbol-master). The overrides are not available until after the instance is injected into the document.

| Properties                                                                                                      |                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| path<span class="arg-type">string</span>                                                                        | The path to the override. It's formed by the symbolId of the nested symbols separated by a `/`.                                                                                                                                                                                                                    |
| property<span class="arg-type">string</span>                                                                    | The property that this override controls. It can be `"stringValue"` for a text override, `"symbolID"` for a nested symbol, `"layerStyle"` for a shared layer style override, `"textStyle"` for a shared text style override, `"flowDestination"` for a Hotspot target override or `"image"` for an image override. |
| id<span class="arg-type">string</span>                                                                          | The unique ID of the override (`${path}_${property}`).                                                                                                                                                                                                                                                             |
| symbolOverride<span class="arg-type">boolean</span>                                                             | If the override is a nested symbol override.                                                                                                                                                                                                                                                                       |
| value<span class="arg-type">String / [ImageData](#imagedata)</span>                                             | The value of the override which can be change.                                                                                                                                                                                                                                                                     |
| isDefault<span class="arg-type">boolean</span>                                                                  | If the override hasn't been changed and is the default value.                                                                                                                                                                                                                                                      |
| affectedLayer<span class="arg-type">[Text](#text) / [Image](#image) / [Symbol Instance](#symbolinstance)</span> | The layer the override applies to. It will be an immutable version of the layer.                                                                                                                                                                                                                                   |
| editable<span class="arg-type">boolean</span>                                                                   | If the value of the override can be changed.                                                                                                                                                                                                                                                                       |
| selected<span class="arg-type">boolean / undefined</span>                                                       | If the override is selected (or `undefined` if it's the override of a Symbol Master).                                                                                                                                                                                                                              |

## Get the frame of an Override

```javascript
var frame = override.getFrame()
```

The frame of an override can be different than the frame of its affected Layer in case where the Symbol Instance has been scaled for example.

### Returns

A [Rectangle](#rectangle) describing the frame of the affected layer in the Symbol Instance's coordinates.
