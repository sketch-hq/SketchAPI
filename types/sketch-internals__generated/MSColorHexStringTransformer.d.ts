interface MSColorHexStringTransformerUninitialized<InitializedType = MSColorHexStringTransformer> extends NSValueTransformerUninitialized<MSColorHexStringTransformer> {}

interface MSColorHexStringTransformer extends NSValueTransformer {

  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSColorHexStringTransformer: {
  alloc(): MSColorHexStringTransformerUninitialized;
  class(): MSColorHexStringTransformer;
  setValueTransformer_forName(transformer: NSValueTransformer | null, name: NSValueTransformerName): void;
  valueTransformerForName(name: NSValueTransformerName): NSValueTransformer;
  valueTransformerNames(): NSArray<any>;
  transformedValueClass(): any;
  allowsReverseTransformation(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

