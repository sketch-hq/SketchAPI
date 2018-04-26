/* globals expect, test */
import { isRunningOnJenkins } from '../../test-utils'
import { Text } from '../../dom/components/Text'
import {
  settingForKey,
  setSettingForKey,
  setLayerSettingForKey,
  layerSettingForKey,
  setDocumentSettingForKey,
  documentSettingForKey,
} from '../Settings'

test('non existing settings should return undefined', () => {
  if (isRunningOnJenkins()) {
    try {
      expect(settingForKey('non-existing-key')).toBe(undefined)
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toMatch(
        'It seems that the command is not running in a plugin.'
      )
    }
  } else {
    expect(settingForKey('non-existing-key')).toBe(undefined)
  }
})

test('should set a boolean', () => {
  if (isRunningOnJenkins()) {
    try {
      setSettingForKey('false-key', false)
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toMatch(
        'It seems that the command is not running in a plugin.'
      )
    }
  } else {
    setSettingForKey('false-key', false)
    expect(settingForKey('false-key')).toBe(false)

    setSettingForKey('true-key', true)
    expect(settingForKey('true-key')).toBe(true)
  }
})

test('should set a string', () => {
  if (isRunningOnJenkins()) {
    try {
      setSettingForKey('string-key', 'test')
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toMatch(
        'It seems that the command is not running in a plugin.'
      )
    }
  } else {
    setSettingForKey('string-key', 'test')
    expect(settingForKey('string-key')).toBe('test')
  }
})

test('should set undefined', () => {
  if (isRunningOnJenkins()) {
    try {
      setSettingForKey('undefined-key', undefined)
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toMatch(
        'It seems that the command is not running in a plugin.'
      )
    }
  } else {
    setSettingForKey('undefined-key', undefined)
    expect(settingForKey('undefined-key')).toBe(undefined)
  }
})

test('should set object', () => {
  if (isRunningOnJenkins()) {
    try {
      setSettingForKey('object-key', { a: 1 })
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toMatch(
        'It seems that the command is not running in a plugin.'
      )
    }
  } else {
    setSettingForKey('object-key', { a: 1 })
    expect(settingForKey('object-key')).toEqual({ a: 1 })
  }
})

test('should set a setting on a layer', (context, document) => {
  const layer = new Text({ parent: document.selectedPage })
  setLayerSettingForKey(layer, 'object-key', { a: 1 })
  expect(layerSettingForKey(layer, 'object-key')).toEqual({ a: 1 })
})

test('should set a setting on a document', (context, document) => {
  setDocumentSettingForKey(document, 'object-key', { a: 1 })
  expect(documentSettingForKey(document, 'object-key')).toEqual({ a: 1 })
})
