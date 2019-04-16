interface NSAffineTransformUninitialized<InitializedType = NSAffineTransform> extends NSObjectUninitialized<NSAffineTransform> {
  initWithTransform(transform: NSAffineTransform): InitializedType;
}

interface NSAffineTransform extends NSObject, INSCopying, INSSecureCoding {
  translateXBy_yBy(deltaX: CGFloat, deltaY: CGFloat): void;
  rotateByDegrees(angle: CGFloat): void;
  rotateByRadians(angle: CGFloat): void;
  scaleBy(scale: CGFloat): void;
  scaleXBy_yBy(scaleX: CGFloat, scaleY: CGFloat): void;
  invert(): void;
  appendTransform(transform: NSAffineTransform): void;
  prependTransform(transform: NSAffineTransform): void;
  transformPoint(aPoint: NSPoint): NSPoint;
  transformSize(aSize: NSSize): NSSize;
  transformBezierPath(path: NSBezierPath): NSBezierPath;
  set(): void;
  concat(): void;
  translateByOffset(offset: NSPoint): void;
  transactionWithBlock(block: BCVoidBlock): void;
  rotateWithDegrees_aroundPoint(degrees: CGFloat, point: NSPoint): void;
  invertedTransform(): NSAffineTransform;
  CGAffineTransform_ms(): CGAffineTransform;
  copyWithZone(zone: NSZone | null): any;

  transformStruct(): NSAffineTransformStruct;
  setTransformStruct(transformStruct: NSAffineTransformStruct): void;
  determinant(): CGFloat;
  includesFlip(): boolean;
}

declare const NSAffineTransform: {
  alloc(): NSAffineTransformUninitialized;
  class(): NSAffineTransform;
  transform(): NSAffineTransform;
  transformByTranslatingXBy_yBy(x: CGFloat, y: CGFloat): NSAffineTransform;
  transformByScaling(scale: CGFloat): NSAffineTransform;
  transformWithOffset(offset: NSPoint): NSAffineTransform;
  rotationTransformWithDegrees_aroundPoint(degrees: CGFloat, point: NSPoint): NSAffineTransform;
  transformFromStruct_aroundPoint(transformStruct: CHTransformStruct, p: NSPoint): NSAffineTransform;
  transformFromStruct_aroundPoint_inPlace(transformStruct: CHTransformStruct, p: NSPoint, transformInPlace: boolean): NSAffineTransform;
  transformWithCGAffineTransform_ms(t: CGAffineTransform): NSAffineTransform;
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

