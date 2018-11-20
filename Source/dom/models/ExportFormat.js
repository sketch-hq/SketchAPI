import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * An MSExportFormat. This is not exposed, only used by the exportOptions of the Layer
 */
export class ExportFormat extends WrappedObject {
  constructor(exportFormat = {}) {
    if (!exportFormat.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      exportFormat.sketchObject = MSExportFormat.formatWithScale_name_fileFormat(
        1,
        '',
        'png'
      )
    }

    super(exportFormat)
  }
}

ExportFormat.type = Types.ExportFormat
ExportFormat[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(ExportFormat, MSExportFormat)

delete ExportFormat[DefinedPropertiesKey].id

ExportFormat.define('fileFormat', {
  get() {
    return String(this._object.fileFormat())
  },
  set(fileFormat) {
    if (!MSExportFormat.validFormats().containsObject(fileFormat)) {
      throw new Error('File format not supported')
    }

    this._object.setFileFormat(fileFormat)
  },
})

ExportFormat.define('prefix', {
  get() {
    if (this._object.namingScheme() == 0) {
      // we have a suffix
      return undefined
    }
    return String(this._object.name())
  },
  set(name) {
    this._object.setNamingScheme(1)
    this._object.setName(name)
  },
})

ExportFormat.define('suffix', {
  get() {
    if (this._object.namingScheme() == 1) {
      // we have a prefix
      return undefined
    }
    return String(this._object.name())
  },
  set(name) {
    this._object.setNamingScheme(0)
    this._object.setName(name)
  },
})

ExportFormat.define('size', {
  get() {
    switch (this._object.visibleScaleType()) {
      case 0:
        return `${this._object.scale()}x`
      case 1:
        return `${this._object.absoluteSize()}w`
      case 2:
        return `${this._object.absoluteSize()}h`
      default:
        throw new Error('unknown visibleScaleType')
    }
  },
  set(_size) {
    const size = String(_size)
    if (
      size.endsWith('w') ||
      size.endsWith('width') ||
      (size.endsWith('px') && this._object.visibleScaleType() == 1)
    ) {
      this._object.setVisibleScaleType(1)
      this._object.setScale(0)
      this._object.setAbsoluteSize(parseInt(size, 10))
    } else if (
      size.endsWith('h') ||
      size.endsWith('height') ||
      (size.endsWith('px') && this._object.visibleScaleType() == 2)
    ) {
      this._object.setVisibleScaleType(2)
      this._object.setScale(0)
      this._object.setAbsoluteSize(parseInt(size, 10))
    } else if (size.endsWith('x')) {
      this._object.setVisibleScaleType(0)
      this._object.setScale(parseInt(size, 10))
      this._object.setAbsoluteSize(0)
    } else {
      throw new Error('could not parse the size')
    }
  },
})
