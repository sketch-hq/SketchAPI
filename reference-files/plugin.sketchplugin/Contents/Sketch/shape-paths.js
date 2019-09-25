/* eslint-disable */

const { Document, Rectangle, Style, ShapePath } = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Add a shape path layer to the page
  const shapePath = ShapePath.fromSVGPath(
    'M 100 300 Q 150 50 200 300 Q 250 550 300 300'
  )
  shapePath.parent = page
  shapePath.frame = new Rectangle(0, 0, 200, 250)
  shapePath.style = {
    borders: [],
    fills: [{ color: '#0f0', fillType: Style.FillType.Color }],
  }

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
