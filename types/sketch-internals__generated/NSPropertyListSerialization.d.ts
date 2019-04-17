interface NSPropertyListSerializationUninitialized<InitializedType = NSPropertyListSerialization> extends NSObjectUninitialized<NSPropertyListSerialization> {}

interface NSPropertyListSerialization extends NSObject {
}

declare const NSPropertyListSerialization: {
  alloc(): NSPropertyListSerializationUninitialized;
  class(): NSPropertyListSerialization;
  propertyList_isValidForFormat(plist: any, format: NSPropertyListFormat): boolean;
  dataWithPropertyList_format_options_error(plist: any, format: NSPropertyListFormat, opt: NSPropertyListWriteOptions, error: MOPointer<NSError>): NSData;
  writePropertyList_toStream_format_options_error(plist: any, stream: NSOutputStream, format: NSPropertyListFormat, opt: NSPropertyListWriteOptions, error: MOPointer<NSError>): NSInteger;
  propertyListWithData_options_format_error(data: NSData, opt: NSPropertyListReadOptions, format: NSPropertyListFormat | null, error: MOPointer<NSError>): any;
  propertyListWithStream_options_format_error(stream: NSInputStream, opt: NSPropertyListReadOptions, format: NSPropertyListFormat | null, error: MOPointer<NSError>): any;
  dataFromPropertyList_format_errorDescription(plist: any, format: NSPropertyListFormat, errorString: MOPointer<NSString>): NSData;
  propertyListFromData_mutabilityOption_format_errorDescription(data: NSData, opt: NSPropertyListMutabilityOptions, format: NSPropertyListFormat | null, errorString: MOPointer<NSString>): any;
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

