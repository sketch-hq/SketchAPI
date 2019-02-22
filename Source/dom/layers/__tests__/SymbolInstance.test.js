/* globals expect, test */
/* eslint-disable no-param-reassign */
import { SymbolInstance } from '../..'
import { createSymbolMaster, canBeLogged } from '../../../test-utils'

test('should create a instance by setting the master property', (context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    master,
  })

  expect(instance.type).toBe('SymbolInstance')
  expect(instance.master).toBe(null)
  // by default, it's not anywhere in the document
  expect(master.getAllInstances()).toEqual([])

  // add the instance to the page
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)
  expect(master.getAllInstances()).toEqual([instance])
  expect(instance.master).toEqual(master)

  canBeLogged(instance, SymbolInstance)
})

test('should create a instance by setting the symbolId property', (context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })
  expect(instance.type).toBe('SymbolInstance')
  expect(master.getAllInstances()).toEqual([instance])
  expect(instance.master).toEqual(master)
})

test('should have overrides', (context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = master.createNewInstance()
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)

  expect(instance.overrides.length).toBe(1)
  const override = instance.overrides[0]
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
  result.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON()
  expect(override.toJSON()).toEqual(result)
})

test('should detach an instance', (context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })
  expect(instance.type).toBe('SymbolInstance')

  const group = instance.detach()
  expect(group.type).toBe('Group')
})
