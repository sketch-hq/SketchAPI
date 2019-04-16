interface MSExportRequestUninitialized<InitializedType = MSExportRequest> extends NSObjectUninitialized<MSExportRequest> {}
interface MSExportRequest extends NSObject, INSCopying {
  readSettingsFromDefaults(): void;
  configureForLayer_layerOptions_includedIDs(layer: MSLayer, layerOptions: MSExportLayerOptions, includedIDs: NSArray<any> | any[]): void;
  setNameFromID_exportFormat(objectID: NSString | string, format: MSImmutableExportFormat): void;
  configureForLayerAncestry_layerOptions_includedIDs(ancestry: MSImmutableLayerAncestry, layerOptions: MSExportLayerOptions, includedIDs: NSArray<any> | any[]): void;

  rect(): NSRect;
  setRect(rect: NSRect): void;
  name(): NSString;
  setName(name: NSString | string): void;
  options(): MSExportLayerOptions;
  setOptions(options: MSExportLayerOptions): void;
  includedLayerIDs(): NSSet<any>;
  setIncludedLayerIDs(includedLayerIDs: NSSet<any>): void;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  shouldTrim(): boolean;
  setShouldTrim(shouldTrim: boolean): void;
  exportBackgroundColor(): MSImmutableColor;
  setExportBackgroundColor(exportBackgroundColor: MSImmutableColor): void;
  rootLayer(): MSImmutableLayer;
  setRootLayer(rootLayer: MSImmutableLayer): void;
  immutableDocument(): MSImmutableDocumentData;
  setImmutableDocument(immutableDocument: MSImmutableDocumentData): void;
  format(): NSString;
  setFormat(format: NSString | string): void;
  saveForWeb(): boolean;
  setSaveForWeb(saveForWeb: boolean): void;
  compression(): CGFloat;
  setCompression(compression: CGFloat): void;
  progressive(): boolean;
  setProgressive(progressive: boolean): void;
  interlaced(): boolean;
  setInterlaced(interlaced: boolean): void;
  includeArtboardBackground(): boolean;
  setIncludeArtboardBackground(includeArtboardBackground: boolean): void;
}
declare const MSExportRequest: {
  alloc(): MSExportRequestUninitialized;
  class(): MSExportRequest;  exportRequestsFromExportableLayer(layer: MSLayer): NSArray<any>;
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

}

