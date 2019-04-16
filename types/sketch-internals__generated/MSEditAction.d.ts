interface MSEditActionUninitialized<InitializedType = MSEditAction> extends MSDocumentActionUninitialized<MSEditAction> {}
interface MSEditAction extends MSDocumentAction {
  edit(sender: any): IBAction;
}
declare const MSEditAction: {
  alloc(): MSEditActionUninitialized;
  class(): MSEditAction;  editableLayerTraits(): MSTraits;

}

