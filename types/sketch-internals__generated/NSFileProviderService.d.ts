interface NSFileProviderServiceUninitialized<InitializedType = NSFileProviderService> extends NSObjectUninitialized<NSFileProviderService> {}
interface NSFileProviderService extends NSObject {
  getFileProviderConnectionWithCompletionHandler(completionHandler: Block): void;

  name(): NSFileProviderServiceName;
}
declare const NSFileProviderService: {
  alloc(): NSFileProviderServiceUninitialized;
  class(): NSFileProviderService;
}

