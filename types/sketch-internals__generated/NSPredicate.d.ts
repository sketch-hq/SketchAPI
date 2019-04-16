interface NSPredicateUninitialized<InitializedType = NSPredicate> extends NSObjectUninitialized<NSPredicate> {}

interface NSPredicate extends NSObject, INSSecureCoding, INSCopying {
  predicateWithSubstitutionVariables(variables: NSDictionary<any, any> | {[key: string]: any}): NSPredicate;
  evaluateWithObject(object: any | null): boolean;
  evaluateWithObject_substitutionVariables(object: any | null, bindings: NSDictionary<any, any> | {[key: string]: any} | null): boolean;
  allowEvaluation(): void;
  copyWithZone(zone: NSZone | null): any;

  predicateFormat(): NSString;
}

declare const NSPredicate: {
  alloc(): NSPredicateUninitialized;
  class(): NSPredicate;
  predicateWithFormat_argumentArray(predicateFormat: NSString | string, arguments: NSArray<any> | any[] | null): NSPredicate;
  predicateWithFormat(predicateFormat: NSString | string, ...args: any[]): NSPredicate;
  predicateWithFormat_arguments(predicateFormat: NSString | string, ...argList: any[]): NSPredicate;
  predicateFromMetadataQueryString(queryString: NSString | string): NSPredicate;
  predicateWithValue(value: boolean): NSPredicate;
  predicateWithBlock(block: Block): NSPredicate;
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

