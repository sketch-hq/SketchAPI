interface NSAlignmentFeedbackFilterUninitialized<InitializedType = NSAlignmentFeedbackFilter> extends NSObjectUninitialized<NSAlignmentFeedbackFilter> {}

interface NSAlignmentFeedbackFilter extends NSObject {
  updateWithEvent(event: NSEvent): void;
  updateWithPanRecognizer(panRecognizer: NSPanGestureRecognizer): void;
  alignmentFeedbackTokenForMovementInView_previousPoint_alignedPoint_defaultPoint(view: NSView | null, previousPoint: NSPoint, alignedPoint: NSPoint, defaultPoint: NSPoint): any;
  alignmentFeedbackTokenForHorizontalMovementInView_previousX_alignedX_defaultX(view: NSView | null, previousX: CGFloat, alignedX: CGFloat, defaultX: CGFloat): any;
  alignmentFeedbackTokenForVerticalMovementInView_previousY_alignedY_defaultY(view: NSView | null, previousY: CGFloat, alignedY: CGFloat, defaultY: CGFloat): any;
  performFeedback_performanceTime(alignmentFeedbackTokens: NSArray<any> | any[], performanceTime: NSHapticFeedbackPerformanceTime): void;
}

declare const NSAlignmentFeedbackFilter: {
  alloc(): NSAlignmentFeedbackFilterUninitialized;
  class(): NSAlignmentFeedbackFilter;
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
  inputEventMask(): NSEventMask;
  accessInstanceVariablesDirectly(): boolean;

}

