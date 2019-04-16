interface MOBoxManagerBoxContextUninitialized<InitializedType = MOBoxManagerBoxContext> extends NSObjectUninitialized<MOBoxManagerBoxContext> {
  initWithManager_object(manager: MOBoxManager, object: any): InitializedType;
}
interface MOBoxManagerBoxContext extends NSObject {
  finishMakingBoxForObject(jsObject: JSObjectRef): void;
}
declare const MOBoxManagerBoxContext: {
  alloc(): MOBoxManagerBoxContextUninitialized;
  class(): MOBoxManagerBoxContext;
}

