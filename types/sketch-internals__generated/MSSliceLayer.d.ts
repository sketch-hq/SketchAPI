interface MSSliceLayerUninitialized<InitializedType = MSSliceLayer> extends _MSSliceLayerUninitialized<MSSliceLayer> {}

interface MSSliceLayer extends _MSSliceLayer, IMSLayerWithMutableBackgroundColor, IMSColorConvertible {
  convertColorsUsing(converter: any): void;

  backgroundColor(): MSColor;
  setBackgroundColor(backgroundColor: MSColor): void;
}

declare const MSSliceLayer: {
  alloc(): MSSliceLayerUninitialized;
  class(): MSSliceLayer;
  sliceLayerFromLayer(layer: MSLayer): MSSliceLayer;
}

