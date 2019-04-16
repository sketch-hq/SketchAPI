interface NSDocumentControllerUninitialized<InitializedType = NSDocumentController> extends NSObjectUninitialized<NSDocumentController> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSDocumentController extends NSObject, INSCoding, INSMenuItemValidation, INSUserInterfaceValidations {
  documentForURL(url: NSURL): NSDocument;
  documentForWindow(window: NSWindow): NSDocument;
  addDocument(document: NSDocument): void;
  removeDocument(document: NSDocument): void;
  newDocument(sender: any | null): IBAction;
  openUntitledDocumentAndDisplay_error(displayDocument: boolean, outError: MOPointer<NSError>): NSDocument;
  makeUntitledDocumentOfType_error(typeName: NSString | string, outError: MOPointer<NSError>): NSDocument;
  openDocument(sender: any | null): IBAction;
  URLsFromRunningOpenPanel(): NSArray<any>;
  runModalOpenPanel_forTypes(openPanel: NSOpenPanel, types: NSArray<any> | any[] | null): NSInteger;
  beginOpenPanelWithCompletionHandler(completionHandler: Block): void;
  beginOpenPanel_forTypes_completionHandler(openPanel: NSOpenPanel, inTypes: NSArray<any> | any[] | null, completionHandler: Block): void;
  openDocumentWithContentsOfURL_display_completionHandler(url: NSURL, displayDocument: boolean, completionHandler: Block): void;
  makeDocumentWithContentsOfURL_ofType_error(url: NSURL, typeName: NSString | string, outError: MOPointer<NSError>): NSDocument;
  reopenDocumentForURL_withContentsOfURL_display_completionHandler(urlOrNil: NSURL | null, contentsURL: NSURL, displayDocument: boolean, completionHandler: Block): void;
  makeDocumentForURL_withContentsOfURL_ofType_error(urlOrNil: NSURL | null, contentsURL: NSURL, typeName: NSString | string, outError: MOPointer<NSError>): NSDocument;
  saveAllDocuments(sender: any | null): IBAction;
  reviewUnsavedDocumentsWithAlertTitle_cancellable_delegate_didReviewAllSelector_contextInfo(title: NSString | string | null, cancellable: boolean, delegate: any | null, didReviewAllSelector: string | null, contextInfo: void | null): void;
  closeAllDocumentsWithDelegate_didCloseAllSelector_contextInfo(delegate: any | null, didCloseAllSelector: string | null, contextInfo: void | null): void;
  duplicateDocumentWithContentsOfURL_copying_displayName_error(url: NSURL, duplicateByCopying: boolean, displayNameOrNil: NSString | string | null, outError: MOPointer<NSError>): NSDocument;
  standardShareMenuItem(): NSMenuItem;
  presentError_modalForWindow_delegate_didPresentSelector_contextInfo(error: NSError, window: NSWindow, delegate: any | null, didPresentSelector: string | null, contextInfo: void | null): void;
  presentError(error: NSError): boolean;
  willPresentError(error: NSError): NSError;
  clearRecentDocuments(sender: any | null): IBAction;
  noteNewRecentDocument(document: NSDocument): void;
  noteNewRecentDocumentURL(url: NSURL): void;
  typeForContentsOfURL_error(url: NSURL, outError: MOPointer<NSError>): NSString;
  documentClassForType(typeName: NSString | string): any;
  displayNameForType(typeName: NSString | string): NSString;
  validateUserInterfaceItem(item: any): boolean;
  openDocumentWithContentsOfURL_display_error(url: NSURL, displayDocument: boolean, outError: MOPointer<NSError>): any;
  reopenDocumentForURL_withContentsOfURL_error(url: NSURL | null, contentsURL: NSURL, outError: MOPointer<NSError>): boolean;
  fileExtensionsFromType(typeName: NSString | string): NSArray<any>;
  typeFromFileExtension(fileNameExtensionOrHFSFileType: NSString | string): NSString;
  documentForFileName(fileName: NSString | string): any;
  fileNamesFromRunningOpenPanel(): NSArray<any>;
  makeDocumentWithContentsOfFile_ofType(fileName: NSString | string, type: NSString | string): any;
  makeDocumentWithContentsOfURL_ofType(url: NSURL, type: NSString | string): any;
  makeUntitledDocumentOfType(type: NSString | string): any;
  openDocumentWithContentsOfFile_display(fileName: NSString | string, display: boolean): any;
  openDocumentWithContentsOfURL_display(url: NSURL, display: boolean): any;
  openUntitledDocumentOfType_display(type: NSString | string, display: boolean): any;
  setShouldCreateUI(flag: boolean): void;
  shouldCreateUI(): boolean;
  encodeWithCoder(aCoder: NSCoder): void;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  validateUserInterfaceItem(item: any): boolean;

  documents(): NSArray<any>;
  currentDocument(): NSDocument;
  currentDirectory(): NSString;
  autosavingDelay(): NSTimeInterval;
  setAutosavingDelay(autosavingDelay: NSTimeInterval): void;
  hasEditedDocuments(): boolean;
  allowsAutomaticShareMenu(): boolean;
  maximumRecentDocumentCount(): NSUInteger;
  recentDocumentURLs(): NSArray<any>;
  defaultType(): NSString;
  documentClassNames(): NSArray<any>;
}

declare const NSDocumentController: {
  alloc(): NSDocumentControllerUninitialized;
  class(): NSDocumentController;
  enumerateOpenDocuments(block: MSDocumentIteratorBlock): void;
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
  sharedDocumentController(): NSDocumentController;
  accessInstanceVariablesDirectly(): boolean;

}

