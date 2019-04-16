interface COSTargetUninitialized<InitializedType = COSTarget> extends NSObjectUninitialized<COSTarget> {
  initWithJSFunction(jsFunction: MOJavaScriptObject | Function): InitializedType;
}
interface COSTarget extends NSObject {
  callAction(sender: any): void;
  action(): string;

  jsFunction(): MOJavaScriptObject;
  setJsFunction(jsFunction: MOJavaScriptObject | Function): void;
  callCount(): NSUInteger;
  setCallCount(callCount: NSUInteger): void;
}
declare const COSTarget: {
  alloc(): COSTargetUninitialized;
  class(): COSTarget;  targetWithJSFunction(jsFunction: MOJavaScriptObject | Function): COSTarget;

}

