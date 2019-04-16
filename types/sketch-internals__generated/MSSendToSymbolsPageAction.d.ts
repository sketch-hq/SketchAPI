interface MSSendToSymbolsPageActionUninitialized<InitializedType = MSSendToSymbolsPageAction> extends MSDocumentActionUninitialized<MSSendToSymbolsPageAction> {}

interface MSSendToSymbolsPageAction extends MSDocumentAction {
  sendSymbolToSymbolsPage(sender: any): IBAction;
}

declare const MSSendToSymbolsPageAction: {
  alloc(): MSSendToSymbolsPageActionUninitialized;
  class(): MSSendToSymbolsPageAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

