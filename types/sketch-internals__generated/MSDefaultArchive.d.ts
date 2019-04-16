interface MSDefaultArchiveUninitialized<InitializedType = MSDefaultArchive> extends BCSingletonUninitialized<MSDefaultArchive> {}
interface MSDefaultArchive extends BCSingleton {
  archivesNeedingMigration(): NSArray<any>;
  oldDefaultsName(): NSString;
  filename(): NSString;
  defaultClass(): any;
  newObject(): any;

  defaultObject(): any;
  setDefaultObject(defaultObject: any): void;
}
declare const MSDefaultArchive: {
  alloc(): MSDefaultArchiveUninitialized;
  class(): MSDefaultArchive;
}

