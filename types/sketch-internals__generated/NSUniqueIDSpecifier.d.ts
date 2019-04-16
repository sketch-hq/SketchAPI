interface NSUniqueIDSpecifierUninitialized<InitializedType = NSUniqueIDSpecifier> extends NSScriptObjectSpecifierUninitialized<NSUniqueIDSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_uniqueID(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, uniqueID: any): InitializedType;
}

interface NSUniqueIDSpecifier extends NSScriptObjectSpecifier {

  uniqueID(): any;
  setUniqueID(uniqueID: any): void;
}

declare const NSUniqueIDSpecifier: {
  alloc(): NSUniqueIDSpecifierUninitialized;
  class(): NSUniqueIDSpecifier;
  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
  accessInstanceVariablesDirectly(): boolean;

}

