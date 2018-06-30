import { isWrappedObject, getDocumentData } from '../dom/utils'

function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    throw new Error(
      'It seems that the command is not running in a plugin. Bundle your command in a plugin to use the Settings API.'
    )
  }
  return __command.pluginBundle().identifier()
}

// check if the argument is a native sketch object
function getNativeClass(arg) {
  try {
    return (
      arg &&
      arg.isKindOfClass &&
      typeof arg.class === 'function' &&
      String(arg.class())
    )
  } catch (err) {
    return undefined
  }
}

const assimilatedArrays = [
  'NSArray',
  'NSMutableArray',
  '__NSArrayM',
  '__NSSingleObjectArrayI',
  '__NSArray0',
]
function isNSArray(ar) {
  const type = getNativeClass(ar)
  return assimilatedArrays.indexOf(type) !== -1
}

const assimilatedStrings = [
  'NSString',
  '__NSCFString',
  'NSTaggedPointerString',
  '__NSCFConstantString',
]
function isNSString(arg) {
  const type = getNativeClass(arg)
  return assimilatedStrings.indexOf(type) !== -1
}

// Boolean NSNumbers are type __NSCFBoolean
const assimilatedNumbers = ['__NSCFNumber', 'NSNumber', '__NSCFBoolean']
function isNSNumber(arg) {
  const type = getNativeClass(arg)
  return assimilatedNumbers.indexOf(type) !== -1
}

const assimilatedDictionaries = [
  'NSDictionary',
  '__NSDictionaryM',
  '__NSSingleEntryDictionaryI',
  '__NSDictionaryI',
  '__NSCFDictionary',
]
function isNSDictionary(arg) {
  const type = getNativeClass(arg)
  return assimilatedDictionaries.indexOf(type) !== -1
}

/**
 * Coerce common NSObjects to their JS counterparts
 * @param value Any value
 *
 * Converts NSDictionary, NSArray, NSStirng, and NSNumber to
 * native JS equivilents.
 * Deep conversions will be performed on Dictionaries and Arrays
 */
function coerceNSObject(value) {
  if (value) {
    if (isNSDictionary(value)) {
      const dict = {}
      const keys = value.allKeys()
      for (let i = 0; i < keys.length; i += 1) {
        const k = coerceNSObject(keys[i])
        const v = coerceNSObject(value[k])
        dict[k] = v
      }
      return dict
    } else if (isNSArray(value)) {
      const arr = []
      const c = value.length
      for (let i = 0; i < c; i += 1) {
        const e = coerceNSObject(value[i])
        arr.push(e)
      }
      return arr
    } else if (isNSString(value)) {
      return String(value)
    } else if (isNSNumber(value)) {
      return Number(value)
    }
  }
  return value
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
  const stringified = JSON.stringify(value, (k, v) => coerceNSObject(v))
  if (!stringified) {
    store.removeObjectForKey(key)
  } else {
    store.setObject_forKey_(stringified, key)
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
  const stringified = JSON.stringify(value, (k, v) => coerceNSObject(v))
  __command.setValue_forKey_onLayer(
    stringified,
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
  const documentData = getDocumentData(document)
  const stringified = JSON.stringify(value, (k, v) => coerceNSObject(v))
  __command.setValue_forKey_onDocument(stringified, key, documentData)
}
