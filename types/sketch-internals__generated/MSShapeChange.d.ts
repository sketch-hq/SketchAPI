interface MSShapeChangeUninitialized<InitializedType = MSShapeChange> extends NSObjectUninitialized<MSShapeChange> {}

interface MSShapeChange extends NSObject {
  executeWithContext(context: MSShapeChangeContext): void;
}

declare const MSShapeChange: {
  alloc(): MSShapeChangeUninitialized;
  class(): MSShapeChange;
  moveToPoint_options(location: NSPoint, options: MSCurveMoveOptions): MSShapeChange;
  moveByOffset_options(offset: NSSize, options: MSCurveMoveOptions): MSShapeChange;
  moveToLocation_onAxis(location: CGFloat, axis: BCAxis): MSShapeChange;
  moveHandle_toLocation_onAxis(indexPath: NSIndexPath, location: CGFloat, axis: BCAxis): MSShapeChange;
  nudgeWithKey_distance_flags(key: unichar, distance: CGFloat, flags: NSEventModifierFlags): MSShapeChange;
  changeToCurveMode(curveMode: MSCurveMode): MSShapeChange;
  alignToKey(key: NSString | string): MSShapeChange;
  distributeAlongAxis(axis: BCAxis): MSShapeChange;
  deleteHandle(): MSShapeChange;
  customActionWithBlock(block: Block): MSShapeChange;
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

