interface MSColorControlsSaturationValueTransformerUninitialized<InitializedType = MSColorControlsSaturationValueTransformer> extends MSArbitraryRangePercentValueTransformerUninitialized<MSColorControlsSaturationValueTransformer> {}

interface MSColorControlsSaturationValueTransformer extends MSArbitraryRangePercentValueTransformer {
}

declare const MSColorControlsSaturationValueTransformer: {
  alloc(): MSColorControlsSaturationValueTransformerUninitialized;
  class(): MSColorControlsSaturationValueTransformer;
  zeroPercentValue(): number;
  hundredPercentValue(): number;
  accessInstanceVariablesDirectly(): boolean;

}

