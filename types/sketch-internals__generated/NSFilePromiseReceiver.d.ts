interface NSFilePromiseReceiverUninitialized<InitializedType = NSFilePromiseReceiver> extends NSObjectUninitialized<NSFilePromiseReceiver> {
  initWithPasteboardPropertyList_ofType(propertyList: any, type: NSPasteboardType): InitializedType;
}

interface NSFilePromiseReceiver extends NSObject, INSPasteboardReading {
  receivePromisedFilesAtDestination_options_operationQueue_reader(destinationDir: NSURL, options: NSDictionary<any, any> | {[key: string]: any}, operationQueue: NSOperationQueue, reader: Block): void;

  fileTypes(): NSArray<any>;
  fileNames(): NSArray<any>;
}

declare const NSFilePromiseReceiver: {
  alloc(): NSFilePromiseReceiverUninitialized;
  class(): NSFilePromiseReceiver;
  readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  readingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardReadingOptions;
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
  readableDraggedTypes(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

