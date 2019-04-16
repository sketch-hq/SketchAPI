export function getDocumentData(document) {
  let documentData = document

  if (document && document.sketchObject) {
    if (document.type !== 'Document') {
      throw new Error(`Expected a Document, got a ${document.type}`)
    }
    documentData = document._getMSDocumentData()
  } else if (document && document.documentData) {
    documentData = document.documentData()
  }
  return documentData
}
