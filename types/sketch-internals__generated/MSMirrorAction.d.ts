interface MSMirrorActionUninitialized<InitializedType = MSMirrorAction> extends MSDocumentActionUninitialized<MSMirrorAction> {}
interface MSMirrorAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSMirrorAction: {
  alloc(): MSMirrorActionUninitialized;
  class(): MSMirrorAction;
}

