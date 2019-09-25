/* eslint-disable */

const { Document, Shape, Rectangle, Style } = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create a simple styled Shape and place it on the page
  const shape = new Shape({
    name: 'shape',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
    style: {
      opacity: 0.5,
      borders: [{ color: '#0f0' }],
      fills: [{ color: '#f00', fillType: Style.FillType.Color }],
      shadows: [
        {
          color: '#00f',
          blur: 20,
        },
      ],
    },
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
