interface MSCoreImageQueueUninitialized<InitializedType = MSCoreImageQueue> extends NSObjectUninitialized<MSCoreImageQueue> {}
interface MSCoreImageQueue extends NSObject {
}
declare const MSCoreImageQueue: {
  alloc(): MSCoreImageQueueUninitialized;
  class(): MSCoreImageQueue;  drawImage_withEffect_inRect_fromObject_context_colorSpace_options(imageRef: CGImageRef, effect: MSCoreImageEffect, rect: CGRect, source: any, contextRef: CGContextRef, colorSpace: CGColorSpaceRef, options: MSRenderingRequestOptions): void;
  cachedImage_withEffect_fromObject_colorSpace(imageRef: CGImageRef, effect: MSCoreImageEffect, source: any, colorSpace: CGColorSpaceRef): MSLayerCachedImage;
  averageLuminanceOfImage(inputImage: CGImageRef): CGFloat;

}

