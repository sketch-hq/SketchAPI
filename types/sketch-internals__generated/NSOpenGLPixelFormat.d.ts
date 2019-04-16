interface NSOpenGLPixelFormatUninitialized<InitializedType = NSOpenGLPixelFormat> extends NSObjectUninitialized<NSOpenGLPixelFormat> {
  initWithCGLPixelFormatObj(format: _CGLPixelFormatObject): InitializedType;
  initWithAttributes(attribs: NSOpenGLPixelFormatAttribute): InitializedType;
  initWithData(attribs: NSData): InitializedType;
}
interface NSOpenGLPixelFormat extends NSObject, INSCoding {
  attributes(): NSData;
  setAttributes(attribs: NSData): void;
  getValues_forAttribute_forVirtualScreen(vals: GLint, attrib: NSOpenGLPixelFormatAttribute, screen: GLint): void;

  numberOfVirtualScreens(): GLint;
  CGLPixelFormatObj(): _CGLPixelFormatObject;
}
declare const NSOpenGLPixelFormat: {
  alloc(): NSOpenGLPixelFormatUninitialized;
  class(): NSOpenGLPixelFormat;
}

