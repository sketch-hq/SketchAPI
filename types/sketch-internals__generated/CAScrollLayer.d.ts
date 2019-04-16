interface CAScrollLayerUninitialized<InitializedType = CAScrollLayer> extends CALayerUninitialized<CAScrollLayer> {}
interface CAScrollLayer extends CALayer {
  scrollToPoint(p: CGPoint): void;
  scrollToRect(r: CGRect): void;

  scrollMode(): CAScrollLayerScrollMode;
  setScrollMode(scrollMode: CAScrollLayerScrollMode): void;
}
declare const CAScrollLayer: {
  alloc(): CAScrollLayerUninitialized;
  class(): CAScrollLayer;
}

