interface NSScriptClassDescriptionUninitialized<InitializedType = NSScriptClassDescription> extends NSClassDescriptionUninitialized<NSScriptClassDescription> {
  initWithSuiteName_className_dictionary(suiteName: NSString | string, className: NSString | string, classDeclaration: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}

interface NSScriptClassDescription extends NSClassDescription {
  matchesAppleEventCode(appleEventCode: number): boolean;
  supportsCommand(commandDescription: NSScriptCommandDescription): boolean;
  selectorForCommand(commandDescription: NSScriptCommandDescription): string;
  typeForKey(key: NSString | string): NSString;
  classDescriptionForKey(key: NSString | string): NSScriptClassDescription;
  appleEventCodeForKey(key: NSString | string): number;
  keyWithAppleEventCode(appleEventCode: number): NSString;
  isLocationRequiredToCreateForKey(toManyRelationshipKey: NSString | string): boolean;
  hasPropertyForKey(key: NSString | string): boolean;
  hasOrderedToManyRelationshipForKey(key: NSString | string): boolean;
  hasReadablePropertyForKey(key: NSString | string): boolean;
  hasWritablePropertyForKey(key: NSString | string): boolean;
  isReadOnlyKey(key: NSString | string): boolean;

  suiteName(): NSString;
  className(): NSString;
  implementationClassName(): NSString;
  superclassDescription(): NSScriptClassDescription;
  appleEventCode(): number;
  defaultSubcontainerAttributeKey(): NSString;
}

declare const NSScriptClassDescription: {
  alloc(): NSScriptClassDescriptionUninitialized;
  class(): NSScriptClassDescription;
  classDescriptionForClass(aClass: any): NSScriptClassDescription;
  registerClassDescription_forClass(description: NSClassDescription, aClass: any): void;
  invalidateClassDescriptionCache(): void;
  classDescriptionForClass(aClass: any): NSClassDescription;
  accessInstanceVariablesDirectly(): boolean;

}

