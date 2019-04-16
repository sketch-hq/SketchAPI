interface NSTaskUninitialized<InitializedType = NSTask> extends NSObjectUninitialized<NSTask> {
  init(): InitializedType;
}
interface NSTask extends NSObject {
  launchAndReturnError(error: NSError): boolean;
  interrupt(): void;
  terminate(): void;
  suspend(): boolean;
  resume(): boolean;
  waitUntilExit(): void;
  launch(): void;

  executableURL(): NSURL;
  setExecutableURL(executableURL: NSURL): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  environment(): NSDictionary<any, any>;
  setEnvironment(environment: NSDictionary<any, any> | {[key: string]: any}): void;
  currentDirectoryURL(): NSURL;
  setCurrentDirectoryURL(currentDirectoryURL: NSURL): void;
  standardInput(): any;
  setStandardInput(standardInput: any): void;
  standardOutput(): any;
  setStandardOutput(standardOutput: any): void;
  standardError(): any;
  setStandardError(standardError: any): void;
  processIdentifier(): number;
  running(): boolean;
  terminationStatus(): number;
  terminationReason(): NSTaskTerminationReason;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  launchPath(): NSString;
  setLaunchPath(launchPath: NSString | string): void;
  currentDirectoryPath(): NSString;
  setCurrentDirectoryPath(currentDirectoryPath: NSString | string): void;
}
declare const NSTask: {
  alloc(): NSTaskUninitialized;
  class(): NSTask;  launchedTaskWithExecutableURL_arguments_error_terminationHandler(url: NSURL, arguments: NSArray<any> | any[], error: NSError, terminationHandler: Block): NSTask;
  launchedTaskWithLaunchPath_arguments(path: NSString | string, arguments: NSArray<any> | any[]): NSTask;

}

