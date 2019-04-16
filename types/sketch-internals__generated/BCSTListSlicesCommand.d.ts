interface BCSTListSlicesCommandUninitialized<InitializedType = BCSTListSlicesCommand> extends BCSTListCommandUninitialized<BCSTListSlicesCommand> {}
interface BCSTListSlicesCommand extends BCSTListCommand {
}
declare const BCSTListSlicesCommand: {
  alloc(): BCSTListSlicesCommandUninitialized;
  class(): BCSTListSlicesCommand;
}

