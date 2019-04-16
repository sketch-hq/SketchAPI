interface MSWelcomeCollectionItemUninitialized<InitializedType = MSWelcomeCollectionItem> extends NSObjectUninitialized<MSWelcomeCollectionItem> {
  initWithController(controller: MSWelcomeWindowController): InitializedType;
}
interface MSWelcomeCollectionItem extends NSObject, IMSWelcomeCollectionItemPreviewImageLoading {

  placeholderImage(): NSImage;
  title(): NSString;
  welcomeWindowController(): MSWelcomeWindowController;
  setWelcomeWindowController(welcomeWindowController: MSWelcomeWindowController): void;
}
declare const MSWelcomeCollectionItem: {
  alloc(): MSWelcomeCollectionItemUninitialized;
  class(): MSWelcomeCollectionItem;  bundledTemplatesDirectoryURL(): NSURL;
  userTemplatesDirectoryURL(): NSURL;

}

