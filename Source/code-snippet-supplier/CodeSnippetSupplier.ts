function getPluginIdentifier() {
  if (!__command.pluginBundle()) {
    throw new Error(
      'It seems that the command is not running in a plugin. Bundle your command in a plugin to use the DataSupplier API.'
    )
  }
  return __command.pluginBundle().identifier()
}

export function registerCodeSnippetSupplier(
  snippetName: INSString | string,
  dynamicSnippetKey: INSString | string
) {
  const codeSnippetManager = AppController.sharedInstance().codeSnippetSupplierManager()
  const identifier = getPluginIdentifier()
  const commandIdentifier = __command.identifier()
  codeSnippetManager.registerCodeSnippetSupplier_withName_pluginIdentifier_commandIdentifier(
    dynamicSnippetKey,
    snippetName,
    identifier,
    commandIdentifier
  )
}

export function deregisterCodeSnippetSuppliers() {
  const codeSnippetManager = AppController.sharedInstance().codeSnippetSupplierManager()
  const identifier = getPluginIdentifier()
  codeSnippetManager.deregisterCodeSnipperSuppliersForPluginWithIdentifier(
    identifier
  )
}

export function supplyCodeSnippet(
  key: string | INSString,
  snippet: string | INSString
) {
  const codeSnippetManager = AppController.sharedInstance().codeSnippetSupplierManager()
  codeSnippetManager.supplyCodeSnippet_forKey(snippet, key)
}
