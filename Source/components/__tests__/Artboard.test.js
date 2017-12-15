/* globals expect */

import { Artboard } from '../Artboard'

export const tests = {
  'should create an artboard': () => {
    const artboard2 = new Artboard({ name: 'Test2' })
    expect(artboard2.type).toBe('Artboard')
  },
}
