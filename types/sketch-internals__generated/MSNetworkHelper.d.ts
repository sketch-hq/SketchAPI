interface MSNetworkHelperUninitialized<InitializedType = MSNetworkHelper> extends NSObjectUninitialized<MSNetworkHelper> {}
interface MSNetworkHelper extends NSObject {
}
declare const MSNetworkHelper: {
  alloc(): MSNetworkHelperUninitialized;
  class(): MSNetworkHelper;
}

