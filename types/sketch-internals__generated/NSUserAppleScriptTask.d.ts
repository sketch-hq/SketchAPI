interface NSUserAppleScriptTaskUninitialized<InitializedType = NSUserAppleScriptTask> extends NSUserScriptTaskUninitialized<NSUserAppleScriptTask> {}
interface NSUserAppleScriptTask extends NSUserScriptTask {
  executeWithAppleEvent_completionHandler(event: NSAppleEventDescriptor | null, handler: NSUserAppleScriptTaskCompletionHandler | null): void;
}
declare const NSUserAppleScriptTask: {
  alloc(): NSUserAppleScriptTaskUninitialized;
  class(): NSUserAppleScriptTask;
}

