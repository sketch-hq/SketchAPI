interface _MSImmutableDocumentDataUninitialized<InitializedType = _MSImmutableDocumentData> extends MSImmutableModelObjectUninitialized<_MSImmutableDocumentData> {}
interface _MSImmutableDocumentData extends MSImmutableModelObject {

  colorSpace(): MSColorSpace;
  currentPageIndex(): NSUInteger;
  userInfo(): NSDictionary<any, any>;
  assets(): MSImmutableAssetCollection;
  foreignLayerStyles(): NSArray<any>;
  foreignSymbols(): NSArray<any>;
  foreignTextStyles(): NSArray<any>;
  layerStyles(): MSImmutableSharedStyleContainer;
  layerSymbols(): MSImmutableSymbolContainer;
  layerTextStyles(): MSImmutableSharedTextStyleContainer;
  pages(): NSArray<any>;
}
declare const _MSImmutableDocumentData: {
  alloc(): _MSImmutableDocumentDataUninitialized;
  class(): _MSImmutableDocumentData;
}

