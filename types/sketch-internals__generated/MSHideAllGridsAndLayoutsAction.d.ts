interface MSHideAllGridsAndLayoutsActionUninitialized<InitializedType = MSHideAllGridsAndLayoutsAction> extends MSDocumentActionUninitialized<MSHideAllGridsAndLayoutsAction> {}
interface MSHideAllGridsAndLayoutsAction extends MSDocumentAction {
  hideAllGridsAndLayouts(sender: any): IBAction;
}
declare const MSHideAllGridsAndLayoutsAction: {
  alloc(): MSHideAllGridsAndLayoutsActionUninitialized;
  class(): MSHideAllGridsAndLayoutsAction;
}

