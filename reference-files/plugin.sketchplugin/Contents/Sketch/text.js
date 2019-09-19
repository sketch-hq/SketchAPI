/* eslint-disable */

const { Document, Rectangle, Text, Style } = require('sketch')

function main(ctx) {
  // Create a new document, and get a reference to its selected page
  const doc = new Document()
  const page = doc.selectedPage

  // Create and style two text layers
  const headline = new Text({
    text: 'Headline',
    parent: page,
    style: {
      borders: [],
      textColor: '#fff',
      fontSize: 28,
      fontFamily: 'Arial',
      fontWeight: 10,
    },
  })

  const body = new Text({
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    parent: page,
    frame: new Rectangle(0, headline.frame.height + 16, 0, 0),
    style: {
      borders: [],
      textColor: '#fff',
      fontSize: 16,
      fontFamily: 'Times New Roman',
      fontWeight: 5,
    },
    fixedWidth: true,
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
