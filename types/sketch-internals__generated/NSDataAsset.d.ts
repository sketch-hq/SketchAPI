interface NSDataAssetUninitialized<InitializedType = NSDataAsset> extends NSObjectUninitialized<NSDataAsset> {
  initWithName(name: NSDataAssetName): InitializedType;
  initWithName_bundle(name: NSDataAssetName, bundle: NSBundle): InitializedType;
}
interface NSDataAsset extends NSObject, INSCopying {

  name(): NSDataAssetName;
  data(): NSData;
  typeIdentifier(): NSString;
}
declare const NSDataAsset: {
  alloc(): NSDataAssetUninitialized;
  class(): NSDataAsset;
}

