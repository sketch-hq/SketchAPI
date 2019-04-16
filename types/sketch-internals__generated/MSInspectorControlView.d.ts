interface MSInspectorControlViewUninitialized<InitializedType = MSInspectorControlView> extends NSViewUninitialized<MSInspectorControlView> {}
interface MSInspectorControlView extends NSView {
}
declare const MSInspectorControlView: {
  alloc(): MSInspectorControlViewUninitialized;
  class(): MSInspectorControlView;
}

