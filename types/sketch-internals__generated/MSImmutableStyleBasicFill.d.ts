interface MSImmutableStyleBasicFillUninitialized<InitializedType = MSImmutableStyleBasicFill> extends _MSImmutableStyleBasicFillUninitialized<MSImmutableStyleBasicFill> {}

interface MSImmutableStyleBasicFill extends _MSImmutableStyleBasicFill {

  hasOpacity(): boolean;
}

declare const MSImmutableStyleBasicFill: {
  alloc(): MSImmutableStyleBasicFillUninitialized;
  class(): MSImmutableStyleBasicFill;
}

