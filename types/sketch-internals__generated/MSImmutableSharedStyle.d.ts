interface MSImmutableSharedStyleUninitialized<InitializedType = MSImmutableSharedStyle> extends _MSImmutableSharedStyleUninitialized<MSImmutableSharedStyle> {}
interface MSImmutableSharedStyle extends _MSImmutableSharedStyle {

  style(): MSImmutableStyle;
}
declare const MSImmutableSharedStyle: {
  alloc(): MSImmutableSharedStyleUninitialized;
  class(): MSImmutableSharedStyle;
}

