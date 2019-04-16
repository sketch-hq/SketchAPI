interface MSExportPreviewViewModelUninitialized<InitializedType = MSExportPreviewViewModel> extends NSObjectUninitialized<MSExportPreviewViewModel> {
  initWithPreviewImage_cachedExportRequest_ancestry(previewImage: NSImage, cachedExportRequest: MSExportRequest, ancestry: MSImmutableLayerAncestry): InitializedType;
}

interface MSExportPreviewViewModel extends NSObject {
  imageDataInFormat(fileFormat: NSString | string): NSData;
  exportDataInFormat_toURL(fileFormat: NSString | string, url: NSURL): void;

  previewImage(): NSImage;
  cachedExportRequest(): MSExportRequest;
  layerName(): NSString;
  defaultExportFormat(): NSString;
  isVectorFormat(): boolean;
  previewFrame(): NSRect;
  setPreviewFrame(previewFrame: NSRect): void;
}

declare const MSExportPreviewViewModel: {
  alloc(): MSExportPreviewViewModelUninitialized;
  class(): MSExportPreviewViewModel;
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

