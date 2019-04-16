interface BCSTListPagesCommandUninitialized<InitializedType = BCSTListPagesCommand> extends BCSTListCommandUninitialized<BCSTListPagesCommand> {}
interface BCSTListPagesCommand extends BCSTListCommand {
}
declare const BCSTListPagesCommand: {
  alloc(): BCSTListPagesCommandUninitialized;
  class(): BCSTListPagesCommand;
}

