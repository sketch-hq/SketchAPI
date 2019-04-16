interface NSIndexPathUninitialized<InitializedType = NSIndexPath> extends NSObjectUninitialized<NSIndexPath> {
  initWithIndexes_length(indexes: NSUInteger[], length: NSUInteger): InitializedType;
  initWithIndex(index: NSUInteger): InitializedType;
}

interface NSIndexPath extends NSObject, INSCopying, INSSecureCoding {
  indexPathByAddingIndex(index: NSUInteger): NSIndexPath;
  indexPathByRemovingLastIndex(): NSIndexPath;
  indexAtPosition(position: NSUInteger): NSUInteger;
  getIndexes_range(indexes: NSUInteger, positionRange: NSRange): void;
  compare(otherObject: NSIndexPath): NSComparisonResult;
  getIndexes(indexes: NSUInteger): void;
  indexPathWithComponent(component: MSVectorComponent): NSIndexPath;
  copyWithZone(zone: NSZone | null): any;

  length(): NSUInteger;
  item(): NSInteger;
  section(): NSInteger;
  component(): MSVectorComponent;
  point(): NSUInteger;
  shape(): NSUInteger;
  handle(): MSPointType;
}

declare const NSIndexPath: {
  alloc(): NSIndexPathUninitialized;
  class(): NSIndexPath;
  indexPathWithIndex(index: NSUInteger): NSIndexPath;
  indexPathWithIndexes_length(indexes: NSUInteger[], length: NSUInteger): NSIndexPath;
  indexPathForItem_inSection(item: NSInteger, section: NSInteger): NSIndexPath;
  indexPathForComponent_point_ofShape(component: MSVectorComponent, point: NSUInteger, shape: NSUInteger): NSIndexPath;
  indexPathForPoint_ofShape(point: NSUInteger, shape: NSUInteger): NSIndexPath;
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

