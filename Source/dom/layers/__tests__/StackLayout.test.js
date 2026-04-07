/* globals expect, test */
import { Group, StackLayout, Shape, Rectangle } from '../..'

test('should expose configuration types', () => {
  expect(StackLayout.Direction).toBeDefined()
  expect(StackLayout.JustifyContent).toBeDefined()
  expect(StackLayout.AlignItems).toBeDefined()
  expect(StackLayout.AlignContent).toBeDefined()
})

test('should set configuration options', () => {
  const group = new Group({
    stackLayout: {
      direction: StackLayout.Direction.Column,
      justifyContent: StackLayout.JustifyContent.End,
      alignItems: StackLayout.AlignItems.Center,
      gap: 42,
      padding: { vertical: 20 },
    },
  })

  expect(group.stackLayout.direction).toBe(StackLayout.Direction.Column)
  expect(group.stackLayout.justifyContent).toBe(StackLayout.JustifyContent.End)
  expect(group.stackLayout.alignItems).toBe(StackLayout.AlignItems.Center)
  expect(group.stackLayout.gap).toBe(42)
  expect(group.stackLayout.padding).toEqual({ vertical: 20, horizontal: 0 })
  expect(group.stackLayout.wraps).toBe(false)

  group.stackLayout.direction = StackLayout.Direction.Row
  group.stackLayout.justifyContent = StackLayout.JustifyContent.Start
  group.stackLayout.alignItems = StackLayout.AlignItems.None
  group.stackLayout.gap = 11
  group.stackLayout.padding = 42

  expect(group.stackLayout.direction).toBe(StackLayout.Direction.Row)
  expect(group.stackLayout.justifyContent).toBe(
    StackLayout.JustifyContent.Start
  )
  expect(group.stackLayout.alignItems).toBe(StackLayout.AlignItems.None)
  expect(group.stackLayout.gap).toBe(11)
  expect(group.stackLayout.padding).toEqual(42)
})

test('should set wrapping options', () => {
  const group = new Group({
    stackLayout: {
      wraps: true,
      crossAxisGap: 10,
      alignContent: StackLayout.AlignContent.Center,
    },
  })

  expect(group.stackLayout.wraps).toBe(true)
  expect(group.stackLayout.crossAxisGap).toBe(10)
  expect(group.stackLayout.alignContent).toBe(StackLayout.AlignContent.Center)

  group.stackLayout.wraps = false
  // These properties persist even when wrapping is disabled
  group.stackLayout.crossAxisGap = 20
  group.stackLayout.alignContent = StackLayout.AlignContent.End

  expect(group.stackLayout.wraps).toBe(false)
  expect(group.stackLayout.crossAxisGap).toBe(20)
  expect(group.stackLayout.alignContent).toBe(StackLayout.AlignContent.End)
})

test('should not allow wrapping when alignItems is Stretch', () => {
  const group = new Group({
    stackLayout: {
      wraps: false,
      alignItems: StackLayout.AlignItems.Stretch,
    },
  })

  expect(group.stackLayout.wraps).toBe(false)
  group.stackLayout.wraps = true
  expect(group.stackLayout.wraps).toBe(false)
})

test('should not allow alignItems to be set to Stretch when wrapping is enabled', () => {
  const group = new Group({
    stackLayout: {
      wraps: true,
      alignItems: StackLayout.AlignItems.Center,
    },
  })

  expect(group.stackLayout.alignItems).toBe(StackLayout.AlignItems.Center)
  group.stackLayout.alignItems = StackLayout.AlignItems.Stretch
  expect(group.stackLayout.alignItems).toBe(StackLayout.AlignItems.Center)
})

test('should set individual padding on parent group', () => {
  // StackLayout with individual padding values for each edge
  const group = new Group({
    stackLayout: {
      padding: { top: 1, bottom: 2, left: 3, right: 4 },
    },
  })
  // Partial padding updates within the same mode (i.e individual/paired/uniform) should carry over other fields
  group.stackLayout.padding = { top: 11 }
  expect(group.stackLayout.padding).toEqual({
    top: 11,
    bottom: 2,
    left: 3,
    right: 4,
  })

  group.stackLayout.padding = { top: 10 }
  group.stackLayout.padding = { bottom: 20 }
  group.stackLayout.padding = { left: 30 }
  group.stackLayout.padding = { right: 40 }

  expect(group.stackLayout.padding).toEqual({
    top: 10,
    bottom: 20,
    left: 30,
    right: 40,
  })

  group.stackLayout.padding = null
  expect(group.stackLayout.padding).not.toEqual({
    top: 10,
    bottom: 20,
    left: 30,
    right: 40,
  })
})

test('should set paired padding on parent group', () => {
  // StackLayout with paired padding values for each axis
  const group = new Group({
    stackLayout: {
      padding: { vertical: 42, horizontal: 24 },
    },
  })
  // Partial padding updates of the same kind should be merged with the previous value
  group.stackLayout.padding = { horizontal: 100 }
  expect(group.stackLayout.padding).toEqual({ vertical: 42, horizontal: 100 })

  group.stackLayout.padding = { vertical: 11 }
  expect(group.stackLayout.padding).toEqual({ vertical: 11, horizontal: 100 })

  group.stackLayout.padding = null
  expect(group.stackLayout.padding).not.toEqual({
    vertical: 11,
    horizontal: 100,
  })
})

test('should set paired uniform on parent group', () => {
  // StackLayout with the same padding value for each edge
  const group = new Group({
    stackLayout: {
      padding: 42,
    },
  })
  expect(group.stackLayout.padding).toEqual(42)

  group.stackLayout.padding = 1337
  expect(group.stackLayout.padding).toEqual(1337)

  group.stackLayout.padding = null
  expect(group.stackLayout.padding).not.toBe(1337)
})

