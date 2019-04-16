interface NSValueUninitialized<InitializedType = NSValue> extends NSObjectUninitialized<NSValue> {
  initWithBytes_objCType(value: void, type: string): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSValue extends NSObject, INSCopying, INSSecureCoding {
  getValue_size(value: void, size: NSUInteger): void;
  isEqualToValue(value: NSValue): boolean;
  getValue(value: void): void;
  BCFloatRangeValue(): BCFloatRange;

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
  class(): NSValue;  valueWithCATransform3D(t: CATransform3D): NSValue;
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

}

