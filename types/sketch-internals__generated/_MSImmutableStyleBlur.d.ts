interface _MSImmutableStyleBlurUninitialized<InitializedType = _MSImmutableStyleBlur> extends MSImmutableStylePartUninitialized<_MSImmutableStyleBlur> {}
interface _MSImmutableStyleBlur extends MSImmutableStylePart {

  center(): NSPoint;
  motionAngle(): CGFloat;
  radius(): CGFloat;
  saturation(): CGFloat;
  type(): MSStyleBlurType;
}
declare const _MSImmutableStyleBlur: {
  alloc(): _MSImmutableStyleBlurUninitialized;
  class(): _MSImmutableStyleBlur;
}

