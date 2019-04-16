interface _MSAssetContainerUninitialized<InitializedType = _MSAssetContainer> extends MSModelObjectUninitialized<_MSAssetContainer> {}

interface _MSAssetContainer extends MSModelObject {

  name(): NSString;
  setName(name: NSString | string): void;
}

declare const _MSAssetContainer: {
  alloc(): _MSAssetContainerUninitialized;
  class(): _MSAssetContainer;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

