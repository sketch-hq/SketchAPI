/* globals expect, test */
/* eslint-disable no-param-reassign */
import { SymbolInstance, SmartLayout } from '../..'
import { createSymbolMaster, canBeLogged } from '../../../test-utils'

test('should create a instance by setting the master property', (_context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    parent: document.selectedPage,
    master,
  })

  expect(instance.type).toBe('SymbolInstance')
  expect(instance.master).toEqual(master)
  expect(master.getAllInstances()).toEqual([instance])

  canBeLogged(instance, SymbolInstance)
})

test('should create a instance by setting the symbolId property', (_context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })
  expect(instance.type).toBe('SymbolInstance')
  expect(master.getAllInstances()).toEqual([instance])
  expect(instance.master).toEqual(master)
})

test('should have overrides', (_context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = master.createNewInstance()
  document.selectedPage.layers = document.selectedPage.layers.concat(instance)

  expect(instance.overrides.length).toBe(6)
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
    selected: false,
  }
  delete result.affectedLayer.selected
  result.affectedLayer.style = instance.overrides[0].affectedLayer.style.toJSON()
  expect(override.toJSON()).toEqual(result)
})

test('should detach an instance', (_context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })
  expect(instance.type).toBe('SymbolInstance')

  const group = instance.detach()
  expect(group.type).toBe('Group')
})

// Regression SketchAPI#851, #39113.
test('should detach an instance recursively', (_context, document) => {
  const { master } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })
  expect(instance.type).toBe('SymbolInstance')

  const group = instance.detach({ recursively: true })
  expect(group.type).toBe('Group')
})

test('should resize in response to smart layout changes', (_context, document) => {
  const { master } = createSymbolMaster(document)
  master.smartLayout = SmartLayout.LeftToRight

  const instance = new SymbolInstance({
    symbolId: master.symbolId,
    parent: document.selectedPage,
  })

  const initialWidth = instance.frame.width
  instance.overrides[0].value = '0'.repeat(1000)
  instance.resizeWithSmartLayout()
  const widthAfterSmartLayout = instance.frame.width
  expect(initialWidth < widthAfterSmartLayout).toBe(true)
})
