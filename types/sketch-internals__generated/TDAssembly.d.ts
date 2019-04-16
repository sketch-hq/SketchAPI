interface TDAssemblyUninitialized<InitializedType = TDAssembly> extends NSObjectUninitialized<TDAssembly> {
  initWithString(s: NSString | string): InitializedType;
}

interface TDAssembly extends NSObject, INSCopying {
  peek(): any;
  next(): any;
  hasMore(): boolean;
  consumedObjectsJoinedByString(delimiter: NSString | string): NSString;
  remainingObjectsJoinedByString(delimiter: NSString | string): NSString;
  pop(): any;
  push(object: any): void;
  isStackEmpty(): boolean;
  objectsAbove(fence: any): NSArray<any>;
  copyWithZone(zone: NSZone | null): any;

  length(): NSUInteger;
  objectsConsumed(): NSUInteger;
  objectsRemaining(): NSUInteger;
  defaultDelimiter(): NSString;
  stack(): NSMutableArray<any>;
  target(): any;
  setTarget(target: any): void;
}

declare const TDAssembly: {
  alloc(): TDAssemblyUninitialized;
  class(): TDAssembly;
  assemblyWithString(s: NSString | string): any;
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

