/* eslint-disable */

const {
  Document,
  Artboard,
  Shape,
  Rectangle,
  Style,
  Text,
  Group,
} = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create an artboard
  const artboard = new Artboard({
    name: 'MyArtboard',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
  })

  // Nest a group within the artboard containing two additional layers
  var group = new Group({
    name: 'MyGroup',
    parent: artboard,
    layers: [
      new Text({
        text: 'Hello World',
        style: {
          borders: [],
          textColor: '#f00',
          fontSize: 28,
          fontFamily: 'Arial',
          fontWeight: 10,
        },
      }),
      new Shape({
        name: 'MyShape',
        frame: new Rectangle(0, 50, 50, 50),
        style: {
          opacity: 0.5,
          borders: [],
          fills: [{ color: '#0f0', fillType: Style.FillType.Color }],
        },
      }),
    ],
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
