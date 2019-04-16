interface NSFileHandleUninitialized<InitializedType = NSFileHandle> extends NSObjectUninitialized<NSFileHandle> {
  initWithFileDescriptor_closeOnDealloc(fd: number, closeopt: boolean): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithFileDescriptor(fd: number): InitializedType;
}

interface NSFileHandle extends NSObject, INSSecureCoding {
  readDataToEndOfFile(): NSData;
  readDataOfLength(length: NSUInteger): NSData;
  writeData(data: NSData): void;
  seekToEndOfFile(): number;
  seekToFileOffset(offset: number): void;
  truncateFileAtOffset(offset: number): void;
  synchronizeFile(): void;
  closeFile(): void;
  readInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  readInBackgroundAndNotify(): void;
  readToEndOfFileInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  readToEndOfFileInBackgroundAndNotify(): void;
  acceptConnectionInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  acceptConnectionInBackgroundAndNotify(): void;
  waitForDataInBackgroundAndNotifyForModes(modes: NSArray<any> | any[] | null): void;
  waitForDataInBackgroundAndNotify(): void;

  availableData(): NSData;
  offsetInFile(): number;
  fileDescriptor(): number;
}

declare const NSFileHandle: {
  alloc(): NSFileHandleUninitialized;
  class(): NSFileHandle;
  fileHandleForReadingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForWritingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForUpdatingAtPath(path: NSString | string): NSFileHandle;
  fileHandleForReadingFromURL_error(url: NSURL, error: MOPointer<NSError>): NSFileHandle;
  fileHandleForWritingToURL_error(url: NSURL, error: MOPointer<NSError>): NSFileHandle;
  fileHandleForUpdatingURL_error(url: NSURL, error: MOPointer<NSError>): NSFileHandle;
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
  fileHandleWithStandardInput(): NSFileHandle;
  fileHandleWithStandardOutput(): NSFileHandle;
  fileHandleWithStandardError(): NSFileHandle;
  fileHandleWithNullDevice(): NSFileHandle;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

