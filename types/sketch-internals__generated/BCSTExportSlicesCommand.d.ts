interface BCSTExportSlicesCommandUninitialized<InitializedType = BCSTExportSlicesCommand> extends BCSTExportLayersCommandUninitialized<BCSTExportSlicesCommand> {}
interface BCSTExportSlicesCommand extends BCSTExportLayersCommand {
}
declare const BCSTExportSlicesCommand: {
  alloc(): BCSTExportSlicesCommandUninitialized;
  class(): BCSTExportSlicesCommand;
}

