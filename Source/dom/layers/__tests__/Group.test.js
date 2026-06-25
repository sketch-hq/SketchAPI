/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import {
  Artboard,
  SymbolMaster,
  Group,
  Text,
  Rectangle,
  SmartLayout,
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
  const frame = new Group.Frame()
  expect(frame.isFrame).toBe(true)
  expect(frame.isGraphicFrame).toBe(false)

  const graphic = new Group.Graphic()
  expect(graphic.isFrame).toBe(true)
  expect(graphic.isGraphicFrame).toBe(true)

  const group = new Group()
  expect(group.isFrame).toBe(false)
  expect(group.isGraphicFrame).toBe(false)
})

test('should create Frames and Graphics via convenience constructors', (_context, document) => {
  const plainGroup = new Group({
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(plainGroup.type).toBe('Group')
  expect(plainGroup.layers.length).toBe(1)
  expect(plainGroup.isFrame).toBe(false)
  expect(plainGroup.isGraphicFrame).toBe(false)

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
  expect(frame.isGraphicFrame).toBe(false)

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
  expect(graphic.isFrame).toBe(true)
  expect(graphic.isGraphicFrame).toBe(true)

  document.selectedPage.layers = [frame]
  // once a frame is added to the page, it becomes a "canvas frame"
  // and thus should be reported as an Artboard from now on
  expect(document.selectedPage.layers[0].type).toBe('Artboard')
})

test('should NOT enable background for new Canvas Frames UNTIL they are added to a Page', (_context, document) => {
  // 1) Added via parent
  const frame = new Group.Frame()
  expect(frame.background.enabled).toBe(false)
  frame.parent = document.selectedPage
  expect(frame.background.enabled).toBe(true)

  const frameWithParent = new Group.Frame({
    parent: document.selectedPage,
  })
  expect(frameWithParent.background.enabled).toBe(true)

  // 2) Added via layers array assignment
  const frame2 = new Group.Frame()
  expect(frame2.background.enabled).toBe(false)
  document.selectedPage.layers = [frame2]
  expect(frame2.background.enabled).toBe(true)

  // 3) Added via layers array push
  const frame3 = new Group.Frame()
  expect(frame3.background.enabled).toBe(false)
  document.selectedPage.layers.push(frame3)
  expect(frame3.background.enabled).toBe(true)
})

test('should NOT enable background for new Canvas Graphics UNTIL they are added to a Page', (_context, document) => {
  // 1) Added via parent
  const graphic = new Group.Graphic()
  expect(graphic.background.enabled).toBe(false)
  graphic.parent = document.selectedPage
  expect(graphic.background.enabled).toBe(true)

  const graphicWithParent = new Group.Graphic({
    parent: document.selectedPage,
  })
  expect(graphicWithParent.background.enabled).toBe(true)

  // 2) Added via layers array assignment
  const graphic2 = new Group.Graphic()
  expect(graphic2.background.enabled).toBe(false)
  document.selectedPage.layers = [graphic2]
  expect(graphic2.background.enabled).toBe(true)

  // 3) Added via layers array push
  const graphic3 = new Group.Graphic()
  expect(graphic3.background.enabled).toBe(false)
  document.selectedPage.layers.push(graphic3)
  expect(graphic3.background.enabled).toBe(true)
})

test('should NOT enable background for new Artboards UNTIL they are added to a Page', (_context, document) => {
  // 1) Added via parent
  const artboard = new Artboard()
  expect(artboard.background.enabled).toBe(false)
  artboard.parent = document.selectedPage
  expect(artboard.background.enabled).toBe(true)

  const artboardWithParent = new Artboard({
    parent: document.selectedPage,
  })
  expect(artboardWithParent.background.enabled).toBe(true)

  // 2) Added via layers array assignment
  const artboard2 = new Artboard()
  expect(artboard2.background.enabled).toBe(false)

  document.selectedPage.layers = [artboard2]
  expect(artboard2.background.enabled).toBe(true)

  // 3) Added via layers array push
  const artboard3 = new Artboard()
  expect(artboard3.background.enabled).toBe(false)

  document.selectedPage.layers.push(artboard3)
  expect(artboard3.background.enabled).toBe(true)
})

test('should NEVER enable background for regular Groups, even when added to a Page', (_context, document) => {
  // 1) Added via parent
  const group = new Group()
  expect(group.background.enabled).toBe(false)
  group.parent = document.selectedPage
  expect(group.background.enabled).toBe(false)

  const groupWithParent = new Group({
    parent: document.selectedPage,
  })
  expect(groupWithParent.background.enabled).toBe(false)

  // 2) Added via layers array assignment
  const group2 = new Group()
  expect(group2.background.enabled).toBe(false)
  document.selectedPage.layers = [group2]
  expect(group2.background.enabled).toBe(false)

  // 3) Added via layers array push
  const group3 = new Group()
  expect(group3.background.enabled).toBe(false)
  document.selectedPage.layers.push(group3)
  expect(group3.background.enabled).toBe(false)
})

test('should enable background for new nested Frames even if their parent is not added to a Page', () => {
  const groupWithNestedFrame = new Group({
    layers: [new Group.Graphic()],
  })
  expect(groupWithNestedFrame.background.enabled).toBe(false)
  expect(groupWithNestedFrame.layers[0].background.enabled).toBe(true)
})

test('should NEVER enable background for Frames with explicit background settings', (_context, document) => {
  const frameWithExplicitBackground = new Group.Frame({
    background: {
      enabled: false,
    },
  })
  expect(frameWithExplicitBackground.background.enabled).toBe(false)
  document.selectedPage.layers = [frameWithExplicitBackground]
  expect(frameWithExplicitBackground.background.enabled).toBe(false)
})

test('should NEVER enable background for Frames adopted from native objects', (_context, document) => {
  const frameAdoptedFromNative = new Group.Frame({
    sketchObject: MSLayerGroup.alloc().init(),
  })
  expect(frameAdoptedFromNative.background.enabled).toBe(false)
  document.selectedPage.layers = [frameAdoptedFromNative]
  expect(frameAdoptedFromNative.background.enabled).toBe(false)
})

test('should NEVER enable default background for SymbolMasters', (_context, document) => {
  const symbolMaster = new SymbolMaster()
  expect(symbolMaster.background.enabled).toBe(false)
  document.selectedPage.layers = [symbolMaster]
  expect(symbolMaster.background.enabled).toBe(false)

  // Implicitly created SymbolMasters should also not have a default background
  document.selectedPage.layers = [
    {
      type: 'SymbolMaster',
    },
  ]
  expect(document.selectedPage.layers[0].background.enabled).toBe(false)
})

test('should create a Frame with a given background color', () => {
  const frame = new Group.Frame({
    background: {
      color: '#00ff00ff',
    },
  })
  expect(frame.background.enabled).toBe(true)
  expect(frame.background.color).toBe('#00ff00ff')
})

test('should create a Frame with a background when one is explicitly requested', () => {
  const frame = new Group.Frame({
    background: {
      enabled: true,
    },
  })
  expect(frame.background.enabled).toBe(true)
})

test('should be able to set background color on Frames when all existing fills are disabled', () => {
  const frame = new Group.Frame({
    style: {
      fills: [
        {
          color: '#ff0000ff',
          enabled: false,
        },
      ],
    },
  })
  frame.background.color = '#c0ffeeff'
  expect(frame.background.color).toBe('#c0ffeeff')
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

test('should move layers when they are re-inserted into the same group', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    layers: [
      {
        type: 'Text',
        text: 'Layer 1',
      },
      {
        type: 'Text',
        text: 'Layer 2',
      },
      {
        type: 'Text',
        text: 'Layer 3',
      },
    ],
  })

  const layer1 = group.layers[0]
  const layer2 = group.layers[1]
  const layer3 = group.layers[2]

  // move layer1 to the end of the layers array (1-2-3 => 2-3-1)
  group.layers.push(layer1)

  expect(group.layers[0].id).toBe(layer2.id)
  expect(group.layers[1].id).toBe(layer3.id)
  expect(group.layers[2].id).toBe(layer1.id)

  // move layer1 back to the beginning of the layers array (2-3-1 => 1-2-3)
  group.layers.unshift(layer1)

  expect(group.layers[0].id).toBe(layer1.id)
  expect(group.layers[1].id).toBe(layer2.id)
  expect(group.layers[2].id).toBe(layer3.id)

  // adding a new layer shouldn't affect the order of existing layers
  const layer4 = new Text({
    text: 'Layer 4',
  })
  group.layers.push(layer4)

  expect(group.layers[0].id).toBe(layer1.id)
  expect(group.layers[1].id).toBe(layer2.id)
  expect(group.layers[2].id).toBe(layer3.id)
  expect(group.layers[3].id).toBe(layer4.id)
})
