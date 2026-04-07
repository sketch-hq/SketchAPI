/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import {
  Artboard,
  Group,
  Text,
  Rectangle,
  SmartLayout,
  GroupBehavior,
} from '../..'

test('should return the layers and can iterate through them', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({ parent: page })
  const text = new Text({ parent: page }) // eslint-disable-line

  let iterations = 0
  let groups = 0
  page.layers.forEach((layer) => {
    iterations += 1
    if (layer.isEqual(group)) {
      groups += 1
    }
  })
  expect(iterations).toBe(2)
  expect(groups).toBe(1)
})

test('should transform a rectangle in page coords to local coords', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    frame: new Rectangle(100, 100, 100, 100),
  })

  const local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
  expect(local).toEqual(new Rectangle(25, -25, 50, 200))
})

test('should create a group', (_context, document) => {
  const page = document.selectedPage

  const group = new Group({ parent: page })

  expect(group.type).toBe('Group')
  canBeLogged(group, Group)
})

test('should create a group with some layers', (_context, document) => {
  const page = document.selectedPage

  const group = new Group({
    parent: page,
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(group.layers[0].type).toBe('Text')
})

test('should add a layer to a group', (_context, document) => {
  const page = document.selectedPage

  const group = new Group({
    parent: page,
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(group.layers.length).toBe(1)

  group.layers = group.layers.concat({
    type: 'Text',
    text: 'hello world',
  })
  expect(group.layers.length).toBe(2)

  group.layers.push({
    type: 'Text',
    text: 'hello world',
  })
  expect(group.layers.length).toBe(3)
})

test('should expose a smartLayout getter/setter', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    layers: [],
  })

  // returns null by default
  expect(group.smartLayout).toBe(null)
  expect(
    group._object.groupLayout().isKindOfClass(MSFreeformGroupLayout)
  ).toBeTruthy()

  // can set to a value
  group.smartLayout = SmartLayout.TopToBottom
  expect(group.smartLayout).toBe(SmartLayout.TopToBottom)
  expect(
    group._object.groupLayout().isKindOfClass(MSInferredGroupLayout)
  ).toBeTruthy()
  expect(group._object.groupLayout().axis()).toBe(1)
  expect(group._object.groupLayout().layoutAnchor()).toBe(0)

  // can clear the value
  group.smartLayout = null
  expect(
    group._object.groupLayout().isKindOfClass(MSFreeformGroupLayout)
  ).toBeTruthy()
  expect(group.smartLayout).toBe(null)
})

test('should report isFrame and isGraphicFrame', () => {
  const frame = new Group({
    groupBehavior: GroupBehavior.Frame,
  })
  expect(frame.isFrame).toBe(true)
  expect(frame.isGraphicFrame).toBe(false)

  const graphic = new Group({
    groupBehavior: GroupBehavior.Graphic,
  })
  expect(graphic.isFrame).toBe(true)
  expect(graphic.isGraphicFrame).toBe(true)

  const group = new Group()
  expect(group.isFrame).toBe(false)
  expect(group.isGraphicFrame).toBe(false)
})

test('should create Frames and Graphics via convenience constructors', (_context, document) => {
  const frame = new Group.Frame({
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(frame.type).toBe('Group')
  expect(frame.layers.length).toBe(1)
  expect(frame.isFrame).toBe(true)

  const graphic = new Group.Graphic({
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(graphic.type).toBe('Group')
  expect(graphic.layers.length).toBe(1)
  expect(graphic.isGraphicFrame).toBe(true)

  document.selectedPage.layers = [frame]
  // once a frame is added to the page, it becomes a "canvas frame"
  // and thus should be reported as an Artboard from now on
  expect(document.selectedPage.layers[0].type).toBe('Artboard')
})

test('should enable background for new frames', () => {
  const frame = new Group({
    groupBehavior: GroupBehavior.Frame,
  })
  expect(frame.background.enabled).toBe(true)

  const implicitFrame = new Artboard()
  expect(implicitFrame.background.enabled).toBe(true)

  const graphic = new Group({
    groupBehavior: GroupBehavior.Graphic,
  })
  expect(graphic.background.enabled).toBe(true)

  const group = new Group({
    groupBehavior: GroupBehavior.Group,
  })
  expect(group.background.enabled).toBe(false)

  const multilayerFrame = new Group({
    groupBehavior: GroupBehavior.Group,
    layers: [
      {
        type: 'Group',
        groupBehavior: GroupBehavior.Graphic,
      },
    ],
  })
  expect(multilayerFrame.background.enabled).toBe(false)
  expect(multilayerFrame.layers[0].background.enabled).toBe(true)

  const frameWithExplicitBackground = new Group({
    groupBehavior: GroupBehavior.Frame,
    background: {
      enabled: false,
    },
  })
  expect(frameWithExplicitBackground.background.enabled).toBe(false)

  const frameAdoptedFromNative = new Group({
    sketchObject: MSLayerGroup.alloc().init(),
    groupBehavior: GroupBehavior.Frame,
  })
  expect(frameAdoptedFromNative.background.enabled).toBe(false)
})

test('should get and set clipsContents for frames', (_context, document) => {
  const frame = new Group.Frame({
    parent: document.selectedPage,
  })

  // By default, frames should clip contents
  expect(frame.clipsContents).toBe(true)

  // Should be able to disable clipping
  frame.clipsContents = false
  expect(frame.clipsContents).toBe(false)
  expect(frame._object.clippingBehavior()).toBe(2) // 2 = none

  // Should be able to enable clipping
  frame.clipsContents = true
  expect(frame.clipsContents).toBe(true)
  expect(frame._object.clippingBehavior()).toBe(1) // 1 = clipToBounds
})

test('should get and set clipsContents for graphics', (_context, document) => {
  const graphic = new Group.Graphic({
    parent: document.selectedPage,
  })

  // By default, graphics should clip contents
  expect(graphic.clipsContents).toBe(true)

  // Should be able to disable clipping
  graphic.clipsContents = false
  expect(graphic.clipsContents).toBe(false)

  // Should be able to enable clipping
  graphic.clipsContents = true
  expect(graphic.clipsContents).toBe(true)
})

test('should return undefined for clipsContents on regular groups', (_context, document) => {
  const group = new Group({
    parent: document.selectedPage,
  })

  // Regular groups should not have clipsContents
  expect(group.clipsContents).toBe(undefined)

  // Setting it should have no effect
  group.clipsContents = true
  expect(group.clipsContents).toBe(undefined)
})
