/* globals expect, test */

import { Group } from '../Group'

test('should be able to log a document', (context, document) => {
  log(document)
  expect(true).toBe(true)
})

test('should return the pages', (context, document) => {
  const { pages } = document
  expect(pages.length).toBe(1)
  expect(pages[0]).toEqual(document.selectedPage)
})

test('should return the selected layers', (context, document) => {
  const selection = document.selectedLayers
  expect(selection.isEmpty).toBe(true)

  const page = document.selectedPage
  const group = new Group({ name: 'Test', parent: page, selected: true })

  expect(group.selected).not.toBe(false)
  expect(selection.isEmpty).toBe(false)
})

test('should look for a layer by its id', (context, document) => {
  const page = document.selectedPage
  const group = new Group({ name: 'Test', parent: page })
  const { id } = group
  const found = document.getLayerWithID(id)
  expect(found).toEqual(group)
})

test(
  'should throw an error when trying to save because we cannot save a MSDocumentData',
  (context, document) => {
    try {
      document.save('~/Desktop/test.sketch')
      expect(false).toBe(true)
    } catch (err) {
      expect(err.message).toBe('Cannot save this document')
    }
  }
)

test('should look for a layer by its name', (context, document) => {
  const page = document.selectedPage
  const group = new Group({ name: 'Test', parent: page })
  const found = document.getLayersNamed('Test')
  expect(found).toEqual([group])
})
