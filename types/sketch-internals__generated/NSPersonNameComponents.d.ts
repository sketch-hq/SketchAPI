interface NSPersonNameComponentsUninitialized<InitializedType = NSPersonNameComponents> extends NSObjectUninitialized<NSPersonNameComponents> {}

interface NSPersonNameComponents extends NSObject, INSCopying, INSSecureCoding {
  copyWithZone(zone: NSZone | null): any;

  namePrefix(): NSString;
  setNamePrefix(namePrefix: NSString | string): void;
  givenName(): NSString;
  setGivenName(givenName: NSString | string): void;
  middleName(): NSString;
  setMiddleName(middleName: NSString | string): void;
  familyName(): NSString;
  setFamilyName(familyName: NSString | string): void;
  nameSuffix(): NSString;
  setNameSuffix(nameSuffix: NSString | string): void;
  nickname(): NSString;
  setNickname(nickname: NSString | string): void;
  phoneticRepresentation(): NSPersonNameComponents;
  setPhoneticRepresentation(phoneticRepresentation: NSPersonNameComponents): void;
}

declare const NSPersonNameComponents: {
  alloc(): NSPersonNameComponentsUninitialized;
  class(): NSPersonNameComponents;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

