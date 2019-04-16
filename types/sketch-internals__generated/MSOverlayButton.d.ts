interface MSOverlayButtonUninitialized<InitializedType = MSOverlayButton> extends MSInspectorButtonUninitialized<MSOverlayButton> {}
interface MSOverlayButton extends MSInspectorButton {
}
declare const MSOverlayButton: {
  alloc(): MSOverlayButtonUninitialized;
  class(): MSOverlayButton;
}

