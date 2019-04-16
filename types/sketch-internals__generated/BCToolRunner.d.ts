interface BCToolRunnerUninitialized<InitializedType = BCToolRunner> extends NSObjectUninitialized<BCToolRunner> {}
interface BCToolRunner extends NSObject {
  runToolAtExecutableURL_workingDirectoryURL_arguments_completionHandler(toolURL: NSURL, workingDirectoryURL: NSURL, arguments: NSArray<any> | any[], completionHandler: MSToolCompletionHandler): void;
}
declare const BCToolRunner: {
  alloc(): BCToolRunnerUninitialized;
  class(): BCToolRunner;
}

