interface SUPipedUnarchiverUninitialized<InitializedType = SUPipedUnarchiver> extends NSObjectUninitialized<SUPipedUnarchiver> {
  initWithArchivePath(archivePath: NSString | string): InitializedType;
}
interface SUPipedUnarchiver extends NSObject, ISUUnarchiverProtocol {
}
declare const SUPipedUnarchiver: {
  alloc(): SUPipedUnarchiverUninitialized;
  class(): SUPipedUnarchiver;
}

