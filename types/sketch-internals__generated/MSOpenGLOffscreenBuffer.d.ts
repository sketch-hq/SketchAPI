interface MSOpenGLOffscreenBufferUninitialized<InitializedType = MSOpenGLOffscreenBuffer> extends NSObjectUninitialized<MSOpenGLOffscreenBuffer> {}
interface MSOpenGLOffscreenBuffer extends NSObject {
  beginRendering_height(width: number, height: number): void;
  endRendering(): void;

  context(): NSOpenGLContext;
  setContext(context: NSOpenGLContext): void;
  colorspace(): CGColorSpaceRef;
  setColorspace(colorspace: CGColorSpaceRef): void;
}
declare const MSOpenGLOffscreenBuffer: {
  alloc(): MSOpenGLOffscreenBufferUninitialized;
  class(): MSOpenGLOffscreenBuffer;
}

