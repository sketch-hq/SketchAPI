interface MSNewsTriggerUninitialized<InitializedType = MSNewsTrigger> extends BCSingletonUninitialized<MSNewsTrigger> {}
interface MSNewsTrigger extends BCSingleton {
}
declare const MSNewsTrigger: {
  alloc(): MSNewsTriggerUninitialized;
  class(): MSNewsTrigger;  checkForNews(): void;

}

