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
