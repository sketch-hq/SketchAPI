/* eslint-disable */

const {
  Document,
  Artboard,
  Text,
  Rectangle,
  Style,
  SymbolMaster,
} = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create an artboard, and add a text layer
  const artboard = new Artboard({
    name: 'MySymbol',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
  })
  new Text({
    text: 'Label',
    parent: artboard,
    style: {
      borders: [],
      textColor: '#f00',
      fontSize: 28,
      fontFamily: 'Arial',
      fontWeight: 10,
    },
  })

  // Convert the artboard to a symbol master
  const symbol = SymbolMaster.fromArtboard(artboard)

  // Create an instance, and add it to the page
  const instance = symbol.createNewInstance()
  instance.frame = new Rectangle(200, 0, 200, 200)
  instance.parent = page

  // Override the instances label
  instance.overrides[0].value = 'Custom label'

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
