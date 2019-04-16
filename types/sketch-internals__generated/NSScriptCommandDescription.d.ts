interface NSScriptCommandDescriptionUninitialized<InitializedType = NSScriptCommandDescription> extends NSObjectUninitialized<NSScriptCommandDescription> {
  initWithSuiteName_commandName_dictionary(suiteName: NSString | string, commandName: NSString | string, commandDeclaration: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
}
interface NSScriptCommandDescription extends NSObject, INSCoding {
  typeForArgumentWithName(argumentName: NSString | string): NSString;
  appleEventCodeForArgumentWithName(argumentName: NSString | string): number;
  isOptionalArgumentWithName(argumentName: NSString | string): boolean;
  createCommandInstance(): NSScriptCommand;
  createCommandInstanceWithZone(zone: NSZone | null): NSScriptCommand;

  suiteName(): NSString;
  commandName(): NSString;
  appleEventClassCode(): number;
  appleEventCode(): number;
  commandClassName(): NSString;
  returnType(): NSString;
  appleEventCodeForReturnType(): number;
  argumentNames(): NSArray<any>;
}
declare const NSScriptCommandDescription: {
  alloc(): NSScriptCommandDescriptionUninitialized;
  class(): NSScriptCommandDescription;
}

