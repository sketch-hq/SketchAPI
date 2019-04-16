interface SUFileManagerUninitialized<InitializedType = SUFileManager> extends NSObjectUninitialized<SUFileManager> {}
interface SUFileManager extends NSObject {
  fileManagerByPreservingAuthorizationRights(): SUFileManager;
  makeTemporaryDirectoryWithPreferredName_appropriateForDirectoryURL_error(preferredName: NSString | string, appropriateURL: NSURL, error: NSError): NSURL;
  makeDirectoryAtURL_error(targetURL: NSURL, error: NSError): boolean;
  moveItemAtURL_toURL_error(sourceURL: NSURL, destinationURL: NSURL, error: NSError): boolean;
  copyItemAtURL_toURL_error(sourceURL: NSURL, destinationURL: NSURL, error: NSError): boolean;
  removeItemAtURL_error(url: NSURL, error: NSError): boolean;
  changeOwnerAndGroupOfItemAtRootURL_toMatchURL_error(targetURL: NSURL, matchURL: NSURL, error: NSError): boolean;
  updateModificationAndAccessTimeOfItemAtURL_error(targetURL: NSURL, error: NSError): boolean;
  releaseItemFromQuarantineAtRootURL_error(rootURL: NSURL, error: NSError): boolean;
  executePackageAtURL_progressBlock_error(packageURL: NSURL, progressBlock: Block | null, error: NSError): boolean;
  _acquireAuthorizationWithError(error: NSError): boolean;
  _itemExistsAtURL(fileURL: NSURL): boolean;
  _itemExistsAtURL_isDirectory(fileURL: NSURL, isDirectory: boolean | null): boolean;
}
declare const SUFileManager: {
  alloc(): SUFileManagerUninitialized;
  class(): SUFileManager;  defaultManager(): SUFileManager;
  fileManagerWithAuthorizationToolPath(authorizationToolPath: NSString | string): SUFileManager;

}

