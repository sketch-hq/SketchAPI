interface MSStyleBlurUninitialized<InitializedType = MSStyleBlur> extends _MSStyleBlurUninitialized<MSStyleBlur> {}

interface MSStyleBlur extends _MSStyleBlur {
  cropRadius(): CGFloat;

  userVisibleMotionAngle(): CGFloat;
  setUserVisibleMotionAngle(userVisibleMotionAngle: CGFloat): void;
}

declare const MSStyleBlur: {
  alloc(): MSStyleBlurUninitialized;
  class(): MSStyleBlur;
}

