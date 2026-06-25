/* globals expect, test */
import { Style } from '../..'

test('should set blurs', () => {
  const style = new Style()
  expect(style.blurs.length).toBe(0)

  style.blurs = [
    {
      radius: 10,
      motionAngle: 45,
      blurType: Style.BlurType.Gaussian,
    },
  ]
  expect(style.blurs.length).toBe(1)

  const style2 = new Style({
    blurs: [
      {
        radius: 20,
        motionAngle: 90,
        enabled: false,
        blurType: Style.BlurType.Motion,
      },
    ],
  })
  expect(style2.blurs.length).toBe(1)
})

test('should get blurs', () => {
  const style = new Style()
  expect(style.blurs.length).toBe(0)

  style.blurs = [
    {
      radius: 10,
      center: { x: 0.5, y: 0.5 },
      blurType: Style.BlurType.Gaussian,
    },
  ]

  expect(style.blurs.length).toBe(1)
  expect(style.blurs[0].radius).toBe(10)
  expect(style.blurs[0].center).toEqual({ x: 0.5, y: 0.5 })
  expect(style.blurs[0].enabled).toBe(true)
  expect(style.blurs[0].blurType).toBe(Style.BlurType.Gaussian)

  style.blurs = []
  expect(style.blurs.length).toBe(0)

  style.blurs.push({
    radius: 5,
    motionAngle: 90,
    blurType: Style.BlurType.Motion,
    enabled: false,
  })
  expect(style.blurs.length).toBe(1)
  expect(style.blurs[0].radius).toBe(5)
  expect(style.blurs[0].motionAngle).toBe(90)
  expect(style.blurs[0].enabled).toBe(false)
  expect(style.blurs[0].blurType).toBe(Style.BlurType.Motion)

  const style2 = new Style({
    blurs: [
      {
        radius: 15,
        motionAngle: 30,
        blurType: Style.BlurType.Zoom,
      },
    ],
  })
  expect(style2.blurs.length).toBe(1)
  expect(style2.blurs[0].radius).toBe(15)
  expect(style2.blurs[0].motionAngle).toBe(30)
  expect(style2.blurs[0].enabled).toBe(true)
  expect(style2.blurs[0].blurType).toBe(Style.BlurType.Zoom)
})

test('should get and set saturation', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Background,
        saturation: 0.65,
      },
    ],
  })
  expect(style.blurs[0].saturation).toBe(0.65)

  style.blurs[0].saturation = 1.5
  expect(style.blurs[0].saturation).toBe(1.5)

  style.blurs[0].saturation = -12
  expect(style.blurs[0].saturation).toBe(0) // clamped

  style.blurs[0].saturation = 100
  expect(style.blurs[0].saturation).toBe(2) // clamped
})

test('should set default saturation value', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Background,
      },
    ],
  })
  expect(style.blurs[0].saturation).toBe(1)
})

test('should set progressive', () => {
  const style = new Style({
    blurs: [
      {
        progressive: true,
      },
    ],
  })
  expect(style.blurs[0].progressive).toBe(true)

  style.blurs[0].progressive = false
  expect(style.blurs[0].progressive).toBe(false)

  style.blurs[0].progressive = true
  expect(style.blurs[0].progressive).toBe(true)
})

test('should set progressive linear gradient via constructor', () => {
  const style = new Style({
    blurs: [
      {
        progressive: true,
        gradient: {
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { position: 0, color: '#FF00007F' },
            { position: 1, color: '#00FF00FF' },
          ],
        },
      },
    ],
  })
  expect(style.blurs[0].progressive).toBe(true)
  expect(style.blurs[0].gradient.gradientType).toBe(Style.GradientType.Linear)
  expect(style.blurs[0].gradient.from.toJSON()).toEqual({ x: 0, y: 0 })
  expect(style.blurs[0].gradient.to.toJSON()).toEqual({ x: 1, y: 1 })
  expect(style.blurs[0].gradient.stops.map((x) => x.toJSON())).toEqual([
    { position: 0, color: '#ff00007f' },
    { position: 1, color: '#00ff00ff' },
  ])
  expect(
    style.blurs[0].gradient.stops.map((x) => Math.round(x.alpha * 255))
  ).toEqual([127, 255])
})

test('should set progressive linear gradient via property', () => {
  const style = new Style({
    blurs: [
      {
        progressive: false,
      },
    ],
  })
  expect(style.blurs[0].progressive).toBe(false)
  expect(style.blurs[0].gradient).toBeUndefined()

  style.blurs[0].progressive = true
  style.blurs[0].gradient = {
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    stops: [
      { position: 0, color: '#FF00007F' },
      { position: 1, color: '#00FF00FF' },
    ],
  }

  expect(style.blurs[0].progressive).toBe(true)
  expect(style.blurs[0].gradient).toBeDefined()
  expect(style.blurs[0].gradient.gradientType).toBe(Style.GradientType.Linear)
  expect(style.blurs[0].gradient.from.toJSON()).toEqual({ x: 0, y: 0 })
  expect(style.blurs[0].gradient.to.toJSON()).toEqual({ x: 1, y: 1 })
  expect(style.blurs[0].gradient.stops.map((x) => x.toJSON())).toEqual([
    { position: 0, color: '#ff00007f' },
    { position: 1, color: '#00ff00ff' },
  ])
  expect(
    style.blurs[0].gradient.stops.map((x) => Math.round(x.alpha * 255))
  ).toEqual([127, 255])
})

