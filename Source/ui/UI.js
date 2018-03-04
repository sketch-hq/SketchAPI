/* globals NSAlertFirstButtonReturn */

import { isNativeObject, toArray } from '../dom/utils'
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
  } else if (isNativeObject(document)) {
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
  const app = NSApplication.sharedApplication()
  app.displayDialog_withTitle(text, title)
}

/**
 * Shows a simple input sheet which displays a message, and asks for a single string
 * input.
 * @param msg The prompt message to show.
 * @param initial The initial value of the input string.
 * @return The string that the user input.
 */
export function getStringFromUser(msg, initial) {
  const panel = MSModalInputSheet.alloc().init()
  const result = panel.runPanelWithNibName_ofType_initialString_label_(
    'MSModalInputSheet',
    0,
    String(typeof initial === 'undefined' ? '' : initial),
    msg
  )
  return String(result)
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
  const accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0, 0, 200, 25))
  accessory.addItemsWithObjectValues(items)
  accessory.selectItemAtIndex(selectedItemIndex)
  accessory.editable = false

  const dialog = NSAlert.alloc().init()
  dialog.setMessageText(msg)
  dialog.addButtonWithTitle('OK')
  dialog.addButtonWithTitle('Cancel')
  dialog.setAccessoryView(accessory)

  const responseCode = dialog.runModal()
  const sel = accessory.indexOfSelectedItem()

  return [responseCode, sel, responseCode === NSAlertFirstButtonReturn]
}

/**
 * SHows a panel to choose images
 *
 * @export
 * @param {boolean} [multiSelection=false] Whether to choose multi files
 * @returns {string[]} An array of the selected files path
 */
export function getImageFromUser(multiSelection = false) {
  const panel = NSOpenPanel.openPanel()

  panel.canChooseFiles = true
  panel.canChooseDirectories = false
  panel.allowMultipleSelection = multiSelection
  panel.setAllowedFileTypes(['jpg', 'jpeg', 'png', 'bmp'])
  panel.runModal()

  return toArray(panel.URLs())
}
