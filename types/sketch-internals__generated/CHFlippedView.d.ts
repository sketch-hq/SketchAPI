interface CHFlippedViewUninitialized<InitializedType = CHFlippedView> extends NSViewUninitialized<CHFlippedView> {}
interface CHFlippedView extends NSView {
}
declare const CHFlippedView: {
  alloc(): CHFlippedViewUninitialized;
  class(): CHFlippedView;
}

