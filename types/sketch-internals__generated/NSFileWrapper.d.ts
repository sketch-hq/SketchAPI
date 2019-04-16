interface NSFileWrapperUninitialized<InitializedType = NSFileWrapper> extends NSObjectUninitialized<NSFileWrapper> {
  initWithURL_options_error(url: NSURL, options: NSFileWrapperReadingOptions, outError: NSError): InitializedType;
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
  readFromURL_options_error(url: NSURL, options: NSFileWrapperReadingOptions, outError: NSError): boolean;
  writeToURL_options_originalContentsURL_error(url: NSURL, options: NSFileWrapperWritingOptions, originalContentsURL: NSURL | null, outError: NSError): boolean;
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
}

