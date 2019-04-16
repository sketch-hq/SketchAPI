interface MSImmutableGroupLayoutUninitialized<InitializedType = MSImmutableGroupLayout> extends _MSImmutableGroupLayoutUninitialized<MSImmutableGroupLayout> {}
interface MSImmutableGroupLayout extends _MSImmutableGroupLayout {

  isInferredLayout(): boolean;
}
declare const MSImmutableGroupLayout: {
  alloc(): MSImmutableGroupLayoutUninitialized;
  class(): MSImmutableGroupLayout;
}

