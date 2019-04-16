interface MSFlexibleColorHexStringTransformerUninitialized<InitializedType = MSFlexibleColorHexStringTransformer> extends MSColorHexStringTransformerUninitialized<MSFlexibleColorHexStringTransformer> {}

interface MSFlexibleColorHexStringTransformer extends MSColorHexStringTransformer {
}

declare const MSFlexibleColorHexStringTransformer: {
  alloc(): MSFlexibleColorHexStringTransformerUninitialized;
  class(): MSFlexibleColorHexStringTransformer;
  accessInstanceVariablesDirectly(): boolean;

}

