interface ECCommandLineHelpCommandUninitialized<InitializedType = ECCommandLineHelpCommand> extends ECCommandLineCommandUninitialized<ECCommandLineHelpCommand> {}

interface ECCommandLineHelpCommand extends ECCommandLineCommand {
}

declare const ECCommandLineHelpCommand: {
  alloc(): ECCommandLineHelpCommandUninitialized;
  class(): ECCommandLineHelpCommand;
  commandWithName_info_parentCommand(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): ECCommandLineCommand;
  accessInstanceVariablesDirectly(): boolean;

}

