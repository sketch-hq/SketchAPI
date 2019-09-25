/* eslint-disable */

const { Document } = require('sketch')

function main(ctx) {
  // Create a new document
  const doc = new Document()

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
