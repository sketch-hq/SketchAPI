/* globals expect, test */
import { Group, SymbolMaster } from '../..'
import { throws } from '../../../test-utils'

// -----------------------------------------------------------------------------
// Creation factories
// -----------------------------------------------------------------------------

test('should create an empty section with `new Group.Section()`', () => {
  const section = new Group.Section({ name: 'Onboarding' })

  // A section is a flavor of Group, not a distinct type.
  expect(section.type).toBe('Group')
  expect(section.isSection).toBe(true)
  expect(section.isFrame).toBe(false)
  expect(section.isVariantSet).toBe(false)
  expect(section.name).toBe('Onboarding')
  expect(section.layers.length).toBe(0)

  section.name = 'Renamed'
  expect(section.name).toBe('Renamed')
})

test('should create a section on a page with `new Group.Section()`', (_c, document) => {
  const page = document.selectedPage
  const section = new Group.Section({ name: 'Onboarding', parent: page })

  expect(section.isSection).toBe(true)
  expect(section.parent.id).toBe(page.id)
  expect(page.layers.length).toBe(1)

  // Read back from the document a section is a plain Group, recognized by `isSection`.
  expect(page.layers[0].type).toBe('Group')
  expect(page.layers[0].isSection).toBe(true)
})

test('should create a section wrapping layers', () => {
  const frame = new Group.Frame({ name: 'Welcome' })
  const other = new Group.Frame({ name: 'Sign Up' })

  const section = new Group.Section({ layers: [frame, other] })

  expect(section.type).toBe('Group')
  expect(section.isSection).toBe(true)
  expect(section.layers.length).toBe(2)
  expect(section.layers.map((l) => l.name).sort()).toEqual([
    'Sign Up',
    'Welcome',
  ])
})

// -----------------------------------------------------------------------------
// Checking & conversion
// -----------------------------------------------------------------------------

test('should report isSection false for a plain group and a frame', () => {
  expect(new Group({ layers: [new Group.Frame()] }).isSection).toBe(false)
  expect(new Group.Frame().isSection).toBe(false)
  expect(new SymbolMaster().isSection).toBe(false)
})

test('should hand back an unparented section when wrapping layers in a frame', (_c, document) => {
  const page = document.selectedPage
  const frame = new Group.Frame({
    name: 'Home',
    parent: page,
    frame: { x: 100, y: 100, width: 500, height: 350 },
  })
  const a = new Group({
    name: 'A',
    parent: frame,
    frame: { x: 20, y: 20, width: 100, height: 100 },
  })
  const b = new Group({
    name: 'B',
    parent: frame,
    frame: { x: 160, y: 20, width: 100, height: 100 },
  })

  const section = new Group.Section({ name: 'Onboarding', layers: [a, b] })

  // Wrapping layers doesn't decide where the section belongs — and a section may never sit in a
  // frame — so it comes back unparented, like `new Group({ layers })`.
  expect(section.isSection).toBe(true)
  expect(section.parent).toBe(undefined)
  expect(section.layers.length).toBe(2)

  // The caller places it.
  section.parent = page
  expect(section.parent.id).toBe(page.id)
})

test('should still honor an explicit parent when wrapping layers', (_c, document) => {
  const page = document.selectedPage
  const a = new Group({
    name: 'A',
    parent: page,
    frame: { x: 0, y: 0, width: 100, height: 100 },
  })

  const section = new Group.Section({ layers: [a], parent: page })

  expect(section.parent.id).toBe(page.id)
})

// -----------------------------------------------------------------------------
// Variant sets carry the section trait
// -----------------------------------------------------------------------------

test('should report isSection true for a variant set', (_c, document) => {
  const set = new Group.VariantSet({
    name: 'Button',
    parent: document.selectedPage,
  })

  // `isSection` mirrors the native trait, and a variant set carries it.
  expect(set.isSection).toBe(true)
  expect(set.isVariantSet).toBe(true)
})

