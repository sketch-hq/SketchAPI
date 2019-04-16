interface MSOpenGLTextureUninitialized<InitializedType = MSOpenGLTexture> extends NSObjectUninitialized<MSOpenGLTexture> {
  initWithTextureID_width_height(textureID: GLuint, width: NSUInteger, height: NSUInteger): InitializedType;
}
interface MSOpenGLTexture extends NSObject, IMSGPUTexture {

  textureID(): GLuint;
  filter(): MSOpenGLTextureFilter;
  setFilter(filter: MSOpenGLTextureFilter): void;
}
declare const MSOpenGLTexture: {
  alloc(): MSOpenGLTextureUninitialized;
  class(): MSOpenGLTexture;
}

