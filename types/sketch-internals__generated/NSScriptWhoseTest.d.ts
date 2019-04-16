interface NSScriptWhoseTestUninitialized<InitializedType = NSScriptWhoseTest> extends NSObjectUninitialized<NSScriptWhoseTest> {
  init(): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
}
interface NSScriptWhoseTest extends NSObject, INSCoding {
  isTrue(): boolean;
}
declare const NSScriptWhoseTest: {
  alloc(): NSScriptWhoseTestUninitialized;
  class(): NSScriptWhoseTest;
}

