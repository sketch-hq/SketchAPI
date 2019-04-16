interface NSOpenGLContextUninitialized<InitializedType = NSOpenGLContext> extends NSObjectUninitialized<NSOpenGLContext> {
  initWithFormat_shareContext(format: NSOpenGLPixelFormat, share: NSOpenGLContext | null): InitializedType;
  initWithCGLContextObj(context: _CGLContextObject): InitializedType;
}
interface NSOpenGLContext extends NSObject, INSLocking {
  setView(view: NSView | null): void;
  setFullScreen(): void;
  setOffScreen_width_height_rowbytes(baseaddr: void, width: GLsizei, height: GLsizei, rowbytes: GLint): void;
  clearDrawable(): void;
  update(): void;
  flushBuffer(): void;
  makeCurrentContext(): void;
  copyAttributesFromContext_withMask(context: NSOpenGLContext, mask: GLbitfield): void;
  setValues_forParameter(vals: GLint, param: NSOpenGLContextParameter): void;
  getValues_forParameter(vals: GLint, param: NSOpenGLContextParameter): void;
  createTexture_fromView_internalFormat(target: GLenum, view: NSView, format: GLenum): void;
  setPixelBuffer_cubeMapFace_mipMapLevel_currentVirtualScreen(pixelBuffer: NSOpenGLPixelBuffer, face: GLenum, level: GLint, screen: GLint): void;
  pixelBuffer(): NSOpenGLPixelBuffer;
  pixelBufferCubeMapFace(): GLenum;
  pixelBufferMipMapLevel(): GLint;
  setTextureImageToPixelBuffer_colorBuffer(pixelBuffer: NSOpenGLPixelBuffer, source: GLenum): void;

  pixelFormat(): NSOpenGLPixelFormat;
  view(): NSView;
  setView(view: NSView): void;
  currentVirtualScreen(): GLint;
  setCurrentVirtualScreen(currentVirtualScreen: GLint): void;
  CGLContextObj(): _CGLContextObject;
}
declare const NSOpenGLContext: {
  alloc(): NSOpenGLContextUninitialized;
  class(): NSOpenGLContext;  clearCurrentContext(): void;

  currentContext(): NSOpenGLContext;

}

