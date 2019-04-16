interface MOJSBlockUninitialized<InitializedType = MOJSBlock> extends NSObjectUninitialized<MOJSBlock> {
  initWithSignature_function(signature: string, functionName: MOJavaScriptObject | Function): InitializedType;
}
interface MOJSBlock extends NSObject, INSCopying {

  function(): MOJavaScriptObject;
  signature(): NSMethodSignature;
}
declare const MOJSBlock: {
  alloc(): MOJSBlockUninitialized;
  class(): MOJSBlock;  blockWithSignature_function(signature: NSString | string, functionName: MOJavaScriptObject | Function): MOJSBlock;

}

