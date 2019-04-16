interface ECCommandLineMissingClassCommandUninitialized<InitializedType = ECCommandLineMissingClassCommand> extends ECCommandLineCommandUninitialized<ECCommandLineMissingClassCommand> {}

interface ECCommandLineMissingClassCommand extends ECCommandLineCommand {
}

declare const ECCommandLineMissingClassCommand: {
  alloc(): ECCommandLineMissingClassCommandUninitialized;
  class(): ECCommandLineMissingClassCommand;
  commandWithName_info_parentCommand(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): ECCommandLineCommand;
  accessInstanceVariablesDirectly(): boolean;

}

