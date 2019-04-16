interface NSCharacterSetUninitialized<InitializedType = NSCharacterSet> extends NSObjectUninitialized<NSCharacterSet> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSCharacterSet extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  characterIsMember(aCharacter: unichar): boolean;
  longCharacterIsMember(theLongChar: string): boolean;
  isSupersetOfSet(theOtherSet: NSCharacterSet): boolean;
  hasMemberInPlane(thePlane: number): boolean;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;

  bitmapRepresentation(): NSData;
  invertedSet(): NSCharacterSet;
}

declare const NSCharacterSet: {
  alloc(): NSCharacterSetUninitialized;
  class(): NSCharacterSet;
  characterSetWithRange(aRange: NSRange): NSCharacterSet;
  characterSetWithCharactersInString(aString: NSString | string): NSCharacterSet;
  characterSetWithBitmapRepresentation(data: NSData): NSCharacterSet;
  characterSetWithContentsOfFile(fName: NSString | string): NSCharacterSet;
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
  controlCharacterSet(): NSCharacterSet;
  whitespaceCharacterSet(): NSCharacterSet;
  whitespaceAndNewlineCharacterSet(): NSCharacterSet;
  decimalDigitCharacterSet(): NSCharacterSet;
  letterCharacterSet(): NSCharacterSet;
  lowercaseLetterCharacterSet(): NSCharacterSet;
  uppercaseLetterCharacterSet(): NSCharacterSet;
  nonBaseCharacterSet(): NSCharacterSet;
  alphanumericCharacterSet(): NSCharacterSet;
  decomposableCharacterSet(): NSCharacterSet;
  illegalCharacterSet(): NSCharacterSet;
  punctuationCharacterSet(): NSCharacterSet;
  capitalizedLetterCharacterSet(): NSCharacterSet;
  symbolCharacterSet(): NSCharacterSet;
  newlineCharacterSet(): NSCharacterSet;
  URLUserAllowedCharacterSet(): NSCharacterSet;
  URLPasswordAllowedCharacterSet(): NSCharacterSet;
  URLHostAllowedCharacterSet(): NSCharacterSet;
  URLPathAllowedCharacterSet(): NSCharacterSet;
  URLQueryAllowedCharacterSet(): NSCharacterSet;
  URLFragmentAllowedCharacterSet(): NSCharacterSet;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

