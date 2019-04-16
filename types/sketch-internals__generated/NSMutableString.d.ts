interface NSMutableStringUninitialized<InitializedType = NSMutableString> extends NSStringUninitialized<NSMutableString> {
  initWithCapacity(capacity: NSUInteger): InitializedType;
}
interface NSMutableString extends NSString {
  replaceCharactersInRange_withString(range: NSRange, aString: NSString | string): void;
  insertString_atIndex(aString: NSString | string, loc: NSUInteger): void;
  deleteCharactersInRange(range: NSRange): void;
  appendString(aString: NSString | string): void;
  appendFormat(format: NSString | string, ...args: any[]): void;
  setString(aString: NSString | string): void;
  replaceOccurrencesOfString_withString_options_range(target: NSString | string, replacement: NSString | string, options: NSStringCompareOptions, searchRange: NSRange): NSUInteger;
  applyTransform_reverse_range_updatedRange(transform: NSStringTransform, reverse: boolean, range: NSRange, resultingRange: NSRangePointer | null): boolean;
}
declare const NSMutableString: {
  alloc(): NSMutableStringUninitialized;
  class(): NSMutableString;  stringWithCapacity(capacity: NSUInteger): NSMutableString;

}

