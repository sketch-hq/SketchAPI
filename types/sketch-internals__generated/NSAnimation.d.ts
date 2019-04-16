interface NSAnimationUninitialized<InitializedType = NSAnimation> extends NSObjectUninitialized<NSAnimation> {
  initWithDuration_animationCurve(duration: NSTimeInterval, animationCurve: NSAnimationCurve): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSAnimation extends NSObject, INSCopying, INSCoding {
  startAnimation(): void;
  stopAnimation(): void;
  addProgressMark(progressMark: NSAnimationProgress): void;
  removeProgressMark(progressMark: NSAnimationProgress): void;
  startWhenAnimation_reachesProgress(animation: NSAnimation, startProgress: NSAnimationProgress): void;
  stopWhenAnimation_reachesProgress(animation: NSAnimation, stopProgress: NSAnimationProgress): void;
  clearStartAnimation(): void;
  clearStopAnimation(): void;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  animating(): boolean;
  currentProgress(): NSAnimationProgress;
  setCurrentProgress(currentProgress: NSAnimationProgress): void;
  duration(): NSTimeInterval;
  setDuration(duration: NSTimeInterval): void;
  animationBlockingMode(): NSAnimationBlockingMode;
  setAnimationBlockingMode(animationBlockingMode: NSAnimationBlockingMode): void;
  frameRate(): number;
  setFrameRate(frameRate: number): void;
  animationCurve(): NSAnimationCurve;
  setAnimationCurve(animationCurve: NSAnimationCurve): void;
  currentValue(): number;
  delegate(): any;
  setDelegate(delegate: any): void;
  progressMarks(): NSArray<any>;
  setProgressMarks(progressMarks: NSArray<any> | any[]): void;
  runLoopModesForAnimating(): NSArray<any>;
}

declare const NSAnimation: {
  alloc(): NSAnimationUninitialized;
  class(): NSAnimation;
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

