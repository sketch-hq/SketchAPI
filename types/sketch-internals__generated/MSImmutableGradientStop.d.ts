interface MSImmutableGradientStopUninitialized<InitializedType = MSImmutableGradientStop> extends _MSImmutableGradientStopUninitialized<MSImmutableGradientStop> {
  initWithPosition_color(position: CGFloat, color: MSImmutableColor): InitializedType;
}
interface MSImmutableGradientStop extends _MSImmutableGradientStop {
}
declare const MSImmutableGradientStop: {
  alloc(): MSImmutableGradientStopUninitialized;
  class(): MSImmutableGradientStop;
}

