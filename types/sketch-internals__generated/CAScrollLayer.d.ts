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
  layer(): CAScrollLayer;
  defaultValueForKey(key: NSString | string): any;
  needsDisplayForKey(key: NSString | string): boolean;
  defaultActionForKey(event: NSString | string): any;
  layerWithRemoteClientId(client_id: number): CALayer;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

