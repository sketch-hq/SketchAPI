interface MSColorControlsHueValueTransformerUninitialized<InitializedType = MSColorControlsHueValueTransformer> extends MSArbitraryRangePercentValueTransformerUninitialized<MSColorControlsHueValueTransformer> {}

interface MSColorControlsHueValueTransformer extends MSArbitraryRangePercentValueTransformer {
}

declare const MSColorControlsHueValueTransformer: {
  alloc(): MSColorControlsHueValueTransformerUninitialized;
  class(): MSColorControlsHueValueTransformer;
  zeroPercentValue(): number;
  hundredPercentValue(): number;
  accessInstanceVariablesDirectly(): boolean;

}

