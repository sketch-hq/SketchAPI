interface ECCommandLineExampleCommandUninitialized<InitializedType = ECCommandLineExampleCommand> extends ECCommandLineCommandUninitialized<ECCommandLineExampleCommand> {}

interface ECCommandLineExampleCommand extends ECCommandLineCommand {
}

declare const ECCommandLineExampleCommand: {
  alloc(): ECCommandLineExampleCommandUninitialized;
  class(): ECCommandLineExampleCommand;
  commandWithName_info_parentCommand(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): ECCommandLineCommand;
}

