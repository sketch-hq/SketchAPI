interface MSInspectorButtonUninitialized<InitializedType = MSInspectorButton> extends NSButtonUninitialized<MSInspectorButton> {}
interface MSInspectorButton extends NSButton {
}
declare const MSInspectorButton: {
  alloc(): MSInspectorButtonUninitialized;
  class(): MSInspectorButton;
}

