interface MSFilterBarViewUninitialized<InitializedType = MSFilterBarView> extends MSBarViewUninitialized<MSFilterBarView> {}
interface MSFilterBarView extends MSBarView {
}
declare const MSFilterBarView: {
  alloc(): MSFilterBarViewUninitialized;
  class(): MSFilterBarView;
}

