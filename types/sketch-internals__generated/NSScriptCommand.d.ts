interface NSScriptCommandUninitialized<InitializedType = NSScriptCommand> extends NSObjectUninitialized<NSScriptCommand> {
  initWithCommandDescription(commandDef: NSScriptCommandDescription): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
}
interface NSScriptCommand extends NSObject, INSCoding {
  performDefaultImplementation(): any;
  executeCommand(): any;
  suspendExecution(): void;
  resumeExecutionWithResult(result: any | null): void;

  commandDescription(): NSScriptCommandDescription;
  directParameter(): any;
  setDirectParameter(directParameter: any): void;
  receiversSpecifier(): NSScriptObjectSpecifier;
  setReceiversSpecifier(receiversSpecifier: NSScriptObjectSpecifier): void;
  evaluatedReceivers(): any;
  arguments(): NSDictionary<any, any>;
  setArguments(arguments: NSDictionary<any, any> | {[key: string]: any}): void;
  evaluatedArguments(): NSDictionary<any, any>;
  wellFormed(): boolean;
  scriptErrorNumber(): NSInteger;
  setScriptErrorNumber(scriptErrorNumber: NSInteger): void;
  scriptErrorOffendingObjectDescriptor(): NSAppleEventDescriptor;
  setScriptErrorOffendingObjectDescriptor(scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor): void;
  scriptErrorExpectedTypeDescriptor(): NSAppleEventDescriptor;
  setScriptErrorExpectedTypeDescriptor(scriptErrorExpectedTypeDescriptor: NSAppleEventDescriptor): void;
  scriptErrorString(): NSString;
  setScriptErrorString(scriptErrorString: NSString | string): void;
  appleEvent(): NSAppleEventDescriptor;
}
declare const NSScriptCommand: {
  alloc(): NSScriptCommandUninitialized;
  class(): NSScriptCommand;  currentCommand(): NSScriptCommand;

}

