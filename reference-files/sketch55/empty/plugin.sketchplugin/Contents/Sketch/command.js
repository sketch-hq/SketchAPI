/* eslint-disable */

const { Document } = require('sketch/dom')

function main(ctx) {
  // Create a new document
  const doc = new Document()

  // Save and close
  doc.save(ctx.pwd + '/output.sketch', {
    saveMode: Document.SaveMode.SaveAs,
  })
  doc.close()
}
