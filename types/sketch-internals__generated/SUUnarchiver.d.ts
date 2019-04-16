interface SUUnarchiverUninitialized<InitializedType = SUUnarchiver> extends NSObjectUninitialized<SUUnarchiver> {}
interface SUUnarchiver extends NSObject {
}
declare const SUUnarchiver: {
  alloc(): SUUnarchiverUninitialized;
  class(): SUUnarchiver;  unarchiverForPath_updatingHostBundlePath_decryptionPassword(path: NSString | string, hostPath: NSString | string | null, decryptionPassword: NSString | string | null): any;

}