test('should set progressive radial gradient via constructor', () => {
  const style = new Style({
    blurs: [
      {
        progressive: true,
        gradient: {
          gradientType: Style.GradientType.Radial,
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { position: 0, color: '#FF00007F' },
            { position: 1, color: '#00FF00FF' },
          ],
        },
      },
    ],
  })
  expect(style.blurs[0].progressive).toBe(true)
  expect(style.blurs[0].gradient.gradientType).toBe(Style.GradientType.Radial)
  expect(style.blurs[0].gradient.from.toJSON()).toEqual({ x: 0, y: 0 })
  expect(style.blurs[0].gradient.to.toJSON()).toEqual({ x: 1, y: 1 })
  expect(style.blurs[0].gradient.stops.map((x) => x.toJSON())).toEqual([
    { position: 0, color: '#ff00007f' },
    { position: 1, color: '#00ff00ff' },
  ])
  expect(
    style.blurs[0].gradient.stops.map((x) => Math.round(x.alpha * 255))
  ).toEqual([127, 255])
})

test('should set progressive radial gradient via property', () => {
  const style = new Style({
    blurs: [
      {
        progressive: false,
      },
    ],
  })
  expect(style.blurs[0].progressive).toBe(false)
  expect(style.blurs[0].gradient).toBeUndefined()

  style.blurs[0].progressive = true
  style.blurs[0].gradient = {
    gradientType: Style.GradientType.Radial,
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    stops: [
      { position: 0, color: '#FF00007F' },
      { position: 1, color: '#00FF00FF' },
    ],
  }

  expect(style.blurs[0].progressive).toBe(true)
  expect(style.blurs[0].gradient).toBeDefined()
  expect(style.blurs[0].gradient.gradientType).toBe(Style.GradientType.Radial)
  expect(style.blurs[0].gradient.from.toJSON()).toEqual({ x: 0, y: 0 })
  expect(style.blurs[0].gradient.to.toJSON()).toEqual({ x: 1, y: 1 })
  expect(style.blurs[0].gradient.stops.map((x) => x.toJSON())).toEqual([
    { position: 0, color: '#ff00007f' },
    { position: 1, color: '#00ff00ff' },
  ])
  expect(
    style.blurs[0].gradient.stops.map((x) => Math.round(x.alpha * 255))
  ).toEqual([127, 255])
})

test('should set glass effect', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
      },
    ],
  })
  expect(style.blurs[0].blurType).toBe(Style.BlurType.Glass)
  // Auto glass has been removed in Sketch 2025.3, it's always custom now
  expect(style.blurs[0].isCustomGlass).toBe(true)
})

test('should NOT be able to set auto glass effect', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        // This should be safely ignored in Sketch 2025.3 and later
        isCustomGlass: false,
      },
    ],
  })
  expect(style.blurs[0].blurType).toBe(Style.BlurType.Glass)
  expect(style.blurs[0].isCustomGlass).toBe(true)

  // This should be safely ignored in Sketch 2025.3 and later
  style.blurs[0].isCustomGlass = false
  expect(style.blurs[0].isCustomGlass).toBe(true)
})

test('should set and get custom glass brightness', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        brightness: 1.5,
      },
    ],
  })
  expect(style.blurs[0].brightness).toBe(1.5)

  style.blurs[0].brightness = 2
  expect(style.blurs[0].brightness).toBe(2)

  style.blurs[0].brightness = -1
  expect(style.blurs[0].brightness).toBe(0) // clamped

  style.blurs[0].brightness = 3
  expect(style.blurs[0].brightness).toBe(2) // clamped
})

test('should set and get custom glass distortion', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        distortion: 0.5,
      },
    ],
  })
  expect(style.blurs[0].distortion).toBe(0.5)

  style.blurs[0].distortion = 1
  expect(style.blurs[0].distortion).toBe(1)

  style.blurs[0].distortion = -1
  expect(style.blurs[0].distortion).toBe(0)

  style.blurs[0].distortion = 2
  expect(style.blurs[0].distortion).toBe(1)
})

test('should set and get custom glass depth', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        depth: 0.5,
      },
    ],
  })
  expect(style.blurs[0].depth).toBe(0.5)

  style.blurs[0].depth = 1
  expect(style.blurs[0].depth).toBe(1)

  style.blurs[0].depth = -1
  expect(style.blurs[0].depth).toBe(0)

  style.blurs[0].depth = 2
  expect(style.blurs[0].depth).toBe(1)
})

test('should set and get custom glass chromatic aberration', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        chromaticAberration: 0.5,
      },
    ],
  })
  expect(style.blurs[0].chromaticAberration).toBe(0.5)

  style.blurs[0].chromaticAberration = 1
  expect(style.blurs[0].chromaticAberration).toBe(1)

  style.blurs[0].chromaticAberration = -1
  expect(style.blurs[0].chromaticAberration).toBe(0)

  style.blurs[0].chromaticAberration = 2
  expect(style.blurs[0].chromaticAberration).toBe(1)
})

test('should set and get custom glass specular highlights', () => {
  const style = new Style({
    blurs: [
      {
        blurType: Style.BlurType.Glass,
        hasSpecularHighlights: false,
      },
    ],
  })
  expect(style.blurs[0].hasSpecularHighlights).toBe(false)

  style.blurs[0].hasSpecularHighlights = true

  expect(style.blurs[0].hasSpecularHighlights).toBe(true)
})
