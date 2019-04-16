interface MSPreviewAtActualSizeActionUninitialized<InitializedType = MSPreviewAtActualSizeAction> extends MSDocumentActionUninitialized<MSPreviewAtActualSizeAction> {}

interface MSPreviewAtActualSizeAction extends MSDocumentAction {
}

declare const MSPreviewAtActualSizeAction: {
  alloc(): MSPreviewAtActualSizeActionUninitialized;
  class(): MSPreviewAtActualSizeAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

