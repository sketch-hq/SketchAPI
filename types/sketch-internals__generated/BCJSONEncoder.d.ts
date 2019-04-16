interface BCJSONEncoderUninitialized<InitializedType = BCJSONEncoder> extends NSObjectUninitialized<BCJSONEncoder> {}

interface BCJSONEncoder extends NSObject {
  encodeRootObject_error(root: NSObject | null, error: NSError): boolean;
  encodeObject_forKey(object: NSObject | null, key: NSString | string): void;
  encodeDouble_forKey(value: number, key: NSString | string): void;
  encodeBool_forKey(value: boolean, key: NSString | string): void;
  encodeRect_forKey(rect: CGRect, key: NSString | string): void;
  encodePoint_forKey(point: CGPoint, key: NSString | string): void;
  encodeInteger_forKey(value: NSInteger, key: NSString | string): void;
  encodeSize_forKey(size: CGSize, key: NSString | string): void;

  userInfo(): any;
  setUserInfo(userInfo: any): void;
  error(): NSError;
  setError(error: NSError): void;
  archiver(): MSJSONArchiver;
  setArchiver(archiver: MSJSONArchiver): void;
}

declare const BCJSONEncoder: {
  alloc(): BCJSONEncoderUninitialized;
  class(): BCJSONEncoder;
  encoderForWritingToMutableData(data: NSMutableData): BCJSONEncoder;
  encodeObjectAsData_error(root: NSObject, error: NSError): NSData;
  setAliasName_forClass(codedName: NSString | string | null, className: any): void;
  encoderForWritingToFile(file: NSFileHandle): BCJSONEncoder;
  encodeObject_toFile_error(root: NSObject, file: NSFileHandle, error: NSError): boolean;
  encoderForWritingToURL(url: NSURL): BCJSONEncoder;
  encodeObject_toURL_error(root: NSObject, url: NSURL, error: NSError): boolean;
  encodeObjectAsString_error(root: NSObject, error: NSError): NSString;
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

