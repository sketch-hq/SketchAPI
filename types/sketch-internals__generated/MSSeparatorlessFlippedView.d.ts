interface MSSeparatorlessFlippedViewUninitialized<InitializedType = MSSeparatorlessFlippedView> extends MSSeparatorlessViewUninitialized<MSSeparatorlessFlippedView> {}
interface MSSeparatorlessFlippedView extends MSSeparatorlessView {
}
declare const MSSeparatorlessFlippedView: {
  alloc(): MSSeparatorlessFlippedViewUninitialized;
  class(): MSSeparatorlessFlippedView;
}

