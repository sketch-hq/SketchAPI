interface NSCoderUninitialized<InitializedType = NSCoder> extends NSObjectUninitialized<NSCoder> {}
interface NSCoder extends NSObject {
  encodeValueOfObjCType_at(type: string, addr: void): void;
  encodeDataObject(data: NSData): void;
  decodeDataObject(): NSData;
  decodeValueOfObjCType_at_size(type: string, data: void, size: NSUInteger): void;
  versionForClassName(className: NSString | string): NSInteger;
  encodeObject(object: any | null): void;
  encodeRootObject(rootObject: any): void;
  encodeBycopyObject(anObject: any | null): void;
  encodeByrefObject(anObject: any | null): void;
  encodeConditionalObject(object: any | null): void;
  encodeValuesOfObjCTypes(types: string, ...args: any[]): void;
  encodeArrayOfObjCType_count_at(type: string, count: NSUInteger, array: void): void;
  encodeBytes_length(byteaddr: void | null, length: NSUInteger): void;
  decodeObject(): any;
  decodeValuesOfObjCTypes(types: string, ...args: any[]): void;
  decodeArrayOfObjCType_count_at(itemType: string, count: NSUInteger, array: void): void;
  decodeBytesWithReturnedLength(lengthp: NSUInteger): void;
  encodePropertyList(aPropertyList: any): void;
  decodePropertyList(): any;
  encodeObject_forKey(object: any | null, key: NSString | string): void;
  encodeConditionalObject_forKey(object: any | null, key: NSString | string): void;
  encodeBool_forKey(value: boolean, key: NSString | string): void;
  encodeInt_forKey(value: number, key: NSString | string): void;
  encodeInt32_forKey(value: number, key: NSString | string): void;
  encodeInt64_forKey(value: number, key: NSString | string): void;
  encodeFloat_forKey(value: number, key: NSString | string): void;
  encodeDouble_forKey(value: number, key: NSString | string): void;
  encodeBytes_length_forKey(bytes: number | null, length: NSUInteger, key: NSString | string): void;
  containsValueForKey(key: NSString | string): boolean;
  decodeObjectForKey(key: NSString | string): any;
  decodeBoolForKey(key: NSString | string): boolean;
  decodeIntForKey(key: NSString | string): number;
  decodeInt32ForKey(key: NSString | string): number;
  decodeInt64ForKey(key: NSString | string): number;
  decodeFloatForKey(key: NSString | string): number;
  decodeDoubleForKey(key: NSString | string): number;
  decodeBytesForKey_returnedLength(key: NSString | string, lengthp: NSUInteger | null): number;
  encodeInteger_forKey(value: NSInteger, key: NSString | string): void;
  decodeIntegerForKey(key: NSString | string): NSInteger;
  decodeObjectOfClass_forKey(aClass: any, key: NSString | string): any;
  decodeObjectOfClasses_forKey(classes: NSSet<any> | null, key: NSString | string): any;
  decodePropertyListForKey(key: NSString | string): any;
  failWithError(error: NSError): void;
  encodeNXObject(object: any): void;
  decodeNXObject(): any;
  decodeValueOfObjCType_at(type: string, data: void): void;
  encodePoint(point: NSPoint): void;
  decodePoint(): NSPoint;
  encodeSize(size: NSSize): void;
  decodeSize(): NSSize;
  encodeRect(rect: NSRect): void;
  decodeRect(): NSRect;
  encodePoint_forKey(point: NSPoint, key: NSString | string): void;
  encodeSize_forKey(size: NSSize, key: NSString | string): void;
  encodeRect_forKey(rect: NSRect, key: NSString | string): void;
  decodePointForKey(key: NSString | string): NSPoint;
  decodeSizeForKey(key: NSString | string): NSSize;
  decodeRectForKey(key: NSString | string): NSRect;
  decodeNXColor(): NSColor;

  systemVersion(): number;
  allowsKeyedCoding(): boolean;
  requiresSecureCoding(): boolean;
  allowedClasses(): NSSet<any>;
  decodingFailurePolicy(): NSDecodingFailurePolicy;
  error(): NSError;
}
declare const NSCoder: {
  alloc(): NSCoderUninitialized;
  class(): NSCoder;
}

