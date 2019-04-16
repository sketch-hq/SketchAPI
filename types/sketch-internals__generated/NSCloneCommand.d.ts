interface NSCloneCommandUninitialized<InitializedType = NSCloneCommand> extends NSScriptCommandUninitialized<NSCloneCommand> {}

interface NSCloneCommand extends NSScriptCommand {
  setReceiversSpecifier(receiversRef: NSScriptObjectSpecifier | null): void;

  keySpecifier(): NSScriptObjectSpecifier;
}

declare const NSCloneCommand: {
  alloc(): NSCloneCommandUninitialized;
  class(): NSCloneCommand;
  currentCommand(): NSScriptCommand;
  accessInstanceVariablesDirectly(): boolean;

}

