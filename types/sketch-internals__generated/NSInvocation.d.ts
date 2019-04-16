interface NSInvocationUninitialized<InitializedType = NSInvocation> extends NSObjectUninitialized<NSInvocation> {}

interface NSInvocation extends NSObject {
  retainArguments(): void;
  getReturnValue(retLoc: void): void;
  setReturnValue(retLoc: void): void;
  getArgument_atIndex(argumentLocation: void, idx: NSInteger): void;
  setArgument_atIndex(argumentLocation: void, idx: NSInteger): void;
  invoke(): void;
  invokeWithTarget(target: any): void;

  methodSignature(): NSMethodSignature;
  argumentsRetained(): boolean;
  target(): any;
  setTarget(target: any): void;
  selector(): string;
  setSelector(selector: string): void;
}

declare const NSInvocation: {
  alloc(): NSInvocationUninitialized;
  class(): NSInvocation;
  invocationWithMethodSignature(sig: NSMethodSignature): NSInvocation;
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

