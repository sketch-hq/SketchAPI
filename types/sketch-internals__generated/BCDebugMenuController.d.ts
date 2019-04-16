interface BCDebugMenuControllerUninitialized<InitializedType = BCDebugMenuController> extends BCSingletonUninitialized<BCDebugMenuController> {}
interface BCDebugMenuController extends BCSingleton {
  addDebugMenuWithTag(tag: NSInteger): void;
}
declare const BCDebugMenuController: {
  alloc(): BCDebugMenuControllerUninitialized;
  class(): BCDebugMenuController;
}

