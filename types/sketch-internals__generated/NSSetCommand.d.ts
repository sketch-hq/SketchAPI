interface NSSetCommandUninitialized<InitializedType = NSSetCommand> extends NSScriptCommandUninitialized<NSSetCommand> {}
interface NSSetCommand extends NSScriptCommand {
  setReceiversSpecifier(receiversRef: NSScriptObjectSpecifier | null): void;

  keySpecifier(): NSScriptObjectSpecifier;
}
declare const NSSetCommand: {
  alloc(): NSSetCommandUninitialized;
  class(): NSSetCommand;
}

