interface MSImmutableForeignStyleUninitialized<InitializedType = MSImmutableForeignStyle> extends _MSImmutableForeignStyleUninitialized<MSImmutableForeignStyle> {}

interface MSImmutableForeignStyle extends _MSImmutableForeignStyle {
}

declare const MSImmutableForeignStyle: {
  alloc(): MSImmutableForeignStyleUninitialized;
  class(): MSImmutableForeignStyle;
}

