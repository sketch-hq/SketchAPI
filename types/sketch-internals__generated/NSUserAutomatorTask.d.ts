interface NSUserAutomatorTaskUninitialized<InitializedType = NSUserAutomatorTask> extends NSUserScriptTaskUninitialized<NSUserAutomatorTask> {}

interface NSUserAutomatorTask extends NSUserScriptTask {
  executeWithInput_completionHandler(input: any | null, handler: NSUserAutomatorTaskCompletionHandler | null): void;

  variables(): NSDictionary<any, any>;
  setVariables(variables: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const NSUserAutomatorTask: {
  alloc(): NSUserAutomatorTaskUninitialized;
  class(): NSUserAutomatorTask;
  accessInstanceVariablesDirectly(): boolean;

}

