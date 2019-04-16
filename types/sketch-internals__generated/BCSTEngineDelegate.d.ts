interface BCSTEngineDelegateUninitialized<InitializedType = BCSTEngineDelegate> extends NSObjectUninitialized<BCSTEngineDelegate> {}
interface BCSTEngineDelegate extends NSObject, IECCommandLineEngineDelegate {

  resources(): NSBundle;
  setResources(resources: NSBundle): void;
}
declare const BCSTEngineDelegate: {
  alloc(): BCSTEngineDelegateUninitialized;
  class(): BCSTEngineDelegate;
}

