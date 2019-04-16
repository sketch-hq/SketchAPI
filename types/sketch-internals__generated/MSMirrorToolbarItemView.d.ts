interface MSMirrorToolbarItemViewUninitialized<InitializedType = MSMirrorToolbarItemView> extends NSViewUninitialized<MSMirrorToolbarItemView> {}
interface MSMirrorToolbarItemView extends NSView {

  controls(): NSArray<any>;
}
declare const MSMirrorToolbarItemView: {
  alloc(): MSMirrorToolbarItemViewUninitialized;
  class(): MSMirrorToolbarItemView;
}

