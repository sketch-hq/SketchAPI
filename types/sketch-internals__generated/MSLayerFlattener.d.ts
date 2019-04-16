interface MSLayerFlattenerUninitialized<InitializedType = MSLayerFlattener> extends NSObjectUninitialized<MSLayerFlattener> {}
interface MSLayerFlattener extends NSObject {
  flattenLayers(layers: MSLayerArray): void;
  flattenLayer_options(layer: MSShapePathLayer, options: MSLayerFlattenOptions): void;
  imageFromLayers_immutablePage_immutableDoc(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData): NSImage;
  imageFromLayers_immutablePage_immutableDoc_includeArtboardBackground(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData, includeArtboardBackground: boolean): NSImage;
  trimmedRectFromLayers_immutablePage_immutableDoc(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData): NSRect;
  trimmedRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData, includeArtboardBackground: boolean): NSRect;
  bitmapFromRect_fromLayers_withImage(bitmapRect: NSRect, layers: MSLayerArray, image: NSImage): MSBitmapLayer;
}
declare const MSLayerFlattener: {
  alloc(): MSLayerFlattenerUninitialized;
  class(): MSLayerFlattener;
}

