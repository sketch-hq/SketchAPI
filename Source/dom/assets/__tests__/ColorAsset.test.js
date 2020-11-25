/* globals expect, test */
import { Document } from '../..'

test('should create color asset from hex', () => {
  const doc = new Document()

  doc.colors.push('#FFFFFF')
  expect(doc.colors.length).toEqual(1)

  const asset = doc.colors[0]
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe(null)

  doc.close()
})

test('should create color asset from MSColor', () => {
  const doc = new Document()
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')

  doc.colors.push(color)
  expect(doc.colors.length).toEqual(1)

  const asset = doc.colors[0]
  expect(asset.color).toBe('#ffffffff')

  doc.close()
})

test('should create color asset from MSColorAsset', () => {
  const doc = new Document()
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()

  doc.colors.push(color)
  expect(doc.colors.length).toEqual(1)

  const asset = doc.colors[0]
  expect(asset.color).toBe('#ffffffff')

  doc.close()
})

test('should create color asset with name', () => {
  const doc = new Document()
  const color = {
    name: 'White',
    color: '#ffffff',
  }

  doc.colors.push(color)
  expect(doc.colors.length).toEqual(1)

  const asset = doc.colors[0]
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe('White')

  doc.close()
})
