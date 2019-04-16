interface MSFontWatcherUninitialized<InitializedType = MSFontWatcher> extends NSObjectUninitialized<MSFontWatcher> {
  initWithDocumentController(documentController: NSDocumentController): InitializedType;
}
interface MSFontWatcher extends NSObject {
}
declare const MSFontWatcher: {
  alloc(): MSFontWatcherUninitialized;
  class(): MSFontWatcher;
}

