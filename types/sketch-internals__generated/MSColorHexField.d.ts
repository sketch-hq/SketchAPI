interface MSColorHexFieldUninitialized<InitializedType = MSColorHexField> extends NSTextFieldUninitialized<MSColorHexField> {}
interface MSColorHexField extends NSTextField {
}
declare const MSColorHexField: {
  alloc(): MSColorHexFieldUninitialized;
  class(): MSColorHexField;
}

