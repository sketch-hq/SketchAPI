interface MSImmutableStylePartUninitialized<InitializedType = MSImmutableStylePart> extends _MSImmutableStylePartUninitialized<MSImmutableStylePart> {}
interface MSImmutableStylePart extends _MSImmutableStylePart, IMSStylePart {
}
declare const MSImmutableStylePart: {
  alloc(): MSImmutableStylePartUninitialized;
  class(): MSImmutableStylePart;
}

