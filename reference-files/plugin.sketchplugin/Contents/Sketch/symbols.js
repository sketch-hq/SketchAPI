/* eslint-disable */

const {
  Document,
  Artboard,
  Shape,
  Rectangle,
  Style,
  SymbolMaster,
} = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create an artboard, and add a shape to it.
  const artboard = new Artboard({
    name: 'artboard',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
  })
  const shape = new Shape({
    name: 'shape',
    parent: artboard,
    frame: new Rectangle(75, 75, 50, 50),
    style: {
      fills: [{ color: '#000', fillType: Style.FillType.Color }],
    },
  })

  // Convert the artboard to a symbol master
  const symbol = SymbolMaster.fromArtboard(artboard)

  // Create an instance, and add it to the page
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
