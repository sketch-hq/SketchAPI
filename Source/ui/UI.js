/* globals NSAlertFirstButtonReturn */
import util from 'util'

function getPluginAlertIcon() {
  if (__command.pluginBundle() && __command.pluginBundle().alertIcon()) {
    return __command.pluginBundle().alertIcon()
  }
  return NSImage.imageNamed('plugins')
}

/**
 * Show a small, temporary, message to the user.
 * The message appears at the bottom of the selected document,
 * and is visible for a short period of time. It should consist of a single
 * line of text.
 *
 * @param {string} text The message to show.
 * @param [Document] document The document in which we will show the message
 */
export function message(text, document) {
  if (!document) {
    NSApplication.sharedApplication()
      .orderedDocuments()
      .firstObject()
      .showMessage(text)
  } else if (util.isNativeObject(document)) {
    document.showMessage(text)
  } else {
    document.sketchObject.showMessage(text)
  }
}

/**
 * Show an alert with a custom title and message.
 *
 * @param {string} title The title of the alert.
 * @param {string} text The text of the message.
 *
 * The alert is modal, so it will stay around until the user dismisses it
 * by pressing the OK button.
 */
export function alert(title, text) {
  const dialog = NSAlert.alloc().init()
  dialog.setMessageText(title)
  dialog.setInformativeText(text)
  dialog.icon = getPluginAlertIcon()
  return dialog.runModal()
}

export const INPUT_TYPE = {
  string: 'string',
  slider: 'slider',
  selection: 'selection',
  // coming soon
  // number: 'number',
  // color: 'color',
  // path: 'path'
}

export function getInputFromUser(messageText, options, callback) {
  /* eslint-disable no-param-reassign */
  if (!options) {
    options = {}
    callback = () => {}
  } else if (util.isFunction(options)) {
    callback = options
    options = {}
  }
  /* eslint-enable */

  const type = String(options.type || INPUT_TYPE.string)

  if (options.type && !INPUT_TYPE[type]) {
    throw new Error('unknown input type')
  }
  if (!messageText || typeof messageText !== 'string') {
    throw new Error('input description missing')
  }

  const dialog = NSAlert.alloc().init()

  let accessory
  switch (type) {
    case INPUT_TYPE.string:
      if (typeof options.numberOfLines !== 'undefined') {
        // create textArea
        const FLT_MAX = 10000000 // c library variable

        accessory = NSScrollView.alloc().initWithFrame(
          NSMakeRect(0, 0, 295, 5 + 14 * options.numberOfLines)
          // 14 for each line plus a little more to account for contentView inset
        )
        const contentSize = accessory.contentSize()
        accessory.setHasVerticalScroller(true)
        accessory.setHasHorizontalScroller(false)
        // eslint-disable-next-line no-bitwise
        accessory.setAutoresizingMask(NSViewWidthSizable | NSViewHeightSizable)

        const textView = NSTextView.alloc().initWithFrame(
          NSMakeRect(0, 0, contentSize.width, contentSize.height)
        )
        textView.setMinSize(NSMakeSize(0.0, contentSize.height))
        textView.setMaxSize(NSMakeSize(FLT_MAX, FLT_MAX))
        textView.setVerticallyResizable(true)
        textView.setHorizontallyResizable(false)
        textView.setRichText(false)
        textView.setAutoresizingMask(NSViewWidthSizable)
        textView
          .textContainer()
          .setContainerSize(NSMakeSize(contentSize.width, FLT_MAX))
        textView.textContainer().setWidthTracksTextView(true)

        textView.setString(
          String(
            typeof options.initialValue === 'undefined'
              ? ''
              : options.initialValue
          )
        )
        accessory.documentView = textView
      } else {
        // create textField
        accessory = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
        accessory.setStringValue(
          String(
            typeof options.initialValue === 'undefined'
              ? ''
              : options.initialValue
          )
        )
      }
      dialog.window().setInitialFirstResponder(accessory)
      break
    // case INPUT_TYPE.number:
    //   accessory = NSStepper.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
    //   accessory.setFloatValue(Number(options.initialValue || 0))
    //   if (typeof options.maxValue !== 'undefined') {
    //     accessory.setMaxValue(options.maxValue)
    //   }
    //   if (typeof options.minValue !== 'undefined') {
    //     accessory.setMinValue(options.minValue)
    //   }
    //   if (typeof options.increment !== 'undefined') {
    //     accessory.setIncrement(options.increment)
    //   }
    //   break
    case INPUT_TYPE.slider: {
      accessory = NSSlider.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
      accessory.setFloatValue(Number(options.initialValue || 0))
      if (typeof options.maxValue !== 'undefined') {
        accessory.setMaxValue(options.maxValue)
      }
      if (typeof options.minValue !== 'undefined') {
        accessory.setMinValue(options.minValue)
      }
      if (typeof options.increment !== 'undefined') {
        accessory.setAllowsTickMarkValuesOnly(true)
        accessory.setNumberOfTickMarks(
          parseInt(
            1 +
              ((typeof options.maxValue !== 'undefined'
                ? options.maxValue
                : 1) -
                (typeof options.minValue !== 'undefined'
                  ? options.minValue
                  : 0)) /
                options.increment,
            10
          )
        )
      }
      break
    }
    case INPUT_TYPE.selection: {
      if (!util.isArray(options.possibleValues)) {
        throw new Error(
          'When the input type is `selection`, you need to provide the array of possible choices.'
        )
      }
      accessory = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
      accessory.addItemsWithTitles(options.possibleValues)
      const initialIndex = options.possibleValues.indexOf(options.initialValue)
      accessory.selectItemAtIndex(initialIndex !== -1 ? initialIndex : 0)
      break
    }
    default:
      break
  }

  dialog.setMessageText(messageText)
  if (options.description) {
    dialog.setInformativeText(options.description)
  }
  dialog.addButtonWithTitle(options.okButton || 'OK')
  dialog.addButtonWithTitle(options.cancelButton || 'Cancel')
  dialog.setAccessoryView(accessory)
  dialog.icon = getPluginAlertIcon()

  const responseCode = dialog.runModal()

  if (responseCode !== NSAlertFirstButtonReturn) {
    callback(new Error('user canceled input'))
    return
  }

  switch (type) {
    case INPUT_TYPE.string:
      if (typeof options.numberOfLines !== 'undefined') {
        callback(null, String(accessory.documentView().textStorage().string()))
      } else {
        callback(null, String(accessory.stringValue()))
      }
      return
    // case INPUT_TYPE.number:
    //   return Number(accessory.stringValue())
    case INPUT_TYPE.slider: {
      const value =
        typeof options.increment !== 'undefined'
          ? accessory.closestTickMarkValueToValue(accessory.floatValue())
          : accessory.floatValue()
      callback(null, Number(value))
      return
    }
    case INPUT_TYPE.selection: {
      const selectedIndex = accessory.indexOfSelectedItem()
      callback(null, options.possibleValues[selectedIndex])
      return
    }
    default:
      callback(null, undefined)
  }
}

