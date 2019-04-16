interface NSPrintPanelUninitialized<InitializedType = NSPrintPanel> extends NSObjectUninitialized<NSPrintPanel> {}
interface NSPrintPanel extends NSObject {
  addAccessoryController(accessoryController: NSViewController): void;
  removeAccessoryController(accessoryController: NSViewController): void;
  setDefaultButtonTitle(defaultButtonTitle: NSString | string | null): void;
  defaultButtonTitle(): NSString;
  beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalWithPrintInfo(printInfo: NSPrintInfo): NSInteger;
  runModal(): NSInteger;
  setAccessoryView(accessoryView: NSView | null): void;
  accessoryView(): NSView;
  updateFromPrintInfo(): void;
  finalWritePrintInfo(): void;

  accessoryControllers(): NSArray<any>;
  options(): NSPrintPanelOptions;
  setOptions(options: NSPrintPanelOptions): void;
  helpAnchor(): NSHelpAnchorName;
  setHelpAnchor(helpAnchor: NSHelpAnchorName): void;
  jobStyleHint(): NSPrintPanelJobStyleHint;
  setJobStyleHint(jobStyleHint: NSPrintPanelJobStyleHint): void;
  printInfo(): NSPrintInfo;
}
declare const NSPrintPanel: {
  alloc(): NSPrintPanelUninitialized;
  class(): NSPrintPanel;  printPanel(): NSPrintPanel;

}

