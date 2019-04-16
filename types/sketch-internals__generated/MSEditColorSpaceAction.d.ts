interface MSEditColorSpaceActionUninitialized<InitializedType = MSEditColorSpaceAction> extends MSDocumentActionUninitialized<MSEditColorSpaceAction> {}
interface MSEditColorSpaceAction extends MSDocumentAction {
  editDocumentColorSpace(sender: any): IBAction;
}
declare const MSEditColorSpaceAction: {
  alloc(): MSEditColorSpaceActionUninitialized;
  class(): MSEditColorSpaceAction;
}

