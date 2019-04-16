interface _MSSliceLayerUninitialized<InitializedType = _MSSliceLayer> extends MSLayerUninitialized<_MSSliceLayer> {}
interface _MSSliceLayer extends MSLayer {

  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
  backgroundColor(): MSColor;
  setBackgroundColor(backgroundColor: MSColor): void;
}
declare const _MSSliceLayer: {
  alloc(): _MSSliceLayerUninitialized;
  class(): _MSSliceLayer;
}

