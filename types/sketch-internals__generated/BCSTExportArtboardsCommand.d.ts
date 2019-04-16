interface BCSTExportArtboardsCommandUninitialized<InitializedType = BCSTExportArtboardsCommand> extends BCSTCommandUninitialized<BCSTExportArtboardsCommand> {}

interface BCSTExportArtboardsCommand extends BCSTCommand {
}

declare const BCSTExportArtboardsCommand: {
  alloc(): BCSTExportArtboardsCommandUninitialized;
  class(): BCSTExportArtboardsCommand;
  accessInstanceVariablesDirectly(): boolean;

}

