/* globals expect, test */
import { Text } from '../../dom'
import {
  settingForKey,
  setSettingForKey,
  globalSettingForKey,
  setLayerSettingForKey,
  layerSettingForKey,
  setDocumentSettingForKey,
  documentSettingForKey,
} from '..'

test('non existing settings should return undefined', () => {
  expect(settingForKey('non-existing-key')).toBe(undefined)
})

test(`returns raw value when value is not valid JSON`, () => {
  const store = NSUserDefaults.standardUserDefaults()
  store.setObject_forKey_('raw-string-value', 'raw-string-key')

  expect(globalSettingForKey('raw-string-key')).toBe('raw-string-value')
})

test('should set a boolean', () => {
  setSettingForKey('false-key', false)
  expect(settingForKey('false-key')).toBe(false)

  setSettingForKey('true-key', true)
  expect(settingForKey('true-key')).toBe(true)
})

test('should set a string', () => {
  setSettingForKey('string-key', 'test')
  expect(settingForKey('string-key')).toBe('test')
})

test('should set undefined', () => {
  setSettingForKey('undefined-key', undefined)
  expect(settingForKey('undefined-key')).toBe(undefined)
})

test('should set object', () => {
  setSettingForKey('object-key', { a: 1 })
  expect(settingForKey('object-key')).toEqual({ a: 1 })
})

test('should set a setting on a layer', (_context, document) => {
  const layer = new Text({ parent: document.selectedPage })
  setLayerSettingForKey(layer, 'object-key', { a: 1 })
  expect(layerSettingForKey(layer, 'object-key')).toEqual({ a: 1 })
})

test('should set an undefined setting on a layer', (_context, document) => {
  const layer = new Text({ parent: document.selectedPage })
  expect(layerSettingForKey(layer, 'object-key')).toBe(undefined)

  setLayerSettingForKey(layer, 'object-key', { a: 1 })
  expect(layerSettingForKey(layer, 'object-key')).toEqual({ a: 1 })

  setLayerSettingForKey(layer, 'object-key', undefined)
  expect(layerSettingForKey(layer, 'object-key')).toBe(undefined)

  setLayerSettingForKey(layer, 'object-key', 0)
  expect(layerSettingForKey(layer, 'object-key')).toBe(0)

  setLayerSettingForKey(layer, 'object-key', null)
  expect(layerSettingForKey(layer, 'object-key')).toBe(null)
})

test('should set a setting on a document', (_context, document) => {
  setDocumentSettingForKey(document, 'object-key', { a: 1 })
  expect(documentSettingForKey(document, 'object-key')).toEqual({ a: 1 })
})
