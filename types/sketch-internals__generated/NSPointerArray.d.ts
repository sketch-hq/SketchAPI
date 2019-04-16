interface NSPointerArrayUninitialized<InitializedType = NSPointerArray> extends NSObjectUninitialized<NSPointerArray> {
  initWithOptions(options: NSPointerFunctionsOptions): InitializedType;
  initWithPointerFunctions(functions: NSPointerFunctions): InitializedType;
}

interface NSPointerArray extends NSObject, INSFastEnumeration, INSCopying, INSSecureCoding {
  pointerAtIndex(index: NSUInteger): void;
  addPointer(pointer: void | null): void;
  removePointerAtIndex(index: NSUInteger): void;
  insertPointer_atIndex(item: void | null, index: NSUInteger): void;
  replacePointerAtIndex_withPointer(index: NSUInteger, item: void | null): void;
  compact(): void;
  countByEnumeratingWithState_objects_count(state: NSFastEnumerationState, buffer: any[], len: NSUInteger): NSUInteger;
  copyWithZone(zone: NSZone | null): any;

  pointerFunctions(): NSPointerFunctions;
  count(): NSUInteger;
  setCount(count: NSUInteger): void;
  allObjects(): NSArray<any>;
}

declare const NSPointerArray: {
  alloc(): NSPointerArrayUninitialized;
  class(): NSPointerArray;
  pointerArrayWithOptions(options: NSPointerFunctionsOptions): NSPointerArray;
  pointerArrayWithPointerFunctions(functions: NSPointerFunctions): NSPointerArray;
  pointerArrayWithStrongObjects(): any;
  pointerArrayWithWeakObjects(): any;
  strongObjectsPointerArray(): NSPointerArray;
  weakObjectsPointerArray(): NSPointerArray;
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

