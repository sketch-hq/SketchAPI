interface NSTextFinderUninitialized<InitializedType = NSTextFinder> extends NSObjectUninitialized<NSTextFinder> {
  initWithCoder(decoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTextFinder extends NSObject, INSCoding {
  performAction(op: NSTextFinderAction): void;
  validateAction(op: NSTextFinderAction): boolean;
  cancelFindIndicator(): void;
  noteClientStringWillChange(): void;
  encodeWithCoder(aCoder: NSCoder): void;

  client(): any;
  setClient(client: any): void;
  findBarContainer(): any;
  setFindBarContainer(findBarContainer: any): void;
  findIndicatorNeedsUpdate(): boolean;
  setFindIndicatorNeedsUpdate(findIndicatorNeedsUpdate: boolean): void;
  incrementalSearchingEnabled(): boolean;
  setIncrementalSearchingEnabled(incrementalSearchingEnabled: boolean): void;
  incrementalSearchingShouldDimContentView(): boolean;
  setIncrementalSearchingShouldDimContentView(incrementalSearchingShouldDimContentView: boolean): void;
  incrementalMatchRanges(): NSArray<any>;
}

declare const NSTextFinder: {
  alloc(): NSTextFinderUninitialized;
  class(): NSTextFinder;
  drawIncrementalMatchHighlightInRect(rect: NSRect): void;
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

