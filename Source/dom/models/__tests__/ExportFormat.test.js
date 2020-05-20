/* globals expect, test */
import { Slice } from '../..'

test('should be able to log an ExportFormat', () => {
  const artboard = new Slice({
    exportFormats: [
      {
        size: '2x',
        suffix: '@2x',
      },
    ],
  })
  log(artboard.exportFormats)
  expect(artboard.exportFormats.map((e) => e.toJSON())).toEqual([
    {
      type: 'ExportFormat',
      fileFormat: 'png',
      suffix: '@2x',
      size: '2x',
    },
  ])
})

test('should be able to modify an ExportFormat', () => {
  const artboard = new Slice({
    exportFormats: [
      {
        size: '2x',
        suffix: '@2x',
      },
    ],
  })
  const [exportFormat] = artboard.exportFormats
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '2x',
  })

  exportFormat.size = '25x'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '25x',
  })

  exportFormat.size = '500w'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '500w',
  })

  exportFormat.size = '400width'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '400w',
  })

  exportFormat.size = '300px'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '300w',
  })

  exportFormat.size = '500h'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '500h',
  })

  exportFormat.size = '400height'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '400h',
  })

  exportFormat.size = '300px'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '300h',
  })

  exportFormat.fileFormat = 'jpg'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    suffix: '@2x',
    size: '300h',
  })

  exportFormat.suffix = '@3x'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    suffix: '@3x',
    size: '300h',
  })

  exportFormat.prefix = '@4x'
  expect(exportFormat.toJSON()).toEqual({
    type: 'ExportFormat',
    fileFormat: 'jpg',
    prefix: '@4x',
    size: '300h',
  })
})
