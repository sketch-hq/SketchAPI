/* globals expect, test */
/* eslint-disable no-param-reassign */
import { SymbolMaster, Text, Artboard } from '../..'
import { createSymbolMaster, canBeLogged } from '../../../test-utils'

test('should create a symbol master from an artboard', (_context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)

  expect(master.type).toBe('SymbolMaster')

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master)

  canBeLogged(master, SymbolMaster)
})

test('should replace a symbol master by an artboard', (_context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)
  expect(master.type).toBe('SymbolMaster')

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master)

  const artboard = master.toArtboard()

  expect(document.getSymbolMasterWithID(master.symbolId)).toBe(undefined)
  expect(artboard.type).toBe('Artboard')
})

test('should create a symbol instance from a master', (_context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)

  expect(master.getAllInstances()).toEqual([])

  // create an instance
  const instance = master.createNewInstance()
  expect(instance.type).toBe('SymbolInstance')
  expect(instance.master).toBe(null)
  // by default, it's not anywhere in the document
  expect(master.getAllInstances()).toEqual([])

  // add the instance to the page
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)
  expect(master.getAllInstances()).toEqual([instance])
  expect(instance.master).toEqual(master)
})

test('should create a symbol master with a nested symbol', (_context, document) => {
  // build the first symbol master
  const { master: nestedMaster, text } = createSymbolMaster(document)

  const artboard = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })
  const text2 = new Text({
    text: 'Test value 2',
  })
  const nestedInstance = nestedMaster.createNewInstance()
  artboard.layers = [nestedInstance, text2]

  const master = SymbolMaster.fromArtboard(artboard)

  const instance = master.createNewInstance()

  // add the instance to the page
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)
  expect(instance.overrides.length).toBe(13)
  const result0 = {
    type: 'Override',
    id: `${text2.id}_stringValue`,
    path: text2.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value 2',
    isDefault: true,
    editable: true,
    affectedLayer: text2.toJSON(),
    selected: false,
  }
  delete result0.affectedLayer.overrides
  delete result0.affectedLayer.selected
  result0.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON()
  const result1 = {
    type: 'Override',
    id: `${nestedInstance.id}_symbolID`,
    path: nestedInstance.id,
    property: 'symbolID',
    symbolOverride: true,
    value: nestedInstance.symbolId,
    isDefault: true,
    editable: true,
    affectedLayer: nestedInstance.toJSON(),
    selected: false,
  }
  delete result1.affectedLayer.overrides
  delete result1.affectedLayer.selected
  result1.affectedLayer.style = instance.overrides[6].affectedLayer.style.toJSON()
  const result2 = {
    type: 'Override',
    id: `${nestedInstance.id}/${text.id}_stringValue`,
    path: `${nestedInstance.id}/${text.id}`,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON(),
    selected: false,
  }
  delete result2.affectedLayer.selected
  result2.affectedLayer.style = instance.overrides[7].affectedLayer.style.toJSON()
  expect(instance.overrides[0].toJSON()).toEqual(result0)
  expect(instance.overrides[6].toJSON()).toEqual(result1)
  expect(instance.overrides[7].toJSON()).toEqual(result2)
})

test('should have overrides', (_context, document) => {
  const { master, text } = createSymbolMaster(document)

  expect(master.overrides.length).toBe(6)
  const override = master.overrides[0]
  const result = {
    type: 'Override',
    id: `${text.id}_stringValue`,
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON(),
  }
  delete result.affectedLayer.selected
  result.affectedLayer.style = master.overrides[0].affectedLayer.style.toJSON()
  expect(override.toJSON()).toEqual(result)
})

test('should set overrides as editable or not', (_context, document) => {
  const { master } = createSymbolMaster(document)

  expect(master.overrides[0].editable).toBe(true)
  master.overrides[0].editable = false
  expect(master.overrides[0].editable).toBe(false)

  master.overrides = [
    {
      ...master.overrides[0].toJSON(),
      editable: true,
    },
  ]
  expect(master.overrides[0].editable).toBe(true)
})

test('should include `includedInInstance` in the `background`', (_context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)

  // defaults
  expect(master.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    includedInInstance: true,
    color: '#ffffffff',
  })

  master.background.includedInInstance = false
  expect(master.background.includedInInstance).toBe(false)

  master.background = {
    color: '#00000000',
    enabled: false,
    includedInInstance: true,
    includedInExport: true,
  }
  expect(master.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    includedInInstance: true,
    color: '#00000000',
  })
})
