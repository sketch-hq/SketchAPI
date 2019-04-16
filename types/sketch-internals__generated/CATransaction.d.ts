interface CATransactionUninitialized<InitializedType = CATransaction> extends NSObjectUninitialized<CATransaction> {}

interface CATransaction extends NSObject {
}

declare const CATransaction: {
  alloc(): CATransactionUninitialized;
  class(): CATransaction;
  begin(): void;
  commit(): void;
  flush(): void;
  lock(): void;
  unlock(): void;
  animationDuration(): CFTimeInterval;
  setAnimationDuration(dur: CFTimeInterval): void;
  animationTimingFunction(): CAMediaTimingFunction;
  setAnimationTimingFunction(functionName: CAMediaTimingFunction | null): void;
  disableActions(): boolean;
  setDisableActions(flag: boolean): void;
  setCompletionBlock(block: Block | null): void;
  valueForKey(key: NSString | string): any;
  setValue_forKey(anObject: any | null, key: NSString | string): void;
  disableAnimationsInBlock(block: BCVoidBlock): void;
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

