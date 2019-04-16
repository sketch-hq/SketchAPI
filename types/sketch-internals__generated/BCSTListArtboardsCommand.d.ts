interface BCSTListArtboardsCommandUninitialized<InitializedType = BCSTListArtboardsCommand> extends BCSTListCommandUninitialized<BCSTListArtboardsCommand> {}
interface BCSTListArtboardsCommand extends BCSTListCommand {
}
declare const BCSTListArtboardsCommand: {
  alloc(): BCSTListArtboardsCommandUninitialized;
  class(): BCSTListArtboardsCommand;
}

