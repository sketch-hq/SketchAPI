---
title: Flow
order: 207
section: models
---

```javascript
var Flow = require('sketch/dom').Flow
```

The prototyping action associated with a layer.

| Properties                                                                                     |                                                                                             |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| target<span class="arg-type">[Artboard](#artboard) / [Flow.BackTarget](#flowbacktarget)</span> | The target artboard of the action or `Flow.BackTarget` if the action is a back action       |
| targetId<span class="arg-type">string / [Flow.BackTarget](#flowbacktarget)</span>              | The ID of target artboard of the action or `Flow.BackTarget` if the action is a back action |
| animationType<span class="arg-type">[AnimationType](#flowanimationtype)</span>                 | The type of the animation.                                                                  |

## Create a new prototyping action

```javascript
layer.flow = {
  target: artboard,
}
```

You can create an action without specifying an animation type, it will use the default one.

```javascript
layer.flow = {
  targetId: artboard.id,
}
```

You can create an action by using the ID of an Artboard instead of the artboard.

```javascript
layer.flow = {
  target: artboard,
  animationType: Flow.AnimationType.slideFromLeft,
}
```

You can also specify the [animation type](#flowanimationtype).

```javascript
layer.flow = {
  target: Flow.BackTarget,
}
```

You can also create a back action.

## Check if the action is a Back action

```javascript
layer.flow.isBackAction()
```

Returns whether the prototyping action is a back action or not, eg. whether `layer.flow.target === Flow.BackTarget`.

## Check if the target is valid

```javascript
layer.flow.isValidConnection()
```

In some cases, the target of the action can be invalid, for example when the target has been removed from the document. The methods returns whether the target is valid or not.

## `Flow.BackTarget`

```javascript
layer.flow = {
  target: Flow.BackTarget,
}
```

`Flow.BackTarget` is a constant that you can set the target to in order to always take you back to the last Artboard you were looking at. When a Target has been set to `Flow.BackTarget`, the transition leading into it will be reversed on return.

## `Flow.AnimationType`

```javascript
Flow.AnimationType.slideFromLeft
```

Enumeration of the animation types.

| Value             |                       |
| ----------------- | --------------------- |
| `none`            | No animation          |
| `slideFromLeft`   | Slide from the left   |
| `slideFromRight`  | Slide from the right  |
| `slideFromBottom` | Slide from the bottom |
| `slideFromTop`    | Slide from the top    |
