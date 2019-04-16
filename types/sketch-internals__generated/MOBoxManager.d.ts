interface MOBoxManagerUninitialized<InitializedType = MOBoxManager> extends NSObjectUninitialized<MOBoxManager> {
  initWithContext(context: JSGlobalContextRef): InitializedType;
}
interface MOBoxManager extends NSObject {
  cleanup(): void;
  boxForObject(object: any): MOBox;
  makeBoxForObject_jsClass(object: any, jsClass: JSClassRef): JSObjectRef;
  removeBoxForObject(object: any): void;
}
declare const MOBoxManager: {
  alloc(): MOBoxManagerUninitialized;
  class(): MOBoxManager;
}

