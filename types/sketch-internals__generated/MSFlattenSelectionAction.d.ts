interface MSFlattenSelectionActionUninitialized<InitializedType = MSFlattenSelectionAction> extends MSDocumentActionUninitialized<MSFlattenSelectionAction> {}
interface MSFlattenSelectionAction extends MSDocumentAction {
  flattenSelection(sender: any): IBAction;
}
declare const MSFlattenSelectionAction: {
  alloc(): MSFlattenSelectionActionUninitialized;
  class(): MSFlattenSelectionAction;
}

