interface MSVersionedArchiveUninitialized<InitializedType = MSVersionedArchive> extends NSObjectUninitialized<MSVersionedArchive> {
  initWithURL_version(url: NSURL, version: MSDocumentVersion): InitializedType;
}
interface MSVersionedArchive extends NSObject {
  unarchiveRootObjectVersion_error(version: MSDocumentVersion, error: NSError): any;
  archiveRootObject_error(rootObject: any, error: NSError): boolean;
  URLNeedingMigration(): NSURL;
  exists(): boolean;
  cleanupAfterTesting(): void;
}
declare const MSVersionedArchive: {
  alloc(): MSVersionedArchiveUninitialized;
  class(): MSVersionedArchive;  globalArchiveWithName_extension_version(name: NSString | string, extension: NSString | string, version: MSDocumentVersion): MSVersionedArchive;
  versionedURLWithBase_extension_version(base: NSURL, extension: NSString | string, version: NSUInteger): NSURL;

}

