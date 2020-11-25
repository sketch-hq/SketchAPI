/* globals expect, test */
import { Document } from '../..'

test('should create gradient asset from dictionary', () => {
  const doc = new Document()

  doc.gradients.push({})
  expect(doc.gradients.length).toEqual(1)

  const asset = doc.gradients[0]
  expect(asset.gradient.type).toBe('Gradient')
  expect(asset.name).toBe(null)

  doc.close()
})

test('should create gradient asset from MSGradientAsset', () => {
  const doc = new Document()
  const gradient = MSGradientAsset.alloc().init()

  doc.gradients.push(gradient)
  expect(doc.gradients.length).toEqual(1)

  const asset = doc.gradients[0]
  expect(asset.gradient.type).toBe('Gradient')

  doc.close()
})

test('should create gradient asset with name', () => {
  const doc = new Document()
  const gradient = {
    name: 'My Gradient',
    gradient: {},
  }

  doc.gradients.push(gradient)
  expect(doc.gradients.length).toEqual(1)

  const asset = doc.gradients[0]
  expect(asset.gradient.type).toBe('Gradient')
  expect(asset.name).toBe('My Gradient')

  doc.close()
})
