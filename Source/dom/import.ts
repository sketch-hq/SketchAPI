import { Buffer } from 'buffer'
import { isNativeObject } from 'util'
import { wrapNativeObject } from './wrapNativeObject'
import { Image } from './layers/Image'
import { isKindOfClass } from './utils'

function _importWithImporter(
  data: Buffer | NSData | string,
  importer: IMSImporter
) {
  let nsData: NSData
  if (Buffer.isBuffer(data)) {
    nsData = data.toNSData()
  } else if (isNativeObject(data) && isKindOfClass(data, NSData.class())) {
    nsData = data
  } else {
    nsData = Buffer.from(data).toNSData()
  }
  importer.prepareToImportFromData(nsData)
  return wrapNativeObject(importer.importAsLayer())
}

function _importSVG(data: Buffer | NSData | string) {
  return _importWithImporter(data, MSSVGImporter.svgImporter())
}
function _importPDF(data: Buffer | NSData | string) {
  return _importWithImporter(data, MSPDFImporter.pdfImporter())
}
function _importEPS(data: Buffer | NSData | string) {
  return _importWithImporter(data, MSPDFImporter.epsImporter())
}

export const createLayerFromData = (
  data: Buffer | NSData | string,
  type: 'svg' | 'pdf' | 'eps' | 'bitmap'
) => {
  switch (type) {
    case 'svg':
      return _importSVG(data)
    case 'pdf':
      return _importPDF(data)
    case 'eps':
      return _importEPS(data)
    case 'bitmap':
      return new Image({ image: data })
    default:
      throw new Error(`Can't import ${type}`)
  }
}
