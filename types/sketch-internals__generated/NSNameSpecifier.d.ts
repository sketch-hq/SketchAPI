interface NSNameSpecifierUninitialized<InitializedType = NSNameSpecifier> extends NSScriptObjectSpecifierUninitialized<NSNameSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_name(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, name: NSString | string): InitializedType;
}

interface NSNameSpecifier extends NSScriptObjectSpecifier {

  name(): NSString;
  setName(name: NSString | string): void;
}

declare const NSNameSpecifier: {
  alloc(): NSNameSpecifierUninitialized;
  class(): NSNameSpecifier;
  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
  accessInstanceVariablesDirectly(): boolean;

}

