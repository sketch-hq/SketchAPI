interface MSImmutableStyleShadowUninitialized<InitializedType = MSImmutableStyleShadow> extends _MSImmutableStyleShadowUninitialized<MSImmutableStyleShadow> {}

interface MSImmutableStyleShadow extends _MSImmutableStyleShadow {
  addSpread_withInput_output_filter(spread: CGFloat, input: NSString | string, output: NSString | string, filter: MSSVGFilter): MSSVGMorphology;
  addBlurWithRadius_input_output_filter(radius: CGFloat, input: NSString | string, output: NSString | string, filter: MSSVGFilter): MSSVGGaussianBlur;
  addCompositeMask_mask_output_filter(src: NSString | string, mask: NSString | string, output: NSString | string, filter: MSSVGFilter): MSSVGComposite;
  addOffsetTo_dx_dy_output_filter(input: NSString | string, dx: CGFloat, dy: CGFloat, output: NSString | string, filter: MSSVGFilter): MSSVGOffset;
  addColorMatrix_color_output_filter(input: NSString | string, color: MSImmutableColor, output: NSString | string, filter: MSSVGFilter): MSSVGColorMatrix;
  addSVGFilterWithParent_exporter_index(parent: MSImmutableStyle, exporter: SketchSVGExporter, index: NSUInteger): void;
}

declare const MSImmutableStyleShadow: {
  alloc(): MSImmutableStyleShadowUninitialized;
  class(): MSImmutableStyleShadow;
}

