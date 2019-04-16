interface NSGetCommandUninitialized<InitializedType = NSGetCommand> extends NSScriptCommandUninitialized<NSGetCommand> {}

interface NSGetCommand extends NSScriptCommand {
}

declare const NSGetCommand: {
  alloc(): NSGetCommandUninitialized;
  class(): NSGetCommand;
  currentCommand(): NSScriptCommand;
  accessInstanceVariablesDirectly(): boolean;

}

