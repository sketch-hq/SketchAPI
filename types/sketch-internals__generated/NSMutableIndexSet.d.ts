interface NSMutableIndexSetUninitialized<InitializedType = NSMutableIndexSet> extends NSIndexSetUninitialized<NSMutableIndexSet> {}

interface NSMutableIndexSet extends NSIndexSet {
  addIndexes(indexSet: NSIndexSet): void;
  removeIndexes(indexSet: NSIndexSet): void;
  removeAllIndexes(): void;
  addIndex(value: NSUInteger): void;
  removeIndex(value: NSUInteger): void;
  addIndexesInRange(range: NSRange): void;
  removeIndexesInRange(range: NSRange): void;
  shiftIndexesStartingAtIndex_by(index: NSUInteger, delta: NSInteger): void;
}

declare const NSMutableIndexSet: {
  alloc(): NSMutableIndexSetUninitialized;
  class(): NSMutableIndexSet;
  indexSet(): NSMutableIndexSet;
  indexSetWithIndex(value: NSUInteger): NSMutableIndexSet;
  indexSetWithIndexesInRange(range: NSRange): NSMutableIndexSet;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

