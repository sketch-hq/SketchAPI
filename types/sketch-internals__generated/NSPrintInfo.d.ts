interface NSPrintInfoUninitialized<InitializedType = NSPrintInfo> extends NSObjectUninitialized<NSPrintInfo> {
  initWithDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithCoder(inDecoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
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
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

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
  class(): NSPrintInfo;
  setDefaultPrinter(printer: NSPrinter | null): void;
  sizeForPaperName(name: NSPrinterPaperName | null): NSSize;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  sharedPrintInfo(): NSPrintInfo;
  setSharedPrintInfo(sharedPrintInfo: NSPrintInfo): void;
  defaultPrinter(): NSPrinter;
  accessInstanceVariablesDirectly(): boolean;

}

