interface COSFiberUninitialized<InitializedType = COSFiber> extends NSObjectUninitialized<COSFiber> {}
interface COSFiber extends NSObject {
  onCleanup(jsFunction: MOJavaScriptObject | Function): void;
  cleanup(): void;

  coscript(): COScript;
  setCoscript(coscript: COScript): void;
  cleanUpJSfunc(): MOJavaScriptObject;
  setCleanUpJSfunc(cleanUpJSfunc: MOJavaScriptObject | Function): void;
}
declare const COSFiber: {
  alloc(): COSFiberUninitialized;
  class(): COSFiber;  createWithCocoaScript(cos: COScript): any;

}

