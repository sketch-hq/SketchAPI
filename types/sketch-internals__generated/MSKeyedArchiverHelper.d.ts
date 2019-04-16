interface MSKeyedArchiverHelperUninitialized<InitializedType = MSKeyedArchiverHelper> extends NSKeyedArchiverUninitialized<MSKeyedArchiverHelper> {}
interface MSKeyedArchiverHelper extends NSKeyedArchiver {

  archiver(): MSBaseArchiver;
  setArchiver(archiver: MSBaseArchiver): void;
}
declare const MSKeyedArchiverHelper: {
  alloc(): MSKeyedArchiverHelperUninitialized;
  class(): MSKeyedArchiverHelper;
}

