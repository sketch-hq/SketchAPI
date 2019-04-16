interface NSOpenGLPixelBufferUninitialized<InitializedType = NSOpenGLPixelBuffer> extends NSObjectUninitialized<NSOpenGLPixelBuffer> {
  initWithTextureTarget_textureInternalFormat_textureMaxMipMapLevel_pixelsWide_pixelsHigh(target: GLenum, format: GLenum, maxLevel: GLint, pixelsWide: GLsizei, pixelsHigh: GLsizei): InitializedType;
  initWithCGLPBufferObj(pbuffer: _CGLPBufferObject): InitializedType;
}
interface NSOpenGLPixelBuffer extends NSObject {
  CGLPBufferObj(): _CGLPBufferObject;
  pixelsWide(): GLsizei;
  pixelsHigh(): GLsizei;
  textureTarget(): GLenum;
  textureInternalFormat(): GLenum;
  textureMaxMipMapLevel(): GLint;
}
declare const NSOpenGLPixelBuffer: {
  alloc(): NSOpenGLPixelBufferUninitialized;
  class(): NSOpenGLPixelBuffer;
}

