interface MSImmutableStyleUninitialized<InitializedType = MSImmutableStyle> extends _MSImmutableStyleUninitialized<MSImmutableStyle> {}
interface MSImmutableStyle extends _MSImmutableStyle {
  clearTextStyle(): void;
  boundingBoxForBiggestShadowSpreadForLayer(layer: MSImmutableLayer): NSRect;
  boundsForPath(path: MSPath): CGRect;
  renderBitmapEffects_bounds_parentCoordinateTransform(image: CIImage, bounds: CGRect, parentCoordinateTransform: CGAffineTransform): CIImage;
  requiresPathDefinition(exporter: SketchSVGExporter): boolean;
  numberOfElementsWithExporter(exporter: SketchSVGExporter): NSUInteger;
  addSVGAttributes_exporter_elementPosition(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter, position: NSUInteger): void;
  borderAtElementPosition_exporter(position: NSInteger, exporter: SketchSVGExporter): MSImmutableStyleBorder;
  fillAtElementPosition_exporter(position: NSInteger, exporter: SketchSVGExporter): MSImmutableStyleFill;

  hasMarkers(): boolean;
  hasMoreThanOneEnabledFill(): boolean;
  hasEnabledShadow(): boolean;
  hasEnabledInnerShadow(): boolean;
  hasEnabledBorder(): boolean;
  hasEnabledFill(): boolean;
  hasBlending(): boolean;
  thickestStroke(): CGFloat;
  thickestInnerStroke(): CGFloat;
  outerPaddingForBiggestStroke(): CGFloat;
  outerPaddingForBiggestShadowSpread(): CGFloat;
  hasEnabledBackgroundBlur(): boolean;
  shadowType(): MSShadowType;
  shadowStrokeType(): MSShadowBorderType;
  firstEnabledShadow(): MSImmutableStyleShadow;
  firstEnabledInnerShadow(): MSImmutableStyleInnerShadow;
  firstEnabledFill(): MSImmutableStyleFill;
  firstEnabledBorder(): MSImmutableStyleBorder;
  enabledFills(): NSArray<any>;
  enabledBorders(): NSArray<any>;
  enabledShadows(): NSArray<any>;
  enabledInnerShadows(): NSArray<any>;
  hasEnabledOpaqueFill(): boolean;
  renderableFills(): NSArray<any>;
}
declare const MSImmutableStyle: {
  alloc(): MSImmutableStyleUninitialized;
  class(): MSImmutableStyle;
}

