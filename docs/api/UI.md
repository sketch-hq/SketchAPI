---
title: UI
order: 402
section: API
---

```js
var UI = require('sketch/ui')
```

A set of functions to show some user interfaces. The set is small on _purpose_. Any more complex UI should be provided by third party libraries and doesn't need to be in the core.

## Show a message

```js
UI.message('Hello world!')
```

Show a small, temporary, message to the user. The message appears at the bottom of the selected document, and is visible for a short period of time. It should consist of a single line of text.

| Parameters                                          |                                        |
| --------------------------------------------------- | -------------------------------------- |
| text<span class="arg-type">string - required</span> | The message to show.                   |
| document<span class="arg-type">Document</span>      | The document to show the message into. |

## Show an alert

```js
UI.alert('my title', 'Hello World!')
```

Show an alert with a custom title and message. The alert is modal, so it will stay around until the user dismisses it by pressing the OK button.

| Parameters                                           |                          |
| ---------------------------------------------------- | ------------------------ |
| title<span class="arg-type">string - required</span> | The title of the alert.  |
| text<span class="arg-type">string - required</span>  | The text of the message. |

## Get an input from the user

```javascript
UI.getInputFromUser(
  "What's your name?",
  {
    initialValue: 'Appleseed',
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }
  }
)
```

```javascript
UI.getInputFromUser("What's your favorite design tool?", {
  type: UI.INPUT_TYPE.selection,
  possibleValues: ['Sketch', 'Paper']
}, (err, value) => {
  if (err) {
    // most likely the user canceled the input
    return
  }
})
```

<!--
```javascript
UI.getInputFromUser(
  "What's the opacity of the new layer?",
  {
    type: UI.INPUT_TYPE.slider,
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }
  }
)
```
-->

Shows a simple input sheet which displays a message, and asks for an input from the user.

| Parameters                                                                              |                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message<span class="arg-type">string - required</span>                                  | The prompt message to show.                                                                                                                                                              |
| options<span class="arg-type">object</span>                                             | Options to customize the input sheet. Most of the options depends on the type of the input.                                                                                              |
| option.description<span class="arg-type">string</span>                                  | A secondary text to describe with more details the input.                                                                                                                                |
| option.type<span class="arg-type">[Input Type](#uiinput_type)</span>                    | The type of the input.                                                                                                                                                                   |
| option.initialValue<span class="arg-type">string / number</span>                        | The initial value of the input.   |
| option.possibleValues<span class="arg-type">string[] - required with a selection</span> | The possible choices that the user can make. Only used for a `selection` input.                                                                                                          |
| callback<span class="arg-type">function</span>                                          | A function called after the user entered the input. It is called with an `Error` if the user canceled the input and a `string` or `number` depending on the input type (or `undefined`). |

<!--
| option.maxValue<span class="arg-type">number</span>                                     | The maximal value. Only used for a `slider` input. Defaults to `1`.                                                                                                                      |
| option.minValue<span class="arg-type">number</span>                                     | The maximal value. Only used for a `slider` input. Defaults to `0`.                                                                                                                      |
| option.increment<span class="arg-type">number</span>                                    | Restricts the possible values to multiple of the increment. Only used for a `slider` input.                                                                                             |-->

### `UI.INPUT_TYPE`

```js
UI.INPUT_TYPE.selection
```

The enumeration of the different input types.

| Values      |
| ----------- |
| `string`    |
| `selection` |

## Get the theme of Sketch

```js
var theme = UI.getTheme()

if (theme === 'dark') {
  // shows UI in dark theme
} else {
  // shows UI in light theme
}
```

Sketch has 2 themes: `light` and `dark`. If your plugin has some custom UI, it should support both as well.
