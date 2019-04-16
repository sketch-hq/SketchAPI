interface MSKeyedArchiverHelperUninitialized<InitializedType = MSKeyedArchiverHelper> extends NSKeyedArchiverUninitialized<MSKeyedArchiverHelper> {}

interface MSKeyedArchiverHelper extends NSKeyedArchiver {

  archiver(): MSBaseArchiver;
  setArchiver(archiver: MSBaseArchiver): void;
}

declare const MSKeyedArchiverHelper: {
  alloc(): MSKeyedArchiverHelperUninitialized;
  class(): MSKeyedArchiverHelper;
  archivedDataWithRootObject_requiringSecureCoding_error(object: any, requiresSecureCoding: boolean, error: MOPointer<NSError>): NSData;
  archivedDataWithRootObject(rootObject: any): NSData;
  archiveRootObject_toFile(rootObject: any, path: NSString | string): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

