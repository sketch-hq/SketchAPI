interface NSSimpleCStringUninitialized<InitializedType = NSSimpleCString> extends NSStringUninitialized<NSSimpleCString> {}
interface NSSimpleCString extends NSString {
}
declare const NSSimpleCString: {
  alloc(): NSSimpleCStringUninitialized;
  class(): NSSimpleCString;
}

