interface NSMutableDataUninitialized<InitializedType = NSMutableData> extends NSDataUninitialized<NSMutableData> {
  initWithCapacity(capacity: NSUInteger): InitializedType;
  initWithLength(length: NSUInteger): InitializedType;
}
interface NSMutableData extends NSData {
  appendBytes_length(bytes: void, length: NSUInteger): void;
  appendData(other: NSData): void;
  increaseLengthBy(extraLength: NSUInteger): void;
  replaceBytesInRange_withBytes(range: NSRange, bytes: void): void;
  resetBytesInRange(range: NSRange): void;
  setData(data: NSData): void;
  replaceBytesInRange_withBytes_length(range: NSRange, replacementBytes: void | null, replacementLength: NSUInteger): void;

  mutableBytes(): void;
  length(): NSUInteger;
  setLength(length: NSUInteger): void;
}
declare const NSMutableData: {
  alloc(): NSMutableDataUninitialized;
  class(): NSMutableData;  dataWithCapacity(aNumItems: NSUInteger): NSMutableData;
  dataWithLength(length: NSUInteger): NSMutableData;

}

