interface _MSImmutableGradientStopUninitialized<InitializedType = _MSImmutableGradientStop> extends MSImmutableModelObjectUninitialized<_MSImmutableGradientStop> {}
interface _MSImmutableGradientStop extends MSImmutableModelObject {

  position(): CGFloat;
  color(): MSImmutableColor;
}
declare const _MSImmutableGradientStop: {
  alloc(): _MSImmutableGradientStopUninitialized;
  class(): _MSImmutableGradientStop;
}

