interface SUBinaryDeltaUnarchiverUninitialized<InitializedType = SUBinaryDeltaUnarchiver> extends NSObjectUninitialized<SUBinaryDeltaUnarchiver> {
  initWithArchivePath_updateHostBundlePath(archivePath: NSString | string, updateHostBundlePath: NSString | string): InitializedType;
}
interface SUBinaryDeltaUnarchiver extends NSObject, ISUUnarchiverProtocol {
}
declare const SUBinaryDeltaUnarchiver: {
  alloc(): SUBinaryDeltaUnarchiverUninitialized;
  class(): SUBinaryDeltaUnarchiver;  updateSpotlightImportersAtBundlePath(targetPath: NSString | string): void;

}

