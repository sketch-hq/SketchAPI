interface MSAssetContainerUninitialized<InitializedType = MSAssetContainer> extends _MSAssetContainerUninitialized<MSAssetContainer> {
  initWithAsset_name(asset: any, name: NSString | string | null): InitializedType;
}
interface MSAssetContainer extends _MSAssetContainer {
}
declare const MSAssetContainer: {
  alloc(): MSAssetContainerUninitialized;
  class(): MSAssetContainer;
}

