interface MSImmutableStylePartUninitialized<InitializedType = MSImmutableStylePart> extends _MSImmutableStylePartUninitialized<MSImmutableStylePart> {}

interface MSImmutableStylePart extends _MSImmutableStylePart, IMSStylePart {

  isEnabled(): boolean;
}

declare const MSImmutableStylePart: {
  alloc(): MSImmutableStylePartUninitialized;
  class(): MSImmutableStylePart;
}