// -----------------------------------------------------------------------------
// Section membership
// -----------------------------------------------------------------------------

test('should report the parent section of a layer', (_c, document) => {
  const page = document.selectedPage
  const frame = new Group.Frame({ name: 'Welcome' })
  const section = new Group.Section({ layers: [frame] })
  section.parent = page

  expect(frame.getParentSection().id).toBe(section.id)
  expect(frame.getParentSection().isSection).toBe(true)
})

test('should report undefined for a layer that is not in a section', (_c, document) => {
  const frame = new Group.Frame({ parent: document.selectedPage })
  expect(frame.getParentSection()).toBe(undefined)
})

test('should report the innermost section for nested sections', (_c, document) => {
  const page = document.selectedPage
  const frame = new Group.Frame({ name: 'Welcome' })
  const inner = new Group.Section({ layers: [frame] })
  const outer = new Group.Section({ layers: [inner] })
  outer.parent = page

  expect(frame.getParentSection().id).toBe(inner.id)
  expect(inner.getParentSection().id).toBe(outer.id)
  expect(outer.getParentSection()).toBe(undefined)
})

test('should find the section from a layer nested below it', (_c, document) => {
  const page = document.selectedPage
  const inner = new Group({ layers: [new Group.Frame({ name: 'Nested' })] })
  const frame = new Group.Frame({ name: 'Welcome', layers: [inner] })
  const section = new Group.Section({ layers: [frame] })
  section.parent = page

  expect(inner.getParentSection().id).toBe(section.id)
})

// -----------------------------------------------------------------------------
// Prototyping restrictions
// -----------------------------------------------------------------------------

test('should refuse to add a prototype interaction to a section', (_c, document) => {
  const page = document.selectedPage
  const destination = new Group.Frame({ name: 'Welcome', parent: page })
  const section = new Group.Section({ name: 'Onboarding', parent: page })

  expect(throws(() => (section.flow = { target: destination }))).toBe(true)
  expect(section.flow).toBe(undefined)
})

test('should refuse to target a section with a prototype interaction', (_c, document) => {
  const page = document.selectedPage
  const source = new Group.Frame({ name: 'Welcome', parent: page })
  const section = new Group.Section({ name: 'Onboarding', parent: page })

  expect(throws(() => (source.flow = { target: section }))).toBe(true)
  expect(source.flow).toBe(undefined)

  // A frame is still a valid destination.
  const destination = new Group.Frame({ name: 'Sign Up', parent: page })
  source.flow = { target: destination }
  expect(source.flow.targetId).toBe(destination.id)
})

test('should refuse to make a section a prototype start point', (_c, document) => {
  const section = new Group.Section({
    name: 'Onboarding',
    parent: document.selectedPage,
  })

  expect(throws(() => (section.flowStartPoint = true))).toBe(true)
  expect(section.flowStartPoint).toBe(false)
})

test('should refuse prototype properties passed to the constructor', (_c, document) => {
  const page = document.selectedPage
  const destination = new Group.Frame({ name: 'Welcome', parent: page })

  // Plugins commonly set properties at creation time, which goes through the same setters.
  expect(
    throws(
      () =>
        new Group.Section({
          name: 'Onboarding',
          parent: page,
          flow: { target: destination },
        })
    )
  ).toBe(true)

  expect(
    throws(
      () =>
        new Group.Section({
          name: 'Onboarding',
          parent: page,
          flowStartPoint: true,
        })
    )
  ).toBe(true)
})

test('should allow clearing prototype properties on a section', (_c, document) => {
  const section = new Group.Section({
    name: 'Onboarding',
    parent: document.selectedPage,
  })

  // Removing an interaction and clearing the start point flag are no-ops, not errors.
  expect(throws(() => (section.flow = undefined))).toBe(false)
  expect(throws(() => (section.flowStartPoint = false))).toBe(false)
})
