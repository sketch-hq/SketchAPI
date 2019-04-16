interface NSExtensionContextUninitialized<InitializedType = NSExtensionContext> extends NSObjectUninitialized<NSExtensionContext> {}
interface NSExtensionContext extends NSObject {
  completeRequestReturningItems_completionHandler(items: NSArray<any> | any[] | null, completionHandler: Block): void;
  cancelRequestWithError(error: NSError): void;
  openURL_completionHandler(URL: NSURL, completionHandler: Block): void;

  inputItems(): NSArray<any>;
}
declare const NSExtensionContext: {
  alloc(): NSExtensionContextUninitialized;
  class(): NSExtensionContext;
}

