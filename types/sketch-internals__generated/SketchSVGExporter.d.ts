interface SketchSVGExporterUninitialized<InitializedType = SketchSVGExporter> extends NSObjectUninitialized<SketchSVGExporter> {
  initWithImmutableDocument_exportRect_layerIDs_includeBackground(immutableDocument: MSImmutableDocumentData, exportRect: NSRect, layerIDs: NSSet<any>, includeBackground: boolean): InitializedType;
  initWithName_exportRequest(name: NSString | string, request: MSExportRequest): InitializedType;
}
interface SketchSVGExporter extends NSObject {
  exportLayers(layers: NSArray<any> | any[]): NSData;
  pushParent(layer: MSImmutableLayer): void;
  popParent(): MSImmutableLayer;
  parentForLayer(layer: any): MSImmutableLayer;
  performWithParent_block(layer: MSImmutableLayer, block: BCVoidBlock): void;
  ancestorsForLayer(layer: any): NSArray<any>;
  drawSymbolInstance_inBlock(instance: MSImmutableSymbolInstance, block: BCVoidBlock): void;
  isDrawingSymbol(): boolean;
  addDefinitionWithName_children_attributes(name: NSString | string, children: NSArray<any> | any[], attributes: NSArray<any> | any[]): NSXMLElement;
  addGradient_inRect(gradient: MSImmutableGradient, rect: MSImmutableRect): void;
  gradientElement_inRect(gradient: MSImmutableGradient, rect: MSImmutableRect): NSXMLElement;
  uniqueIDForElementWithName(name: NSString | string): NSString;
  beginFilterGroup(): MSSVGFilter;
  endFilterGroup(): boolean;
  layerIsIncluded(layer: MSImmutableLayer): boolean;

  exportBounds(): NSRect;
  mask(): NSString;
  setMask(mask: NSString | string): void;
  currentShapeDef(): NSString;
  setCurrentShapeDef(currentShapeDef: NSString | string): void;
  document(): MSImmutableDocumentData;
  currentFilterGroup(): MSSVGFilter;
  currentSymbolInstance(): MSImmutableSymbolInstance;
  includeArtboardBackground(): boolean;
}
declare const SketchSVGExporter: {
  alloc(): SketchSVGExporterUninitialized;
  class(): SketchSVGExporter;
}

