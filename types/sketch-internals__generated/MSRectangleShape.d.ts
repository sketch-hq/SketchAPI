interface MSRectangleShapeUninitialized<InitializedType = MSRectangleShape> extends _MSRectangleShapeUninitialized<MSRectangleShape> {}
interface MSRectangleShape extends _MSRectangleShape {
  validateProposedCornerRadiusSizeWithString(radiusString: NSString | string): boolean;
  validateProposedCornerRadiusWithFloat(radius: CGFloat): boolean;
  resetPathsToRect(): void;
  resetPathsToRoundedRect(): void;

  cornerRadiusString(): NSString;
  setCornerRadiusString(cornerRadiusString: NSString | string): void;
  cornerRadiusFloat(): CGFloat;
  setCornerRadiusFloat(cornerRadiusFloat: CGFloat): void;
  normalizedExponentialCornerRadius(): CGFloat;
  setNormalizedExponentialCornerRadius(normalizedExponentialCornerRadius: CGFloat): void;
  hasSmoothCorners(): boolean;
  setHasSmoothCorners(hasSmoothCorners: boolean): void;
  smoothCornersAllowed(): boolean;
  maximumAllowedRadius(): CGFloat;
}
declare const MSRectangleShape: {
  alloc(): MSRectangleShapeUninitialized;
  class(): MSRectangleShape;  looksLikeComponentString(string: NSString | string): boolean;
  componentStringWithValues(values: NSArray<any> | any[]): NSString;
  validateComponentString(string: NSString | string): boolean;
  shapeWithRect_fillColor(rect: NSRect, color: MSColor): MSRectangleShape;

  lastUsedCornerRadius(): CGFloat;
  useSmoothCorners(): boolean;

}

