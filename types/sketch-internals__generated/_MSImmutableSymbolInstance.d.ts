interface _MSImmutableSymbolInstanceUninitialized<InitializedType = _MSImmutableSymbolInstance> extends MSImmutableStyledLayerUninitialized<_MSImmutableSymbolInstance> {}
interface _MSImmutableSymbolInstance extends MSImmutableStyledLayer {

  horizontalSpacing(): CGFloat;
  scale(): CGFloat;
  symbolID(): NSString;
  verticalSpacing(): CGFloat;
  overrideValues(): NSArray<any>;
}
declare const _MSImmutableSymbolInstance: {
  alloc(): _MSImmutableSymbolInstanceUninitialized;
  class(): _MSImmutableSymbolInstance;
}

