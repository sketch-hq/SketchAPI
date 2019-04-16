interface _MSStyleBlurUninitialized<InitializedType = _MSStyleBlur> extends MSStylePartUninitialized<_MSStyleBlur> {}

interface _MSStyleBlur extends MSStylePart {

  center(): NSPoint;
  setCenter(center: NSPoint): void;
  motionAngle(): CGFloat;
  setMotionAngle(motionAngle: CGFloat): void;
  radius(): CGFloat;
  setRadius(radius: CGFloat): void;
  saturation(): CGFloat;
  setSaturation(saturation: CGFloat): void;
  type(): MSStyleBlurType;
  setType(type: MSStyleBlurType): void;
}

declare const _MSStyleBlur: {
  alloc(): _MSStyleBlurUninitialized;
  class(): _MSStyleBlur;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

