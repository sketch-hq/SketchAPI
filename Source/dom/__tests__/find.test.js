/* globals expect, test */
import { find } from '..'

test('should find by type', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [{ type: 'Artboard' }, { type: 'Shape' }],
    },
  ]
  expect(find('Artboard', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[0].id,
  ])
})

test('should find by name', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [{ type: 'Artboard' }, { type: 'Shape', name: 'test' }],
    },
  ]
  expect(find('[name="test"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find by name containing', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape', name: 'test' },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('[name*="test"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
    document.pages[0].layers[2].id,
  ])
})

test('should find by different name', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [],
    },
  ]
  expect(find('[name!="test"]', document).map((x) => x.id)).toEqual([
    document.pages[0].id,
  ])
})

test('should find by name ending with', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape', name: 'test' },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('[name$="2"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[2].id,
  ])
})

test('should find by name beginning with', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape', name: 'test' },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('[name^="test"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
    document.pages[0].layers[2].id,
  ])
})

test('should find by frame.x greater than', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape', name: 'test', frame: { x: 400 } },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('[frame.x>300]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find with 2 criteria', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard', frame: { x: 400 } },
        { type: 'Shape', name: 'test', frame: { x: 400 } },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('Shape, [frame.x>300]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find with id', (context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard', frame: { x: 400 } },
        { type: 'Shape', name: 'test', frame: { x: 400 } },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(
    find(`#${document.pages[0].layers[1].id}`, document).map((x) => x.id)
  ).toEqual([document.pages[0].layers[1].id])
})
