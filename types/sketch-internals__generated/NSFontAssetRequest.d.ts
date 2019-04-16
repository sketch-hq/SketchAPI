interface NSFontAssetRequestUninitialized<InitializedType = NSFontAssetRequest> extends NSObjectUninitialized<NSFontAssetRequest> {
  initWithFontDescriptors_options(fontDescriptors: NSArray<any> | any[], options: NSFontAssetRequestOptions): InitializedType;
}
interface NSFontAssetRequest extends NSObject, INSProgressReporting {
  downloadFontAssetsWithCompletionHandler(completionHandler: Block): void;

  downloadedFontDescriptors(): NSArray<any>;
  progress(): NSProgress;
}
declare const NSFontAssetRequest: {
  alloc(): NSFontAssetRequestUninitialized;
  class(): NSFontAssetRequest;
}

