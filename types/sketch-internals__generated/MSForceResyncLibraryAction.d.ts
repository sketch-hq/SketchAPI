interface MSForceResyncLibraryActionUninitialized<InitializedType = MSForceResyncLibraryAction> extends MSDocumentActionUninitialized<MSForceResyncLibraryAction> {}

interface MSForceResyncLibraryAction extends MSDocumentAction {
  forceResyncAllLibraryObjects(sender: any): IBAction;
}

declare const MSForceResyncLibraryAction: {
  alloc(): MSForceResyncLibraryActionUninitialized;
  class(): MSForceResyncLibraryAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

