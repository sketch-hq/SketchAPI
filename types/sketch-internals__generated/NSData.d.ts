interface NSDataUninitialized<InitializedType = NSData> extends NSObjectUninitialized<NSData> {
  initWithBytes_length(bytes: void | null, length: NSUInteger): InitializedType;
  initWithBytesNoCopy_length(bytes: void, length: NSUInteger): InitializedType;
  initWithBytesNoCopy_length_freeWhenDone(bytes: void, length: NSUInteger, b: boolean): InitializedType;
  initWithBytesNoCopy_length_deallocator(bytes: void, length: NSUInteger, deallocator: Block | null): InitializedType;
  initWithContentsOfFile_options_error(path: NSString | string, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): InitializedType;
  initWithContentsOfURL_options_error(url: NSURL, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): InitializedType;
  initWithContentsOfFile(path: NSString | string): InitializedType;
  initWithContentsOfURL(url: NSURL): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithBase64EncodedString_options(base64String: NSString | string, options: NSDataBase64DecodingOptions): InitializedType;
  initWithBase64EncodedData_options(base64Data: NSData, options: NSDataBase64DecodingOptions): InitializedType;
  initWithContentsOfMappedFile(path: NSString | string): InitializedType;
  initWithBase64Encoding(base64String: NSString | string): InitializedType;
}

interface NSData extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  getBytes_length(buffer: void, length: NSUInteger): void;
  getBytes_range(buffer: void, range: NSRange): void;
  isEqualToData(other: NSData): boolean;
  subdataWithRange(range: NSRange): NSData;
  writeToFile_atomically(path: NSString | string, useAuxiliaryFile: boolean): boolean;
  writeToURL_atomically(url: NSURL, atomically: boolean): boolean;
  writeToFile_options_error(path: NSString | string, writeOptionsMask: NSDataWritingOptions, errorPtr: MOPointer<NSError>): boolean;
  writeToURL_options_error(url: NSURL, writeOptionsMask: NSDataWritingOptions, errorPtr: MOPointer<NSError>): boolean;
  rangeOfData_options_range(dataToFind: NSData, mask: NSDataSearchOptions, searchRange: NSRange): NSRange;
  enumerateByteRangesUsingBlock(block: Block): void;
  base64EncodedStringWithOptions(options: NSDataBase64EncodingOptions): NSString;
  base64EncodedDataWithOptions(options: NSDataBase64EncodingOptions): NSData;
  getBytes(buffer: void): void;
  base64Encoding(): NSString;
  sha1(): NSData;
  sha1AsString(): NSString;
  dataByCompressingWithAlgorithm_bc(algorithm: compression_algorithm): NSData;
  dataByDecompressing_bc(): NSData;
  hexString(): NSString;
  base64Encoding_xcd(): NSString;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;

  length(): NSUInteger;
  bytes(): void;
  description(): NSString;
  base64URLEncodedString(): NSString;
}

declare const NSData: {
  alloc(): NSDataUninitialized;
  class(): NSData;
  data(): NSData;
  dataWithBytes_length(bytes: void | null, length: NSUInteger): NSData;
  dataWithBytesNoCopy_length(bytes: void, length: NSUInteger): NSData;
  dataWithBytesNoCopy_length_freeWhenDone(bytes: void, length: NSUInteger, b: boolean): NSData;
  dataWithContentsOfFile_options_error(path: NSString | string, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): NSData;
  dataWithContentsOfURL_options_error(url: NSURL, readOptionsMask: NSDataReadingOptions, errorPtr: MOPointer<NSError>): NSData;
  dataWithContentsOfFile(path: NSString | string): NSData;
  dataWithContentsOfURL(url: NSURL): NSData;
  dataWithData(data: NSData): NSData;
  dataWithContentsOfMappedFile(path: NSString | string): any;
  dataWithBase64Encoding_xcd(base64String: NSString | string): any;
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

