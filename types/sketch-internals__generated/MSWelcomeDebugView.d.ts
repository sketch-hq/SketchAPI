interface MSWelcomeDebugViewUninitialized<InitializedType = MSWelcomeDebugView> extends NSViewUninitialized<MSWelcomeDebugView> {}
interface MSWelcomeDebugView extends NSView {
}
declare const MSWelcomeDebugView: {
  alloc(): MSWelcomeDebugViewUninitialized;
  class(): MSWelcomeDebugView;
}

