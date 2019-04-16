interface MSVerticalRulerViewUninitialized<InitializedType = MSVerticalRulerView> extends MSRulerViewUninitialized<MSVerticalRulerView> {}
interface MSVerticalRulerView extends MSRulerView {
}
declare const MSVerticalRulerView: {
  alloc(): MSVerticalRulerViewUninitialized;
  class(): MSVerticalRulerView;
}

