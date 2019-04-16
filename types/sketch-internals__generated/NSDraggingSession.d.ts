interface NSDraggingSessionUninitialized<InitializedType = NSDraggingSession> extends NSObjectUninitialized<NSDraggingSession> {}

interface NSDraggingSession extends NSObject {
  enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock(enumOpts: NSDraggingItemEnumerationOptions, view: NSView | null, classArray: NSArray<any> | any[], searchOptions: NSDictionary<any, any> | {[key: string]: any}, block: Block): void;

  draggingFormation(): NSDraggingFormation;
  setDraggingFormation(draggingFormation: NSDraggingFormation): void;
  animatesToStartingPositionsOnCancelOrFail(): boolean;
  setAnimatesToStartingPositionsOnCancelOrFail(animatesToStartingPositionsOnCancelOrFail: boolean): void;
  draggingLeaderIndex(): NSInteger;
  setDraggingLeaderIndex(draggingLeaderIndex: NSInteger): void;
  draggingPasteboard(): NSPasteboard;
  draggingSequenceNumber(): NSInteger;
  draggingLocation(): NSPoint;
}

declare const NSDraggingSession: {
  alloc(): NSDraggingSessionUninitialized;
  class(): NSDraggingSession;
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

