interface MSRangeUninitialized<InitializedType = MSRange> extends NSObjectUninitialized<MSRange> {}
interface MSRange extends NSObject {
}
declare const MSRange: {
  alloc(): MSRangeUninitialized;
  class(): MSRange;  from_to_do(fromIndex: NSUInteger, toIndex: NSUInteger, block: Block): void;

}

