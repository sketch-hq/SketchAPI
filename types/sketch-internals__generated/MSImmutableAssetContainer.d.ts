interface MSImmutableAssetContainerUninitialized<InitializedType = MSImmutableAssetContainer> extends _MSImmutableAssetContainerUninitialized<MSImmutableAssetContainer> {}

interface MSImmutableAssetContainer extends _MSImmutableAssetContainer {
}

declare const MSImmutableAssetContainer: {
  alloc(): MSImmutableAssetContainerUninitialized;
  class(): MSImmutableAssetContainer;
}

