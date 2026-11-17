/* globals expect, test */
import { Group, SymbolMaster } from '../..'
import { throws } from '../../../test-utils'

test('should create an empty variant set with `new Group.VariantSet()`', () => {
  const set = new Group.VariantSet({ name: 'Card' })

  // A variant set is a flavor of Group, not a distinct type.
  expect(set.type).toBe('Group')
  expect(set.isVariantSet).toBe(true)
  expect(set.name).toBe('Card')
  // expect(set.properties.length).toBe(0)
  expect(set.layers.length).toBe(0)

  set.name = 'Renamed'
  expect(set.name).toBe('Renamed')
})

test('should create a variant set group with `new Group.VariantSet()`', (_c, document) => {
  const group = new Group.VariantSet({
    name: 'Button',
    parent: document.selectedPage,
  })

  expect(group.isVariantSet).toBe(true)
  // A variant set carries the section trait too, so it reports `isSection` — but not `isFrame`.
  expect(group.isSection).toBe(true)
  expect(group.isFrame).toBe(false)

  const set = document.getVariantSetWithID(group.id)
  expect(set.type).toBe('Group')
  expect(set.name).toBe('Button')
})

test('should create a variant set from masters', () => {
  const small = new SymbolMaster({ name: 'Small' })
  const large = new SymbolMaster({ name: 'Large' })

  expect(small.isVariant).toBe(false)
  expect(large.isVariant).toBe(false)

  const set = new Group.VariantSet({
    name: 'Button',
    layers: [small, large],
  })

  expect(set.type).toBe('Group')
  expect(set.isVariantSet).toBe(true)
  expect(set.layers.length).toBe(2)

  expect(small.isVariant).toBe(true)
  expect(large.isVariant).toBe(true)
})

test('should hand back an unparented variant set when its masters live in a frame', (_c, document) => {
  const page = document.selectedPage
  const frame = new Group.Frame({
    name: 'Home',
    parent: page,
    frame: { x: 100, y: 100, width: 500, height: 350 },
  })
  const small = new SymbolMaster({
    name: 'Button/Small',
    parent: frame,
    frame: { x: 20, y: 20, width: 100, height: 100 },
  })
  const large = new SymbolMaster({
    name: 'Button/Large',
    parent: frame,
    frame: { x: 160, y: 20, width: 100, height: 100 },
  })

  const set = new Group.VariantSet({ name: 'Button', layers: [small, large] })

  // A variant set carries the section trait, so it may never sit in a frame. Combining masters
  // doesn't decide where the set belongs — it comes back unparented, like `new Group({ layers })`.
  expect(set.isVariantSet).toBe(true)
  expect(set.parent).toBe(undefined)
  expect(set.layers.length).toBe(2)

  // The masters are still combined: the set derived its properties from their names.
  expect(small.isVariant).toBe(true)
  expect(large.isVariant).toBe(true)

  // The caller places it.
  set.parent = page
  expect(set.parent.id).toBe(page.id)
})

test('should still honor an explicit parent when combining masters', (_c, document) => {
  const page = document.selectedPage
  const small = new SymbolMaster({ name: 'Button/Small', parent: page })
  const large = new SymbolMaster({ name: 'Button/Large', parent: page })

  const set = new Group.VariantSet({
    name: 'Button',
    layers: [small, large],
    parent: page,
  })

  expect(set.parent.id).toBe(page.id)
})

test('should inspect and configure variant properties', (_context, document) => {
  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
  })
  expect(component.variantProperties.length).toBe(0)

  // Assigning variant properties
  component.variantProperties = [
    { name: 'Shape', values: ['Oval', 'Square', 'Diamond'] },
  ]
  expect(component.variantProperties.length).toBe(1)
  expect(component.variantProperties[0].name).toBe('Shape')
  expect(component.variantProperties[0].values[0]).toBe('Oval')
  expect(component.variantProperties[0].values[1]).toBe('Square')
  expect(component.variantProperties[0].values[2]).toBe('Diamond')

  // Adding variant properties
  component.variantProperties.push({ name: 'Size', values: ['XS', 'S', 'M'] })
  expect(component.variantProperties.length).toBe(2)
  expect(component.variantProperties[1].name).toBe('Size')
  expect(component.variantProperties[1].values[0]).toBe('XS')
  expect(component.variantProperties[1].values[1]).toBe('S')
  expect(component.variantProperties[1].values[2]).toBe('M')

  // Removing variant properties
  component.variantProperties.pop()
  expect(component.variantProperties.length).toBe(1)
  expect(component.variantProperties[0].name).toBe('Shape')

  // Modifying variant property values
  component.variantProperties[0].values = ['Triangle', 'Blob']
  expect(component.variantProperties[0].values.length).toBe(2)
  expect(component.variantProperties[0].values[0]).toBe('Triangle')
  expect(component.variantProperties[0].values[1]).toBe('Blob')
})

