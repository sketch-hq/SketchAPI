interface MSColorHexStringTransformerUninitialized<InitializedType = MSColorHexStringTransformer> extends NSValueTransformerUninitialized<MSColorHexStringTransformer> {}
interface MSColorHexStringTransformer extends NSValueTransformer {

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSColorHexStringTransformer: {
  alloc(): MSColorHexStringTransformerUninitialized;
  class(): MSColorHexStringTransformer;
}

