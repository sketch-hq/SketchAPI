interface COSIntervalUninitialized<InitializedType = COSInterval> extends COSFiberUninitialized<COSInterval> {}
interface COSInterval extends COSFiber {
  cancel(): void;

  jsfunc(): MOJavaScriptObject;
  setJsfunc(jsfunc: MOJavaScriptObject | Function): void;
}
declare const COSInterval: {
  alloc(): COSIntervalUninitialized;
  class(): COSInterval;  scheduleWithInterval_cocoaScript_jsFunction_repeat(i: NSTimeInterval, cos: COScript, jsFunction: MOJavaScriptObject | Function, repeat: boolean): any;

}

