interface COSGifAnimatorUninitialized<InitializedType = COSGifAnimator> extends NSObjectUninitialized<COSGifAnimator> {}
interface COSGifAnimator extends NSObject {

  fps(): CGFloat;
  setFps(fps: CGFloat): void;
  seconds(): CGFloat;
  setSeconds(seconds: CGFloat): void;
  size(): NSSize;
  setSize(size: NSSize): void;
}
declare const COSGifAnimator: {
  alloc(): COSGifAnimatorUninitialized;
  class(): COSGifAnimator;
}

