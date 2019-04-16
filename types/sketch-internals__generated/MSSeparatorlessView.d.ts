interface MSSeparatorlessViewUninitialized<InitializedType = MSSeparatorlessView> extends NSViewUninitialized<MSSeparatorlessView> {}
interface MSSeparatorlessView extends NSView {
}
declare const MSSeparatorlessView: {
  alloc(): MSSeparatorlessViewUninitialized;
  class(): MSSeparatorlessView;
}

