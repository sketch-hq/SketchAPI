interface MSWebExportRequestUninitialized<InitializedType = MSWebExportRequest> extends MSExportRequestUninitialized<MSWebExportRequest> {}
interface MSWebExportRequest extends MSExportRequest {

  rootLayer(): MSImmutableLayer;
  setRootLayer(rootLayer: MSImmutableLayer): void;
  layerBehavior(): MSWebExportLayerBehavior;
  setLayerBehavior(layerBehavior: MSWebExportLayerBehavior): void;
}
declare const MSWebExportRequest: {
  alloc(): MSWebExportRequestUninitialized;
  class(): MSWebExportRequest;  webExportRequestForRootLayer_inDocument_atScale(rootLayer: MSImmutableLayer, documentData: MSImmutableDocumentData, scale: CGFloat): MSWebExportRequest;

}

