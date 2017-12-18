/* globals expect */
import { Shape } from '../Shape'

export const tests = {
  'should create a new shape': () => {
    const shape = new Shape()
    expect(shape.type).toBe('Shape')
  },

  'should create a new shape with the default style': () => {
    const shape = new Shape()
    expect(shape.style.borders).toEqual([])
    expect(shape.style.fills).toEqual([])
  },
}
