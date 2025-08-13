/* globals expect, test */
import { Buffer } from 'buffer'
import fs from '@skpm/fs'

import sketch from '../..'
const { Shape, ShapePath, Style, Image } = sketch

import { outputPath } from '../../test-utils'

test('should return exported json data', () => {
  const object = new Shape()
  const archive = sketch.export(object, {
    formats: 'json',
    output: false,
  })
  expect(archive.do_objectID).toEqual(String(object.id))
  expect(archive._class).toEqual('shapeGroup')
})

test('should return array of exported json data', () => {
  const objects = [new Shape(), new Shape()]
  const archive = sketch.export(objects, {
    formats: 'json',
    output: false,
  })
  expect(archive.length).toBe(2)
  expect(archive[0].do_objectID).toEqual(String(objects[0].id))
  expect(archive[1].do_objectID).toEqual(String(objects[1].id))
})

test('should restore object from json data', () => {
  const object = new Shape()
  const archive = sketch.export(object, {
    formats: ['json'],
    output: false,
  })
  const restored = sketch.fromSketchJSON(archive)
  expect(restored.id).toEqual(String(object.id))
})

test('Should fail with no object provided', () => {
  try {
    sketch.export([], {
      output: false,
    })
  } catch (err) {
    expect(err.message).toMatch('No objects provided to export')
  }
})

test('should fail with to return with multiple formats', () => {
  try {
    const object = new Shape()
    sketch.export(object, {
      formats: ['png', 'json'],
      output: false,
    })
    expect(false).toBe(true)
  } catch (err) {
    expect(err.message).toMatch('Can only return 1 format with no output type')
  }
})

test('Should return a buffer', (_context, document) => {
  const object = new Shape({
    parent: document.selectedPage,
  })
  const buffer = sketch.export(object, {
    formats: 'png',
    output: false,
  })
  expect(Buffer.isBuffer(buffer)).toBe(true)
})

test('Should export a page to png file', (_context, document) => {
  const testOutputPath = outputPath()
  // const filePath = NSString.stringWithString(testOutputPath).stringByAppendingPathComponent('Page 1.png')
  const filePath = `${testOutputPath}/Page 1.png`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  // eslint-disable-next-line no-unused-vars
  const object = new Shape({
    parent: document.selectedPage,
  })
  sketch.export(document.selectedPage, {
    formats: 'png',
    output: testOutputPath,
  })
  expect(fs.existsSync(filePath)).toBe(true)
})

test('Should export a shape to png file', (_context, document) => {
  const testOutputPath = outputPath()
  // const filePath = NSString.stringWithString(testOutputPath).stringByAppendingPathComponent('Shape.png')
  const filePath = `${testOutputPath}/Shape.png`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new Shape({
    parent: document.selectedPage,
  })
  sketch.export(object, {
    formats: 'png',
    output: testOutputPath,
  })
  expect(fs.existsSync(filePath)).toBe(true)
})

test('Should export a shape to WebP file', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/Shape.webp`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new Shape({
    parent: document.selectedPage,
  })
  sketch.export(object, {
    formats: 'webp',
    output: testOutputPath,
  })
  expect(fs.existsSync(filePath)).toBe(true)
})

test('Should fail when exporting a shape too large for WebP', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/LargeShape.webp`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new Shape({
    style: {
      fills: ['#FFF'],
      borders: [],
    },
    parent: document.selectedPage,
  })

  object.frame.height = 16800

  try {
    sketch.export(object, {
      formats: 'webp',
      output: testOutputPath,
    })
    expect(false).toBe(true)
  } catch (err) {
    expect(err.message).toMatch(
      "Failed to export WebP file. Exported image size for 'Shape' exceeds maximum pixel dimensions supported by the WebP format (16383 x 16383): 100 x 16800."
    )
  }
})

