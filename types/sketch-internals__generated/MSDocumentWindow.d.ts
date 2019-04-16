interface MSDocumentWindowUninitialized<InitializedType = MSDocumentWindow> extends NSWindowUninitialized<MSDocumentWindow> {}
interface MSDocumentWindow extends NSWindow {

  titleBarBadge(): BCWindowBadge;
  setTitleBarBadge(titleBarBadge: BCWindowBadge): void;
}
declare const MSDocumentWindow: {
  alloc(): MSDocumentWindowUninitialized;
  class(): MSDocumentWindow;
}

