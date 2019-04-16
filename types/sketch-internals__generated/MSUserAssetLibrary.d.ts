interface MSUserAssetLibraryUninitialized<InitializedType = MSUserAssetLibrary> extends MSAssetLibraryUninitialized<MSUserAssetLibrary> {}
interface MSUserAssetLibrary extends MSAssetLibrary {
}
declare const MSUserAssetLibrary: {
  alloc(): MSUserAssetLibraryUninitialized;
  class(): MSUserAssetLibrary;
}

