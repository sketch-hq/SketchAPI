interface MSMetalRendererUninitialized<InitializedType = MSMetalRenderer> extends NSObjectUninitialized<MSMetalRenderer> {}
interface MSMetalRenderer extends NSObject, IMSGPURenderer {
}
declare const MSMetalRenderer: {
  alloc(): MSMetalRendererUninitialized;
  class(): MSMetalRenderer;  createWithCompletionHandler(handler: Block): MSMetalRenderer;

}

