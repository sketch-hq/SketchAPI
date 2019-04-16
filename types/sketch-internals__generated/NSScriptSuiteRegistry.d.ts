interface NSScriptSuiteRegistryUninitialized<InitializedType = NSScriptSuiteRegistry> extends NSObjectUninitialized<NSScriptSuiteRegistry> {}
interface NSScriptSuiteRegistry extends NSObject {
  loadSuitesFromBundle(bundle: NSBundle): void;
  loadSuiteWithDictionary_fromBundle(suiteDeclaration: NSDictionary<any, any> | {[key: string]: any}, bundle: NSBundle): void;
  registerClassDescription(classDescription: NSScriptClassDescription): void;
  registerCommandDescription(commandDescription: NSScriptCommandDescription): void;
  appleEventCodeForSuite(suiteName: NSString | string): number;
  bundleForSuite(suiteName: NSString | string): NSBundle;
  classDescriptionsInSuite(suiteName: NSString | string): NSDictionary<any, any>;
  commandDescriptionsInSuite(suiteName: NSString | string): NSDictionary<any, any>;
  suiteForAppleEventCode(appleEventCode: number): NSString;
  classDescriptionWithAppleEventCode(appleEventCode: number): NSScriptClassDescription;
  commandDescriptionWithAppleEventClass_andAppleEventCode(appleEventClassCode: number, appleEventIDCode: number): NSScriptCommandDescription;
  aeteResource(languageName: NSString | string): NSData;

  suiteNames(): NSArray<any>;
}
declare const NSScriptSuiteRegistry: {
  alloc(): NSScriptSuiteRegistryUninitialized;
  class(): NSScriptSuiteRegistry;  sharedScriptSuiteRegistry(): NSScriptSuiteRegistry;
  setSharedScriptSuiteRegistry(registry: NSScriptSuiteRegistry): void;

}

