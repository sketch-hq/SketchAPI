interface NSGestureRecognizerUninitialized<InitializedType = NSGestureRecognizer> extends NSObjectUninitialized<NSGestureRecognizer> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSGestureRecognizer extends NSObject, INSCoding {
  locationInView(view: NSView | null): NSPoint;
  reset(): void;
  canPreventGestureRecognizer(preventedGestureRecognizer: NSGestureRecognizer): boolean;
  canBePreventedByGestureRecognizer(preventingGestureRecognizer: NSGestureRecognizer): boolean;
  shouldRequireFailureOfGestureRecognizer(otherGestureRecognizer: NSGestureRecognizer): boolean;
  shouldBeRequiredToFailByGestureRecognizer(otherGestureRecognizer: NSGestureRecognizer): boolean;
  mouseDown(event: NSEvent): void;
  rightMouseDown(event: NSEvent): void;
  otherMouseDown(event: NSEvent): void;
  mouseUp(event: NSEvent): void;
  rightMouseUp(event: NSEvent): void;
  otherMouseUp(event: NSEvent): void;
  mouseDragged(event: NSEvent): void;
  rightMouseDragged(event: NSEvent): void;
  otherMouseDragged(event: NSEvent): void;
  keyDown(event: NSEvent): void;
  keyUp(event: NSEvent): void;
  flagsChanged(event: NSEvent): void;
  tabletPoint(event: NSEvent): void;
  magnifyWithEvent(event: NSEvent): void;
  rotateWithEvent(event: NSEvent): void;
  pressureChangeWithEvent(event: NSEvent): void;
  touchesBeganWithEvent(event: NSEvent): void;
  touchesMovedWithEvent(event: NSEvent): void;
  touchesEndedWithEvent(event: NSEvent): void;
  touchesCancelledWithEvent(event: NSEvent): void;
  encodeWithCoder(aCoder: NSCoder): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  state(): NSGestureRecognizerState;
  setState(state: NSGestureRecognizerState): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  view(): NSView;
  pressureConfiguration(): NSPressureConfiguration;
  setPressureConfiguration(pressureConfiguration: NSPressureConfiguration): void;
  delaysPrimaryMouseButtonEvents(): boolean;
  setDelaysPrimaryMouseButtonEvents(delaysPrimaryMouseButtonEvents: boolean): void;
  delaysSecondaryMouseButtonEvents(): boolean;
  setDelaysSecondaryMouseButtonEvents(delaysSecondaryMouseButtonEvents: boolean): void;
  delaysOtherMouseButtonEvents(): boolean;
  setDelaysOtherMouseButtonEvents(delaysOtherMouseButtonEvents: boolean): void;
  delaysKeyEvents(): boolean;
  setDelaysKeyEvents(delaysKeyEvents: boolean): void;
  delaysMagnificationEvents(): boolean;
  setDelaysMagnificationEvents(delaysMagnificationEvents: boolean): void;
  delaysRotationEvents(): boolean;
  setDelaysRotationEvents(delaysRotationEvents: boolean): void;
  allowedTouchTypes(): NSTouchTypeMask;
  setAllowedTouchTypes(allowedTouchTypes: NSTouchTypeMask): void;
}

declare const NSGestureRecognizer: {
  alloc(): NSGestureRecognizerUninitialized;
  class(): NSGestureRecognizer;
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

