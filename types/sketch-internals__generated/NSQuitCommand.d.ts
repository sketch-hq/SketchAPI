interface NSQuitCommandUninitialized<InitializedType = NSQuitCommand> extends NSScriptCommandUninitialized<NSQuitCommand> {}

interface NSQuitCommand extends NSScriptCommand {

  saveOptions(): NSSaveOptions;
}

declare const NSQuitCommand: {
  alloc(): NSQuitCommandUninitialized;
  class(): NSQuitCommand;
  currentCommand(): NSScriptCommand;
  accessInstanceVariablesDirectly(): boolean;

}

