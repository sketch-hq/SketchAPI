interface NSJSONSerializationUninitialized<InitializedType = NSJSONSerialization> extends NSObjectUninitialized<NSJSONSerialization> {}

interface NSJSONSerialization extends NSObject {
}

declare const NSJSONSerialization: {
  alloc(): NSJSONSerializationUninitialized;
  class(): NSJSONSerialization;
  isValidJSONObject(obj: any): boolean;
  dataWithJSONObject_options_error(obj: any, opt: NSJSONWritingOptions, error: MOPointer<NSError>): NSData;
  JSONObjectWithData_options_error(data: NSData, opt: NSJSONReadingOptions, error: MOPointer<NSError>): any;
  writeJSONObject_toStream_options_error(obj: any, stream: NSOutputStream, opt: NSJSONWritingOptions, error: MOPointer<NSError>): NSInteger;
  JSONObjectWithStream_options_error(stream: NSInputStream, opt: NSJSONReadingOptions, error: MOPointer<NSError>): any;
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

