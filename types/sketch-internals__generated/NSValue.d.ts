interface NSValueUninitialized<InitializedType = NSValue> extends NSObjectUninitialized<NSValue> {
  initWithBytes_objCType(value: void, type: string): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSValue extends NSObject, INSCopying, INSSecureCoding {
  getValue_size(value: void, size: NSUInteger): void;
  isEqualToValue(value: NSValue): boolean;
  getValue(value: void): void;
  BCFloatRangeValue(): BCFloatRange;
  copyWithZone(zone: NSZone | null): any;

  CATransform3DValue(): CATransform3D;
  pointValue(): NSPoint;
  sizeValue(): NSSize;
  rectValue(): NSRect;
  edgeInsetsValue(): NSEdgeInsets;
  rangeValue(): NSRange;
  objCType(): string;
  nonretainedObjectValue(): any;
  pointerValue(): void;
  CGVectorValue(): CGVector;
}

declare const NSValue: {
  alloc(): NSValueUninitialized;
  class(): NSValue;
  valueWithCATransform3D(t: CATransform3D): NSValue;
  valueWithPoint(point: NSPoint): NSValue;
  valueWithSize(size: NSSize): NSValue;
  valueWithRect(rect: NSRect): NSValue;
  valueWithEdgeInsets(insets: NSEdgeInsets): NSValue;
  valueWithRange(range: NSRange): NSValue;
  valueWithBytes_objCType(value: void, type: string): NSValue;
  value_withObjCType(value: void, type: string): NSValue;
  valueWithNonretainedObject(anObject: any | null): NSValue;
  valueWithPointer(pointer: void | null): NSValue;
  valueWithBCFloatRange(range: BCFloatRange): any;
  valueWithCGVector(vector: CGVector): NSValue;
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

