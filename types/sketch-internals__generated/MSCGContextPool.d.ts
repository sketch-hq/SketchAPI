interface MSCGContextPoolUninitialized<InitializedType = MSCGContextPool> extends BCObjectPoolUninitialized<MSCGContextPool> {
  initWithSize_colorSpace(contextSize: CGSize, colorSpace: CGColorSpaceRef): InitializedType;
}
interface MSCGContextPool extends BCObjectPool {
  vendsSize_colorSpace(size: CGSize, colorSpace: CGColorSpaceRef): boolean;
  recycleContext(context: CGContextRef): void;
}
declare const MSCGContextPool: {
  alloc(): MSCGContextPoolUninitialized;
  class(): MSCGContextPool;
}

