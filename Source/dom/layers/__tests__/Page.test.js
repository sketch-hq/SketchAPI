/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Group, Page } from '../..'

test('should return a Selection with the selected layers of the page', (_context, document) => {
  const page = document.selectedPage
  const selection = page.selectedLayers
  expect(selection.isEmpty).toBe(true)

  const group = new Group({ parent: page, name: 'Test', selected: true })

  expect(group.selected).toBe(true)
  expect(selection.isEmpty).toBe(false)

  canBeLogged(page, Page)
})

test('should create a page', (_context, document) => {
  const page = new Page({ parent: document })
  expect(page.type).toBe('Page')
  expect(document.pages[1]).toEqual(page)
})

test('parent should be the document', (_context, document) => {
  const page = document.selectedPage
  expect(page.parent).toEqual(document)
})

test('should duplicate a page', (_context, document) => {
  const page = document.selectedPage
  const newPage = page.duplicate()
  expect(document.pages.length).toBe(2)
  expect(newPage).toEqual(document.pages[1])
})

test('should remove a page', (_context, document) => {
  const page = document.selectedPage
  const newPage = page.duplicate()
  expect(document.pages.length).toBe(2)
  newPage.remove()
  expect(document.pages.length).toBe(1)
  expect(document.pages[0]).toEqual(page)
})

test('should return whether a page is selected or not', (_context, document) => {
  const page = document.selectedPage
  expect(page.selected).toBe(true)

  const newPage = page.duplicate()
  expect(page.selected).toBe(true)
  expect(newPage.selected).toBe(false)

  newPage.selected = true
  expect(newPage.selected).toBe(true)
  expect(page.selected).toBe(false)

  newPage.remove()
  expect(newPage.selected).toBe(false)
  expect(page.selected).toBe(true)
})

test('should return if the page is the Symbols page', (_context, document) => {
  const page = new Page({ parent: document })
  expect(page.isSymbolsPage()).toBe(false)
  page.name = 'Symbols'
  expect(page.isSymbolsPage()).toBe(true)
})

test('should create the Symbols page', (_context, document) => {
  const page = Page.createSymbolsPage()
  page.parent = document
  expect(page.isSymbolsPage()).toBe(true)
})

test('should get the Symbols page', (_context, document) => {
  const page = Page.createSymbolsPage()
  page.parent = document
  expect(Page.getSymbolsPage(document)).toEqual(page)
})
