interface SUDiskImageUnarchiverUninitialized<InitializedType = SUDiskImageUnarchiver> extends NSObjectUninitialized<SUDiskImageUnarchiver> {
  initWithArchivePath_decryptionPassword(archivePath: NSString | string, decryptionPassword: NSString | string | null): InitializedType;
}
interface SUDiskImageUnarchiver extends NSObject, ISUUnarchiverProtocol {
}
declare const SUDiskImageUnarchiver: {
  alloc(): SUDiskImageUnarchiverUninitialized;
  class(): SUDiskImageUnarchiver;
}

