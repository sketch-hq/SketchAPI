interface NSNumberUninitialized<InitializedType = NSNumber> extends NSValueUninitialized<NSNumber> {
  initWithChar(value: string): InitializedType;
  initWithUnsignedChar(value: string): InitializedType;
  initWithShort(value: number): InitializedType;
  initWithUnsignedShort(value: number): InitializedType;
  initWithInt(value: number): InitializedType;
  initWithUnsignedInt(value: number): InitializedType;
  initWithLong(value: number): InitializedType;
  initWithUnsignedLong(value: number): InitializedType;
  initWithLongLong(value: number): InitializedType;
  initWithUnsignedLongLong(value: number): InitializedType;
  initWithFloat(value: number): InitializedType;
  initWithDouble(value: number): InitializedType;
  initWithBool(value: boolean): InitializedType;
  initWithInteger(value: NSInteger): InitializedType;
  initWithUnsignedInteger(value: NSUInteger): InitializedType;
}

interface NSNumber extends NSValue {
  compare(otherNumber: NSNumber | number): NSComparisonResult;
  isEqualToNumber(number: NSNumber | number): boolean;
  descriptionWithLocale(locale: any | null): NSString;

  decimalValue(): NSDecimal;
  charValue(): string;
  unsignedCharValue(): string;
  shortValue(): number;
  unsignedShortValue(): number;
  intValue(): number;
  unsignedIntValue(): number;
  longValue(): number;
  unsignedLongValue(): number;
  longLongValue(): number;
  unsignedLongLongValue(): number;
  floatValue(): number;
  doubleValue(): number;
  boolValue(): boolean;
  integerValue(): NSInteger;
  unsignedIntegerValue(): NSUInteger;
  stringValue(): NSString;
}

declare const NSNumber: {
  alloc(): NSNumberUninitialized;
  class(): NSNumber;
  numberWithChar(value: string): NSNumber;
  numberWithUnsignedChar(value: string): NSNumber;
  numberWithShort(value: number): NSNumber;
  numberWithUnsignedShort(value: number): NSNumber;
  numberWithInt(value: number): NSNumber;
  numberWithUnsignedInt(value: number): NSNumber;
  numberWithLong(value: number): NSNumber;
  numberWithUnsignedLong(value: number): NSNumber;
  numberWithLongLong(value: number): NSNumber;
  numberWithUnsignedLongLong(value: number): NSNumber;
  numberWithFloat(value: number): NSNumber;
  numberWithDouble(value: number): NSNumber;
  numberWithBool(value: boolean): NSNumber;
  numberWithInteger(value: NSInteger): NSNumber;
  numberWithUnsignedInteger(value: NSUInteger): NSNumber;
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
  valueWithCGVector(vector: CGVector): NSNumber;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

