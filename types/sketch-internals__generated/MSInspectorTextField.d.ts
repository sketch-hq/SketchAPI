interface MSInspectorTextFieldUninitialized<InitializedType = MSInspectorTextField> extends NSTextFieldUninitialized<MSInspectorTextField> {}
interface MSInspectorTextField extends NSTextField {
}
declare const MSInspectorTextField: {
  alloc(): MSInspectorTextFieldUninitialized;
  class(): MSInspectorTextField;
}

