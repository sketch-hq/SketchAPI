import { Style } from './dom'

const { SymbolMaster, Text, Artboard } = require('./dom')

export function isRunningOnJenkins() {
  return !__command.pluginBundle()
}

export function createSymbolMaster(document: any) {
  const artboard = new Artboard({
    name: 'Test',
    parent: document.selectedPage,
  })
  const text = new Text({
    text: 'Test value',
    parent: artboard,
  })

  // build the symbol master
  return {
    master: SymbolMaster.fromArtboard(artboard),
    text,
    artboard,
  }
}

export function createSharedStyle(document: any, Primitive: any) {
  const object = new Primitive({
    name: 'Test',
    parent: document.selectedPage,
  })

  const sharedStyles =
    object.style.styleType == Style.StyleType.Layer
      ? document.sharedLayerStyles
      : document.sharedTextStyles

  const newLength = sharedStyles.push({
    name: 'test shared style',
    style: object.style,
  })

  const sharedStyle = sharedStyles[newLength - 1]

  object.sharedStyle = sharedStyle

  return {
    sharedStyle,
    object,
  }
}
