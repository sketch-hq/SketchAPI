interface NSDeleteCommandUninitialized<InitializedType = NSDeleteCommand> extends NSScriptCommandUninitialized<NSDeleteCommand> {}
interface NSDeleteCommand extends NSScriptCommand {
  setReceiversSpecifier(receiversRef: NSScriptObjectSpecifier | null): void;

  keySpecifier(): NSScriptObjectSpecifier;
}
declare const NSDeleteCommand: {
  alloc(): NSDeleteCommandUninitialized;
  class(): NSDeleteCommand;
}

