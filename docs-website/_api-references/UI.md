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

## Get a string input from the user

```js
var string = UI.getStringFromUser("What's your name?", 'Appleseed')
```

Shows a simple input sheet which displays a message, and asks for a single string input.

| Parameters                                             |                                        |
| ------------------------------------------------------ | -------------------------------------- |
| message<span class="arg-type">string - required</span> | The prompt message to show.            |
| initialValue<span class="arg-type">string</span>       | The initial value of the input string. |

### Returns

The string that the user input, or "null" (String) if the user clicked 'Cancel'.

## Make the user select an option

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

| Parameters                                             |                                            |
| ------------------------------------------------------ | ------------------------------------------ |
| message<span class="arg-type">string - required</span> | The prompt message to show.                |
| items<span class="arg-type">string[] - required</span> | An array of option items.                  |
| selectedIndex<span class="arg-type">number</span>      | The index of the item to select initially. |

### Returns

An array with a response code, the selected index and `ok`. The code will be one of `NSAlertFirstButtonReturn` or `NSAlertSecondButtonReturn`. The selection will be the integer index of the selected item. `ok` is the boolean `code === NSAlertFirstButtonReturn`.
