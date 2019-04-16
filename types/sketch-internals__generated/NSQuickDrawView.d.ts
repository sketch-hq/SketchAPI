interface NSQuickDrawViewUninitialized<InitializedType = NSQuickDrawView> extends NSViewUninitialized<NSQuickDrawView> {}
interface NSQuickDrawView extends NSView {
  qdPort(): void;
}
declare const NSQuickDrawView: {
  alloc(): NSQuickDrawViewUninitialized;
  class(): NSQuickDrawView;
}

