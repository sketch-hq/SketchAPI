interface MSMouseTrackerUninitialized<InitializedType = MSMouseTracker> extends NSObjectUninitialized<MSMouseTracker> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
}

interface MSMouseTracker extends NSObject {
  sendAction(): void;
  locationInView(view: NSView | null): NSPoint;
  mouseEntered(event: NSEvent): void;
  mouseMoved(event: NSEvent): void;
  mouseExited(event: NSEvent | null): void;
  flagsChanged(event: NSEvent): void;
  mouseDown(event: NSEvent): void;
  mouseDragged(event: NSEvent): void;
  mouseUp(event: NSEvent): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  trackingState(): MSMouseTrackingState;
  view(): NSView;
  setView(view: NSView): void;
  modifierFlags(): NSEventModifierFlags;
  canUpdateCursor(): boolean;
}

declare const MSMouseTracker: {
  alloc(): MSMouseTrackerUninitialized;
  class(): MSMouseTracker;
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

