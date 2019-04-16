interface NSSortDescriptorUninitialized<InitializedType = NSSortDescriptor> extends NSObjectUninitialized<NSSortDescriptor> {
  initWithKey_ascending(key: NSString | string | null, ascending: boolean): InitializedType;
  initWithKey_ascending_selector(key: NSString | string | null, ascending: boolean, selector: string | null): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithKey_ascending_comparator(key: NSString | string | null, ascending: boolean, cmptr: NSComparator): InitializedType;
}

interface NSSortDescriptor extends NSObject, INSSecureCoding, INSCopying {
  allowEvaluation(): void;
  compareObject_toObject(object1: any, object2: any): NSComparisonResult;
  copyWithZone(zone: NSZone | null): any;

  key(): NSString;
  ascending(): boolean;
  selector(): string;
  comparator(): NSComparator;
  reversedSortDescriptor(): any;
}

declare const NSSortDescriptor: {
  alloc(): NSSortDescriptorUninitialized;
  class(): NSSortDescriptor;
  sortDescriptorWithKey_ascending(key: NSString | string | null, ascending: boolean): NSSortDescriptor;
  sortDescriptorWithKey_ascending_selector(key: NSString | string | null, ascending: boolean, selector: string | null): NSSortDescriptor;
  sortDescriptorWithKey_ascending_comparator(key: NSString | string | null, ascending: boolean, cmptr: NSComparator): NSSortDescriptor;
  localizedCaseInsensitiveSortDescriptorWithKey_ascending(key: NSString | string | null, ascending: boolean): NSSortDescriptor;
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

