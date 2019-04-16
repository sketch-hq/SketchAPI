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
  class(): NSMutableData;
  dataWithCapacity(aNumItems: NSUInteger): NSMutableData;
  dataWithLength(length: NSUInteger): NSMutableData;
  data(): NSMutableData;
  dataWithBytes_length(bytes: void | null, length: NSUInteger): NSMutableData;
  dataWithBytesNoCopy_length(bytes: void, length: NSUInteger): NSMutableData;
  dataWithBytesNoCopy_length_freeWhenDone(bytes: void, length: NSUInteger, b: boolean): NSMutableData;
  dataWithContentsOfFile_options_error(path: NSString | string, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): NSMutableData;
  dataWithContentsOfURL_options_error(url: NSURL, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): NSMutableData;
  dataWithContentsOfFile(path: NSString | string): NSMutableData;
  dataWithContentsOfURL(url: NSURL): NSMutableData;
  dataWithData(data: NSData): NSMutableData;
  dataWithContentsOfMappedFile(path: NSString | string): any;
  dataWithBase64Encoding_xcd(base64String: NSString | string): any;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

