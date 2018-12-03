/* globals expect, test */
import { Text } from '../../dom'
import {
  settingForKey,
  setSettingForKey,
  setLayerSettingForKey,
  layerSettingForKey,
  setDocumentSettingForKey,
  documentSettingForKey,
} from '..'

test('non existing settings should return undefined', () => {
  expect(settingForKey('non-existing-key')).toBe(undefined)
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

test('should set a setting on a layer', (context, document) => {
  const layer = new Text({ parent: document.selectedPage })
  setLayerSettingForKey(layer, 'object-key', { a: 1 })
  expect(layerSettingForKey(layer, 'object-key')).toEqual({ a: 1 })
})

test('should set a setting on a document', (context, document) => {
  setDocumentSettingForKey(document, 'object-key', { a: 1 })
  expect(documentSettingForKey(document, 'object-key')).toEqual({ a: 1 })
})
