/* globals expect, test */
import { Buffer } from 'buffer'
import { exportObject, objectFromJSON } from '../export'
import { Shape } from '../layers/Shape'

test('should return exported json data', () => {
  const object = new Shape()
  const archive = exportObject(object, {
    formats: 'json',
    output: false,
  })
  expect(archive.do_objectID).toEqual(String(object.id))
  expect(archive._class).toEqual('shapeGroup')
})

test('should return array of exported json data', () => {
  const objects = [new Shape(), new Shape()]
  const archive = exportObject(objects, {
    formats: 'json',
    output: false,
  })
  expect(archive.length).toBe(2)
  expect(archive[0].do_objectID).toEqual(String(objects[0].id))
  expect(archive[1].do_objectID).toEqual(String(objects[1].id))
})

test('should restore object from json data', () => {
  const object = new Shape()
  const archive = exportObject(object, {
    formats: ['json'],
    output: false,
  })
  const restored = objectFromJSON(archive)
  expect(restored.id).toEqual(String(object.id))
})

test('Should fail with no object provided', () => {
  try {
    exportObject([], {
      output: false,
    })
  } catch (err) {
    expect(err.message).toMatch('No objects provided to export')
  }
})

test('Should return a buffer', (context, document) => {
  const object = new Shape({
    parent: document.selectedPage,
  })
  const buffer = exportObject(object, {
    formats: 'png',
    output: false,
  })
  expect(Buffer.isBuffer(buffer)).toBe(true)
})

test('should fail with to return with multiple formats', () => {
  try {
    const object = new Shape()
    exportObject(object, {
      formats: ['png', 'json'],
      output: false,
    })
    expect(false).toBe(true)
  } catch (err) {
    expect(err.message).toMatch('Can only return 1 format with no output type')
  }
})
