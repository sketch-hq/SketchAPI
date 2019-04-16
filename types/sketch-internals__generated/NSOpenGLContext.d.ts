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
  lock(): void;
  unlock(): void;

  pixelFormat(): NSOpenGLPixelFormat;
  view(): NSView;
  setView(view: NSView): void;
  currentVirtualScreen(): GLint;
  setCurrentVirtualScreen(currentVirtualScreen: GLint): void;
  CGLContextObj(): _CGLContextObject;
}

declare const NSOpenGLContext: {
  alloc(): NSOpenGLContextUninitialized;
  class(): NSOpenGLContext;
  clearCurrentContext(): void;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  currentContext(): NSOpenGLContext;
  accessInstanceVariablesDirectly(): boolean;

}

