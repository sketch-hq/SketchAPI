interface MSResetSymbolSizeActionUninitialized<InitializedType = MSResetSymbolSizeAction> extends MSDocumentActionUninitialized<MSResetSymbolSizeAction> {}

interface MSResetSymbolSizeAction extends MSDocumentAction {
  resetSymbolSize(sender: any): IBAction;
}

declare const MSResetSymbolSizeAction: {
  alloc(): MSResetSymbolSizeActionUninitialized;
  class(): MSResetSymbolSizeAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

