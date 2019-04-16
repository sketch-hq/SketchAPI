interface NSOpenGLViewUninitialized<InitializedType = NSOpenGLView> extends NSViewUninitialized<NSOpenGLView> {
  initWithFrame_pixelFormat(frameRect: NSRect, format: NSOpenGLPixelFormat | null): InitializedType;
}

interface NSOpenGLView extends NSView {
  clearGLContext(): void;

  openGLContext(): NSOpenGLContext;
  setOpenGLContext(openGLContext: NSOpenGLContext): void;
  pixelFormat(): NSOpenGLPixelFormat;
  setPixelFormat(pixelFormat: NSOpenGLPixelFormat): void;
}

declare const NSOpenGLView: {
  alloc(): NSOpenGLViewUninitialized;
  class(): NSOpenGLView;
  defaultPixelFormat(): NSOpenGLPixelFormat;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

