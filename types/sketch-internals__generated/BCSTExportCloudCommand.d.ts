interface BCSTExportCloudCommandUninitialized<InitializedType = BCSTExportCloudCommand> extends BCSTCommandUninitialized<BCSTExportCloudCommand> {}

interface BCSTExportCloudCommand extends BCSTCommand {
}

declare const BCSTExportCloudCommand: {
  alloc(): BCSTExportCloudCommandUninitialized;
  class(): BCSTExportCloudCommand;
  accessInstanceVariablesDirectly(): boolean;

}

