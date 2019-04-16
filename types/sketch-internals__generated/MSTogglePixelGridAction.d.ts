interface MSTogglePixelGridActionUninitialized<InitializedType = MSTogglePixelGridAction> extends MSDocumentActionUninitialized<MSTogglePixelGridAction> {}

interface MSTogglePixelGridAction extends MSDocumentAction {
  togglePixelGrid(sender: any): IBAction;
}

declare const MSTogglePixelGridAction: {
  alloc(): MSTogglePixelGridActionUninitialized;
  class(): MSTogglePixelGridAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

