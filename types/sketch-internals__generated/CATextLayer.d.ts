interface CATextLayerUninitialized<InitializedType = CATextLayer> extends CALayerUninitialized<CATextLayer> {}
interface CATextLayer extends CALayer {

  string(): any;
  setString(string: any): void;
  font(): CFTypeRef;
  setFont(font: CFTypeRef): void;
  fontSize(): CGFloat;
  setFontSize(fontSize: CGFloat): void;
  foregroundColor(): CGColorRef;
  setForegroundColor(foregroundColor: CGColorRef): void;
  wrapped(): boolean;
  setWrapped(wrapped: boolean): void;
  truncationMode(): CATextLayerTruncationMode;
  setTruncationMode(truncationMode: CATextLayerTruncationMode): void;
  alignmentMode(): CATextLayerAlignmentMode;
  setAlignmentMode(alignmentMode: CATextLayerAlignmentMode): void;
  allowsFontSubpixelQuantization(): boolean;
  setAllowsFontSubpixelQuantization(allowsFontSubpixelQuantization: boolean): void;
}
declare const CATextLayer: {
  alloc(): CATextLayerUninitialized;
  class(): CATextLayer;
}

