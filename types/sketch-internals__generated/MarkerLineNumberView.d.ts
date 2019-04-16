interface MarkerLineNumberViewUninitialized<InitializedType = MarkerLineNumberView> extends NoodleLineNumberViewUninitialized<MarkerLineNumberView> {}
interface MarkerLineNumberView extends NoodleLineNumberView {
}
declare const MarkerLineNumberView: {
  alloc(): MarkerLineNumberViewUninitialized;
  class(): MarkerLineNumberView;
}

