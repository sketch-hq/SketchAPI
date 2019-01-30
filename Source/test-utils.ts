const { SymbolMaster, SharedStyle, Text, Artboard } = require('./dom')

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

export function createSharedStyle(document: any, Primitive: any, style?: any) {
  const object = new Primitive({
    name: 'Test',
    parent: document.selectedPage,
    ...(style || {}),
  })

  const sharedStyle = SharedStyle.fromStyle({
    name: 'test shared style',
    style: object.style,
    document,
  })

  object.sharedStyle = sharedStyle

  return {
    sharedStyle,
    object,
  }
}
