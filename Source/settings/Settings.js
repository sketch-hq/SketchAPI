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
  if (typeof value === 'undefined' || value === 'undefined') {
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
  NSUserDefaults.standardUserDefaults().setObject_forKey_(
    JSON.stringify(value) || 'undefined',
    key
  )
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

  if (typeof value === 'undefined' || value == 'undefined') {
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
  store.setObject_forKey_(JSON.stringify(value) || 'undefined', key)
}
