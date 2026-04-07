/* globals expect, test */
import {
  Style,
  ShapePath,
  Group,
  GroupBehavior,
  Rectangle,
  FlexSizing,
} from '../..'

test('should get and set corner style', () => {
  const style = new Style()
  expect(style.corners).toBeDefined() // the corners property is created on demand, always available
  expect(style.corners.style).toBe(Style.CornerStyle.Rounded) // default style

  style.corners = {
    style: Style.CornerStyle.Smooth,
  }
  expect(style.corners.style).toBe(Style.CornerStyle.Smooth)

  style.corners.style = Style.CornerStyle.InsideSquare
  expect(style.corners.style).toBe(Style.CornerStyle.InsideSquare)

  const style2 = new Style({
    corners: {
      style: Style.CornerStyle.Angled,
    },
  })
  expect(style2.corners.style).toBe(Style.CornerStyle.Angled)
})

test('should get and set corner radii', () => {
  const style = new Style()
  expect(style.corners.hasRadii).toBe(false)
  expect(style.corners.radii).toEqual([])

  style.corners.radii = 10
  expect(style.corners.hasRadii).toBe(true)
  expect(style.corners.radii).toEqual([10])

  style.corners.radii = [20]
  expect(style.corners.hasRadii).toBe(true)
  expect(style.corners.radii).toEqual([20])

  style.corners.radii = [10, 20, 30, 40]
  expect(style.corners.hasRadii).toBe(true)
  expect(style.corners.radii).toEqual([10, 20, 30, 40])
})

test('should get corner radius at index', () => {
  const style = new Style({
    corners: {
      radii: [10, 20, 30, 40],
    },
  })
  expect(style.corners.radiusAt(0)).toBe(10)
  expect(style.corners.radiusAt(1)).toBe(20)
  expect(style.corners.radiusAt(2)).toBe(30)
  expect(style.corners.radiusAt(3)).toBe(40)
  expect(style.corners.radiusAt(4)).toBe(10) // wraps around
  expect(style.corners.radiusAt(5)).toBe(20) // wraps around
  expect(style.corners.radiusAt(6)).toBe(30) // wraps around
  expect(style.corners.radiusAt(7)).toBe(40) // wraps around
  expect(style.corners.radiusAt(8)).toBe(10) // wraps around
})

test('should update corner radii when set to concentric (#1)', () => {
  const layer = new ShapePath({
    style: { fills: [{ color: '#ffaa00' }] },
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    stackLayout: { padding: 10 },
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
  })
  parent.layers = [layer]

  expect(layer.style.corners.concentric).toBe(false)
  expect(layer.style.corners.radii).toEqual([])

  layer.style.corners.concentric = true

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10]) // based on the parent Frame's corner radius and padding
})

test('should update corner radii when set to concentric (#2)', () => {
  const layer = new ShapePath({
    style: {
      fills: [{ color: '#ffaa00' }],
      corners: { concentric: true },
    },
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    stackLayout: { padding: 10 },
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
  })
  parent.layers = [layer]

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10])
})

test('should update corner radii when set to concentric (#3)', () => {
  const layer = new ShapePath({
    style: {
      fills: [{ color: '#ffaa00' }],
    },
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    stackLayout: { padding: 10 },
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
  })
  layer.style.corners.concentric = true
  parent.layers.push(layer)

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10])
})

test('should update corner radii when set to concentric (#4)', () => {
  const layer = new ShapePath({
    style: {
      fills: [{ color: '#ffaa00' }],
    },
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    stackLayout: { padding: 10 },
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
  })

  layer.style.corners.style = Style.CornerStyle.Auto
  parent.layers.push(layer)

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10])
})

test('should update concentric corners when parent corner radius changes', () => {
  const layer = new ShapePath({
    style: {
      fills: [{ color: '#ffaa00' }],
      corners: { concentric: true },
    },
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    stackLayout: { padding: 10 },
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
    layers: [layer],
  })

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10])

  parent.style.corners.radii = 40
  expect(layer.style.corners.radii).toEqual([30])
})

test('should update concentric corners when parent padding changes', () => {
  const layer = new ShapePath({
    style: {
      fills: [{ color: '#ffaa00' }],
      corners: { concentric: true },
    },
    frame: new Rectangle(10, 10, 80, 80),
    verticalSizing: FlexSizing.Relative,
    horizontalSizing: FlexSizing.Relative,
  })
  const parent = new Group({
    groupBehavior: GroupBehavior.Frame,
    frame: new Rectangle(100, 100, 100, 100),
    style: {
      corners: { radii: 20 },
    },
    layers: [layer],
    verticalSizing: FlexSizing.Fixed,
    horizontalSizing: FlexSizing.Fixed,
  })

  expect(layer.style.corners.concentric).toBe(true)
  expect(layer.style.corners.radii).toEqual([10])

  parent.frame = new Rectangle(100, 100, 80, 80) // shrink the parent and the child corner radius should follow
  expect(layer.style.corners.radii).toEqual([12])
})

test('should get and set smoothing', () => {
  const style = new Style({
    corners: {
      style: Style.CornerStyle.Smooth,
      smoothing: 0.5,
    },
  })
  expect(style.corners.smoothing).toBe(0.5)

  style.corners.smoothing = 0.8
  expect(style.corners.smoothing).toBe(0.8)

  // value is clamped between 0 and 1
  style.corners.smoothing = 1.5
  expect(style.corners.smoothing).toBe(1)

  style.corners.smoothing = -0.5
  expect(style.corners.smoothing).toBe(0)

  // value is preserved when switching styles
  style.corners.smoothing = 0.7
  style.corners.style = Style.CornerStyle.Rounded
  expect(style.corners.smoothing).toBe(0.7)

  style.corners.style = Style.CornerStyle.Smooth
  expect(style.corners.smoothing).toBe(0.7)

  // has a default value
  expect(new Style().corners.smoothing).toBeDefined()
})
