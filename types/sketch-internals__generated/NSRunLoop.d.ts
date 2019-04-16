interface NSRunLoopUninitialized<InitializedType = NSRunLoop> extends NSObjectUninitialized<NSRunLoop> {}

interface NSRunLoop extends NSObject {
  addTimer_forMode(timer: NSTimer, mode: NSRunLoopMode): void;
  addPort_forMode(aPort: NSPort, mode: NSRunLoopMode): void;
  removePort_forMode(aPort: NSPort, mode: NSRunLoopMode): void;
  limitDateForMode(mode: NSRunLoopMode): NSDate;
  acceptInputForMode_beforeDate(mode: NSRunLoopMode, limitDate: NSDate): void;
  run(): void;
  runUntilDate(limitDate: NSDate): void;
  runMode_beforeDate(mode: NSRunLoopMode, limitDate: NSDate): boolean;
  configureAsServer(): void;
  performInModes_block(modes: NSArray<any> | any[], block: Block): void;
  performBlock(block: Block): void;
  performSelector_target_argument_order_modes(aSelector: string, target: any, arg: any | null, order: NSUInteger, modes: NSArray<any> | any[]): void;
  cancelPerformSelector_target_argument(aSelector: string, target: any, arg: any | null): void;
  cancelPerformSelectorsWithTarget(target: any): void;

  currentMode(): NSRunLoopMode;
}

declare const NSRunLoop: {
  alloc(): NSRunLoopUninitialized;
  class(): NSRunLoop;
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
  currentRunLoop(): NSRunLoop;
  mainRunLoop(): NSRunLoop;
  accessInstanceVariablesDirectly(): boolean;

}

