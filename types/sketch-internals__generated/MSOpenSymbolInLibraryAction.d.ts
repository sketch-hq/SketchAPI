interface MSOpenSymbolInLibraryActionUninitialized<InitializedType = MSOpenSymbolInLibraryAction> extends MSOpenInLibraryActionUninitialized<MSOpenSymbolInLibraryAction> {}

interface MSOpenSymbolInLibraryAction extends MSOpenInLibraryAction {
  openLibraryForForeignSymbols(sender: any): void;
}

declare const MSOpenSymbolInLibraryAction: {
  alloc(): MSOpenSymbolInLibraryActionUninitialized;
  class(): MSOpenSymbolInLibraryAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

