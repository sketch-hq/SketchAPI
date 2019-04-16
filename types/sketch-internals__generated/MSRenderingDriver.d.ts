interface MSRenderingDriverUninitialized<InitializedType = MSRenderingDriver> extends NSObjectUninitialized<MSRenderingDriver> {
  initWithSettings(settings: MSRenderingDriverSettings): InitializedType;
}
interface MSRenderingDriver extends NSObject {
  setupRendererMap(): NSMapTable<any, any>;
  rendererForObject_protocol(object: any, protocol: Protocol): any;
  contextWithName_forCGContext_renderingRequest(name: NSString | string, contextRef: CGContextRef, renderingRequest: MSRenderingRequest): MSRenderingContext;

  settings(): MSRenderingDriverSettings;
}
declare const MSRenderingDriver: {
  alloc(): MSRenderingDriverUninitialized;
  class(): MSRenderingDriver;
}

