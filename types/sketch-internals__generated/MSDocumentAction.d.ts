interface MSDocumentActionUninitialized<InitializedType = MSDocumentAction> extends MSActionUninitialized<MSDocumentAction> {
  initWithDocument(doc: MSDocument): InitializedType;
}
interface MSDocumentAction extends MSAction {
  touchBarItem(): NSTouchBarItem;
  makeTouchBarItem(): NSTouchBarItem;
  makeTouchBarItemButton(): NSButton;
  touchBarItemButtonShouldShowState(): boolean;
  refreshTouchBarItem(): void;
  showTouchBarPopover(sender: any): void;
  isTouchBarItemSelected(): boolean;
  shouldUseImageForTouchBarItem(): boolean;
  touchBarImage(): NSImage;
  touchBarItemSizing(): MSTouchBarItemSizing;
  selectedLayers(): MSLayerArray;
  isInNormalHandler(): boolean;
  currentHandler(): MSEventHandler;
  toggleHandlerClass(handlerClass: any): MSEventHandler;
  setCurrentHandlerClass(handlerClass: any): MSEventHandler;
  switchToNormalHandler(): void;
  currentPage(): MSPage;
  contentDrawView(): MSContentDrawView;
  refreshOverlay(): void;
  repopulateMenu(menu: NSMenu): void;

  document(): MSDocument;
  setDocument(document: MSDocument): void;
  historyMomentTitle(): NSString;
  cachedTouchedBarItem(): NSTouchBarItem;
  setCachedTouchedBarItem(cachedTouchedBarItem: NSTouchBarItem): void;
}
declare const MSDocumentAction: {
  alloc(): MSDocumentActionUninitialized;
  class(): MSDocumentAction;
}

