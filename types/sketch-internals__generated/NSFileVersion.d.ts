interface NSFileVersionUninitialized<InitializedType = NSFileVersion> extends NSObjectUninitialized<NSFileVersion> {}
interface NSFileVersion extends NSObject {
  replaceItemAtURL_options_error(url: NSURL, options: NSFileVersionReplacingOptions, error: NSError): NSURL;
  removeAndReturnError(outError: NSError): boolean;

  URL(): NSURL;
  localizedName(): NSString;
  localizedNameOfSavingComputer(): NSString;
  originatorNameComponents(): NSPersonNameComponents;
  modificationDate(): NSDate;
  persistentIdentifier(): any;
  conflict(): boolean;
  resolved(): boolean;
  setResolved(resolved: boolean): void;
  discardable(): boolean;
  setDiscardable(discardable: boolean): void;
  hasLocalContents(): boolean;
  hasThumbnail(): boolean;
}
declare const NSFileVersion: {
  alloc(): NSFileVersionUninitialized;
  class(): NSFileVersion;  currentVersionOfItemAtURL(url: NSURL): NSFileVersion;
  otherVersionsOfItemAtURL(url: NSURL): NSArray<any>;
  unresolvedConflictVersionsOfItemAtURL(url: NSURL): NSArray<any>;
  getNonlocalVersionsOfItemAtURL_completionHandler(url: NSURL, completionHandler: Block): void;
  versionOfItemAtURL_forPersistentIdentifier(url: NSURL, persistentIdentifier: any): NSFileVersion;
  addVersionOfItemAtURL_withContentsOfURL_options_error(url: NSURL, contentsURL: NSURL, options: NSFileVersionAddingOptions, outError: NSError): NSFileVersion;
  temporaryDirectoryURLForNewVersionOfItemAtURL(url: NSURL): NSURL;
  removeOtherVersionsOfItemAtURL_error(url: NSURL, outError: NSError): boolean;

}

