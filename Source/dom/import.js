import { Buffer } from 'buffer'
import { wrapNativeObject } from './wrapNativeObject'
import { Image } from './layers/Image'

function _importWithImporter(data, importer) {
  let nsData
  if (Buffer.isBuffer(data)) {
    nsData = data.toNSData()
  } else if (
    typeof data.isKindOfClass === 'function' &&
    data.isKindOfClass(NSData)
  ) {
    nsData = data
  } else {
    nsData = Buffer.from(data).toNSData()
  }
  importer.prepareToImportFromData(nsData)
  return wrapNativeObject(importer.importAsLayer())
}

function _importSVG(data) {
  return _importWithImporter(data, MSSVGImporter.svgImporter())
}
function _importPDF(data) {
  return _importWithImporter(data, MSPDFImporter.pdfImporter())
}
function _importEPS(data) {
  return _importWithImporter(data, MSPDFImporter.epsImporter())
}

export const createLayerFromData = (data, type) => {
  switch (type) {
    case 'svg':
      return _importSVG(data)
    case 'pdf':
      return _importPDF(data)
    case 'eps':
      return _importEPS(data)
    case 'image':
      return new Image({ image: data })
    default:
      throw new Error(`Can't import ${type}`)
  }
}
