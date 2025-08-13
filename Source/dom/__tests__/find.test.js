/* globals expect, test */
import { find, Rectangle, Group } from '..'

test('should find Artboard by type', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape' },
        { type: 'Group', layers: { type: 'Text' } },
      ],
    },
  ]
  // expect to find only one artboard
  expect(find('Artboard', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[0].id,
  ])
})

test('should find Group by type', (_context, document) => {
  document.pages = [
    {
      layers: [
        {
          type: 'Artboard',
          layers: [{ type: 'Group', layers: { type: 'Text' } }],
        },
        { type: 'Shape' },
        { type: 'Group', layers: { type: 'Text' } },
      ],
    },
  ]
  // expect to find only multiple groups including nested
  expect(find('Group', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[0].layers[0].id, // nested group on artboard
    document.pages[0].layers[2].id, // regular group on page
  ])
})

test('should find by name', (_context, document) => {
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

test('should find by name containing', (_context, document) => {
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

test('should find by different name', (_context, document) => {
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

test('should find by name ending with', (_context, document) => {
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

test('should find by name beginning with', (_context, document) => {
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

test('should find by full name match ignoring case', (_context, document) => {
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
  expect(find('[name~="tEsT"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find by partial name ignoring case', (_context, document) => {
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
  expect(find('[name~*="tEsT"]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
    document.pages[0].layers[2].id,
  ])
})

test('should find by frame.x greater than', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard' },
        { type: 'Shape', name: 'test', frame: new Rectangle(400, 0, 100, 100) },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('[frame.x>300]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find with 2 criteria', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard', frame: new Rectangle(400, 0, 100, 100) },
        { type: 'Shape', name: 'test', frame: new Rectangle(400, 0, 50, 50) },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(find('Shape, [frame.x>300]', document).map((x) => x.id)).toEqual([
    document.pages[0].layers[1].id,
  ])
})

test('should find with id', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        { type: 'Artboard', frame: new Rectangle(400, 0, 100, 100) },
        { type: 'Shape', name: 'test', frame: new Rectangle(400, 0, 50, 50) },
        { type: 'Shape', name: 'test2' },
      ],
    },
  ]
  expect(
    find(`#${document.pages[0].layers[1].id}`, document).map((x) => x.id)
  ).toEqual([document.pages[0].layers[1].id])
})

test('should find within root progeny', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        {
          type: 'Artboard',
          frame: new Rectangle(400, 0, 100, 100),
          layers: [
            {
              type: 'Shape',
              name: 'test',
              frame: new Rectangle(400, 0, 50, 50),
            },
          ],
        },
        { type: 'Shape', name: 'test' },
      ],
    },
  ]

  const root = document.pages[0].layers[0]
  expect(find("[name='test']", root).map((x) => x.id)).toEqual([
    root.layers[0].id,
  ])

  expect(
    find("[name='test']", root, { inclusive: false }).map((x) => x.id)
  ).toEqual([root.layers[0].id])
})

test('should find within root progeny + root itself', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.pages = [
    {
      layers: [
        {
          type: 'Artboard',
          name: 'test',
          frame: new Rectangle(400, 0, 100, 100),
          layers: [
            {
              type: 'Shape',
              name: 'test',
              frame: new Rectangle(400, 0, 50, 50),
            },
          ],
        },
        { type: 'Shape', name: 'test' },
      ],
    },
  ]

  const root = document.pages[0].layers[0]
  expect(
    find("[name='test']", root, { inclusive: true }).map((x) => x.id)
  ).toEqual([root.id, root.layers[0].id])
})

test('should find all canvas frames as Artboards', (_context, document) => {
  document.pages = [
    {
      name: 'PageWithFrames',
      layers: [
        new Group.Frame({
          name: 'TopLevelFrame',
          layers: [
            new Group.Graphic({
              name: 'TopLevelFrame->NestedGraphic',
            }),
            new Group({
              name: 'TopLevelFrame->NestedGroup',
            }),
          ],
        }),
        new Group.Graphic({
          name: 'TopLevelGraphic',
          layers: [
            new Group.Frame({
              name: 'TopLevelGraphic->NestedFrame',
            }),
          ],
        }),
        new Group({
          name: 'TopLevelGroup',
          layers: [
            new Group.Frame({
              name: 'TopLevelGroup->NestedFrame',
            }),
          ],
        }),
      ],
    },
  ]
  expect(find('Artboard', document).map((x) => x.name)).toEqual([
    'TopLevelFrame',
    'TopLevelGraphic',
  ])
})

test('should find all Frames', (_context, document) => {
  document.pages = [
    {
      name: 'PageWithFrames',
      layers: [
        new Group.Frame({
          name: 'TopLevelFrame',
          layers: [
            new Group.Graphic({
              name: 'TopLevelFrame->NestedGraphic',
            }),
            new Group({
              name: 'TopLevelFrame->NestedGroup',
            }),
          ],
        }),
        new Group.Graphic({
          name: 'TopLevelGraphic',
          layers: [
            new Group.Frame({
              name: 'TopLevelGraphic->NestedFrame',
            }),
          ],
        }),
        new Group({
          name: 'TopLevelGroup',
          layers: [
            new Group.Frame({
              name: 'TopLevelGroup->NestedFrame',
            }),
          ],
        }),
      ],
    },
  ]
  expect(find('Frame', document).map((x) => x.name)).toEqual([
    'TopLevelFrame',
    'TopLevelFrame->NestedGraphic',
    'TopLevelGraphic',
    'TopLevelGraphic->NestedFrame',
    'TopLevelGroup->NestedFrame',
  ])
})

test('should find all Graphics', (_context, document) => {
  document.pages = [
    {
      name: 'PageWithFrames',
      layers: [
        new Group.Frame({
          name: 'TopLevelFrame',
          layers: [
            new Group.Graphic({
              name: 'TopLevelFrame->NestedGraphic',
            }),
            new Group({
              name: 'TopLevelFrame->NestedGroup',
            }),
          ],
        }),
        new Group.Graphic({
          name: 'TopLevelGraphic',
          layers: [
            new Group.Frame({
              name: 'TopLevelGraphic->NestedFrame',
            }),
          ],
        }),
        new Group({
          name: 'TopLevelGroup',
          layers: [
            new Group.Frame({
              name: 'TopLevelGroup->NestedFrame',
            }),
          ],
        }),
      ],
    },
  ]
  expect(find('Graphic', document).map((x) => x.name)).toEqual([
    'TopLevelFrame->NestedGraphic',
    'TopLevelGraphic',
  ])
})

test('should find all (top-level & nested) regular Groups together with nested Frames and Graphics', (_context, document) => {
  document.pages = [
    {
      name: 'PageWithFrames',
      layers: [
        new Group.Frame({
          name: 'TopLevelFrame',
          layers: [
            new Group.Graphic({
              name: 'TopLevelFrame->NestedGraphic',
            }),
            new Group({
              name: 'TopLevelFrame->NestedGroup',
            }),
          ],
        }),
        new Group.Graphic({
          name: 'TopLevelGraphic',
          layers: [
            new Group.Frame({
              name: 'TopLevelGraphic->NestedFrame',
            }),
          ],
        }),
        new Group({
          name: 'TopLevelGroup',
          layers: [
            new Group.Frame({
              name: 'TopLevelGroup->NestedFrame',
            }),
          ],
        }),
      ],
    },
  ]
  expect(find('Group', document).map((x) => x.name)).toEqual([
    'TopLevelFrame->NestedGraphic',
    'TopLevelFrame->NestedGroup',
    'TopLevelGraphic->NestedFrame',
    'TopLevelGroup',
    'TopLevelGroup->NestedFrame',
  ])
})
