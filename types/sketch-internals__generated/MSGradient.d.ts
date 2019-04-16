interface MSGradientUninitialized<InitializedType = MSGradient> extends _MSGradientUninitialized<MSGradient> {
  initBlankGradient(): InitializedType;
  initWithNSGradient(nsGradient: NSGradient): InitializedType;
}

interface MSGradient extends _MSGradient {
  NSGradientWithColorSpace(colorSpace: NSColorSpace): NSGradient;
  conditionedEllipseLength(): CGFloat;
  pointAtIndex(index: NSUInteger): NSPoint;
  setPoint_atIndex(point: NSPoint, index: NSUInteger): void;
  colorAtIndex(index: NSUInteger): MSColor;
  setColor_atIndex(color: MSColor, index: NSUInteger): void;
  addStopAtPosition(relativePoint: NSPoint): NSInteger;
  addStopAtLength(position: CGFloat): NSUInteger;
  removeStopAtIndex(index: NSUInteger): void;
  convertPointToPosition(p: NSPoint): CGFloat;
  stopAtIndex(index: NSUInteger): MSGradientStop;
  invert(): void;
  rotatePointsBy(degrees: CGFloat): void;
  hasOpacity(): boolean;
  CSSAttributeStringWithMasterAlpha(masterAlpha: CGFloat): NSString;

  svgPositionIsAbsolute(): boolean;
  setSvgPositionIsAbsolute(svgPositionIsAbsolute: boolean): void;
}

declare const MSGradient: {
  alloc(): MSGradientUninitialized;
  class(): MSGradient;
}

