interface MSFlippedViewUninitialized<InitializedType = MSFlippedView> extends NSViewUninitialized<MSFlippedView> {}
interface MSFlippedView extends NSView {
}
declare const MSFlippedView: {
  alloc(): MSFlippedViewUninitialized;
  class(): MSFlippedView;
}

