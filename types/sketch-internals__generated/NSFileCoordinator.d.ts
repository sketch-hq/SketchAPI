interface NSFileCoordinatorUninitialized<InitializedType = NSFileCoordinator> extends NSObjectUninitialized<NSFileCoordinator> {
  initWithFilePresenter(filePresenterOrNil: any | null): InitializedType;
}

interface NSFileCoordinator extends NSObject {
  coordinateAccessWithIntents_queue_byAccessor(intents: NSArray<any> | any[], queue: NSOperationQueue, accessor: Block): void;
  coordinateReadingItemAtURL_options_error_byAccessor(url: NSURL, options: NSFileCoordinatorReadingOptions, outError: MOPointer<NSError>, reader: Block): void;
  coordinateWritingItemAtURL_options_error_byAccessor(url: NSURL, options: NSFileCoordinatorWritingOptions, outError: MOPointer<NSError>, writer: Block): void;
  coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor(readingURL: NSURL, readingOptions: NSFileCoordinatorReadingOptions, writingURL: NSURL, writingOptions: NSFileCoordinatorWritingOptions, outError: MOPointer<NSError>, readerWriter: Block): void;
  coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor(url1: NSURL, options1: NSFileCoordinatorWritingOptions, url2: NSURL, options2: NSFileCoordinatorWritingOptions, outError: MOPointer<NSError>, writer: Block): void;
  prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_error_byAccessor(readingURLs: NSArray<any> | any[], readingOptions: NSFileCoordinatorReadingOptions, writingURLs: NSArray<any> | any[], writingOptions: NSFileCoordinatorWritingOptions, outError: MOPointer<NSError>, batchAccessor: Block): void;
  itemAtURL_willMoveToURL(oldURL: NSURL, newURL: NSURL): void;
  itemAtURL_didMoveToURL(oldURL: NSURL, newURL: NSURL): void;
  itemAtURL_didChangeUbiquityAttributes(url: NSURL, attributes: NSSet<any>): void;
  cancel(): void;

  purposeIdentifier(): NSString;
  setPurposeIdentifier(purposeIdentifier: NSString | string): void;
}

declare const NSFileCoordinator: {
  alloc(): NSFileCoordinatorUninitialized;
  class(): NSFileCoordinator;
  addFilePresenter(filePresenter: any): void;
  removeFilePresenter(filePresenter: any): void;
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
  filePresenters(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

