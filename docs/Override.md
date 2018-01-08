---
title: Symbol Override
order: 211
section: components
---

```javascript
var Override = sketch.Override
```

```javascript
import { Override } from 'sketch-api'
```

A [Symbol](https://www.sketchapp.com/docs/symbols/) override.

| Properties     | type    | Description                                                                                                                      |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| path           | string  | The path to the override. It's formed by the symbolId of the nested symbols separated by a `/`.                                  |
| property       | string  | The property that this override controls. It can be `"stringValue"` for a text override, `"symbolID"` for a nested symbol, etc.. |
| id             | string  | The unique ID of the override (`${path}_${property}`).                                                                           |
| symbolOverride | Boolean | If the override is a nested symbol override.                                                                                     |
| value          | String  | The value of the override which can be change.                                                                                   |
| isDefault      | Boolean | If the override hasn't been changed and is the default value.                                                                    |
