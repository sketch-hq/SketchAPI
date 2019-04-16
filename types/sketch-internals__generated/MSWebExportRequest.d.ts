interface MSWebExportRequestUninitialized<InitializedType = MSWebExportRequest> extends MSExportRequestUninitialized<MSWebExportRequest> {}

interface MSWebExportRequest extends MSExportRequest {

  rootLayer(): MSImmutableLayer;
  setRootLayer(rootLayer: MSImmutableLayer): void;
  layerBehavior(): MSWebExportLayerBehavior;
  setLayerBehavior(layerBehavior: MSWebExportLayerBehavior): void;
}

declare const MSWebExportRequest: {
  alloc(): MSWebExportRequestUninitialized;
  class(): MSWebExportRequest;
  webExportRequestForRootLayer_inDocument_atScale(rootLayer: MSImmutableLayer, documentData: MSImmutableDocumentData, scale: CGFloat): MSWebExportRequest;
  exportRequestsFromExportableLayer(layer: MSLayer): NSArray<any>;
  exportRequestsFromExportableLayer_useIDForName(layer: MSLayer, useIDForName: boolean): NSArray<any>;
  exportRequestsFromExportableLayer_exportFormats_useIDForName(layer: MSLayer, exportFormats: NSArray<any> | any[], useIDForName: boolean): NSArray<any>;
  exportRequestsFromExportableLayer_inRect_useIDForName(layer: MSLayer, rect: NSRect, useIDForName: boolean): NSArray<any>;
  exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName(layer: MSLayer, exportFormats: NSArray<any> | any[], rect: NSRect, useIDForName: boolean): NSArray<any>;
  exportRequestFromExportFormat_layer_inRect_useIDForName(exportFormat: MSExportFormat, layer: MSLayer, rect: NSRect, useIDForName: boolean): MSExportRequest;
  exportRequestsFromLayerAncestry(layerAncestry: MSImmutableLayerAncestry): NSArray<any>;
  exportRequestsFromLayerAncestry_inRect(layerAncestry: MSImmutableLayerAncestry, rect: NSRect): NSArray<any>;
  exportRequestsFromLayerAncestry_exportFormats(layerAncestry: MSImmutableLayerAncestry, exportFormats: NSArray<any> | any[]): NSArray<any>;
  exportRequestsFromLayerAncestry_exportFormats_inRect(layerAncestry: MSImmutableLayerAncestry, exportFormats: NSArray<any> | any[], rect: NSRect): NSArray<any>;
  exportRequestFromLayerAncestry_exportFormat_inRect(ancestry: MSImmutableLayerAncestry, exportFormat: MSImmutableExportFormat, rect: NSRect): MSExportRequest;
  accessInstanceVariablesDirectly(): boolean;

}

