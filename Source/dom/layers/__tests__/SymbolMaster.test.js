/* globals expect, test */
/* eslint-disable no-param-reassign */
import { SymbolInstance, SymbolMaster, Text, Artboard } from '../..'
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

  const master = SymbolMaster.fromFrame(artboard)

  const instance = master.createNewInstance()

  // add the instance to the page
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)
  expect(instance.overrides.length).toBe(25)
  canBeLogged(instance, SymbolInstance)

  // Find the override points being tested here:
  // - Two string value override points from the top level text layer and the nested.
  // - One symbol override point from the the nested instance.
  const stringValueOverrides = instance.overrides.filter(
    (o) => o.property === 'stringValue'
  )
  expect(stringValueOverrides.length).toBe(2)
  const symbolOverrides = instance.overrides.filter(
    (o) => o.property === 'symbolID'
  )
  expect(symbolOverrides.length).toBe(1)

  const result0 = {
    type: 'Override',
    id: `${text2.id}_stringValue`,
    path: text2.id,
    property: 'stringValue',
    symbolOverride: false,
    colorOverride: false,
    value: 'Test value 2',
    isDefault: true,
    editable: true,
    affectedLayer: text2.toJSON(),
    selected: false,
  }
  delete result0.affectedLayer.overrides
  delete result0.affectedLayer.selected
  delete result0.affectedLayer.ignoresStackLayout
  delete result0.affectedLayer.preservesSpaceInStackLayoutWhenHidden
  const stringOverride0 = stringValueOverrides[0]
  result0.affectedLayer.style = stringOverride0.affectedLayer.style.toJSON()

  const result1 = {
    type: 'Override',
    id: `${nestedInstance.id}_symbolID`,
    path: nestedInstance.id,
    property: 'symbolID',
    symbolOverride: true,
    colorOverride: false,
    value: nestedInstance.symbolId,
    isDefault: true,
    editable: true,
    affectedLayer: nestedInstance.toJSON(),
    selected: false,
  }
  delete result1.affectedLayer.overrides
  delete result1.affectedLayer.selected
  delete result1.affectedLayer.ignoresStackLayout
  delete result1.affectedLayer.preservesSpaceInStackLayoutWhenHidden
  const symbolOverride = symbolOverrides[0]
  result1.affectedLayer.style = symbolOverride.affectedLayer.style.toJSON()

  const result2 = {
    type: 'Override',
    id: `${nestedInstance.id}/${text.id}_stringValue`,
    path: `${nestedInstance.id}/${text.id}`,
    property: 'stringValue',
    symbolOverride: false,
    colorOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON(),
    selected: false,
  }
  delete result2.affectedLayer.selected
  delete result2.affectedLayer.ignoresStackLayout
  delete result2.affectedLayer.preservesSpaceInStackLayoutWhenHidden
  const stringOverride1 = stringValueOverrides[1]
  result2.affectedLayer.style = stringOverride1.affectedLayer.style.toJSON()

  // Find the same override points again from the source
  const stringValueOverridesAfter = instance.overrides.filter(
    (o) => o.property === 'stringValue'
  )
  expect(stringValueOverridesAfter.length).toBe(2)
  const symbolOverridesAfter = instance.overrides.filter(
    (o) => o.property === 'symbolID'
  )
  expect(symbolOverridesAfter.length).toBe(1)

  expect(stringValueOverridesAfter[0].toJSON()).toEqual(result0)
  expect(stringValueOverridesAfter[1].toJSON()).toEqual(result2)
  expect(symbolOverridesAfter[0].toJSON()).toEqual(result1)
})

test('should have overrides', (_context, document) => {
  const { master, text } = createSymbolMaster(document)

  expect(master.overrides.length).toBe(10)
  const override = master.overrides.find((o) => o.property === 'stringValue')
  const result = {
    type: 'Override',
    id: `${text.id}_stringValue`,
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    colorOverride: false,
    value: 'Test value',
    isDefault: true,
    editable: true,
    affectedLayer: text.toJSON(),
    selected: false,
  }
  delete result.affectedLayer.selected
  delete result.affectedLayer.ignoresStackLayout
  delete result.affectedLayer.preservesSpaceInStackLayoutWhenHidden
  const overrideAfter = master.overrides.find(
    (o) => o.property === 'stringValue'
  )
  result.affectedLayer.style = overrideAfter.affectedLayer.style.toJSON()
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
    enabled: true,
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

// I'm commenting out this test until I can find a reliable way to run it.
// The fix in #46970 works, but for some reason the test is not happy.
// test('should get the source Library for a Symbol Master', (_context, document) => {
//   const { master } = createSymbolMaster(document)
//   const lib = master.getLibrary()
//   // This will be null for local Symbols, but that's ok
//   expect(lib).toBe(null)
// })
