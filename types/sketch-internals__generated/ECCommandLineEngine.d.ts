interface ECCommandLineEngineUninitialized<InitializedType = ECCommandLineEngine> extends NSObjectUninitialized<ECCommandLineEngine> {
  initWithDelegate(delegate: any): InitializedType;
}
interface ECCommandLineEngine extends NSObject, IECIODelegate {
  processArguments_argv(argc: number, argv: string): ECCommandLineResult;
  showUsage(): void;
  outputDescription(description: NSString | string): void;
  info(): NSDictionary<any, any>;
  commandWithName(name: NSString | string): ECCommandLineCommand;
  optionWithName(name: NSString | string): ECCommandLineOption;
  paddingLength(): NSUInteger;
  exitWithResult(result: ECCommandLineResult): void;

  name(): NSString;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const ECCommandLineEngine: {
  alloc(): ECCommandLineEngineUninitialized;
  class(): ECCommandLineEngine;  addCommandNamed_withInfo_toDictionary_parentCommand(mainName: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, dictionary: NSMutableDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): void;
  commandsInDisplayOrder(commands: NSDictionary<any, any> | {[key: string]: any}): NSArray<any>;

}

