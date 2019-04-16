interface MSBaseAlignLayersActionUninitialized<InitializedType = MSBaseAlignLayersAction> extends MSDocumentActionUninitialized<MSBaseAlignLayersAction> {}
interface MSBaseAlignLayersAction extends MSDocumentAction, IMSAltButtonTarget {
  alignToKey(key: NSString | string): void;
}
declare const MSBaseAlignLayersAction: {
  alloc(): MSBaseAlignLayersActionUninitialized;
  class(): MSBaseAlignLayersAction;
}

