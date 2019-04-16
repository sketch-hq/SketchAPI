interface MSModelObjectCommonUninitialized<InitializedType = MSModelObjectCommon> extends NSObjectUninitialized<MSModelObjectCommon> {
  initializeUnsetObjectPropertiesWithDefaults(): InitializedType;
  initWithBlock(block: Block): InitializedType;
  initWithMinimalSetup(): InitializedType;
}

interface MSModelObjectCommon extends NSObject, IMSModelObjectCommon {
  isContainedByInstanceOfForeignSymbol(ancestors: NSArray<any> | any[]): boolean;
  treeStructure(): NSString;
  simpleTreeStructure(): NSString;
  treeAsDictionary(): any;
  performInitEmptyObject(): void;
  objectDidInit(): void;
  enumerateProperties(enumerator: MSDataPropertyEnumerator): void;
  hasObjectID(): boolean;
  primitiveObjectID(): NSString;
  recursivelyGenerateObjectID(): any;
  enumerateChildProperties(enumerator: MSDataPropertyEnumerator): void;
  enumerateDescendants(enumerator: MSDescendantEnumerator): void;

  objectID(): NSString;
  setObjectID(objectID: NSString | string): void;
}

declare const MSModelObjectCommon: {
  alloc(): MSModelObjectCommonUninitialized;
  class(): MSModelObjectCommon;
  generateObjectID(): any;
  defaultName(): NSString;
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

