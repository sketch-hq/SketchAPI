interface MSGestureRecognizerUninitialized<InitializedType = MSGestureRecognizer> extends NSObjectUninitialized<MSGestureRecognizer> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
}

interface MSGestureRecognizer extends NSObject {
  locationInLayer(layer: MSLayer | null): NSPoint;
  reset(): void;
  mouseDown_clickCount_modifierFlags(location: NSPoint, clickCount: NSUInteger, flags: NSEventModifierFlags): void;
  mouseUp_location(event: NSEvent, location: NSPoint): void;
  mouseDragged_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  keyDown(event: NSEvent): void;
  keyUp_flags(c: unichar, flags: NSUInteger): void;
  flagsChanged(event: NSEvent): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  state(): NSGestureRecognizerState;
  setState(state: NSGestureRecognizerState): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSGestureRecognizer: {
  alloc(): MSGestureRecognizerUninitialized;
  class(): MSGestureRecognizer;
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

