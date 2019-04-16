interface _MSImmutableStyleReflectionUninitialized<InitializedType = _MSImmutableStyleReflection> extends MSImmutableStylePartUninitialized<_MSImmutableStyleReflection> {}

interface _MSImmutableStyleReflection extends MSImmutableStylePart {

  distance(): CGFloat;
  strength(): CGFloat;
}

declare const _MSImmutableStyleReflection: {
  alloc(): _MSImmutableStyleReflectionUninitialized;
  class(): _MSImmutableStyleReflection;
}

