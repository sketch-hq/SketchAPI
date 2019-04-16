interface BCSTExportPagesCommandUninitialized<InitializedType = BCSTExportPagesCommand> extends BCSTCommandUninitialized<BCSTExportPagesCommand> {}

interface BCSTExportPagesCommand extends BCSTCommand {
}

declare const BCSTExportPagesCommand: {
  alloc(): BCSTExportPagesCommandUninitialized;
  class(): BCSTExportPagesCommand;
  accessInstanceVariablesDirectly(): boolean;

}

