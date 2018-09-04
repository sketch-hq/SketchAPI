import { isWrappedObject, getDocumentData } from '../dom/utils'

function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    throw new Error(
      'It seems that the command is not running in a plugin. Bundle your command in a plugin to use the Settings API.'
    )
  }
  return __command.pluginBundle().identifier()
}

/**
 * Return the value of a global setting for a given key.
 * @param key The setting to look up.
 * @return The setting value.
 *
 * This is equivalent to reading a setting for the currently
 * running version of Sketch using the `defaults` command line tool,
 * eg: defaults read com.bohemiancoding.sketch3 <key>
 * */
export function globalSettingForKey(key) {
  const value = NSUserDefaults.standardUserDefaults().objectForKey_(key)
  if (typeof value === 'undefined' || value === 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

/**
 * Set the value of a global setting for a given key.
 *
 * @param key The setting to set.
 * @param value The value to set it to.
 *
 * This is equivalent to writing a setting for the currently
 * running version of Sketch using the `defaults` command line tool,
 * eg: defaults write com.bohemiancoding.sketch3 <key> <value>
 */
export function setGlobalSettingForKey(key, value) {
  const store = NSUserDefaults.standardUserDefaults()
  const stringifiedValue = JSON.stringify(value)
  if (!stringifiedValue) {
    store.removeObjectForKey(key)
  } else {
    store.setObject_forKey_(stringifiedValue, key)
  }
}

const SUITE_PREFIX = 'plugin.sketch.'

/**
 * Return the value of a plugin setting for a given key.
 *
 * @param key The setting to look up.
 * @return The setting value.
 * */
export function settingForKey(key) {
  const store = NSUserDefaults.alloc().initWithSuiteName(
    `${SUITE_PREFIX}${getPluginIdentifier()}`
  )
  const value = store.objectForKey_(key)

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

/**
 * Set the value of a global setting for a given key.
 *
 * @param key The setting to set.
 * @param value The value to set it to.
 */
export function setSettingForKey(key, value) {
  const store = NSUserDefaults.alloc().initWithSuiteName(
    `${SUITE_PREFIX}${getPluginIdentifier()}`
  )
  const stringifiedValue = JSON.stringify(value)
  if (!stringifiedValue) {
    store.removeObjectForKey(key)
  } else {
    store.setObject_forKey_(stringifiedValue, key)
  }
}

function getNativeStorageObject(layer) {
  let object
  if (!isWrappedObject(layer)) {
    object = layer
  } else if (layer.type === 'DataOverride') {
    object = layer.sketchObject.availableOverride().overrideValue()
  } else if (layer.type === 'Override') {
    object = layer.sketchObject.overrideValue()
  } else {
    object = layer.sketchObject
  }
  return object
}

export function layerSettingForKey(layer, key) {
  const value = __command.valueForKey_onLayer(
    key,
    getNativeStorageObject(layer)
  )

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

export function setLayerSettingForKey(layer, key, value) {
  __command.setValue_forKey_onLayer(
    JSON.stringify(value),
    key,
    getNativeStorageObject(layer)
  )
}

export function documentSettingForKey(document, key) {
  const documentData = getDocumentData(document)
  const value = __command.valueForKey_onDocument(key, documentData)

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

export function setDocumentSettingForKey(document, key, value) {
  const documentData = getDocumentData(document)
  __command.setValue_forKey_onDocument(JSON.stringify(value), key, documentData)
}
