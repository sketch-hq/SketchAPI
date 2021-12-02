/* globals expect, test */
import { Artboard, Group, Flow } from '../..'

test('should create a flow between a layer and an artboard with a default animation', (_context, document) => {
  const artboard = new Artboard({
    name: 'Test1',
    parent: document.selectedPage,
  })
  const artboard2 = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })

  const rect = new Group({
    parent: artboard,
    flow: {
      target: artboard2,
    },
  })

  // check that an flow can be logged
  log(rect.flow)
  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight',
    maintainScrollPosition: false,
  })
  expect(rect.flow.isBackAction()).toBe(false)
  expect(rect.flow.isValidConnection()).toBe(true)
})

test('should create a flow between a layer and an artboard with a targetId', (_context, document) => {
  const artboard = new Artboard({
    name: 'Test1',
    parent: document.selectedPage,
  })
  const artboard2 = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: artboard2.id,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight',
    maintainScrollPosition: false,
  })
})

test('target should return the wrapped artboard', (_context, document) => {
  const artboard = new Artboard({
    name: 'Test1',
    parent: document.selectedPage,
  })
  const artboard2 = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: artboard2.id,
    },
  })

  expect(rect.flow.target).toEqual(artboard2)
})

test('maintain scroll position should persist', (_context, document) => {
  const artboard = new Artboard({
    name: 'Test1',
    parent: document.selectedPage,
  })
  const artboard2 = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: artboard2.id,
      maintainScrollPosition: true,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromRight',
    maintainScrollPosition: true,
  })
})

test('should create a flow between a layer and an artboard with a specific animation', () => {
  const artboard = new Artboard({ name: 'Test1' })
  const artboard2 = new Artboard({ name: 'Test2' })

  const rect = new Group({
    parent: artboard,
    flow: {
      target: artboard2,
      animationType: Flow.AnimationType.slideFromLeft,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'slideFromLeft',
    maintainScrollPosition: false,
  })
})

test('should create a back action', () => {
  const artboard = new Artboard({ name: 'Test1' })

  const rect = new Group({
    parent: artboard,
    flow: {
      target: Flow.BackTarget,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: Flow.BackTarget,
    type: 'Flow',
    animationType: 'slideFromRight',
    maintainScrollPosition: false,
  })
  expect(rect.flow.isBackAction()).toBe(true)
})

test('adding a flow action with an unknown target work but isValidConnection should return false', () => {
  const artboard = new Artboard({ name: 'Test1' })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: 'unknown',
    },
  })

  expect(rect.flow.isValidConnection()).toBe(false)
})
