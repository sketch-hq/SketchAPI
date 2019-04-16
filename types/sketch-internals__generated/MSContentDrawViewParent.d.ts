interface MSContentDrawViewParentUninitialized<InitializedType = MSContentDrawViewParent> extends NSViewUninitialized<MSContentDrawViewParent> {}
interface MSContentDrawViewParent extends NSView {

  contentDrawView(): MSContentDrawView;
  setContentDrawView(contentDrawView: MSContentDrawView): void;
}
declare const MSContentDrawViewParent: {
  alloc(): MSContentDrawViewParentUninitialized;
  class(): MSContentDrawViewParent;
}

