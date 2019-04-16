interface MSSharedTextStyleProviderUninitialized<InitializedType = MSSharedTextStyleProvider> extends MSForeignObjectProviderUninitialized<MSSharedTextStyleProvider> {}
interface MSSharedTextStyleProvider extends MSForeignObjectProvider {
}
declare const MSSharedTextStyleProvider: {
  alloc(): MSSharedTextStyleProviderUninitialized;
  class(): MSSharedTextStyleProvider;
}

