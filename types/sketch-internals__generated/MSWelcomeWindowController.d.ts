interface MSWelcomeWindowControllerUninitialized<InitializedType = MSWelcomeWindowController> extends CHWindowControllerUninitialized<MSWelcomeWindowController> {}
interface MSWelcomeWindowController extends CHWindowController, INSMenuDelegate, INSWindowDelegate, IMSWelcomeCollectionViewDelegate {
  pickCollection(sender: any): IBAction;
  openDocument(sender: any): IBAction;
  confirm(sender: any): IBAction;
  //   close(sender: any): IBAction;
  visitLearnPage(sender: any): IBAction;
  subscribeToNewsletter(sender: any): IBAction;
  visitPluginsPage(sender: any): IBAction;
  revealDocumentInFinder(sender: any): IBAction;
  revealDocumentInCloud(sender: any): IBAction;
  clearRecentDocuments(sender: any): IBAction;
  showCollection(collection: MSWelcomeCollection): void;

  closeButton(): NSButton;
  setCloseButton(closeButton: NSButton): void;
  collectionView(): NSCollectionView;
  setCollectionView(collectionView: NSCollectionView): void;
  collectionScrollView(): NSScrollView;
  setCollectionScrollView(collectionScrollView: NSScrollView): void;
  collectionStaticContainerView(): NSView;
  setCollectionStaticContainerView(collectionStaticContainerView: NSView): void;
  collectionsSegmentedControl(): NSSegmentedControl;
  setCollectionsSegmentedControl(collectionsSegmentedControl: NSSegmentedControl): void;
  collectionsWidthConstraint(): NSLayoutConstraint;
  setCollectionsWidthConstraint(collectionsWidthConstraint: NSLayoutConstraint): void;
  confirmButton(): NSButton;
  setConfirmButton(confirmButton: NSButton): void;
  doNotShowAgainButton(): NSButton;
  setDoNotShowAgainButton(doNotShowAgainButton: NSButton): void;
  newsletterButton(): MSCallToActionButton;
  setNewsletterButton(newsletterButton: MSCallToActionButton): void;
  pluginsButton(): MSCallToActionButton;
  setPluginsButton(pluginsButton: MSCallToActionButton): void;
  recentDocumentsContextMenu(): NSMenu;
  setRecentDocumentsContextMenu(recentDocumentsContextMenu: NSMenu): void;
  templatesContextMenu(): NSMenu;
  setTemplatesContextMenu(templatesContextMenu: NSMenu): void;
  versionTextField(): NSTextField;
  setVersionTextField(versionTextField: NSTextField): void;
  collectionToShow(): MSWelcomeCollection;
  numberOfDocuments(): NSInteger;
  previewImageCache(): MSPreviewImageCache;
}
declare const MSWelcomeWindowController: {
  alloc(): MSWelcomeWindowControllerUninitialized;
  class(): MSWelcomeWindowController;  showWelcomeWindowIfAppropriate(): boolean;
  showWelcomeWindowCollection_isLaunching(collection: MSWelcomeCollection, launching: boolean): void;
  hideWelcomeWindowIfNeeded(): boolean;

}

