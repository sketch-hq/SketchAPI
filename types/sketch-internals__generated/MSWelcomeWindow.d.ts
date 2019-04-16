interface MSWelcomeWindowUninitialized<InitializedType = MSWelcomeWindow> extends NSWindowUninitialized<MSWelcomeWindow> {}
interface MSWelcomeWindow extends NSWindow {
}
declare const MSWelcomeWindow: {
  alloc(): MSWelcomeWindowUninitialized;
  class(): MSWelcomeWindow;
}

