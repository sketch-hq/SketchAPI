/* globals expect, test */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/named
import { SymbolMaster, Text, Artboard } from '../..'
import { createSymbolMaster } from '../../../test-utils'

test('should create a symbol master from an artboard', (context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)
  // check that a master can be logged
  log(master)
  expect(master.type).toBe('SymbolMaster')

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master)
})

test('should replace a symbol master by an artboard', (context, document) => {
  // build the symbol master
  const { master } = createSymbolMaster(document)
  expect(master.type).toBe('SymbolMaster')

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master)

  const artboard = master.toArtboard()

  expect(document.getSymbolMasterWithID(master.symbolId)).toBe(undefined)
  expect(artboard.type).toBe('Artboard')
})

test('should create a symbol instance from a master', (context, document) => {
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

test('should create a symbol master with a nested symbol', (context, document) => {
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
  expect(instance.overrides.length).toBe(3)
  const result0 = {
    type: 'Override',
    id: `${nestedInstance.id}_symbolID`,
    path: nestedInstance.id,
    property: 'symbolID',
    symbolOverride: true,
    value: nestedInstance.symbolId,
    isDefault: true,
    editable: true,
    affectedLayer: nestedInstance.toJSON(),
  }
  delete result0.affectedLayer.overrides
  delete result0.affectedLayer.selected
  result0.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON()
  const result1 = {
    type: 'Override',
    id: `${text2.id}_stringValue`,
    path: text2.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value 2',
    isDefault: true,
    editable: true,
    affectedLayer: text2.toJSON(),
  }
  delete result1.affectedLayer.overrides
  delete result1.affectedLayer.selected
  result1.affectedLayer.style = instance.overrides[1].affectedLayer.style.toJSON()
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
  }
  delete result2.affectedLayer.selected
  result2.affectedLayer.style = instance.overrides[2].affectedLayer.style.toJSON()
  expect(instance.overrides[0].toJSON()).toEqual(result0)
  expect(instance.overrides[1].toJSON()).toEqual(result1)
  expect(instance.overrides[2].toJSON()).toEqual(result2)
})
