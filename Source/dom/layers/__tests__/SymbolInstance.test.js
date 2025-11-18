/* globals expect, test */
/* eslint-disable no-param-reassign */
import { SymbolInstance, Group, SymbolMaster } from '../..'
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
  instance.sketchObject.ensureDetachHasUpdated()

  expect(instance.overrides.length).toBe(10)

  const override = instance.overrides.find((o) => o.property === 'stringValue')
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
  result.affectedLayer.style = override.affectedLayer.style.toJSON()

  const overrideAfter = instance.overrides.find(
    (o) => o.property === 'stringValue'
  )
  expect(overrideAfter.toJSON()).toEqual(result)
})

test('should have expandedLayers', (_context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    parent: document.selectedPage,
    master,
  })

  expect(instance.expandedLayers.length).toBe(1)
  expect(instance.expandedLayers[0].id).toBe(text.id)
  expect(instance.expandedLayers[0].isNestedSymbol).toBeUndefined()
})

test('should have nested symbols in expandedLayers', (_context, document) => {
  const { master: nestedMaster } = createSymbolMaster(document)

  const frame = new Group.Frame({
    name: 'OuterSymbol',
    parent: document.selectedPage,
    layers: [
      nestedMaster.createNewInstance(),
      { type: 'Text', text: 'Something' },
    ],
  })

  const instance = SymbolMaster.fromFrame(frame).createNewInstance()
  instance.parent = document.selectedPage

  expect(instance.expandedLayers.length).toBe(2)
  expect(instance.expandedLayers[0].type).toBe(Group.type)
  expect(instance.expandedLayers[0].isNestedSymbol).toBe(true)
  expect(instance.expandedLayers[0].symbolId).toBe(nestedMaster.symbolId)
})

test('should access overrides for an expanded layer', (_context, document) => {
  const { master, text } = createSymbolMaster(document)
  const instance = new SymbolInstance({
    parent: document.selectedPage,
    master,
  })

  // Note: we don't store a reference to `instance.expandedLayers[0]` because:
  // 1) once we modify the override value below, `expandedLayers` collection
  //    is regenerated, and this reference would become stale
  // 2) the layer is immutable, so its `text` won't change once we modify the override

  expect(instance.expandedLayers[0].id).toBe(text.id)
  expect(instance.expandedLayers[0].text).toBe(text.text)

  const overrides = instance.overridesForExpandedLayer(
    instance.expandedLayers[0]
  )
  const textOverride = overrides.find((o) => o.property === 'stringValue')
  expect(textOverride).toBeDefined()
  expect(textOverride.value).toBe('Test value')

  textOverride.value = 'New value'
  expect(textOverride.value).toBe('New value')
  expect(instance.expandedLayers[0].text).toBe('New value')
})

test('should access overrides for a deeply nested expanded layer', (_context, document) => {
  const { master: nestedMaster, text: deeplyNestedText } = createSymbolMaster(
    document
  )
  const intermediateMaster = SymbolMaster.fromFrame(
    new Group.Frame({
      name: 'IntermediateSymbol',
      parent: document.selectedPage,
      layers: [nestedMaster.createNewInstance()],
    })
  )
  const outerMaster = SymbolMaster.fromFrame(
    new Group.Frame({
      name: 'OuterSymbol',
      parent: document.selectedPage,
      layers: [intermediateMaster.createNewInstance()],
    })
  )

  const instance = new SymbolInstance({
    parent: document.selectedPage,
    master: outerMaster,
  })

  expect(instance.expandedLayers[0]?.layers[0]?.layers[0]).toBeDefined()
  expect(instance.expandedLayers[0].layers[0].layers[0].text).toBe(
    deeplyNestedText.text
  )

  const textOverride = instance
    .overridesForExpandedLayer(instance.expandedLayers[0].layers[0].layers[0])
    .find((o) => o.property === 'stringValue')

  expect(textOverride).toBeDefined()
  expect(textOverride.value).toBe(deeplyNestedText.text)

  textOverride.value = 'New deeply nested value'

  expect(textOverride.value).toBe('New deeply nested value')
  expect(instance.expandedLayers[0].layers[0].layers[0].text).toBe(
    'New deeply nested value'
  )
})

