interface MOBoxUninitialized<InitializedType = MOBox> extends NSObjectUninitialized<MOBox> {
  initWithManager_object_jsObject(manager: MOBoxManager, object: any, jsObject: JSObjectRef): InitializedType;
}
interface MOBox extends NSObject {
  disassociateObject(): void;

  representedObject(): any;
  JSObject(): JSObjectRef;
  manager(): MOBoxManager;
  representedObjectCanaryDesc(): NSString;
  count(): NSUInteger;
}
declare const MOBox: {
  alloc(): MOBoxUninitialized;
  class(): MOBox;
}

