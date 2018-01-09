/* globals expect, test */
/* eslint-disable no-param-reassign */

import { SymbolMaster, Text, Artboard } from '../../'

function createSymbolMaster(document) {
  const artboard = new Artboard({
    name: 'Test',
    parent: document.selectedPage,
  })
  const text = new Text({
    text: 'Test value',
    parent: artboard,
  })

  // build the symbol master
  return {
    master: SymbolMaster.fromArtboard(artboard),
    text,
    artboard,
  }
}

test('should be able to set overrides', (context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = master.createNewInstance()
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)

  expect(instance.overrides.length).toBe(1)
  const override = instance.overrides[0]
  override.value = 'overridden'

  expect(instance.overrides.length).toBe(1)
  expect(instance.overrides[0].toJSON()).toEqual({
    id: `${text.id}_stringValue`,
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'overridden',
    isDefault: false,
  })
})

test('should change a nested symbol', (context, document) => {
  // build the first symbol master
  const { master: nestedMaster } = createSymbolMaster(document)
  const { master: nestedMaster2 } = createSymbolMaster(document)

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

  const override = instance.overrides[0]
  override.value = nestedMaster2.symbolId

  expect(instance.overrides[0].toJSON()).toEqual({
    id: `${nestedInstance.id}_symbolID`,
    path: nestedInstance.id,
    property: 'symbolID',
    symbolOverride: true,
    value: nestedMaster2.symbolId,
    isDefault: false,
  })
})
