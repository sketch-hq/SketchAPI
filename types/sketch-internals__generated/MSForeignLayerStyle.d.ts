interface MSForeignLayerStyleUninitialized<InitializedType = MSForeignLayerStyle> extends _MSForeignLayerStyleUninitialized<MSForeignLayerStyle> {}

interface MSForeignLayerStyle extends _MSForeignLayerStyle {
}

declare const MSForeignLayerStyle: {
  alloc(): MSForeignLayerStyleUninitialized;
  class(): MSForeignLayerStyle;
}

