interface NSConstantStringUninitialized<InitializedType = NSConstantString> extends NSSimpleCStringUninitialized<NSConstantString> {}

interface NSConstantString extends NSSimpleCString {
}

declare const NSConstantString: {
  alloc(): NSConstantStringUninitialized;
  class(): NSConstantString;
  availableStringEncodings(): NSStringEncoding;
  defaultCStringEncoding(): NSStringEncoding;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

