interface MSOpenGLLayerUninitialized<InitializedType = MSOpenGLLayer> extends NSOpenGLLayerUninitialized<MSOpenGLLayer> {}

interface MSOpenGLLayer extends NSOpenGLLayer {

  shareContext(): NSOpenGLContext;
  setShareContext(shareContext: NSOpenGLContext): void;
}

declare const MSOpenGLLayer: {
  alloc(): MSOpenGLLayerUninitialized;
  class(): MSOpenGLLayer;
}

