---
title: Flow
order: 211
section: components
---

```javascript
var Flow = require('sketch/dom').Flow
```

The prototyping action associated with a layer.

| Properties    | type                                      | Description                                                                                 |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| target        | [Artboard](#artboard) / `Flow.BackTarget` | The target artboard of the action or `Flow.BackTarget` if the action is a back action       |
| targetId      | `String` / `Flow.BackTarget`              | The ID of target artboard of the action or `Flow.BackTarget` if the action is a back action |
| animationType | [AnimationType](#animationtype)           | The type of the animation.                                                                  |

## Creating a new prototyping action

```javascript
layer.flow = {
  target: artboard,
}
```

You can create a action without specifying an animation type, it will use the default one.

```javascript
layer.flow = {
  targetId: artboard.id,
}
```

You can create a action by using the ID of an Artboard instead of the artboard.

```javascript
layer.flow = {
  target: artboard,
  animationType: Flow.AnimationType.slideFromLeft,
}
```

You can also specify the [animation type](#animationtype).

```javascript
layer.flow = {
  target: Flow.BackTarget,
}
```

You can also create a back action.

## `isBackAction`

```javascript
layer.flow.isBackAction()
```

Returns whether the prototyping action is a back action or not, eg. whether `layer.flow.target === Flow.BackTarget`.

## `isValidConnection`

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

## AnimationType

```javascript
Flow.AnimationType.slideFromLeft
```

Enumeration of the animation types.

| Value             | description           |
| ----------------- | --------------------- |
| `none`            | No animation          |
| `slideFromLeft`   | Slide from the left   |
| `slideFromRight`  | Slide from the right  |
| `slideFromBottom` | Slide from the bottom |
| `slideFromTop`    | Slide from the top    |
