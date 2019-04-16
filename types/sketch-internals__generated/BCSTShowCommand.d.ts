interface BCSTShowCommandUninitialized<InitializedType = BCSTShowCommand> extends BCSTCommandUninitialized<BCSTShowCommand> {}
interface BCSTShowCommand extends BCSTCommand {
}
declare const BCSTShowCommand: {
  alloc(): BCSTShowCommandUninitialized;
  class(): BCSTShowCommand;
}

