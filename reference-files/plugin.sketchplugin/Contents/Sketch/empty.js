/* eslint-disable */

const { Document } = require('sketch/dom')

function empty(ctx) {
  // Create a new document
  const doc = new Document()

  // Save and close
  doc.save(
    String(ctx.savePath),
    {
      saveMode: Document.SaveMode.SaveAs,
    },
    function() {
      doc.close()
    }
  )
}
