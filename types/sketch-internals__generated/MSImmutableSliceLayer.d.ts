interface MSImmutableSliceLayerUninitialized<InitializedType = MSImmutableSliceLayer> extends _MSImmutableSliceLayerUninitialized<MSImmutableSliceLayer> {}

interface MSImmutableSliceLayer extends _MSImmutableSliceLayer, IMSLayerWithBackgroundColor {
  immutableBackgroundColor(): MSImmutableColor;

  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
}

declare const MSImmutableSliceLayer: {
  alloc(): MSImmutableSliceLayerUninitialized;
  class(): MSImmutableSliceLayer;
}