// The gotcha here is that all 3 instances of the nested symbol share the same
// underlying immutable model object initially, so we need to make sure we can
// still override them individually
test('should access overrides for each individual instance of a nested symbol', (_context, document) => {
  const { master: nestedMaster, text: nestedText } = createSymbolMaster(
    document
  )
  const outerMaster = SymbolMaster.fromFrame(
    new Group.Frame({
      name: 'OuterSymbol',
      parent: document.selectedPage,
      layers: [
        nestedMaster.createNewInstance(),
        nestedMaster.createNewInstance(),
        nestedMaster.createNewInstance(),
      ],
    })
  )

  const instance = new SymbolInstance({
    parent: document.selectedPage,
    master: outerMaster,
  })

  expect(instance.expandedLayers[0].layers[0].text).toBe(nestedText.text)
  expect(instance.expandedLayers[1].layers[0].text).toBe(nestedText.text)
  expect(instance.expandedLayers[2].layers[0].text).toBe(nestedText.text)

  const textOverrides = instance.expandedLayers.map((layer) =>
    instance
      .overridesForExpandedLayer(layer.layers[0])
      .find((o) => o.property === 'stringValue')
  )
  expect(textOverrides[0].value).toBe(nestedText.text)
  expect(textOverrides[1].value).toBe(nestedText.text)
  expect(textOverrides[2].value).toBe(nestedText.text)

  textOverrides[0].value = 'First instance'
  textOverrides[1].value = 'Second instance'
  textOverrides[2].value = 'Third instance'

  expect(textOverrides[0].value).toBe('First instance')
  expect(textOverrides[1].value).toBe('Second instance')
  expect(textOverrides[2].value).toBe('Third instance')

  expect(instance.expandedLayers[0].layers[0].text).toBe('First instance')
  expect(instance.expandedLayers[1].layers[0].text).toBe('Second instance')
  expect(instance.expandedLayers[2].layers[0].text).toBe('Third instance')
})

// Disabled via #49647 and #49751
// - fix #49472 didn't work after all. :sad-panda:
// We NEED these tests, so for now we should disable this one until
// we know why this isn't working correctly. - JLN, 6 Mar, 2023
//
//test('should detach an instance', (_context, document) => {
//  const { master } = createSymbolMaster(document)
//  const instance = new SymbolInstance({
//    symbolId: master.symbolId,
//    parent: document.selectedPage,
//  })
//  instance.sketchObject.ensureDetachHasUpdated()
//  expect(instance.type).toBe('SymbolInstance')
//
//  const group = instance.detach()
//  expect(group.type).toBe('Group')
//})
//
//// Regression SketchAPI#851, #39113.
//test('should detach an instance recursively', (_context, document) => {
//  const { master } = createSymbolMaster(document)
//  const instance = new SymbolInstance({
//    symbolId: master.symbolId,
//    parent: document.selectedPage,
//  })
//  instance.sketchObject.ensureDetachHasUpdated()
//  expect(instance.type).toBe('SymbolInstance')
//
//  const group = instance.detach({ recursively: true })
//  expect(group.type).toBe('Group')
//})
//
//test('should resize in response to smart layout changes', (_context, document) => {
//  const { master } = createSymbolMaster(document)
//  master.smartLayout = SmartLayout.LeftToRight
//  const instance = new SymbolInstance({
//    symbolId: master.symbolId,
//    parent: document.selectedPage,
//  })
//  const initialWidth = instance.frame.width
//  instance.overrides[0].value = 'A string that is long enough to cause a size change, hopefully in the positive direction'
//  instance.resizeWithSmartLayout()
//  const widthAfterSmartLayout = instance.frame.width
//  expect(widthAfterSmartLayout).toBeGreaterThan(initialWidth)
//})

// test('should change an override value', (_context, document) => {
//   const { master } = createSymbolMaster(document)
//   const instance = new SymbolInstance({
//     symbolId: master.symbolId,
//     parent: document.selectedPage,
//   })
//   expect(instance.overrides[0].value).toBe('Test value')
//   instance.overrides[0].value = 'New value'
//   expect(instance.overrides[0].value).toBe('New value')
// })
