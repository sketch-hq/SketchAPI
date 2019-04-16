interface MOPropertyDescriptionUninitialized<InitializedType = MOPropertyDescription> extends NSObjectUninitialized<MOPropertyDescription> {}

interface MOPropertyDescription extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
  typeEncoding(): NSString;
  setTypeEncoding(typeEncoding: NSString | string): void;
  ivarName(): NSString;
  setIvarName(ivarName: NSString | string): void;
  getterSelector(): string;
  setGetterSelector(getterSelector: string): void;
  setterSelector(): string;
  setSetterSelector(setterSelector: string): void;
  ownershipRule(): MOObjCOwnershipRule;
  setOwnershipRule(ownershipRule: MOObjCOwnershipRule): void;
  dynamic(): boolean;
  setDynamic(dynamic: boolean): void;
  nonAtomic(): boolean;
  setNonAtomic(nonAtomic: boolean): void;
  readOnly(): boolean;
  setReadOnly(readOnly: boolean): void;
  weak(): boolean;
  setWeak(weak: boolean): void;
}

declare const MOPropertyDescription: {
  alloc(): MOPropertyDescriptionUninitialized;
  class(): MOPropertyDescription;
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

