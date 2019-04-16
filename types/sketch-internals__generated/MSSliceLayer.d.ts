interface MSSliceLayerUninitialized<InitializedType = MSSliceLayer> extends _MSSliceLayerUninitialized<MSSliceLayer> {}
interface MSSliceLayer extends _MSSliceLayer, IMSLayerWithMutableBackgroundColor, IMSColorConvertible {
}
declare const MSSliceLayer: {
  alloc(): MSSliceLayerUninitialized;
  class(): MSSliceLayer;  sliceLayerFromLayer(layer: MSLayer): MSSliceLayer;

}

