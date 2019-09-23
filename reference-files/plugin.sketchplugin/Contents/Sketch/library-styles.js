/* eslint-disable */

const {
  Document,
  Artboard,
  Shape,
  Rectangle,
  Style,
  SymbolMaster,
  Library,
  SharedStyle,
} = require('sketch')

function main(ctx) {
  // Create a new document to serve as the library
  const libDoc = new Document()

  // Create a shared style
  SharedStyle.fromStyle({
    name: 'my shared style',
    style: {
      fills: [{ color: '#00f', fillType: Style.FillType.Color }],
    },
    document: libDoc,
  })

  // Create a random library filename to avoid Sketch caching the generated
  // library on consecutive plugin runs
  const libName = `lib-${Math.floor(Math.random() * 16777215).toString(
    16
  )}.sketch`

  // Save and close
  libDoc.save(
    `${ctx.savePath}/${libName}`,
    {
      saveMode: Document.SaveMode.SaveAs,
    },
    function() {
      libDoc.close()

      // Create another new document, this will be the document that imports
      // the library created just above
      const doc = new Document()
      const page = doc.selectedPage

      // Add the library, and import the shared style
      const lib = Library.getLibraryForDocumentAtPath(
        `${ctx.savePath}/${libName}`
      )
      const sharedStyle = lib
        .getImportableLayerStyleReferencesForDocument(doc)[0]
        .import()

      // Apply _and_ link the shared style to a shape
      const shape = new Shape({
        name: 'shape',
        parent: page,
        frame: new Rectangle(0, 0, 200, 200),
        style: sharedStyle.style,
        sharedStyleId: sharedStyle.id,
      })

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
