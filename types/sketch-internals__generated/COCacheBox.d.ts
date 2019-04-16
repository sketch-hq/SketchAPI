interface COCacheBoxUninitialized<InitializedType = COCacheBox> extends NSObjectUninitialized<COCacheBox> {
  initWithJSValueRef_inContext(jsValue: JSValueRef, context: JSGlobalContextRef): InitializedType;
}
interface COCacheBox extends NSObject {
  cleanup(): void;

  jsValueRef(): JSValueRef;
}
declare const COCacheBox: {
  alloc(): COCacheBoxUninitialized;
  class(): COCacheBox;
}

