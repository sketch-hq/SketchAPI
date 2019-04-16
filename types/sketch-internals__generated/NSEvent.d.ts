interface NSEventUninitialized<InitializedType = NSEvent> extends NSObjectUninitialized<NSEvent> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSEvent extends NSObject, INSCopying, INSCoding {
  touchesMatchingPhase_inView(phase: NSTouchPhase, view: NSView | null): NSSet<any>;
  allTouches(): NSSet<any>;
  touchesForView(view: NSView): NSSet<any>;
  coalescedTouchesForTouch(touch: NSTouch): NSArray<any>;
  trackSwipeEventWithOptions_dampenAmountThresholdMin_max_usingHandler(options: NSEventSwipeTrackingOptions, minDampenThreshold: CGFloat, maxDampenThreshold: CGFloat, trackingHandler: Block): void;
  shouldStartDrag(): boolean;
  isDoubleClick(): boolean;
  isRightClick(): boolean;
  isOptionClick(): boolean;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  type(): NSEventType;
  timestamp(): NSTimeInterval;
  window(): NSWindow;
  windowNumber(): NSInteger;
  context(): NSGraphicsContext;
  clickCount(): NSInteger;
  buttonNumber(): NSInteger;
  eventNumber(): NSInteger;
  pressure(): number;
  locationInWindow(): NSPoint;
  deltaX(): CGFloat;
  deltaY(): CGFloat;
  deltaZ(): CGFloat;
  hasPreciseScrollingDeltas(): boolean;
  scrollingDeltaX(): CGFloat;
  scrollingDeltaY(): CGFloat;
  momentumPhase(): NSEventPhase;
  directionInvertedFromDevice(): boolean;
  characters(): NSString;
  charactersIgnoringModifiers(): NSString;
  ARepeat(): boolean;
  keyCode(): number;
  trackingNumber(): NSInteger;
  userData(): void;
  trackingArea(): NSTrackingArea;
  subtype(): NSEventSubtype;
  data1(): NSInteger;
  data2(): NSInteger;
  eventRef(): void;
  CGEvent(): CGEventRef;
  magnification(): CGFloat;
  deviceID(): NSUInteger;
  rotation(): number;
  absoluteX(): NSInteger;
  absoluteY(): NSInteger;
  absoluteZ(): NSInteger;
  buttonMask(): NSEventButtonMask;
  tilt(): NSPoint;
  tangentialPressure(): number;
  vendorDefined(): any;
  vendorID(): NSUInteger;
  tabletID(): NSUInteger;
  pointingDeviceID(): NSUInteger;
  systemTabletID(): NSUInteger;
  vendorPointingDeviceType(): NSUInteger;
  pointingDeviceSerialNumber(): NSUInteger;
  uniqueID(): number;
  capabilityMask(): NSUInteger;
  pointingDeviceType(): NSPointingDeviceType;
  enteringProximity(): boolean;
  phase(): NSEventPhase;
  stage(): NSInteger;
  stageTransition(): CGFloat;
  associatedEventsMask(): NSEventMask;
  pressureBehavior(): NSPressureBehavior;
}

declare const NSEvent: {
  alloc(): NSEventUninitialized;
  class(): NSEvent;
  eventWithEventRef(eventRef: void): NSEvent;
  eventWithCGEvent(cgEvent: CGEventRef): NSEvent;
  startPeriodicEventsAfterDelay_withPeriod(delay: NSTimeInterval, period: NSTimeInterval): void;
  stopPeriodicEvents(): void;
  mouseEventWithType_location_modifierFlags_timestamp_windowNumber_context_eventNumber_clickCount_pressure(type: NSEventType, location: NSPoint, flags: NSEventModifierFlags, time: NSTimeInterval, wNum: NSInteger, unusedPassNil: NSGraphicsContext | null, eNum: NSInteger, cNum: NSInteger, pressure: number): NSEvent;
  keyEventWithType_location_modifierFlags_timestamp_windowNumber_context_characters_charactersIgnoringModifiers_isARepeat_keyCode(type: NSEventType, location: NSPoint, flags: NSEventModifierFlags, time: NSTimeInterval, wNum: NSInteger, unusedPassNil: NSGraphicsContext | null, keys: NSString | string, ukeys: NSString | string, flag: boolean, code: number): NSEvent;
  enterExitEventWithType_location_modifierFlags_timestamp_windowNumber_context_eventNumber_trackingNumber_userData(type: NSEventType, location: NSPoint, flags: NSEventModifierFlags, time: NSTimeInterval, wNum: NSInteger, unusedPassNil: NSGraphicsContext | null, eNum: NSInteger, tNum: NSInteger, data: void | null): NSEvent;
  otherEventWithType_location_modifierFlags_timestamp_windowNumber_context_subtype_data1_data2(type: NSEventType, location: NSPoint, flags: NSEventModifierFlags, time: NSTimeInterval, wNum: NSInteger, unusedPassNil: NSGraphicsContext | null, subtype: number, d1: NSInteger, d2: NSInteger): NSEvent;
  addGlobalMonitorForEventsMatchingMask_handler(mask: NSEventMask, block: Block): any;
  addLocalMonitorForEventsMatchingMask_handler(mask: NSEventMask, block: Block): any;
  removeMonitor(eventMonitor: any): void;
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
  modifierFlags(): NSEventModifierFlags;
  mouseCoalescingEnabled(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setMouseCoalescingEnabled(mouseCoalescingEnabled: boolean): void;
  swipeTrackingFromScrollEventsEnabled(): boolean;
  mouseLocation(): NSPoint;
  pressedMouseButtons(): NSUInteger;
  doubleClickInterval(): NSTimeInterval;
  keyRepeatDelay(): NSTimeInterval;
  keyRepeatInterval(): NSTimeInterval;
  accessInstanceVariablesDirectly(): boolean;

}

