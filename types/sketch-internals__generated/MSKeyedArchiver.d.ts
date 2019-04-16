interface MSKeyedArchiverUninitialized<InitializedType = MSKeyedArchiver> extends MSBaseArchiverUninitialized<MSKeyedArchiver> {}
interface MSKeyedArchiver extends MSBaseArchiver {
}
declare const MSKeyedArchiver: {
  alloc(): MSKeyedArchiverUninitialized;
  class(): MSKeyedArchiver;
}

