interface NSPrintInfoUninitialized<InitializedType = NSPrintInfo> extends NSObjectUninitialized<NSPrintInfo> {
  initWithDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithCoder(inDecoder: NSCoder): InitializedType;
  init(): InitializedType;
}
interface NSPrintInfo extends NSObject, INSCopying, INSCoding {
  dictionary(): NSMutableDictionary<any, any>;
  setUpPrintOperationDefaultValues(): void;
  PMPrintSession(): void;
  PMPageFormat(): void;
  PMPrintSettings(): void;
  updateFromPMPageFormat(): void;
  updateFromPMPrintSettings(): void;
  takeSettingsFromPDFInfo(inPDFInfo: NSPDFInfo): void;

  paperName(): NSPrinterPaperName;
  setPaperName(paperName: NSPrinterPaperName): void;
  paperSize(): NSSize;
  setPaperSize(paperSize: NSSize): void;
  orientation(): NSPaperOrientation;
  setOrientation(orientation: NSPaperOrientation): void;
  scalingFactor(): CGFloat;
  setScalingFactor(scalingFactor: CGFloat): void;
  leftMargin(): CGFloat;
  setLeftMargin(leftMargin: CGFloat): void;
  rightMargin(): CGFloat;
  setRightMargin(rightMargin: CGFloat): void;
  topMargin(): CGFloat;
  setTopMargin(topMargin: CGFloat): void;
  bottomMargin(): CGFloat;
  setBottomMargin(bottomMargin: CGFloat): void;
  horizontallyCentered(): boolean;
  setHorizontallyCentered(horizontallyCentered: boolean): void;
  verticallyCentered(): boolean;
  setVerticallyCentered(verticallyCentered: boolean): void;
  horizontalPagination(): NSPrintingPaginationMode;
  setHorizontalPagination(horizontalPagination: NSPrintingPaginationMode): void;
  verticalPagination(): NSPrintingPaginationMode;
  setVerticalPagination(verticalPagination: NSPrintingPaginationMode): void;
  jobDisposition(): NSPrintJobDispositionValue;
  setJobDisposition(jobDisposition: NSPrintJobDispositionValue): void;
  printer(): NSPrinter;
  setPrinter(printer: NSPrinter): void;
  imageablePageBounds(): NSRect;
  localizedPaperName(): NSString;
  printSettings(): NSMutableDictionary<any, any>;
  selectionOnly(): boolean;
  setSelectionOnly(selectionOnly: boolean): void;
}
declare const NSPrintInfo: {
  alloc(): NSPrintInfoUninitialized;
  class(): NSPrintInfo;  setDefaultPrinter(printer: NSPrinter | null): void;
  sizeForPaperName(name: NSPrinterPaperName | null): NSSize;

  sharedPrintInfo(): NSPrintInfo;
  setSharedPrintInfo(sharedPrintInfo: NSPrintInfo): void;
  defaultPrinter(): NSPrinter;

}

