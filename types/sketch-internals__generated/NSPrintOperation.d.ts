interface NSPrintOperationUninitialized<InitializedType = NSPrintOperation> extends NSObjectUninitialized<NSPrintOperation> {}
interface NSPrintOperation extends NSObject {
  runOperationModalForWindow_delegate_didRunSelector_contextInfo(docWindow: NSWindow, delegate: any | null, didRunSelector: string | null, contextInfo: void | null): void;
  runOperation(): boolean;
  createContext(): NSGraphicsContext;
  destroyContext(): void;
  deliverResult(): boolean;
  cleanUpOperation(): void;
  setAccessoryView(view: NSView | null): void;
  accessoryView(): NSView;
  setJobStyleHint(hint: NSString | string | null): void;
  jobStyleHint(): NSString;
  setShowPanels(flag: boolean): void;
  showPanels(): boolean;

  copyingOperation(): boolean;
  preferredRenderingQuality(): NSPrintRenderingQuality;
  jobTitle(): NSString;
  setJobTitle(jobTitle: NSString | string): void;
  showsPrintPanel(): boolean;
  setShowsPrintPanel(showsPrintPanel: boolean): void;
  showsProgressPanel(): boolean;
  setShowsProgressPanel(showsProgressPanel: boolean): void;
  printPanel(): NSPrintPanel;
  setPrintPanel(printPanel: NSPrintPanel): void;
  PDFPanel(): NSPDFPanel;
  setPDFPanel(PDFPanel: NSPDFPanel): void;
  canSpawnSeparateThread(): boolean;
  setCanSpawnSeparateThread(canSpawnSeparateThread: boolean): void;
  pageOrder(): NSPrintingPageOrder;
  setPageOrder(pageOrder: NSPrintingPageOrder): void;
  view(): NSView;
  printInfo(): NSPrintInfo;
  setPrintInfo(printInfo: NSPrintInfo): void;
  context(): NSGraphicsContext;
  pageRange(): NSRange;
  currentPage(): NSInteger;
}
declare const NSPrintOperation: {
  alloc(): NSPrintOperationUninitialized;
  class(): NSPrintOperation;  printOperationWithView_printInfo(view: NSView, printInfo: NSPrintInfo): NSPrintOperation;
  PDFOperationWithView_insideRect_toData_printInfo(view: NSView, rect: NSRect, data: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;
  PDFOperationWithView_insideRect_toPath_printInfo(view: NSView, rect: NSRect, path: NSString | string, printInfo: NSPrintInfo): NSPrintOperation;
  EPSOperationWithView_insideRect_toData_printInfo(view: NSView, rect: NSRect, data: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;
  EPSOperationWithView_insideRect_toPath_printInfo(view: NSView, rect: NSRect, path: NSString | string, printInfo: NSPrintInfo): NSPrintOperation;
  printOperationWithView(view: NSView): NSPrintOperation;
  PDFOperationWithView_insideRect_toData(view: NSView, rect: NSRect, data: NSMutableData): NSPrintOperation;
  EPSOperationWithView_insideRect_toData(view: NSView, rect: NSRect, data: NSMutableData | null): NSPrintOperation;

  currentOperation(): NSPrintOperation;
  setCurrentOperation(currentOperation: NSPrintOperation): void;

}

