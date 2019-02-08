import { wrapNativeObject } from './wrapNativeObject'

function _importWithImporter(data, importer) {
  importer.prepareToImportFromData(data)
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

export const layerFromData = (data, type) => {
  switch (type) {
    case 'svg':
      return _importSVG(data)
    case 'pdf':
      return _importPDF(data)
    case 'eps':
      return _importEPS(data)
    default:
      throw new Error(`Can't import ${type}`)
  }
}

export const layerFromString = (str, type) => {
  const nsStr = NSString.alloc().initWithString(str)
  const data = nsStr.dataUsingEncoding(NSUTF8StringEncoding)
  return layerFromData(data, type)
}
