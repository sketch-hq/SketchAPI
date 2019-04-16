interface MSImmutableRulerDataUninitialized<InitializedType = MSImmutableRulerData> extends _MSImmutableRulerDataUninitialized<MSImmutableRulerData> {}

interface MSImmutableRulerData extends _MSImmutableRulerData {
}

declare const MSImmutableRulerData: {
  alloc(): MSImmutableRulerDataUninitialized;
  class(): MSImmutableRulerData;
}

