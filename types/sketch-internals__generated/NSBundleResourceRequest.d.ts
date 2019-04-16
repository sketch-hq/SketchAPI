interface NSBundleResourceRequestUninitialized<InitializedType = NSBundleResourceRequest> extends NSObjectUninitialized<NSBundleResourceRequest> {
  initWithTags(tags: NSSet<any>): InitializedType;
  initWithTags_bundle(tags: NSSet<any>, bundle: NSBundle): InitializedType;
}
interface NSBundleResourceRequest extends NSObject, INSProgressReporting {
  beginAccessingResourcesWithCompletionHandler(completionHandler: Block): void;
  conditionallyBeginAccessingResourcesWithCompletionHandler(completionHandler: Block): void;
  endAccessingResources(): void;

  loadingPriority(): number;
  setLoadingPriority(loadingPriority: number): void;
  tags(): NSSet<any>;
  bundle(): NSBundle;
  progress(): NSProgress;
}
declare const NSBundleResourceRequest: {
  alloc(): NSBundleResourceRequestUninitialized;
  class(): NSBundleResourceRequest;
}

