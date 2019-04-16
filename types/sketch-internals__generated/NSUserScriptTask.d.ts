interface NSUserScriptTaskUninitialized<InitializedType = NSUserScriptTask> extends NSObjectUninitialized<NSUserScriptTask> {
  initWithURL_error(url: NSURL, error: NSError): InitializedType;
}
interface NSUserScriptTask extends NSObject {
  executeWithCompletionHandler(handler: NSUserScriptTaskCompletionHandler | null): void;

  scriptURL(): NSURL;
}
declare const NSUserScriptTask: {
  alloc(): NSUserScriptTaskUninitialized;
  class(): NSUserScriptTask;
}

