interface MSImmutableStyleBorderOptionsUninitialized<InitializedType = MSImmutableStyleBorderOptions> extends _MSImmutableStyleBorderOptionsUninitialized<MSImmutableStyleBorderOptions> {}
interface MSImmutableStyleBorderOptions extends _MSImmutableStyleBorderOptions {
  dashPatternHasVisibleGapsWithStrokeWidth(strokeWidth: CGFloat): boolean;
  addSVGAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;

  CGLineJoin(): CGLineJoin;
  CGLineCap(): CGLineCap;
  hasDashPattern(): boolean;
}
declare const MSImmutableStyleBorderOptions: {
  alloc(): MSImmutableStyleBorderOptionsUninitialized;
  class(): MSImmutableStyleBorderOptions;  validDashLengthFromProposedDashLength(proposed: CGFloat): CGFloat;

}

