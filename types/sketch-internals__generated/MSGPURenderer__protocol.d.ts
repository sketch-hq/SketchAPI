interface IMSGPURenderer {
  scheduleDrawBlock(renderBlock: Block): void;
  beginFrameWithClearColor_drawableSize_backingScaleFactor_colorSpace(color: NSColor, drawableSize: CGSize, backingScaleFactor: CGFloat, colorSpace: CGColorSpaceRef): boolean;
  endFrameAndWaitForFrame(wait: boolean): void;
  drawColorQuadInRect_color(rect: CGRect, color: MSRGBAColor): void;
  drawColorTriangleMesh_disableOverlappingFragmentBlending(mesh: MSColorTriangleMesh, disableOverlappingFragmentBlending: boolean): void;
  drawTexturedTriangleMesh_sourceTexture(mesh: MSTexturedTriangleMesh, sourceTexture: any): void;
  drawTexturedQuadInDestinationRect_sourceTexture_bilinearFilter(destinationRect: CGRect, sourceTexture: any, bilinearFilter: boolean): void;
  drawTexturedQuadInDestinationRect_sourceTexture_sourceRect_bilinearFilter(destinationRect: CGRect, sourceTexture: any, sourceRect: CGRect, bilinearFilter: boolean): void;
  drawShadowForArtboardInRect_selected_shadow(rect: CGRect, selected: boolean, shadow: MSGPUArtboardShadow): void;
  setScissorRectWithX_y_width_height(x: number, y: number, width: number, height: number): void;
  resetScissorRect(): void;
  createTextureWithWidth_height(width: NSUInteger, height: NSUInteger): any;
  layer(): CALayer;
  requiresSynchronousRendering(): boolean;
  lockTextures(): void;
  unlockTextures(): void;
  drawColorTriangleMesh_modelViewTransform(mesh: MSColorTriangleMesh, transform: CGAffineTransform): void;
  drawArcVertexBuffer_color_modelViewTransform_backingScale(buffer: MSArcVertexBuffer, color: MSRGBAColor, transform: CGAffineTransform, backingScale: CGFloat): void;
  drawTextureVertexBuffer_sourceTexture_modelViewTransform(buffer: MSTextureVertexBuffer, sourceTexture: any, transform: CGAffineTransform): void;
  maximumTextureSize(): BCIntSize;
}

