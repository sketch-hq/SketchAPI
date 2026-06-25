/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Artboard, Document, Page, Group, find } from '../..'

test('should create an artboard', () => {
  const artboard = new Artboard({ name: 'Test' })
  expect(artboard.type).toBe('Artboard')
  expect(artboard.isFrame).toBe(true)
  canBeLogged(artboard, Artboard)

  const pageWithImplicitArtboard = new Page({
    layers: [
      {
        type: 'Artboard',
        name: 'Test',
        layers: [
          {
            type: 'Shape',
            name: 'TestShape',
            frame: { x: 10, y: 10, width: 100, height: 100 },
          },
        ],
      },
    ],
  })
  expect(pageWithImplicitArtboard.layers[0].type).toBe('Artboard')
})

test('should set the artboard as a flow start point', () => {
  const artboard = new Artboard({ name: 'Test', flowStartPoint: true })

  expect(artboard.flowStartPoint).toBe(true)
})

test('should set the background', () => {
  const document = new Document()
  const artboard = new Artboard({
    parent: document.selectedPage,
  })

  // defaults
  expect(artboard.background.toJSON()).toEqual({
    enabled: true,
    includedInExport: true,
    color: '#ffffffff',
  })

  artboard.background.color = '#123456ff'
  expect(artboard.background.color).toBe('#123456ff')

  artboard.background.enabled = true
  expect(artboard.background.enabled).toBe(true)

  artboard.background.includedInExport = false
  expect(artboard.background.includedInExport).toBe(false)

  artboard.background = {
    color: '#00000000',
    enabled: false,
    includedInExport: true,
  }
  expect(artboard.background.toJSON()).toEqual({
    enabled: false,
    includedInExport: true,
    color: '#00000000',
  })
})

test('should only return Artboards from Page.selectedLayers, Document.selectedLayers, Group.layers(), and find()', (_context, document) => {
  const page = document.selectedPage
  const artboard = new Group.Frame({
    name: 'CanvasFrame',
    parent: page,
    layers: [
      new Group.Graphic({
        name: 'NestedGraphic',
      }),
    ],
  })
  artboard.selected = true

  expect(page.layers[0].type).toBe('Artboard')
  expect(document.selectedLayers.layers[0].type).toBe('Artboard')
  expect(page.selectedLayers.layers[0].type).toBe('Artboard')
  expect(page.layers[0].layers[0].type).toBe('Group')

  artboard.selected = false
  artboard.layers[0].selected = true
  expect(document.selectedLayers.layers[0].type).toBe('Group')
  expect(page.selectedLayers.layers[0].type).toBe('Group')

  expect(find('Artboard', document)[0].type).toBe('Artboard')
  expect(find('[name="CanvasFrame"]', document)[0].type).toBe('Artboard')
  expect(find('Artboard', page)[0].type).toBe('Artboard')
  expect(find('[name="CanvasFrame"]', page)[0].type).toBe('Artboard')

  expect(find('[name="NestedGraphic"]', document)[0].type).toBe('Group')
  expect(find('[name="NestedGraphic"]', page)[0].type).toBe('Group')
})

test('should not convert canvas-level Graphics into Frames when wrapping them as Artboards', () => {
  const page = new Page({
    layers: [
      new Group.Graphic({
        name: 'A canvas-level Graphic',
        layers: [],
      }),
      new Group.Frame({
        name: 'A canvas-level Frame',
        layers: [],
      }),
    ],
  })

  const canvasLevelFrames = page.canvasLevelFrames
  expect(canvasLevelFrames.length).toBe(2)

  // A canvas-level Graphic is still a Graphic even if we wrap it as an Artboard
  expect(canvasLevelFrames[0].type).toBe('Artboard')
  expect(canvasLevelFrames[0].isFrame).toBe(true)
  expect(canvasLevelFrames[0].isGraphicFrame).toBe(true)

  // A canvas-level Frame is still a Frame even if we wrap it as an Artboard
  expect(canvasLevelFrames[1].type).toBe('Artboard')
  expect(canvasLevelFrames[1].isFrame).toBe(true)
  expect(canvasLevelFrames[1].isGraphicFrame).toBe(false)
})
