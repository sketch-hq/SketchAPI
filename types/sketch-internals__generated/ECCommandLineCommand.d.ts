interface ECCommandLineCommandUninitialized<InitializedType = ECCommandLineCommand> extends NSObjectUninitialized<ECCommandLineCommand> {}
interface ECCommandLineCommand extends NSObject {
  enumerateArguments(block: ArgumentBlock): void;
  engine_processCommands(engine: ECCommandLineEngine, commands: NSMutableArray<any> | any[]): ECCommandLineResult;
  engine_willProcessWithArguments(engine: ECCommandLineEngine, arguments: NSMutableArray<any> | any[]): ECCommandLineResult;
  engine_didProcessWithArguments(engine: ECCommandLineEngine, arguments: NSMutableArray<any> | any[]): ECCommandLineResult;
  help(): NSString;
  summaryAs_parentName(name: NSString | string, parentName: NSString | string): NSString;
  usageAs_parentName_engine(name: NSString | string, parentName: NSString | string, engine: ECCommandLineEngine): NSString;
  subcommandSummaryAs(name: NSString | string): NSString;
  resolveCommandPath(commands: NSMutableArray<any> | any[]): ECCommandLineCommand;

  name(): NSString;
  arguments(): NSArray<any>;
  parentCommand(): ECCommandLineCommand;
  hidden(): boolean;
}
declare const ECCommandLineCommand: {
  alloc(): ECCommandLineCommandUninitialized;
  class(): ECCommandLineCommand;  commandWithName_info_parentCommand(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): ECCommandLineCommand;

}

