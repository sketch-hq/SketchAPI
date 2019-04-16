interface CAMetalLayerUninitialized<InitializedType = CAMetalLayer> extends CALayerUninitialized<CAMetalLayer> {}

interface CAMetalLayer extends CALayer {
  nextDrawable(): any;

  device(): any;
  setDevice(device: any): void;
  pixelFormat(): MTLPixelFormat;
  setPixelFormat(pixelFormat: MTLPixelFormat): void;
  framebufferOnly(): boolean;
  setFramebufferOnly(framebufferOnly: boolean): void;
  drawableSize(): CGSize;
  setDrawableSize(drawableSize: CGSize): void;
  maximumDrawableCount(): NSUInteger;
  setMaximumDrawableCount(maximumDrawableCount: NSUInteger): void;
  presentsWithTransaction(): boolean;
  setPresentsWithTransaction(presentsWithTransaction: boolean): void;
  colorspace(): CGColorSpaceRef;
  setColorspace(colorspace: CGColorSpaceRef): void;
  wantsExtendedDynamicRangeContent(): boolean;
  setWantsExtendedDynamicRangeContent(wantsExtendedDynamicRangeContent: boolean): void;
  displaySyncEnabled(): boolean;
  setDisplaySyncEnabled(displaySyncEnabled: boolean): void;
  allowsNextDrawableTimeout(): boolean;
  setAllowsNextDrawableTimeout(allowsNextDrawableTimeout: boolean): void;
}

declare const CAMetalLayer: {
  alloc(): CAMetalLayerUninitialized;
  class(): CAMetalLayer;
  layer(): CAMetalLayer;
  defaultValueForKey(key: NSString | string): any;
  needsDisplayForKey(key: NSString | string): boolean;
  defaultActionForKey(event: NSString | string): any;
  layerWithRemoteClientId(client_id: number): CALayer;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

