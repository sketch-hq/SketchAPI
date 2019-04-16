interface _MSImmutableStyleBorderOptionsUninitialized<InitializedType = _MSImmutableStyleBorderOptions> extends MSImmutableStylePartUninitialized<_MSImmutableStyleBorderOptions> {}
interface _MSImmutableStyleBorderOptions extends MSImmutableStylePart {

  dashPattern(): NSArray<any>;
  lineCapStyle(): NSLineCapStyle;
  lineJoinStyle(): NSLineJoinStyle;
}
declare const _MSImmutableStyleBorderOptions: {
  alloc(): _MSImmutableStyleBorderOptionsUninitialized;
  class(): _MSImmutableStyleBorderOptions;
}

