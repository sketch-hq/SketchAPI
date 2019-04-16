interface MSExporterUninitialized<InitializedType = MSExporter> extends NSObjectUninitialized<MSExporter> {}

interface MSExporter extends NSObject {
  data(): NSData;
  image(): NSImage;
  previewImage(): NSImage;
  drawRect_context(dirtyRect: NSRect, contextRef: CGContextRef): void;
  exportToFileURL(fileURL: NSURL): boolean;
  bitmapImageRep(): NSBitmapImageRep;
  basicBitmapImageRep(): NSBitmapImageRep;
  boundsForVectorRender(): NSRect;

  request(): MSExportRequest;
  setRequest(request: MSExportRequest): void;
  isPrinting(): boolean;
  setIsPrinting(isPrinting: boolean): void;
  driver(): MSRenderingDriver;
  colorSpace(): NSColorSpace;
}

declare const MSExporter: {
  alloc(): MSExporterUninitialized;
  class(): MSExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSExporter;
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

