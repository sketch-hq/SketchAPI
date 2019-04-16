interface NSExistsCommandUninitialized<InitializedType = NSExistsCommand> extends NSScriptCommandUninitialized<NSExistsCommand> {}
interface NSExistsCommand extends NSScriptCommand {
}
declare const NSExistsCommand: {
  alloc(): NSExistsCommandUninitialized;
  class(): NSExistsCommand;
}

