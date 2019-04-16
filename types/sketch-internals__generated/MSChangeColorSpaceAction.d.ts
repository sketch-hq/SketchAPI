interface MSChangeColorSpaceActionUninitialized<InitializedType = MSChangeColorSpaceAction> extends MSDocumentActionUninitialized<MSChangeColorSpaceAction> {}
interface MSChangeColorSpaceAction extends MSDocumentAction {
}
declare const MSChangeColorSpaceAction: {
  alloc(): MSChangeColorSpaceActionUninitialized;
  class(): MSChangeColorSpaceAction;
}

