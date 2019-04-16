interface MSKeyBindingsUninitialized<InitializedType = MSKeyBindings> extends BCSingletonUninitialized<MSKeyBindings> {}
interface MSKeyBindings extends BCSingleton {

  shortcutMap(): NSDictionary<any, any>;
}
declare const MSKeyBindings: {
  alloc(): MSKeyBindingsUninitialized;
  class(): MSKeyBindings;
}

