interface NSCloseCommandUninitialized<InitializedType = NSCloseCommand> extends NSScriptCommandUninitialized<NSCloseCommand> {}

interface NSCloseCommand extends NSScriptCommand {

  saveOptions(): NSSaveOptions;
}

declare const NSCloseCommand: {
  alloc(): NSCloseCommandUninitialized;
  class(): NSCloseCommand;
  currentCommand(): NSScriptCommand;
  accessInstanceVariablesDirectly(): boolean;

}

