interface ECCommandLineMissingClassCommandUninitialized<InitializedType = ECCommandLineMissingClassCommand> extends ECCommandLineCommandUninitialized<ECCommandLineMissingClassCommand> {}
interface ECCommandLineMissingClassCommand extends ECCommandLineCommand {
}
declare const ECCommandLineMissingClassCommand: {
  alloc(): ECCommandLineMissingClassCommandUninitialized;
  class(): ECCommandLineMissingClassCommand;
}