test('Should export a shape to json file', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/Shape.json`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new Shape({
    parent: document.selectedPage,
  })
  sketch.export(object, {
    formats: 'json',
    output: testOutputPath,
  })
  expect(fs.existsSync(filePath)).toBe(true)
})

test('should export to file according to existing exportFormats', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/prefix-Shape.jpg`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
    exportFormats: [
      {
        size: '1x',
        prefix: 'prefix-',
        fileFormat: 'jpg',
      },
    ],
  })

  const result = sketch.export(object, {
    output: testOutputPath,
    exportFormats: object.exportFormats,
  })
  expect(result).toBe(true)
  expect(fs.existsSync(filePath)).toBe(true)

  try {
    fs.unlinkSync(filePath)
  } finally {
    // ignore
  }
})

test('should export to file according to custom exportFormats', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/Shape-suffix.png`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
  })

  const result = sketch.export(object, {
    output: testOutputPath,
    exportFormats: [
      {
        size: '1x',
        suffix: '-suffix',
        fileFormat: 'png',
      },
    ],
  })
  expect(result).toBe(true)
  expect(fs.existsSync(filePath)).toBe(true)

  try {
    fs.unlinkSync(filePath)
  } finally {
    // ignore
  }
})

test('should export to multiple files according to exportFormats', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath1 = `${testOutputPath}/prefix-Shape.jpg`
  const filePath2 = `${testOutputPath}/Shape-suffix.png`
  try {
    fs.unlinkSync(filePath1)
    fs.unlinkSync(filePath2)
  } catch (err) {
    // just ignore
  }
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
  })

  const result = sketch.export(object, {
    output: testOutputPath,
    exportFormats: [
      {
        size: '1x',
        prefix: 'prefix-',
        fileFormat: 'jpg',
      },
      {
        size: '15h',
        suffix: '-suffix',
        fileFormat: 'png',
      },
    ],
  })
  expect(result).toBe(true)
  expect(fs.existsSync(filePath1)).toBe(true)
  expect(fs.existsSync(filePath2)).toBe(true)

  try {
    fs.unlinkSync(filePath1)
    fs.unlinkSync(filePath2)
  } finally {
    // ignore
  }
})

test('should export to file with default options when exportFormats are empty', (_context, document) => {
  const testOutputPath = outputPath()
  const filePath = `${testOutputPath}/Shape.png`
  try {
    fs.unlinkSync(filePath)
  } catch (err) {
    // just ignore
  }
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
  })

  const result = sketch.export(object, {
    output: testOutputPath,
    exportFormats: [],
  })
  expect(result).toBe(true)
  expect(fs.existsSync(filePath)).toBe(true)

  try {
    fs.unlinkSync(filePath)
  } finally {
    // ignore
  }
})

test('should export to buffer according to existing exportFormats', (_context, document) => {
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
    exportFormats: [
      {
        size: '2x',
        fileFormat: 'png',
      },
    ],
  })

  const buffer = sketch.export(object, {
    output: false,
    exportFormats: object.exportFormats,
  })

  expect(Buffer.isBuffer(buffer)).toBe(true)
  expect(new Image({ image: buffer }).image.size.width).toBe(200)
})

test('should export to buffer according to new exportFormats', (_context, document) => {
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
  })

  const buffer = sketch.export(object, {
    output: false,
    exportFormats: [
      {
        size: '2x',
        fileFormat: 'png',
      },
    ],
  })

  expect(Buffer.isBuffer(buffer)).toBe(true)
  expect(new Image({ image: buffer }).image.size.width).toBe(200)
})

test('should export to buffer with default options when exportFormats are empty', (_context, document) => {
  const object = new ShapePath({
    parent: document.selectedPage,
    name: 'Shape',
    style: {
      fills: [
        {
          color: '#c0ffee',
          fillType: Style.FillType.Color,
        },
      ],
    },
  })

  const buffer = sketch.export(object, {
    output: false,
    exportFormats: [],
  })

  expect(Buffer.isBuffer(buffer)).toBe(true)
  expect(new Image({ image: buffer }).image.size.width).toBe(100)
})
