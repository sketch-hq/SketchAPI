interface MSImmutableStyleBorderUninitialized<InitializedType = MSImmutableStyleBorder> extends _MSImmutableStyleBorderUninitialized<MSImmutableStyleBorder> {}
interface MSImmutableStyleBorder extends _MSImmutableStyleBorder {
  drawBorder_advancedOptions_applyClip_context(path: MSPath, advanced: MSImmutableStyleBorderOptions, canClip: boolean, context: MSRenderingContext): void;
  drawGradientBorder_advancedOptions_originalPath_isArtistic_frame_context(path: MSPath, advanced: MSImmutableStyleBorderOptions, original: MSPath, isArtistic: boolean, rect: NSRect, context: MSRenderingContext): void;
  pathWithExporter(exporter: SketchSVGExporter): MSPath;
  requiresMask(borderOptions: MSImmutableStyleBorderOptions): boolean;
  needsOutlinePath(borderOptions: MSImmutableStyleBorderOptions): boolean;
  addSVGAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;

  borderInset(): CGFloat;
}
declare const MSImmutableStyleBorder: {
  alloc(): MSImmutableStyleBorderUninitialized;
  class(): MSImmutableStyleBorder;
}

