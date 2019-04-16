interface NSUserInterfaceCompressionOptionsUninitialized<InitializedType = NSUserInterfaceCompressionOptions> extends NSObjectUninitialized<NSUserInterfaceCompressionOptions> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithIdentifier(identifier: NSString | string): InitializedType;
  initWithCompressionOptions(options: NSSet<any>): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSUserInterfaceCompressionOptions extends NSObject, INSCopying, INSCoding {
  containsOptions(options: NSUserInterfaceCompressionOptions): boolean;
  intersectsOptions(options: NSUserInterfaceCompressionOptions): boolean;
  optionsByAddingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
  optionsByRemovingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  empty(): boolean;
}

declare const NSUserInterfaceCompressionOptions: {
  alloc(): NSUserInterfaceCompressionOptionsUninitialized;
  class(): NSUserInterfaceCompressionOptions;
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
  hideImagesOption(): NSUserInterfaceCompressionOptions;
  hideTextOption(): NSUserInterfaceCompressionOptions;
  reduceMetricsOption(): NSUserInterfaceCompressionOptions;
  breakEqualWidthsOption(): NSUserInterfaceCompressionOptions;
  standardOptions(): NSUserInterfaceCompressionOptions;
  accessInstanceVariablesDirectly(): boolean;

}

