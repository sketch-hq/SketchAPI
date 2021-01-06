/* globals expect, test */

test('should create color asset from hex', (context, document) => {
  document.colors.push('#FFFFFF')
  expect(document.colors.length).toEqual(1)

  const asset = document.colors[0]
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe(null)
})

test('should create color asset from MSColor', (context, document) => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')

  document.colors.push(color)
  expect(document.colors.length).toEqual(1)

  const asset = document.colors[0]
  expect(asset.color).toBe('#ffffffff')
})

test('should create color asset from MSColorAsset', (context, document) => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()

  document.colors.push(color)
  expect(document.colors.length).toEqual(1)

  const asset = document.colors[0]
  expect(asset.color).toBe('#ffffffff')
})

test('should create color asset with name', (context, document) => {
  const color = {
    name: 'White',
    color: '#ffffff',
  }

  document.colors.push(color)
  expect(document.colors.length).toEqual(1)

  const asset = document.colors[0]
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe('White')
})
