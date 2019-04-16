interface MSOpenInLibraryActionUninitialized<InitializedType = MSOpenInLibraryAction> extends MSDocumentActionUninitialized<MSOpenInLibraryAction> {}

interface MSOpenInLibraryAction extends MSDocumentAction {
}

declare const MSOpenInLibraryAction: {
  alloc(): MSOpenInLibraryActionUninitialized;
  class(): MSOpenInLibraryAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

