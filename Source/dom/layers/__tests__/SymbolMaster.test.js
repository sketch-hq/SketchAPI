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

test(
  'should create a symbol master with a nested symbol',
  (context, document) => {
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
    expect(instance.overrides[0].toJSON()).toEqual({
      type: 'Override',
      id: `${nestedInstance.id}_symbolID`,
      path: nestedInstance.id,
      property: 'symbolID',
      symbolOverride: true,
      value: nestedInstance.symbolId,
      isDefault: true,
      affectedLayer: {
        ...nestedInstance.toJSON(),
        overrides: undefined,
        selected: undefined,
        style: instance.overrides[0].affectedLayer.style.toJSON(),
      },
    })
    expect(instance.overrides[1].toJSON()).toEqual({
      type: 'Override',
      id: `${text2.id}_stringValue`,
      path: text2.id,
      property: 'stringValue',
      symbolOverride: false,
      value: 'Test value 2',
      isDefault: true,
      affectedLayer: {
        ...text2.toJSON(),
        selected: undefined,
        style: instance.overrides[1].affectedLayer.style.toJSON(),
      },
    })
    expect(instance.overrides[2].toJSON()).toEqual({
      type: 'Override',
      id: `${nestedInstance.id}/${text.id}_stringValue`,
      path: `${nestedInstance.id}/${text.id}`,
      property: 'stringValue',
      symbolOverride: false,
      value: 'Test value',
      isDefault: true,
      affectedLayer: {
        ...text.toJSON(),
        selected: undefined,
        style: instance.overrides[2].affectedLayer.style.toJSON(),
      },
    })
  }
)
