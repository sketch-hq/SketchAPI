interface PDFFunctionUninitialized<InitializedType = PDFFunction> extends NSObjectUninitialized<PDFFunction> {
  initWithInfo(info: any): InitializedType;
}

interface PDFFunction extends NSObject {
  mapInputs_toOutputs(inputs: PDFFunctionInput, outputs: PDFFunctionOutput): void;

  samples(): NSData;
  parameters(): NSDictionary<any, any>;
  numberOfInputComponents(): NSUInteger;
  numberOfOutputComponents(): NSUInteger;
  bitsPerSample(): NSUInteger;
  bytesPerSampleComponent(): NSUInteger;
  bytesPerSample(): NSUInteger;
  numberOfSamples(): NSUInteger;
  domain(): NSArray<any>;
  setDomain(domain: NSArray<any> | any[]): void;
}

declare const PDFFunction: {
  alloc(): PDFFunctionUninitialized;
  class(): PDFFunction;
  functionWithInfo(info: any): PDFFunction;
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

