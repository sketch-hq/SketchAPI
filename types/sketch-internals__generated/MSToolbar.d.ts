interface MSToolbarUninitialized<InitializedType = MSToolbar> extends NSToolbarUninitialized<MSToolbar> {}
interface MSToolbar extends NSToolbar {
  toolbarHeight_ms(): CGFloat;
}
declare const MSToolbar: {
  alloc(): MSToolbarUninitialized;
  class(): MSToolbar;
}

