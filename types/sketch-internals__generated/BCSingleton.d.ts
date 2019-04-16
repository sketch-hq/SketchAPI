interface BCSingletonUninitialized<InitializedType = BCSingleton> extends NSObjectUninitialized<BCSingleton> {}
interface BCSingleton extends NSObject {
}
declare const BCSingleton: {
  alloc(): BCSingletonUninitialized;
  class(): BCSingleton;  sharedInstance(): BCSingleton;

}

