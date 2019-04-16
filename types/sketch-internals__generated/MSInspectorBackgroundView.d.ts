interface MSInspectorBackgroundViewUninitialized<InitializedType = MSInspectorBackgroundView> extends MSThemedColorViewUninitialized<MSInspectorBackgroundView> {}
interface MSInspectorBackgroundView extends MSThemedColorView {
}
declare const MSInspectorBackgroundView: {
  alloc(): MSInspectorBackgroundViewUninitialized;
  class(): MSInspectorBackgroundView;
}

