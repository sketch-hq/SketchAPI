interface MSZoomToolUninitialized<InitializedType = MSZoomTool> extends NSObjectUninitialized<MSZoomTool> {}

interface MSZoomTool extends NSObject {
  beginZoomToolModeActivatedByKey(activatedByKey: boolean): void;
  endZoomToolModeInView(view: MSContentDrawView): void;
  flagsChanged(): void;
  mouseDown_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseDragged_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseUp_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseMoved(): void;
  drawWithScrollOrigin(origin: NSPoint): void;
  zoomValueAfterZoomIn(): CGFloat;
  zoomValueAfterZoomOut(): CGFloat;

  active(): boolean;
  activatedByKey(): boolean;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
}

declare const MSZoomTool: {
  alloc(): MSZoomToolUninitialized;
  class(): MSZoomTool;
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

