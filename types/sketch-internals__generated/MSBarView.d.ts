interface MSBarViewUninitialized<InitializedType = MSBarView> extends MSGradientViewUninitialized<MSBarView> {}

interface MSBarView extends MSGradientView {
}

declare const MSBarView: {
  alloc(): MSBarViewUninitialized;
  class(): MSBarView;
}

