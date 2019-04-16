interface MSPDFStateUninitialized<InitializedType = MSPDFState> extends NSObjectUninitialized<MSPDFState> {
  initWithScanner(scanner: MSPDFScanner): InitializedType;
}

interface MSPDFState extends NSObject, INSCopying {
  addLayer(layer: MSLayer): void;
  layerWithEnclosingGroup(enclosingGroup: boolean): MSLayer;
  makeArtboardGroup(): MSArtboardGroup;
  optimiseClipLayerInGroup(group: MSLayerGroup): boolean;
  lastLayer(): MSLayer;
  resetTransform(transform: NSAffineTransform): void;
  appendTransform(transform: NSAffineTransform): void;
  transformPoint(aPoint: NSPoint): NSPoint;
  transformSize(aSize: NSSize): NSSize;
  transformStruct(): NSAffineTransformStruct;
  transformBezierPath(aPath: NSBezierPath): NSBezierPath;
  stringFromTransform(transform: NSAffineTransform): NSString;
  updateClipping(): void;
  updateClippingWithTextPath(path: NSBezierPath): void;
  transformedClippingPath(): NSBezierPath;
  copyWithZone(zone: NSZone | null): any;

  borderAlphaConstant(): CGFloat;
  setBorderAlphaConstant(borderAlphaConstant: CGFloat): void;
  borderColor(): NSColor;
  setBorderColor(borderColor: NSColor): void;
  borderColorSpace(): NSColorSpace;
  setBorderColorSpace(borderColorSpace: NSColorSpace): void;
  borderColorSpaceMapping(): PDFFunction;
  setBorderColorSpaceMapping(borderColorSpaceMapping: PDFFunction): void;
  borderDashes(): NSArray<any>;
  setBorderDashes(borderDashes: NSArray<any> | any[]): void;
  borderCapStyle(): NSLineCapStyle;
  setBorderCapStyle(borderCapStyle: NSLineCapStyle): void;
  borderGradient(): PDFPattern;
  setBorderGradient(borderGradient: PDFPattern): void;
  borderJoinStyle(): NSLineJoinStyle;
  setBorderJoinStyle(borderJoinStyle: NSLineJoinStyle): void;
  borderThickness(): CGFloat;
  setBorderThickness(borderThickness: CGFloat): void;
  clippingMode(): ClippingMode;
  setClippingMode(clippingMode: ClippingMode): void;
  clippingPath(): NSBezierPath;
  setClippingPath(clippingPath: NSBezierPath): void;
  clippingUpdated(): boolean;
  setClippingUpdated(clippingUpdated: boolean): void;
  containsClippedItems(): boolean;
  setContainsClippedItems(containsClippedItems: boolean): void;
  currentPoint(): NSPoint;
  setCurrentPoint(currentPoint: NSPoint): void;
  fillAlphaConstant(): CGFloat;
  setFillAlphaConstant(fillAlphaConstant: CGFloat): void;
  fillColor(): NSColor;
  setFillColor(fillColor: NSColor): void;
  fillColorSpace(): NSColorSpace;
  setFillColorSpace(fillColorSpace: NSColorSpace): void;
  fillColorSpaceMapping(): PDFFunction;
  setFillColorSpaceMapping(fillColorSpaceMapping: PDFFunction): void;
  fillGradient(): PDFPattern;
  setFillGradient(fillGradient: PDFPattern): void;
  layers(): NSMutableArray<any>;
  setLayers(layers: NSMutableArray<any> | any[]): void;
  path(): NSBezierPath;
  setPath(path: NSBezierPath): void;
  pathClosed(): boolean;
  setPathClosed(pathClosed: boolean): void;
  pathUsed(): boolean;
  setPathUsed(pathUsed: boolean): void;
  pathWasRect(): boolean;
  setPathWasRect(pathWasRect: boolean): void;
  renderingIntent(): CGColorRenderingIntent;
  setRenderingIntent(renderingIntent: CGColorRenderingIntent): void;
  text(): MSPDFTextState;
  setText(text: MSPDFTextState): void;
  transformedPath(): NSBezierPath;
  setTransformedPath(transformedPath: NSBezierPath): void;
  scanner(): MSPDFScanner;
  setScanner(scanner: MSPDFScanner): void;
}

declare const MSPDFState: {
  alloc(): MSPDFStateUninitialized;
  class(): MSPDFState;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