test('should assign variant property via Group.VariantSet constructor', (_context, document) => {
  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    variantProperties: [
      { name: 'Shape', values: ['Oval', 'Square', 'Diamond', 'Rectangle'] },
      { name: 'Size', values: ['XS', 'S', 'M'] },
    ],
  })

  expect(component.variantProperties.length).toBe(2)
  expect(component.variantProperties[0].name).toBe('Shape')
  expect(component.variantProperties[0].values.length).toBe(4)
  expect(component.variantProperties[1].name).toBe('Size')
  expect(component.variantProperties[1].values.length).toBe(3)
})

test('should inspect and modify variant configuration for SymbolMasters', (_context, document) => {
  const smallOval = new SymbolMaster({ name: 'Small' })
  const largeDiamond = new SymbolMaster({ name: 'Large' })

  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    variantProperties: [
      { name: 'Shape', values: ['Oval', 'Square', 'Diamond', 'Rectangle'] },
      { name: 'Size', values: ['S', 'M', 'L'] },
    ],
    layers: [smallOval, largeDiamond],
  })
  expect(component).toBeDefined()

  // Variants aren't configured by default
  expect(smallOval.variantConfiguration).toEqual({})
  expect(largeDiamond.variantConfiguration).toEqual({})

  // Assigning all variant axes at once
  smallOval.variantConfiguration = {
    Shape: 'Oval',
    Size: 'M',
  }
  expect(smallOval.variantConfiguration).toEqual({
    Shape: 'Oval',
    Size: 'M',
  })

  // Overriding individual variant axes
  smallOval.variantConfiguration = Object.assign(
    smallOval.variantConfiguration,
    { Size: 'S' }
  )
  expect(smallOval.variantConfiguration).toEqual({
    Shape: 'Oval',
    Size: 'S',
  })
})

test('should query variants by their configuration', (_context, document) => {
  const smallOval = new SymbolMaster({ name: 'Small' })
  const largeDiamond = new SymbolMaster({ name: 'Large' })

  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    variantProperties: [
      { name: 'Shape', values: ['Oval', 'Diamond', 'Rectangle'] },
      { name: 'Size', values: ['S', 'M', 'L'] },
    ],
    layers: [smallOval, largeDiamond],
  })

  smallOval.variantConfiguration = {
    Shape: 'Oval',
    Size: 'S',
  }
  largeDiamond.variantConfiguration = {
    Shape: 'Diamond',
    Size: 'L',
  }

  // Searching for a partial match
  const partialMatch = component.getBestVariantMasterForConfiguration({
    Shape: 'Diamond',
  })
  expect(partialMatch).toEqual(largeDiamond)

  // If no variants quite match the configuration, fall back to first variant
  const fallbackMatch = component.getBestVariantMasterForConfiguration({
    Shape: 'Rectangle',
  })
  expect(fallbackMatch).toEqual(smallOval)

  // Searching for the exact match
  const match = component.getBestVariantMasterForConfiguration({
    Size: 'S',
    Shape: 'Oval',
  })
  expect(match).toEqual(smallOval)

  // Search for the closest variant match
  const closeMatch = component.getBestVariantMasterForConfiguration({
    Size: 'S',
    Shape: 'Rectangle',
  })
  expect(closeMatch).toEqual(smallOval)
})

