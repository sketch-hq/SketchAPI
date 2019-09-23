/* eslint-disable */

const {
  Document,
  Artboard,
  Shape,
  Rectangle,
  Style,
  SymbolMaster,
  Library,
} = require('sketch')

function main(ctx) {
  // Create a new document to serve as the library,
  // and get a reference to its selected page
  const libDoc = new Document()
  const page = libDoc.selectedPage

  // Create an artboard, and add a shape to it.
  const artboard = new Artboard({
    name: 'my symbol',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
  })
  const shape = new Shape({
    name: 'my rect shape',
    parent: artboard,
    frame: new Rectangle(75, 75, 50, 50),
    style: {
      fills: [{ color: '#000', fillType: Style.FillType.Color }],
    },
  })

  // Convert the artboard to a symbol
  SymbolMaster.fromArtboard(artboard)

  // Save and close
  libDoc.save(
    `${ctx.savePath}/lib.sketch`,
    {
      saveMode: Document.SaveMode.SaveAs,
    },
    function() {
      libDoc.close()

      // Create another new document, this will be the document that imports
      // the library created just above
      const doc = new Document()
      const page = doc.selectedPage

      // Add the library, and import and use the symbol
      const lib = Library.getLibraryForDocumentAtPath(
        `${ctx.savePath}/lib.sketch`
      )
      const symbol = lib
        .getImportableSymbolReferencesForDocument(doc)[0]
        .import()
      const instance = symbol.createNewInstance()
      instance.frame = new Rectangle(200, 0, 200, 200)
      instance.parent = page

      // Save and close
      doc.save(
        `${ctx.savePath}/output.sketch`,
        {
          saveMode: Document.SaveMode.SaveAs,
        },
        function() {
          doc.close()
        }
      )
    }
  )
}