/**
 * Shows a simple input sheet which displays a message, and asks for a single string
 * input.
 * @param msg The prompt message to show.
 * @param initial The initial value of the input string.
 * @return The string that the user input.
 */
export function getStringFromUser(msg, initial) {
  // eslint-disable-next-line no-console
  console.warn(
    `\`UI.getStringFromUser(message, initialValue)\` is deprecated.
Use \`UI.getInputFromUser(
  message,
  { initialValue },
  (error, value) => {}
)\` instead.`
  )
  const accessory = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
  accessory.setStringValue(
    String(typeof initial === 'undefined' ? '' : initial)
  )
  const dialog = NSAlert.alloc().init()
  dialog.setMessageText('User input')
  dialog.setInformativeText(msg)
  dialog.addButtonWithTitle('OK')
  dialog.addButtonWithTitle('Cancel')
  dialog.setAccessoryView(accessory)
  dialog.icon = getPluginAlertIcon()
  dialog.window().setInitialFirstResponder(accessory)
  dialog.runModal()
  return String(accessory.stringValue())
}

/**
 * Shows an input sheet which displays a popup with a series of options,
 * from which the user is asked to choose.
 *
 * @param msg The prompt message to show.
 * @param items A list of option items.
 * @param selectedItemIndex The index of the item to select initially.
 * @return An array with three items: [responseCode, selection, ok].
 */
export function getSelectionFromUser(msg, items, selectedItemIndex = 0) {
  // eslint-disable-next-line no-console
  console.warn(
    `\`UI.getSelectionFromUser(message, items, selectedItemIndex)\` is deprecated.
Use \`UI.getInputFromUser(
  message,
  { type: UI.INPUT_TYPE.selection, items, initialValue },
  (error, value) => {}
)\` instead.`
  )
  const accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0, 0, 295, 25))
  accessory.addItemsWithObjectValues(items)
  accessory.selectItemAtIndex(selectedItemIndex)
  accessory.editable = false

  const dialog = NSAlert.alloc().init()
  dialog.setMessageText(msg)
  dialog.addButtonWithTitle('OK')
  dialog.addButtonWithTitle('Cancel')
  dialog.setAccessoryView(accessory)
  dialog.icon = getPluginAlertIcon()

  const responseCode = dialog.runModal()
  const sel = accessory.indexOfSelectedItem()

  return [responseCode, sel, responseCode === NSAlertFirstButtonReturn]
}

export function getTheme() {
  return MSTheme.sharedTheme().isDark() ? 'dark' : 'light'
}