test('should keep existing property values intact when using the values setter', (_context, document) => {
  const oval = new SymbolMaster({ name: 'Oval' })
  const square = new SymbolMaster({ name: 'Square' })
  const set = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    layers: [oval, square],
    variantProperties: [{ name: 'Shape', values: ['Oval', 'Square'] }],
  })

  oval.variantConfiguration = { Shape: 'Oval' }
  square.variantConfiguration = { Shape: 'Square' }

  const property = set.variantProperties[0]
  expect(property.values.length).toBe(2)

  // Adding a new Shape value via the values setter
  property.values = ['Oval', 'Square', 'Diamond']

  expect(property.values.length).toBe(3)
  expect(property.values[0]).toBe('Oval')
  expect(property.values[1]).toBe('Square')
  expect(property.values[2]).toBe('Diamond')

  // Variants should retain their existing configuration
  expect(oval.variantConfiguration).toEqual({ Shape: 'Oval' })
  expect(square.variantConfiguration).toEqual({ Shape: 'Square' })

  // Now removing the Diamond value via the values setter
  property.values = ['Oval', 'Square']
  expect(property.values.length).toBe(2)
  expect(property.values[0]).toBe('Oval')
  expect(property.values[1]).toBe('Square')

  // The order in which values are passed to the setter should not be important:
  // existing values will keep their current index
  property.values = ['Square', 'Oval']
  expect(property.values.length).toBe(2)
  expect(property.values[0]).toBe('Oval')
  expect(property.values[1]).toBe('Square')

  // Adding a new variant property via the setter should keep existing configurations intact
  set.variantProperties = [
    property,
    { name: 'Color', values: ['Red', 'Green', 'Blue'] },
  ]
  expect(set.variantProperties.length).toBe(2)
  expect(oval.variantConfiguration).toEqual({ Shape: 'Oval' })
  expect(square.variantConfiguration).toEqual({ Shape: 'Square' })
})

test('should support renaming variant property values', (_context, document) => {
  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    variantProperties: [
      { name: 'Shape', values: ['Oval', 'Diamond', 'Rectangle'] },
      { name: 'Size', values: ['S', 'M', 'L'] },
    ],
  })

  const property = component.variantProperties[1]

  expect(property.values[0]).toBe('S')
  expect(property.values[1]).toBe('M')
  expect(property.values[2]).toBe('L')

  property.renameValue('S', 'Small')
  property.renameValue('M', 'Medium')
  property.renameValue('L', 'Large')

  expect(property.values[0]).toBe('Small')
  expect(property.values[1]).toBe('Medium')
  expect(property.values[2]).toBe('Large')

  // Trying to rename a nonexistent value should be a no-op
  property.renameValue('nonexistent', 'smthelse')

  expect(property.values[0]).toBe('Small')
  expect(property.values[1]).toBe('Medium')
  expect(property.values[2]).toBe('Large')

  // The underlying native value object should remain the same after a rename
  const originalNativeValue = property.sketchObject.valueNamed('Small')
  property.renameValue('Small', 'Not So Small Anymore')

  const updatedNativeValue = property.sketchObject.valueNamed(
    'Not So Small Anymore'
  )
  expect(String(originalNativeValue.objectID())).toBe(
    String(updatedNativeValue.objectID())
  )
})

test('should not allow to add multiple property values with the same name', (_context, document) => {
  const component = new Group.VariantSet({
    name: 'Component',
    parent: document.selectedPage,
    variantProperties: [
      { name: 'Property', values: ['Value', 'Value', 'Value'] },
    ],
  })

  const property = component.variantProperties[0]
  expect(property.values.length).toBe(1)
  expect(property.values[0]).toBe('Value')

  property.values = ['Another Value', 'Another Value']
  expect(property.values.length).toBe(1)
  expect(property.values[0]).toBe('Another Value')

  property.values.push('Another Value')
  expect(property.values.length).toBe(1)
  expect(property.values[0]).toBe('Another Value')

  // But if the underlying model already contains values with the same name
  // (e.g. after an explicit rename), we should report them all
  property.values.push('Totally Different Name')
  property.renameValue('Totally Different Name', 'Another Value')

  expect(property.values.length).toBe(2)
  expect(property.values[0]).toBe('Another Value')
  expect(property.values[1]).toBe('Another Value')
})

// A variant set carries the section trait, so the section prototyping restrictions apply to it
// too — see Section.test.js for the section cases.
test('should refuse prototype interactions and start points on a variant set', (_c, document) => {
  const page = document.selectedPage
  const frame = new Group.Frame({ name: 'Welcome', parent: page })
  const set = new Group.VariantSet({ name: 'Button', parent: page })

  expect(throws(() => (set.flow = { target: frame }))).toBe(true)
  expect(set.flow).toBe(undefined)

  expect(throws(() => (frame.flow = { target: set }))).toBe(true)
  expect(frame.flow).toBe(undefined)

  expect(throws(() => (set.flowStartPoint = true))).toBe(true)
  expect(set.flowStartPoint).toBe(false)
})

