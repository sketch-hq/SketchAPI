/* globals expect, test */
/* eslint-disable no-param-reassign */

import { SymbolMaster, Text, Artboard, SymbolInstance } from '../../'

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

test(
  'should create a instance by setting the master property',
  (context, document) => {
    const { master } = createSymbolMaster(document)
    const instance = new SymbolInstance({
      master,
    })
    // check that an instance can be logged
    log(instance)
    expect(instance.type).toBe('SymbolInstance')
    expect(instance.master).toBe(null)
    // by default, it's not anywhere in the document
    expect(master.getAllInstances()).toEqual([])

    // add the instance to the page
    document.selectedPage.layers = document.selectedPage.layers.concat(instance)
    expect(master.getAllInstances()).toEqual([instance])
    expect(instance.master).toEqual(master)
  }
)

test(
  'should create a instance by setting the symbolId property',
  (context, document) => {
    const { master } = createSymbolMaster(document)
    const instance = new SymbolInstance({
      symbolId: master.symbolId,
      parent: document.selectedPage,
    })
    expect(instance.type).toBe('SymbolInstance')
    expect(master.getAllInstances()).toEqual([instance])
    expect(instance.master).toEqual(master)
  }
)

test('should have overrides', (context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = master.createNewInstance()
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)

  expect(instance.overrides.length).toBe(1)
  const override = instance.overrides[0]
  expect(override.toJSON()).toEqual({
    type: 'Override',
    id: `${text.id}_stringValue`,
    path: text.id,
    property: 'stringValue',
    symbolOverride: false,
    value: 'Test value',
    isDefault: true,
  })
})
