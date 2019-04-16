interface DrawingViewUninitialized<InitializedType = DrawingView> extends NSViewUninitialized<DrawingView> {}
interface DrawingView extends NSView {
}
declare const DrawingView: {
  alloc(): DrawingViewUninitialized;
  class(): DrawingView;
}

