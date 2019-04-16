interface NSRangeSpecifierUninitialized<InitializedType = NSRangeSpecifier> extends NSScriptObjectSpecifierUninitialized<NSRangeSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_startSpecifier_endSpecifier(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, startSpec: NSScriptObjectSpecifier | null, endSpec: NSScriptObjectSpecifier | null): InitializedType;
}
interface NSRangeSpecifier extends NSScriptObjectSpecifier {

  startSpecifier(): NSScriptObjectSpecifier;
  setStartSpecifier(startSpecifier: NSScriptObjectSpecifier): void;
  endSpecifier(): NSScriptObjectSpecifier;
  setEndSpecifier(endSpecifier: NSScriptObjectSpecifier): void;
}
declare const NSRangeSpecifier: {
  alloc(): NSRangeSpecifierUninitialized;
  class(): NSRangeSpecifier;
}

