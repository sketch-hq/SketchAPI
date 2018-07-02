import { isWrappedObject, getDocumentData } from '../dom/utils'

const util = require('util')

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
  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  if (!stringifiedValue) {
    store.removeObjectForKey(key)
  } else {
    store.setObject_forKey_(stringifiedValue, key)
  }
}

export function layerSettingForKey(layer, key) {
  const value = __command.valueForKey_onLayer(
    key,
    isWrappedObject(layer) ? layer.sketchObject : layer
  )

  if (typeof value === 'undefined' || value == 'undefined' || value === null) {
    return undefined
  }
  return JSON.parse(value)
}

export function setLayerSettingForKey(layer, key, value) {
  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  __command.setValue_forKey_onLayer(
    stringifiedValue,
    key,
    isWrappedObject(layer) ? layer.sketchObject : layer
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
  log(util)
  const documentData = getDocumentData(document)
  const stringifiedValue = JSON.stringify(value, (k, v) => util.toJSObject(v))
  __command.setValue_forKey_onDocument(stringifiedValue, key, documentData)
}
