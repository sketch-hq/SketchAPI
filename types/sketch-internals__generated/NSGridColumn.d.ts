interface NSGridColumnUninitialized<InitializedType = NSGridColumn> extends NSObjectUninitialized<NSGridColumn> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSGridColumn extends NSObject, INSCoding {
  cellAtIndex(index: NSInteger): NSGridCell;
  mergeCellsInRange(range: NSRange): void;
  encodeWithCoder(aCoder: NSCoder): void;

  gridView(): NSGridView;
  numberOfCells(): NSInteger;
  xPlacement(): NSGridCellPlacement;
  setXPlacement(xPlacement: NSGridCellPlacement): void;
  width(): CGFloat;
  setWidth(width: CGFloat): void;
  leadingPadding(): CGFloat;
  setLeadingPadding(leadingPadding: CGFloat): void;
  trailingPadding(): CGFloat;
  setTrailingPadding(trailingPadding: CGFloat): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
}

declare const NSGridColumn: {
  alloc(): NSGridColumnUninitialized;
  class(): NSGridColumn;
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

