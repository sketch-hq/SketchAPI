interface NSUserUnixTaskUninitialized<InitializedType = NSUserUnixTask> extends NSUserScriptTaskUninitialized<NSUserUnixTask> {}
interface NSUserUnixTask extends NSUserScriptTask {
  executeWithArguments_completionHandler(arguments: NSArray<any> | any[] | null, handler: NSUserUnixTaskCompletionHandler | null): void;

  standardInput(): NSFileHandle;
  setStandardInput(standardInput: NSFileHandle): void;
  standardOutput(): NSFileHandle;
  setStandardOutput(standardOutput: NSFileHandle): void;
  standardError(): NSFileHandle;
  setStandardError(standardError: NSFileHandle): void;
}
declare const NSUserUnixTask: {
  alloc(): NSUserUnixTaskUninitialized;
  class(): NSUserUnixTask;
}

