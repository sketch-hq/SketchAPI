interface NSFileWrapperUninitialized<InitializedType = NSFileWrapper> extends NSObjectUninitialized<NSFileWrapper> {
  initWithURL_options_error(url: NSURL, options: NSFileWrapperReadingOptions, outError: MOPointer<NSError>): InitializedType;
  initDirectoryWithFileWrappers(childrenByPreferredName: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initRegularFileWithContents(contents: NSData): InitializedType;
  initSymbolicLinkWithDestinationURL(url: NSURL): InitializedType;
  initWithSerializedRepresentation(serializeRepresentation: NSData): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
  initWithPath(path: NSString | string): InitializedType;
  initSymbolicLinkWithDestination(path: NSString | string): InitializedType;
}

interface NSFileWrapper extends NSObject, INSSecureCoding {
  matchesContentsOfURL(url: NSURL): boolean;
  readFromURL_options_error(url: NSURL, options: NSFileWrapperReadingOptions, outError: MOPointer<NSError>): boolean;
  writeToURL_options_originalContentsURL_error(url: NSURL, options: NSFileWrapperWritingOptions, originalContentsURL: NSURL | null, outError: MOPointer<NSError>): boolean;
  addFileWrapper(child: NSFileWrapper): NSString;
  addRegularFileWithContents_preferredFilename(data: NSData, fileName: NSString | string): NSString;
  removeFileWrapper(child: NSFileWrapper): void;
  keyForFileWrapper(child: NSFileWrapper): NSString;
  needsToBeUpdatedFromPath(path: NSString | string): boolean;
  updateFromPath(path: NSString | string): boolean;
  writeToFile_atomically_updateFilenames(path: NSString | string, atomicFlag: boolean, updateFilenamesFlag: boolean): boolean;
  addFileWithPath(path: NSString | string): NSString;
  addSymbolicLinkWithDestination_preferredFilename(path: NSString | string, filename: NSString | string): NSString;
  symbolicLinkDestination(): NSString;

  directory(): boolean;
  regularFile(): boolean;
  symbolicLink(): boolean;
  preferredFilename(): NSString;
  setPreferredFilename(preferredFilename: NSString | string): void;
  filename(): NSString;
  setFilename(filename: NSString | string): void;
  fileAttributes(): NSDictionary<any, any>;
  setFileAttributes(fileAttributes: NSDictionary<any, any> | {[key: string]: any}): void;
  serializedRepresentation(): NSData;
  fileWrappers(): NSDictionary<any, any>;
  regularFileContents(): NSData;
  symbolicLinkDestinationURL(): NSURL;
  icon(): NSImage;
  setIcon(icon: NSImage): void;
}

declare const NSFileWrapper: {
  alloc(): NSFileWrapperUninitialized;
  class(): NSFileWrapper;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

