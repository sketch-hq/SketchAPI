interface NSPDFPanelUninitialized<InitializedType = NSPDFPanel> extends NSObjectUninitialized<NSPDFPanel> {}
interface NSPDFPanel extends NSObject {
  beginSheetWithPDFInfo_modalForWindow_completionHandler(pdfInfo: NSPDFInfo, docWindow: NSWindow | null, completionHandler: Block): void;

  accessoryController(): NSViewController;
  setAccessoryController(accessoryController: NSViewController): void;
  options(): NSPDFPanelOptions;
  setOptions(options: NSPDFPanelOptions): void;
  defaultFileName(): NSString;
  setDefaultFileName(defaultFileName: NSString | string): void;
}
declare const NSPDFPanel: {
  alloc(): NSPDFPanelUninitialized;
  class(): NSPDFPanel;  panel(): NSPDFPanel;

}

