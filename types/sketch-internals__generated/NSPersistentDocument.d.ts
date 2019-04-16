interface NSPersistentDocumentUninitialized<InitializedType = NSPersistentDocument> extends NSDocumentUninitialized<NSPersistentDocument> {}

interface NSPersistentDocument extends NSDocument {
  configurePersistentStoreCoordinatorForURL_ofType_modelConfiguration_storeOptions_error(url: NSURL, fileType: NSString | string, configuration: NSString | string | null, storeOptions: NSDictionary<any, any> | {[key: string]: any} | null, error: MOPointer<NSError>): boolean;
  persistentStoreTypeForFileType(fileType: NSString | string): NSString;
  writeToURL_ofType_forSaveOperation_originalContentsURL_error(absoluteURL: NSURL, typeName: NSString | string, saveOperation: NSSaveOperationType, absoluteOriginalContentsURL: NSURL | null, error: MOPointer<NSError>): boolean;
  readFromURL_ofType_error(absoluteURL: NSURL, typeName: NSString | string, error: MOPointer<NSError>): boolean;
  revertToContentsOfURL_ofType_error(inAbsoluteURL: NSURL, inTypeName: NSString | string, outError: MOPointer<NSError>): boolean;
  configurePersistentStoreCoordinatorForURL_ofType_error(url: NSURL, fileType: NSString | string, error: MOPointer<NSError>): boolean;

  managedObjectContext(): NSManagedObjectContext;
  setManagedObjectContext(managedObjectContext: NSManagedObjectContext): void;
  managedObjectModel(): NSManagedObjectModel;
}

declare const NSPersistentDocument: {
  alloc(): NSPersistentDocumentUninitialized;
  class(): NSPersistentDocument;
  canConcurrentlyReadDocumentsOfType(typeName: NSString | string): boolean;
  isNativeType(type: NSString | string): boolean;
  autosavesInPlace(): boolean;
  preservesVersions(): boolean;
  autosavesDrafts(): boolean;
  readableTypes(): NSArray<any>;
  writableTypes(): NSArray<any>;
  usesUbiquitousStorage(): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

