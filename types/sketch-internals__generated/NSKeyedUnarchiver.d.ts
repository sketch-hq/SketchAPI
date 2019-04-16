interface NSKeyedUnarchiverUninitialized<InitializedType = NSKeyedUnarchiver> extends NSCoderUninitialized<NSKeyedUnarchiver> {
  initForReadingFromData_error(data: NSData, error: MOPointer<NSError>): InitializedType;
  initForReadingWithData(data: NSData): InitializedType;
}

interface NSKeyedUnarchiver extends NSCoder {
  finishDecoding(): void;
  setClass_forClassName(cls: any | null, codedName: NSString | string): void;
  classForClassName(codedName: NSString | string): any;
  containsValueForKey(key: NSString | string): boolean;
  decodeObjectForKey(key: NSString | string): any;
  decodeBoolForKey(key: NSString | string): boolean;
  decodeIntForKey(key: NSString | string): number;
  decodeInt32ForKey(key: NSString | string): number;
  decodeInt64ForKey(key: NSString | string): number;
  decodeFloatForKey(key: NSString | string): number;
  decodeDoubleForKey(key: NSString | string): number;
  decodeBytesForKey_returnedLength(key: NSString | string, lengthp: NSUInteger | null): number;

  delegate(): any;
  setDelegate(delegate: any): void;
  requiresSecureCoding(): boolean;
  setRequiresSecureCoding(requiresSecureCoding: boolean): void;
  decodingFailurePolicy(): NSDecodingFailurePolicy;
  setDecodingFailurePolicy(decodingFailurePolicy: NSDecodingFailurePolicy): void;
}

declare const NSKeyedUnarchiver: {
  alloc(): NSKeyedUnarchiverUninitialized;
  class(): NSKeyedUnarchiver;
  unarchivedObjectOfClass_fromData_error(cls: any, data: NSData, error: MOPointer<NSError>): any;
  unarchivedObjectOfClasses_fromData_error(classes: NSSet<any>, data: NSData, error: MOPointer<NSError>): any;
  unarchiveObjectWithData(data: NSData): any;
  unarchiveObjectWithFile(path: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

