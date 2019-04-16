interface MOJavaScriptObjectUninitialized<InitializedType = MOJavaScriptObject> extends NSObjectUninitialized<MOJavaScriptObject> {}
interface MOJavaScriptObject extends NSObject {

  JSObject(): JSObjectRef;
  JSContext(): JSContextRef;
}
declare const MOJavaScriptObject: {
  alloc(): MOJavaScriptObjectUninitialized;
  class(): MOJavaScriptObject;  objectWithJSObject_context(jsObject: JSObjectRef, ctx: JSContextRef): MOJavaScriptObject;

}

