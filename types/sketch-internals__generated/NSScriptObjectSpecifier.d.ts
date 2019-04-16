interface NSScriptObjectSpecifierUninitialized<InitializedType = NSScriptObjectSpecifier> extends NSObjectUninitialized<NSScriptObjectSpecifier> {
  initWithContainerSpecifier_key(container: NSScriptObjectSpecifier, property: NSString | string): InitializedType;
  initWithContainerClassDescription_containerSpecifier_key(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSScriptObjectSpecifier extends NSObject, INSCoding {
  indicesOfObjectsByEvaluatingWithContainer_count(container: any, count: NSInteger): NSInteger;
  objectsByEvaluatingWithContainers(containers: any): any;
  encodeWithCoder(aCoder: NSCoder): void;

  childSpecifier(): NSScriptObjectSpecifier;
  setChildSpecifier(childSpecifier: NSScriptObjectSpecifier): void;
  containerSpecifier(): NSScriptObjectSpecifier;
  setContainerSpecifier(containerSpecifier: NSScriptObjectSpecifier): void;
  containerIsObjectBeingTested(): boolean;
  setContainerIsObjectBeingTested(containerIsObjectBeingTested: boolean): void;
  containerIsRangeContainerObject(): boolean;
  setContainerIsRangeContainerObject(containerIsRangeContainerObject: boolean): void;
  key(): NSString;
  setKey(key: NSString | string): void;
  containerClassDescription(): NSScriptClassDescription;
  setContainerClassDescription(containerClassDescription: NSScriptClassDescription): void;
  keyClassDescription(): NSScriptClassDescription;
  objectsByEvaluatingSpecifier(): any;
  evaluationErrorNumber(): NSInteger;
  setEvaluationErrorNumber(evaluationErrorNumber: NSInteger): void;
  evaluationErrorSpecifier(): NSScriptObjectSpecifier;
  descriptor(): NSAppleEventDescriptor;
}

declare const NSScriptObjectSpecifier: {
  alloc(): NSScriptObjectSpecifierUninitialized;
  class(): NSScriptObjectSpecifier;
  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
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

