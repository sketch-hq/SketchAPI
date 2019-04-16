interface BCSTRunCommandUninitialized<InitializedType = BCSTRunCommand> extends BCSTCommandUninitialized<BCSTRunCommand> {}
interface BCSTRunCommand extends BCSTCommand {

  waitForTermination(): boolean;
  setWaitForTermination(waitForTermination: boolean): void;
}
declare const BCSTRunCommand: {
  alloc(): BCSTRunCommandUninitialized;
  class(): BCSTRunCommand;
}

