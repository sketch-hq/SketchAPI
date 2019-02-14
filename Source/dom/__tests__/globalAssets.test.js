/* globals expect, test */
import { isRunningOnJenkins } from '../../test-utils'
import { getGlobalColors, getGlobalGradients } from '../globalAssets'

if (!isRunningOnJenkins()) {
  test('should return global colors', () => {
    const colors = getGlobalColors()
    expect(colors.length > 0).toBe(true)
    expect(colors[0].type).toBe('ColorAsset')
    expect(typeof colors[0].color).toBe('string')
  })

  test('should return global gradients', () => {
    const gradients = getGlobalGradients()
    expect(gradients.length > 0).toBe(true)
    expect(gradients[0].type).toBe('GradientAsset')
  })
}
