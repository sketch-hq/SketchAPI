interface NSCreateCommandUninitialized<InitializedType = NSCreateCommand> extends NSScriptCommandUninitialized<NSCreateCommand> {}
interface NSCreateCommand extends NSScriptCommand {

  createClassDescription(): NSScriptClassDescription;
  resolvedKeyDictionary(): NSDictionary<any, any>;
}
declare const NSCreateCommand: {
  alloc(): NSCreateCommandUninitialized;
  class(): NSCreateCommand;
}

