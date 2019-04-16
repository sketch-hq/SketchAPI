interface MSRevealInLayerListActionUninitialized<InitializedType = MSRevealInLayerListAction> extends MSDocumentActionUninitialized<MSRevealInLayerListAction> {}
interface MSRevealInLayerListAction extends MSDocumentAction {
  revealInLayerList(sender: any): IBAction;
}
declare const MSRevealInLayerListAction: {
  alloc(): MSRevealInLayerListActionUninitialized;
  class(): MSRevealInLayerListAction;
}

