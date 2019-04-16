interface MSImmutableLayerUninitialized<InitializedType = MSImmutableLayer> extends _MSImmutableLayerUninitialized<MSImmutableLayer> {}

interface MSImmutableLayer extends _MSImmutableLayer, IMSLayer, IMSLayerTraits {
  influenceRectEdgePaddingsThatDoNotCascadeInDocument(document: MSImmutableDocumentData): BCEdgePaddings;
  absoluteRectForAncestorGroups(ancestors: NSArray<any> | any[]): NSRect;
  absoluteInfluenceRectForAncestorGroups_document(ancestors: NSArray<any> | any[], doc: MSImmutableDocumentData): NSRect;
  influenceRectForFrameInDocument(doc: MSImmutableDocumentData | null): NSRect;
  influenceRectForBoundsInDocument(doc: MSImmutableDocumentData | null): NSRect;
  influenceRectForFrameInDocument_visitedSymbols(doc: MSImmutableDocumentData | null, visitedSymbols: NSSet<any> | null): NSRect;
  influenceRectForBoundsInDocument_visitedSymbols(doc: MSImmutableDocumentData | null, visitedSymbols: NSSet<any> | null): NSRect;
  calculateInfluenceRectForBoundsInDocument_visitedSymbols(doc: MSImmutableDocumentData | null, visitedSymbols: NSSet<any> | null): NSRect;
  influenceRectForBoundsOrCalculateInBlock(creatorBlock: Block): NSRect;
  absoluteOverlayInfluenceRectForAncestorGroups(ancestors: NSArray<any> | any[]): NSRect;
  parentShapeInAncestors(ancestors: NSArray<any> | any[]): MSImmutableShapeGroup;
  pathInBoundsInDocument_asSubpath_visitedSymbols(doc: MSImmutableDocumentData | null, asSubpath: boolean, visitedSymbols: NSSet<any> | null): MSPath;
  calculatePathInBoundsInDocument_asSubpath_visitedSymbols(doc: MSImmutableDocumentData | null, asSubpath: boolean, visitedSymbols: NSSet<any> | null): MSPath;
  pathInFrameInDocument_asSubpath(doc: MSImmutableDocumentData | null, asSubpath: boolean): MSPath;
  pathInFrameWithTransformsInDocument_asSubpath(doc: MSImmutableDocumentData | null, asSubpath: boolean): MSPath;
  bezierBoundsInAbsoluteCoordinatesWithAncestors(ancestors: NSArray<any> | any[]): MSPath;
  transformRectToParentCoordinates(rect: NSRect): NSRect;
  canSkipAdvancedClipForStrokes(): boolean;
  isLine(): boolean;
  descendantsToLayerWithID(objectID: NSString | string): NSArray<any>;
  defaultValueForOverridePoint_relatedOverrides_document(point: MSOverridePoint, relatedOverrides: NSDictionary<any, any> | {[key: string]: any}, document: MSImmutableDocumentData): any;
  defaultOverrideVisibilityForPoint_ancestors(overridePoint: MSOverridePoint, ancestors: NSArray<any> | any[]): boolean;
  canOverridePoint_withAncestors(point: MSOverridePoint, layerAncestors: NSArray<any> | any[]): boolean;
  overridePointsWithParent_overrides_document(parent: MSOverridePoint | null, overrideValues: NSDictionary<any, any> | {[key: string]: any}, document: MSImmutableDocumentData): NSArray<any>;
  enumeratorWithOptions(options: MSLayerEnumeratorFlags): MSLayerEnumerator<any>;
  renderBitmapEffects(image: CIImage): CIImage;
  shouldRenderInTransparencyLayer(): boolean;
  transparencyLayerUseRectCondition(): MSTransparencyRectangleOption;
  shouldSkipDrawingInContext(context: MSRenderingContext): boolean;
  configureBackgroundOfRequest_isContainedInGroup(request: MSExportRequest, isContainedInGroup: boolean): void;
  requiresPathDefinition(exporter: SketchSVGExporter): boolean;
  writeSVGToElement_withExporter(element: NSXMLElement, exporter: SketchSVGExporter): void;
  addTransformAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;
  relativeRectWithExporter(exporter: SketchSVGExporter): NSRect;
  addPathDefinitionToDocument(exporter: SketchSVGExporter): void;
  simplifyPathElement_exporter_inset(element: NSXMLElement, exporter: SketchSVGExporter, inset: CGFloat): void;
  addGroupContentToElement_attributes_exporter(parentElement: NSXMLElement, attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): NSXMLElement;
  addDefaultFillAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;
  shouldIncludeInSVGExport(exporter: SketchSVGExporter): boolean;
  addSVGAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;
  traits(): MSTraits;

  center(): NSPoint;
  transform(): NSAffineTransform;
  frameForTransforms(): NSRect;
  hasEnabledBackgroundBlur(): boolean;
  traits(): MSTraits;
  isLayerExportable(): boolean;
  shouldBeIncludedInParentPath(): boolean;
  influenceRectForFrame(): NSRect;
  influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
  hasCalculatedInfluenceRectForBounds(): boolean;
  hasClippingMask(): boolean;
  canBreakMaskChain(): boolean;
  fontNames(): NSSet<any>;
  unavailableFontNames(): NSSet<any>;
  dataSupplierIdentifier(): NSString;
}

declare const MSImmutableLayer: {
  alloc(): MSImmutableLayerUninitialized;
  class(): MSImmutableLayer;
}

