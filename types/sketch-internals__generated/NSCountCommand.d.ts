interface NSCountCommandUninitialized<InitializedType = NSCountCommand> extends NSScriptCommandUninitialized<NSCountCommand> {}
interface NSCountCommand extends NSScriptCommand {
}
declare const NSCountCommand: {
  alloc(): NSCountCommandUninitialized;
  class(): NSCountCommand;
}

