interface BCStringWithoutNewlineTransformerUninitialized<InitializedType = BCStringWithoutNewlineTransformer> extends NSValueTransformerUninitialized<BCStringWithoutNewlineTransformer> {}

interface BCStringWithoutNewlineTransformer extends NSValueTransformer {
}

declare const BCStringWithoutNewlineTransformer: {
  alloc(): BCStringWithoutNewlineTransformerUninitialized;
  class(): BCStringWithoutNewlineTransformer;
  setValueTransformer_forName(transformer: NSValueTransformer | null, name: NSValueTransformerName): void;
  valueTransformerForName(name: NSValueTransformerName): NSValueTransformer;
  valueTransformerNames(): NSArray<any>;
  transformedValueClass(): any;
  allowsReverseTransformation(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

