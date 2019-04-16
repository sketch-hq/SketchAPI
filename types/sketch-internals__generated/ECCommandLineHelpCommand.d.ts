interface ECCommandLineHelpCommandUninitialized<InitializedType = ECCommandLineHelpCommand> extends ECCommandLineCommandUninitialized<ECCommandLineHelpCommand> {}
interface ECCommandLineHelpCommand extends ECCommandLineCommand {
}
declare const ECCommandLineHelpCommand: {
  alloc(): ECCommandLineHelpCommandUninitialized;
  class(): ECCommandLineHelpCommand;
}

