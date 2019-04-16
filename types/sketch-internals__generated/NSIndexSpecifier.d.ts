interface NSIndexSpecifierUninitialized<InitializedType = NSIndexSpecifier> extends NSScriptObjectSpecifierUninitialized<NSIndexSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_index(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, index: NSInteger): InitializedType;
}
interface NSIndexSpecifier extends NSScriptObjectSpecifier {

  index(): NSInteger;
  setIndex(index: NSInteger): void;
}
declare const NSIndexSpecifier: {
  alloc(): NSIndexSpecifierUninitialized;
  class(): NSIndexSpecifier;
}

