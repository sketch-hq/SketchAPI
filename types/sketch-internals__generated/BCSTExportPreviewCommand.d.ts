interface BCSTExportPreviewCommandUninitialized<InitializedType = BCSTExportPreviewCommand> extends BCSTExportPagesCommandUninitialized<BCSTExportPreviewCommand> {}

interface BCSTExportPreviewCommand extends BCSTExportPagesCommand {
}

declare const BCSTExportPreviewCommand: {
  alloc(): BCSTExportPreviewCommandUninitialized;
  class(): BCSTExportPreviewCommand;
  accessInstanceVariablesDirectly(): boolean;

}

