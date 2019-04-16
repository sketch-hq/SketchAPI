interface BCSTDumpCommandUninitialized<InitializedType = BCSTDumpCommand> extends BCSTCommandUninitialized<BCSTDumpCommand> {}
interface BCSTDumpCommand extends BCSTCommand {
}
declare const BCSTDumpCommand: {
  alloc(): BCSTDumpCommandUninitialized;
  class(): BCSTDumpCommand;
}

