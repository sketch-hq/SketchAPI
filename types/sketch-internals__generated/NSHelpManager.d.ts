interface NSHelpManagerUninitialized<InitializedType = NSHelpManager> extends NSObjectUninitialized<NSHelpManager> {}
interface NSHelpManager extends NSObject {
  setContextHelp_forObject(attrString: NSAttributedString, object: any): void;
  removeContextHelpForObject(object: any): void;
  contextHelpForObject(object: any): NSAttributedString;
  showContextHelpForObject_locationHint(object: any, pt: NSPoint): boolean;
  openHelpAnchor_inBook(anchor: NSHelpAnchorName, book: NSHelpBookName | null): void;
  findString_inBook(query: NSString | string, book: NSHelpBookName | null): void;
  registerBooksInBundle(bundle: NSBundle): boolean;
}
declare const NSHelpManager: {
  alloc(): NSHelpManagerUninitialized;
  class(): NSHelpManager;
  sharedHelpManager(): NSHelpManager;
  contextHelpModeActive(): boolean;
  setContextHelpModeActive(contextHelpModeActive: boolean): void;

}

