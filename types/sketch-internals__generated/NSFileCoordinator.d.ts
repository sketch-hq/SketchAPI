interface NSFileCoordinatorUninitialized<InitializedType = NSFileCoordinator> extends NSObjectUninitialized<NSFileCoordinator> {
  initWithFilePresenter(filePresenterOrNil: any | null): InitializedType;
}
interface NSFileCoordinator extends NSObject {
  coordinateAccessWithIntents_queue_byAccessor(intents: NSArray<any> | any[], queue: NSOperationQueue, accessor: Block): void;
  coordinateReadingItemAtURL_options_error_byAccessor(url: NSURL, options: NSFileCoordinatorReadingOptions, outError: NSError, reader: Block): void;
  coordinateWritingItemAtURL_options_error_byAccessor(url: NSURL, options: NSFileCoordinatorWritingOptions, outError: NSError, writer: Block): void;
  coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor(readingURL: NSURL, readingOptions: NSFileCoordinatorReadingOptions, writingURL: NSURL, writingOptions: NSFileCoordinatorWritingOptions, outError: NSError, readerWriter: Block): void;
  coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor(url1: NSURL, options1: NSFileCoordinatorWritingOptions, url2: NSURL, options2: NSFileCoordinatorWritingOptions, outError: NSError, writer: Block): void;
  prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_error_byAccessor(readingURLs: NSArray<any> | any[], readingOptions: NSFileCoordinatorReadingOptions, writingURLs: NSArray<any> | any[], writingOptions: NSFileCoordinatorWritingOptions, outError: NSError, batchAccessor: Block): void;
  itemAtURL_willMoveToURL(oldURL: NSURL, newURL: NSURL): void;
  itemAtURL_didMoveToURL(oldURL: NSURL, newURL: NSURL): void;
  itemAtURL_didChangeUbiquityAttributes(url: NSURL, attributes: NSSet<any>): void;
  cancel(): void;

  purposeIdentifier(): NSString;
  setPurposeIdentifier(purposeIdentifier: NSString | string): void;
}
declare const NSFileCoordinator: {
  alloc(): NSFileCoordinatorUninitialized;
  class(): NSFileCoordinator;  addFilePresenter(filePresenter: any): void;
  removeFilePresenter(filePresenter: any): void;

  filePresenters(): NSArray<any>;

}

