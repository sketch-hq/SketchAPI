interface NSPersistentDocumentUninitialized<InitializedType = NSPersistentDocument> extends NSDocumentUninitialized<NSPersistentDocument> {}
interface NSPersistentDocument extends NSDocument {
  configurePersistentStoreCoordinatorForURL_ofType_modelConfiguration_storeOptions_error(url: NSURL, fileType: NSString | string, configuration: NSString | string | null, storeOptions: NSDictionary<any, any> | {[key: string]: any} | null, error: NSError): boolean;
  persistentStoreTypeForFileType(fileType: NSString | string): NSString;
  writeToURL_ofType_forSaveOperation_originalContentsURL_error(absoluteURL: NSURL, typeName: NSString | string, saveOperation: NSSaveOperationType, absoluteOriginalContentsURL: NSURL | null, error: NSError): boolean;
  readFromURL_ofType_error(absoluteURL: NSURL, typeName: NSString | string, error: NSError): boolean;
  revertToContentsOfURL_ofType_error(inAbsoluteURL: NSURL, inTypeName: NSString | string, outError: NSError): boolean;
  configurePersistentStoreCoordinatorForURL_ofType_error(url: NSURL, fileType: NSString | string, error: NSError): boolean;

  managedObjectContext(): NSManagedObjectContext;
  setManagedObjectContext(managedObjectContext: NSManagedObjectContext): void;
  managedObjectModel(): NSManagedObjectModel;
}
declare const NSPersistentDocument: {
  alloc(): NSPersistentDocumentUninitialized;
  class(): NSPersistentDocument;
}

