/* globals expect, test */

import { settingForKey, setSettingForKey } from '../Settings'

function madeupPluginIdentifierForTempScript() {
  if (!__command.pluginBundle()) {
    __command.pluginBundle = {
      identifier() {
        return 'temp.script'
      },
    }
  }
}

test('non existing settings should return null', () => {
  madeupPluginIdentifierForTempScript()
  expect(settingForKey('non-existing-key')).toBe(null)
})

test('should set a boolean', () => {
  madeupPluginIdentifierForTempScript()
  setSettingForKey('false-key', false)
  expect(settingForKey('false-key')).toBe(false)

  setSettingForKey('true-key', true)
  expect(settingForKey('true-key')).toBe(true)
})

test('should set a string', () => {
  madeupPluginIdentifierForTempScript()
  setSettingForKey('string-key', 'test')
  expect(settingForKey('string-key')).toBe('test')
})

test('should set undefined', () => {
  madeupPluginIdentifierForTempScript()
  setSettingForKey('undefined-key', undefined)
  expect(settingForKey('undefined-key')).toBe(undefined)
})

test('should set object', () => {
  madeupPluginIdentifierForTempScript()
  setSettingForKey('object-key', { a: 1 })
  expect(settingForKey('object-key')).toEqual({ a: 1 })
})
