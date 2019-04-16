interface MSArbitraryRangePercentValueTransformerUninitialized<InitializedType = MSArbitraryRangePercentValueTransformer> extends NSValueTransformerUninitialized<MSArbitraryRangePercentValueTransformer> {}
interface MSArbitraryRangePercentValueTransformer extends NSValueTransformer {
}
declare const MSArbitraryRangePercentValueTransformer: {
  alloc(): MSArbitraryRangePercentValueTransformerUninitialized;
  class(): MSArbitraryRangePercentValueTransformer;
  zeroPercentValue(): number;
  hundredPercentValue(): number;

}

