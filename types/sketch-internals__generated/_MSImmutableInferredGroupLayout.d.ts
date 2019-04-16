interface _MSImmutableInferredGroupLayoutUninitialized<InitializedType = _MSImmutableInferredGroupLayout> extends MSImmutableGroupLayoutUninitialized<_MSImmutableInferredGroupLayout> {}

interface _MSImmutableInferredGroupLayout extends MSImmutableGroupLayout {

  axis(): NSInteger;
}

declare const _MSImmutableInferredGroupLayout: {
  alloc(): _MSImmutableInferredGroupLayoutUninitialized;
  class(): _MSImmutableInferredGroupLayout;
}

