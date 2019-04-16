interface MSArbitraryRangePercentValueTransformerUninitialized<InitializedType = MSArbitraryRangePercentValueTransformer> extends NSValueTransformerUninitialized<MSArbitraryRangePercentValueTransformer> {}

interface MSArbitraryRangePercentValueTransformer extends NSValueTransformer {
}

declare const MSArbitraryRangePercentValueTransformer: {
  alloc(): MSArbitraryRangePercentValueTransformerUninitialized;
  class(): MSArbitraryRangePercentValueTransformer;
  setValueTransformer_forName(transformer: NSValueTransformer | null, name: NSValueTransformerName): void;
  valueTransformerForName(name: NSValueTransformerName): NSValueTransformer;
  valueTransformerNames(): NSArray<any>;
  transformedValueClass(): any;
  allowsReverseTransformation(): boolean;
  zeroPercentValue(): number;
  hundredPercentValue(): number;
  accessInstanceVariablesDirectly(): boolean;

}

