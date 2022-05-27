import * as util from 'util'
import { getDocumentData } from './utils'

function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    // if we run a script from the Run Script panel, it won't have a bundle
    return 'com.sketchapp.temporary-script'
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

  try {
    return JSON.parse(value)
  } catch (e) {
    return util.toJSObject(value)
  }
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
  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
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
  const value = store.objectForKey(key)

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
  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  if (!stringifiedValue) {
    store.removeObjectForKey(key)
  } else {
    store.setObject_forKey_(stringifiedValue, key)
  }
}

function getNativeStorageObject(layer) {
  let object
  if (!layer._isWrappedObject) {
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
  let stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  if (!stringifiedValue) {
    stringifiedValue = null
  }
  __command.setValue_forKey_onLayer(
    stringifiedValue,
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
  let stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  if (!stringifiedValue) {
    stringifiedValue = null
  }
  __command.setValue_forKey_onDocument(stringifiedValue, key, documentData)
}

export function sessionVariable(key) {
  const threadDic = NSThread.mainThread().threadDictionary()

  const value = threadDic.objectForKey(
    `${SUITE_PREFIX}${getPluginIdentifier()}.${key}`
  )

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

export function setSessionVariable(key, value) {
  const threadDic = NSThread.mainThread().threadDictionary()

  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  if (!stringifiedValue) {
    threadDic.removeObjectForKey(
      `${SUITE_PREFIX}${getPluginIdentifier()}.${key}`
    )
  } else {
    threadDic.setObject_forKey_(
      stringifiedValue,
      `${SUITE_PREFIX}${getPluginIdentifier()}.${key}`
    )
  }
}