test('should switch between padding modes depending on input', () => {
  // StackLayout with implicit default padding
  const group = new Group({ stackLayout: {} })
  expect(group.stackLayout.padding).toBeDefined()

  // Explicit per-edge (individual) padding
  group.stackLayout.padding = { top: 1, left: 2 }
  expect(group.stackLayout.padding).toEqual({
    top: 1,
    left: 2,
    bottom: 0,
    right: 0,
  })
  // Appends partial values of the same padding kind to existing padding
  group.stackLayout.padding = { top: 3, right: 4 }
  expect(group.stackLayout.padding).toEqual({
    top: 3,
    left: 2,
    right: 4,
    bottom: 0,
  })

  // Switch to per-axis padding. This should clear the previous value
  group.stackLayout.padding = { vertical: 33 }
  expect(group.stackLayout.padding).toEqual({
    vertical: 33,
    horizontal: 4, // 4 <== max(oldLeft, oldRight)
  })
  // Appends partial values of the same padding kind to existing padding
  group.stackLayout.padding = { horizontal: 90 }
  expect(group.stackLayout.padding).toEqual({
    vertical: 33,
    horizontal: 90,
  })

  // Switch to uniform padding
  group.stackLayout.padding = 100
  expect(group.stackLayout.padding).toBe(100)

  // Resets padding
  group.stackLayout.padding = null
  expect(group.stackLayout.padding).toBeDefined()
})

test('stack item can ignore stack layout', () => {
  const group = new Group({
    stackLayout: {},
    layers: [
      { type: 'Text' },
      { type: 'Text', ignoresStackLayout: true },
      { type: 'Text' },
    ],
  })
  expect(group.layers[0].ignoresStackLayout).toBe(false)
  expect(group.layers[1].ignoresStackLayout).toBe(true)
  expect(group.layers[2].ignoresStackLayout).toBe(false)

  group.layers[0].ignoresStackLayout = true
  group.layers[1].ignoresStackLayout = false
  group.layers[2].ignoresStackLayout = true

  expect(group.layers[0].ignoresStackLayout).toBe(true)
  expect(group.layers[1].ignoresStackLayout).toBe(false)
  expect(group.layers[2].ignoresStackLayout).toBe(true)
})

test('stack item can preserve space in stack when hidden', () => {
  const group = new Group({
    stackLayout: {},
    layers: [
      { type: 'Text' },
      { type: 'Text', preservesSpaceInStackLayoutWhenHidden: true },
      { type: 'Text' },
    ],
  })

  expect(group.layers[0].preservesSpaceInStackLayoutWhenHidden).toBe(false)
  expect(group.layers[1].preservesSpaceInStackLayoutWhenHidden).toBe(true)
  expect(group.layers[2].preservesSpaceInStackLayoutWhenHidden).toBe(false)

  group.layers[0].preservesSpaceInStackLayoutWhenHidden = true
  group.layers[1].preservesSpaceInStackLayoutWhenHidden = false
  group.layers[2].preservesSpaceInStackLayoutWhenHidden = true

  expect(group.layers[0].preservesSpaceInStackLayoutWhenHidden).toBe(true)
  expect(group.layers[1].preservesSpaceInStackLayoutWhenHidden).toBe(false)
  expect(group.layers[2].preservesSpaceInStackLayoutWhenHidden).toBe(true)
})

test('should apply() layout changes automatically and on demand', () => {
  const group = new Group.Frame({
    stackLayout: {
      padding: 10,
    },
    layers: [
      new Shape({
        frame: new Rectangle(0, 0, 100, 100),
      }),
    ],
  })

  // Initial layout pass should happen automatically, taking padding into account
  expect(group.frame.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 120,
    height: 120,
  })

  // Setting the property should automatically apply the layout
  group.stackLayout = {
    padding: 0,
  }
  expect(group.frame.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  })

  // Direct modification of layout properties should trigger automatic layout update
  group.stackLayout.padding = 20
  expect(group.frame.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 140,
    height: 140,
  })

  // But changes made to child layers should NOT trigger automatic layout update
  group.layers[0].frame = new Rectangle(0, 0, 200, 200)
  expect(group.frame.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 140,
    height: 140,
  })

  // Calling apply() should always update the layout
  group.stackLayout.apply()
  expect(group.frame.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 240,
    height: 240,
  })

  // Layer.preservesSpaceInStackLayoutWhenHidden and Layer.ignoresStackLayout
  // should also trigger automatic layout updates for the parent stack
  group.layers.push(
    new Shape({
      frame: new Rectangle(0, 0, 100, 100),
      hidden: true,
    })
  )
  group.layers[1].preservesSpaceInStackLayoutWhenHidden = true
  expect(group.frame.width).toEqual(340) // + 100

  group.layers[1].hidden = false
  group.layers[1].ignoresStackLayout = true
  expect(group.frame.width).toEqual(240) // the new layer is ignored
})

test('removing a stack layout should reset parent group padding', () => {
  const group = new Group.Frame({
    stackLayout: {
      padding: {
        vertical: 20,
        horizontal: 10,
      },
    },
    layers: [
      new Shape({
        frame: new Rectangle(0, 0, 100, 100),
      }),
    ],
  })
  expect(group.stackLayout.padding).toBeDefined()

  group.stackLayout = null
  // Dropping down to the native object here because while the padding is
  // technically a property of MSLayerGroup, we expose it as part of the StackLayout
  // JS API -- and this group no longer has a StackLayout instance to query
  expect(group._object.topPadding()).toBe(0)
})
