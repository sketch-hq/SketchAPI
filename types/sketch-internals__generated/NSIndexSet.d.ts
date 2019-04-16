interface NSIndexSetUninitialized<InitializedType = NSIndexSet> extends NSObjectUninitialized<NSIndexSet> {
  initWithIndexesInRange(range: NSRange): InitializedType;
  initWithIndexSet(indexSet: NSIndexSet): InitializedType;
  initWithIndex(value: NSUInteger): InitializedType;
}
interface NSIndexSet extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  isEqualToIndexSet(indexSet: NSIndexSet): boolean;
  indexGreaterThanIndex(value: NSUInteger): NSUInteger;
  indexLessThanIndex(value: NSUInteger): NSUInteger;
  indexGreaterThanOrEqualToIndex(value: NSUInteger): NSUInteger;
  indexLessThanOrEqualToIndex(value: NSUInteger): NSUInteger;
  getIndexes_maxCount_inIndexRange(indexBuffer: NSUInteger, bufferSize: NSUInteger, range: NSRangePointer | null): NSUInteger;
  countOfIndexesInRange(range: NSRange): NSUInteger;
  containsIndex(value: NSUInteger): boolean;
  containsIndexesInRange(range: NSRange): boolean;
  containsIndexes(indexSet: NSIndexSet): boolean;
  intersectsIndexesInRange(range: NSRange): boolean;
  enumerateIndexesUsingBlock(block: Block): void;
  enumerateIndexesWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  enumerateIndexesInRange_options_usingBlock(range: NSRange, opts: NSEnumerationOptions, block: Block): void;
  indexPassingTest(predicate: Block): NSUInteger;
  indexWithOptions_passingTest(opts: NSEnumerationOptions, predicate: Block): NSUInteger;
  indexInRange_options_passingTest(range: NSRange, opts: NSEnumerationOptions, predicate: Block): NSUInteger;
  indexesPassingTest(predicate: Block): NSIndexSet;
  indexesWithOptions_passingTest(opts: NSEnumerationOptions, predicate: Block): NSIndexSet;
  indexesInRange_options_passingTest(range: NSRange, opts: NSEnumerationOptions, predicate: Block): NSIndexSet;
  enumerateRangesUsingBlock(block: Block): void;
  enumerateRangesWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  enumerateRangesInRange_options_usingBlock(range: NSRange, opts: NSEnumerationOptions, block: Block): void;

  count(): NSUInteger;
  firstIndex(): NSUInteger;
  lastIndex(): NSUInteger;
}
declare const NSIndexSet: {
  alloc(): NSIndexSetUninitialized;
  class(): NSIndexSet;  indexSet(): NSIndexSet;
  indexSetWithIndex(value: NSUInteger): NSIndexSet;
  indexSetWithIndexesInRange(range: NSRange): NSIndexSet;

}

