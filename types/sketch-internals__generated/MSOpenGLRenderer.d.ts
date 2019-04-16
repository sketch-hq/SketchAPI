interface MSOpenGLRendererUninitialized<InitializedType = MSOpenGLRenderer> extends NSObjectUninitialized<MSOpenGLRenderer> {}
interface MSOpenGLRenderer extends NSObject, IMSGPURenderer {
}
declare const MSOpenGLRenderer: {
  alloc(): MSOpenGLRendererUninitialized;
  class(): MSOpenGLRenderer;  createWithCompletionHandler(handler: Block): MSOpenGLRenderer;

}

