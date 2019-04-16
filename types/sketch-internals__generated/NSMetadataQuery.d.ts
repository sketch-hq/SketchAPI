interface NSMetadataQueryUninitialized<InitializedType = NSMetadataQuery> extends NSObjectUninitialized<NSMetadataQuery> {}
interface NSMetadataQuery extends NSObject {
  startQuery(): boolean;
  stopQuery(): void;
  disableUpdates(): void;
  enableUpdates(): void;
  resultAtIndex(idx: NSUInteger): any;
  enumerateResultsUsingBlock(block: Block): void;
  enumerateResultsWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  indexOfResult(result: any): NSUInteger;
  valueOfAttribute_forResultAtIndex(attrName: NSString | string, idx: NSUInteger): any;

  delegate(): any;
  setDelegate(delegate: any): void;
  predicate(): NSPredicate;
  setPredicate(predicate: NSPredicate): void;
  sortDescriptors(): NSArray<any>;
  setSortDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  valueListAttributes(): NSArray<any>;
  setValueListAttributes(valueListAttributes: NSArray<any> | any[]): void;
  groupingAttributes(): NSArray<any>;
  setGroupingAttributes(groupingAttributes: NSArray<any> | any[]): void;
  notificationBatchingInterval(): NSTimeInterval;
  setNotificationBatchingInterval(notificationBatchingInterval: NSTimeInterval): void;
  searchScopes(): NSArray<any>;
  setSearchScopes(searchScopes: NSArray<any> | any[]): void;
  searchItems(): NSArray<any>;
  setSearchItems(searchItems: NSArray<any> | any[]): void;
  operationQueue(): NSOperationQueue;
  setOperationQueue(operationQueue: NSOperationQueue): void;
  started(): boolean;
  gathering(): boolean;
  stopped(): boolean;
  resultCount(): NSUInteger;
  results(): NSArray<any>;
  valueLists(): NSDictionary<any, any>;
  groupedResults(): NSArray<any>;
}
declare const NSMetadataQuery: {
  alloc(): NSMetadataQueryUninitialized;
  class(): NSMetadataQuery;
}

