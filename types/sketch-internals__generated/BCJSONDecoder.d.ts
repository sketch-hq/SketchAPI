interface BCJSONDecoderUninitialized<InitializedType = BCJSONDecoder> extends NSObjectUninitialized<BCJSONDecoder> {}

interface BCJSONDecoder extends NSObject {
  decodeData_error(data: NSData, error: MOPointer<NSError>): any;
  decodeDictionary_error(dict: NSDictionary<any, any> | {[key: string]: any}, error: MOPointer<NSError>): any;
  containsValueForKey(key: NSString | string): boolean;
  decodeObjectForKey(key: NSString | string): any;
  decodeDoubleForKey_withDefault(key: NSString | string, defaultValue: number): number;
  decodeBoolForKey_withDefault(key: NSString | string, defaultValue: boolean): boolean;
  decodeRectForKey_withDefault(key: NSString | string, defaultValue: CGRect): CGRect;
  decodePointForKey_withDefault(key: NSString | string, defaultValue: CGPoint): CGPoint;
  decodeIntegerForKey_withDefault(key: NSString | string, defaultValue: NSInteger): NSInteger;
  decodeSizeForKey_withDefault(key: NSString | string, defaultValue: CGSize): CGSize;

  userInfo(): any;
  setUserInfo(userInfo: any): void;
  error(): NSError;
  setError(error: NSError): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  unarchiver(): MSJSONUnarchiver;
  setUnarchiver(unarchiver: MSJSONUnarchiver): void;
}

declare const BCJSONDecoder: {
  alloc(): BCJSONDecoderUninitialized;
  class(): BCJSONDecoder;
  setClass_forClassName(className: any | null, codedName: NSString | string): void;
  decodeFileAtURL_error(url: NSURL, error: MOPointer<NSError>): any;
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

