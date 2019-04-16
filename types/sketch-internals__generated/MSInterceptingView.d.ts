interface MSInterceptingViewUninitialized<InitializedType = MSInterceptingView> extends NSViewUninitialized<MSInterceptingView> {}
interface MSInterceptingView extends NSView {
}
declare const MSInterceptingView: {
  alloc(): MSInterceptingViewUninitialized;
  class(): MSInterceptingView;
}

