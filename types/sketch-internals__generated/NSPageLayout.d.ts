interface NSPageLayoutUninitialized<InitializedType = NSPageLayout> extends NSObjectUninitialized<NSPageLayout> {}
interface NSPageLayout extends NSObject {
  addAccessoryController(accessoryController: NSViewController): void;
  removeAccessoryController(accessoryController: NSViewController): void;
  beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalWithPrintInfo(printInfo: NSPrintInfo): NSInteger;
  runModal(): NSInteger;
  setAccessoryView(accessoryView: NSView): void;
  accessoryView(): NSView;
  readPrintInfo(): void;
  writePrintInfo(): void;

  accessoryControllers(): NSArray<any>;
  printInfo(): NSPrintInfo;
}
declare const NSPageLayout: {
  alloc(): NSPageLayoutUninitialized;
  class(): NSPageLayout;  pageLayout(): NSPageLayout;

}

