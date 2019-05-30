/* eslint-disable */

const { Document, Shape, Rectangle, Style } = require('sketch/dom')

function main() {
  const doc = new Document()
  const page = doc.selectedPage

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

  doc.save()
}
