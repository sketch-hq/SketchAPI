/* globals expect, test */

test('should create gradient asset from dictionary', (_context, document) => {
  document.gradients.push({})
  expect(document.gradients.length).toEqual(1)

  const asset = document.gradients[0]
  expect(asset.gradient.type).toBe('Gradient')
  expect(asset.name).toBe(null)
})

test('should create gradient asset from MSGradientAsset', (_context, document) => {
  const gradient = MSGradientAsset.alloc().init()

  document.gradients.push(gradient)
  expect(document.gradients.length).toEqual(1)

  const asset = document.gradients[0]
  expect(asset.gradient.type).toBe('Gradient')
})

test('should create gradient asset with name', (_context, document) => {
//   const gradient = {
//     name: 'My Gradient',
//     gradient: {},
//   }
// 
//   document.gradients.push(gradient)
//   expect(document.gradients.length).toEqual(1)
// 
//   const asset = document.gradients[0]
//   expect(asset.gradient.type).toBe('Gradient')
//   expect(asset.name).toBe('My Gradient')
})
