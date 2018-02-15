/* globals expect, test */
import { Artboard } from '../Artboard'
import { Group } from '../Group'
import { AnimationType, BackTarget } from '../Flow'

test(
  'should create a flow between a layer and an artboard with a default animation',
  (context, document) => {
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
    })
    expect(rect.flow.isBackAction()).toBe(false)
    expect(rect.flow.isValidConnection()).toBe(true)
  }
)

test(
  'should create a flow between a layer and an artboard with a targetId',
  (context, document) => {
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
    })
  }
)

test('target should return the wrapped artboard', (context, document) => {
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

test('should create a flow between a layer and an artboard with a specific animation', () => {
  const artboard = new Artboard({ name: 'Test1' })
  const artboard2 = new Artboard({ name: 'Test2' })

  const rect = new Group({
    parent: artboard,
    flow: {
      target: artboard2,
      animationType: AnimationType.fade,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: artboard2.id,
    type: 'Flow',
    animationType: 'fade',
  })
})

test('should create a back action', () => {
  const artboard = new Artboard({ name: 'Test1' })

  const rect = new Group({
    parent: artboard,
    flow: {
      target: BackTarget,
    },
  })

  expect(rect.flow.toJSON()).toEqual({
    targetId: BackTarget,
    type: 'Flow',
    animationType: 'slideFromRight',
  })
  expect(rect.flow.isBackAction()).toBe(true)
})

test('adding a flow action with an unknow target work but isValidConnection should return false', () => {
  const artboard = new Artboard({ name: 'Test1' })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: 'unknown',
    },
  })

  expect(rect.flow.isValidConnection()).toBe(false)
})
