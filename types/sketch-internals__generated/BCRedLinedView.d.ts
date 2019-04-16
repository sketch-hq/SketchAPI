interface BCRedLinedViewUninitialized<InitializedType = BCRedLinedView> extends NSViewUninitialized<BCRedLinedView> {}
interface BCRedLinedView extends NSView {
}
declare const BCRedLinedView: {
  alloc(): BCRedLinedViewUninitialized;
  class(): BCRedLinedView;
}

