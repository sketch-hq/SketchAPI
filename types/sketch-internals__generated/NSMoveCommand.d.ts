interface NSMoveCommandUninitialized<InitializedType = NSMoveCommand> extends NSScriptCommandUninitialized<NSMoveCommand> {}

interface NSMoveCommand extends NSScriptCommand {
  setReceiversSpecifier(receiversRef: NSScriptObjectSpecifier | null): void;

  keySpecifier(): NSScriptObjectSpecifier;
}

declare const NSMoveCommand: {
  alloc(): NSMoveCommandUninitialized;
  class(): NSMoveCommand;
  currentCommand(): NSScriptCommand;
  accessInstanceVariablesDirectly(): boolean;

}

