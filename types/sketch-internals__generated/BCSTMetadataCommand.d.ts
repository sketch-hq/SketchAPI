interface BCSTMetadataCommandUninitialized<InitializedType = BCSTMetadataCommand> extends BCSTCommandUninitialized<BCSTMetadataCommand> {}
interface BCSTMetadataCommand extends BCSTCommand {
}
declare const BCSTMetadataCommand: {
  alloc(): BCSTMetadataCommandUninitialized;
  class(): BCSTMetadataCommand;
}

