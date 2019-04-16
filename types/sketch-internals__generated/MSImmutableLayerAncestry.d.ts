interface MSImmutableLayerAncestryUninitialized<InitializedType = MSImmutableLayerAncestry> extends NSObjectUninitialized<MSImmutableLayerAncestry> {
  initWithLayer_document(layer: MSImmutableLayer, doc: MSImmutableDocumentData): InitializedType;
  initWithLayer_ancestors_document(layer: MSImmutableLayer, ancestors: NSArray<any> | any[], doc: MSImmutableDocumentData): InitializedType;
  initWithMSLayer(layer: MSLayer): InitializedType;
}
interface MSImmutableLayerAncestry extends NSObject {
  absoluteRect(): NSRect;

  layer(): MSImmutableLayer;
  document(): MSImmutableDocumentData;
  page(): MSImmutablePage;
  parentGroup(): MSImmutableLayerGroup;
  artboard(): MSImmutableArtboardGroup;
  ancestors(): NSArray<any>;
  ancestorsAndSelf(): NSArray<any>;
  hash(): NSUInteger;
}
declare const MSImmutableLayerAncestry: {
  alloc(): MSImmutableLayerAncestryUninitialized;
  class(): MSImmutableLayerAncestry;  ancestryWithMSLayer(layer: MSLayer): MSImmutableLayerAncestry;

}

