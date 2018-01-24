---
title: UI
order: 302
section: API
---

```js
var UI = sketch.UI

import { UI } from 'sketch-api'
```

A set of functions to show some user interfaces. The set is small on _purpose_. Any more complex UI should be provided by third party libraries and doesn't need to be in the core.

## message

```js
UI.message('Hello world!')
```

Show a small, temporary, message to the user. The message appears at the bottom of the selected document, and is visible for a short period of time. It should consist of a single line of text.

| Parameter         | type     | Description                                       |
| ----------------- | -------- | ------------------------------------------------- |
| text _(required)_ | String   | The message to show.                              |
| document          | Document | The document to show the message into (optional). |

## alert

```js
UI.alert('my title', 'Hello World!')
```

Show an alert with a custom title and message. The alert is modal, so it will stay around until the user dismisses it by pressing the OK button.

| Parameter          | type   | Description              |
| ------------------ | ------ | ------------------------ |
| title _(required)_ | String | The title of the alert.  |
| text _(required)_  | String | The text of the message. |

## getStringFromUser

```js
var string = UI.getStringFromUser("What's your name?", 'Appleseed')
```

Shows a simple input sheet which displays a message, and asks for a single string input.

| Parameter            | type   | Description                            |
| -------------------- | ------ | -------------------------------------- |
| message _(required)_ | String | The prompt message to show.            |
| initialValue         | String | The initial value of the input string. |

### Return

The string that the user input.

## getSelectionFromUser

```js
var options = ['Sketch']
var selection = UI.getSelectionFromUser(
  "What's your favorite design tool?",
  options
)

var ok = selection[2]
var value = options[selection[1]]
if (ok) {
  // do something
}
```

Shows an input sheet which displays a popup with a series of options, from which the user is asked to choose.

| Parameter            | type     | Description                                |
| -------------------- | -------- | ------------------------------------------ |
| message _(required)_ | String   | The prompt message to show.                |
| items _(required)_   | String[] | An array of option items.                  |
| selectedIndex        | Number   | The index of the item to select initially. |

### Return

An array with a response code, the selected index and `ok`. The code will be one of `NSAlertFirstButtonReturn` or `NSAlertSecondButtonReturn`. The selection will be the integer index of the selected item. `ok` is the boolean `code === NSAlertFirstButtonReturn`.
