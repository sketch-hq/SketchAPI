interface MSDataMenuProviderUninitialized<InitializedType = MSDataMenuProvider> extends NSObjectUninitialized<MSDataMenuProvider> {
  initWithDataManager_presentationContext(dataManager: MSDataSupplierManager, presentationContext: MSDataMenuPresentationContext): InitializedType;
}
interface MSDataMenuProvider extends NSObject, INSMenuDelegate {
  menuNeedsUpdate(menu: NSMenu): void;

  dataManager(): MSDataSupplierManager;
  delegate(): any;
  setDelegate(delegate: any): void;
  presentationContext(): MSDataMenuPresentationContext;
}
declare const MSDataMenuProvider: {
  alloc(): MSDataMenuProviderUninitialized;
  class(): MSDataMenuProvider;
}

