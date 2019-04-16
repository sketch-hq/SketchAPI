interface BCSTListLayersCommandUninitialized<InitializedType = BCSTListLayersCommand> extends BCSTListSlicesCommandUninitialized<BCSTListLayersCommand> {}
interface BCSTListLayersCommand extends BCSTListSlicesCommand {
}
declare const BCSTListLayersCommand: {
  alloc(): BCSTListLayersCommandUninitialized;
  class(): BCSTListLayersCommand;
}

