interface BCSTExportLayersCommandUninitialized<InitializedType = BCSTExportLayersCommand> extends BCSTCommandUninitialized<BCSTExportLayersCommand> {}
interface BCSTExportLayersCommand extends BCSTCommand {
  slicesToExportForPage_engine(page: MSPage, engine: ECCommandLineEngine): NSArray<any>;
}
declare const BCSTExportLayersCommand: {
  alloc(): BCSTExportLayersCommandUninitialized;
  class(): BCSTExportLayersCommand;
}

