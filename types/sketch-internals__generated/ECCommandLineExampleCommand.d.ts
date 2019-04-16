interface ECCommandLineExampleCommandUninitialized<InitializedType = ECCommandLineExampleCommand> extends ECCommandLineCommandUninitialized<ECCommandLineExampleCommand> {}
interface ECCommandLineExampleCommand extends ECCommandLineCommand {
}
declare const ECCommandLineExampleCommand: {
  alloc(): ECCommandLineExampleCommandUninitialized;
  class(): ECCommandLineExampleCommand;
}

