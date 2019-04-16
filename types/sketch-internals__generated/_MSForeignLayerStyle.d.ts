interface _MSForeignLayerStyleUninitialized<InitializedType = _MSForeignLayerStyle> extends MSForeignStyleUninitialized<_MSForeignLayerStyle> {}
interface _MSForeignLayerStyle extends MSForeignStyle {
}
declare const _MSForeignLayerStyle: {
  alloc(): _MSForeignLayerStyleUninitialized;
  class(): _MSForeignLayerStyle;
}

