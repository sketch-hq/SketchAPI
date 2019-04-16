interface NSPortUninitialized<InitializedType = NSPort> extends NSObjectUninitialized<NSPort> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSPort extends NSObject, INSCopying, INSCoding {
  invalidate(): void;
  setDelegate(anObject: any | null): void;
  delegate(): any;
  scheduleInRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  sendBeforeDate_components_from_reserved(limitDate: NSDate, components: NSMutableArray<any> | any[] | null, receivePort: NSPort | null, headerSpaceReserved: NSUInteger): boolean;
  sendBeforeDate_msgid_components_from_reserved(limitDate: NSDate, msgID: NSUInteger, components: NSMutableArray<any> | any[] | null, receivePort: NSPort | null, headerSpaceReserved: NSUInteger): boolean;
  addConnection_toRunLoop_forMode(conn: NSConnection, runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeConnection_fromRunLoop_forMode(conn: NSConnection, runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  valid(): boolean;
  reservedSpaceLength(): NSUInteger;
}

declare const NSPort: {
  alloc(): NSPortUninitialized;
  class(): NSPort;
  port(): NSPort;
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