test('should refuse to convert a variant set to another container type', (_c, document) => {
  const master = new SymbolMaster({ name: 'Small' })
  const set = new Group.VariantSet({
    name: 'Button',
    layers: [master],
    parent: document.selectedPage,
  })
  expect(set.variantProperties.length).toBe(1)

  // A variant set's container type is fixed: only the supported teardown clears its properties
  // and its variants' membership, so a plain type switch is a no-op.
  expect(set.convertToFrame()).toBe(false)
  expect(set.convertToGraphic()).toBe(false)
  expect(set.convertToGroup()).toBe(false)
  expect(set.convertToSection()).toBe(false)

  expect(set.isVariantSet).toBe(true)
  expect(set.isFrame).toBe(false)
  expect(set.variantProperties.length).toBe(1)
  expect(master.isVariant).toBe(true)
})

test('should migrate flat masters into a variant set and back', (_c, document) => {
  const page = document.selectedPage
  const names = [
    'Button/Primary/Large',
    'Button/Primary/Small',
    'Button/Secondary/Large',
    'Button/Secondary/Small',
  ]
  const masters = names.map((name) => new SymbolMaster({ name, parent: page }))

  const set = new Group.VariantSet({
    name: 'Button',
    layers: masters,
    parent: page,
  })

  // The set derives one property per name component past the shared prefix, in
  // layer-list reading order.
  expect(set.layers.length).toBe(4)
  expect(set.variantProperties.length).toBe(2)
  expect(set.variantProperties[0].name).toBe('Property 1')
  expect(set.variantProperties[0].values.slice().sort().join(',')).toBe(
    'Primary,Secondary'
  )
  expect(set.variantProperties[1].name).toBe('Property 2')
  expect(set.variantProperties[1].values.slice().sort().join(',')).toBe(
    'Large,Small'
  )

  // Every master ends up with a complete configuration, and each one resolves back.
  const configurations = set.layers.map((master) => {
    const configuration = master.variantConfiguration
    return set.variantProperties
      .map((property) => configuration[property.name])
      .join('/')
  })
  expect(configurations.slice().sort().join(' | ')).toBe(
    'Primary/Large | Primary/Small | Secondary/Large | Secondary/Small'
  )

  const resolved = set.getBestVariantMasterForConfiguration({
    'Property 1': 'Secondary',
    'Property 2': 'Small',
  })
  expect(resolved.name).toBe('Secondary/Small')

  // Ungrouping the set is the inverse: standalone masters under their original names.
  const restored = set.ungroup()
  expect(restored.length).toBe(4)
  expect(restored.every((layer) => layer.type === 'SymbolMaster')).toBe(true)
  expect(restored.every((layer) => layer.isVariant === false)).toBe(true)
  expect(
    restored
      .map((layer) => layer.name)
      .sort()
      .join(' | ')
  ).toBe(names.join(' | '))
})

test('should derive a configuration from a name when a master joins a set', (_c, document) => {
  const page = document.selectedPage
  const seed = new Array()
  seed.push(new SymbolMaster({ name: 'Button/Large', parent: page }))
  seed.push(new SymbolMaster({ name: 'Button/Small', parent: page }))

  const set = new Group.VariantSet({
    name: 'Button',
    layers: seed,
    parent: page,
  })
  expect(set.variantProperties.length).toBe(1)
  expect(set.variantProperties[0].values.slice().sort().join(',')).toBe(
    'Large,Small'
  )

  // Moving a master into the set infers its configuration from its name, adding
  // the value to the matching property.
  const medium = new SymbolMaster({ name: 'Button/Medium', parent: page })
  medium.parent = set

  expect(medium.isVariant).toBe(true)
  expect(set.variantProperties.length).toBe(1)
  expect(set.variantProperties[0].values.slice().sort().join(',')).toBe(
    'Large,Medium,Small'
  )
  expect(medium.variantConfiguration['Property 1']).toBe('Medium')

  // Joining a set only matches the properties it already has, so a surplus name
  // component does not create one — that stays the combine flow's job.
  const nested = new SymbolMaster({ name: 'Button/XL/Hover', parent: page })
  nested.parent = set

  expect(set.variantProperties.length).toBe(1)
  expect(Object.keys(nested.variantConfiguration).length).toBe(1)
  expect(nested.variantConfiguration['Property 1']).toBe('XL')
})
