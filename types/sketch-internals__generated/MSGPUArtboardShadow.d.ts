interface MSGPUArtboardShadowUninitialized<InitializedType = MSGPUArtboardShadow> extends NSObjectUninitialized<MSGPUArtboardShadow> {
  initWithRenderer(renderer: any): InitializedType;
}
interface MSGPUArtboardShadow extends NSObject {
  minimumArtboardSizeForDrawingShadow(): CGFloat;
  cornerSize(): CGFloat;
  cornerSourceSize(): CGFloat;

  texture(): any;
  selectedTexture(): any;
}
declare const MSGPUArtboardShadow: {
  alloc(): MSGPUArtboardShadowUninitialized;
  class(): MSGPUArtboardShadow;
}

