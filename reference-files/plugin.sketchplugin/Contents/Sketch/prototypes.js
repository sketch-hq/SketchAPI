/* eslint-disable */

const {
  Document,
  Artboard,
  Shape,
  Rectangle,
  Style,
  Text,
  Flow,
} = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create two artboards
  const artboard1 = new Artboard({
    name: 'Artboard1',
    parent: page,
    frame: new Rectangle(0, 0, 200, 200),
  })
  const artboard2 = new Artboard({
    name: 'Artboard2',
    parent: page,
    frame: new Rectangle(200, 0, 200, 200),
  })

  // Add prototyping link from Artboard1 to Artboard2
  const link1 = new Text({
    text: 'Go to page 2',
    parent: artboard1,
    flow: {
      target: artboard2,
      animationType: Flow.AnimationType.slideFromRight,
    },
  })

  // Artboard2 should just link back
  const link2 = new Text({
    text: 'Back',
    parent: artboard2,
    flow: {
      target: Flow.BackTarget,
      animationType: Flow.AnimationType.slideFromLeft,
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
