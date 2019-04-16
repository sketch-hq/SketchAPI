interface NSRelativeSpecifierUninitialized<InitializedType = NSRelativeSpecifier> extends NSScriptObjectSpecifierUninitialized<NSRelativeSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_relativePosition_baseSpecifier(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, relPos: NSRelativePosition, baseSpecifier: NSScriptObjectSpecifier | null): InitializedType;
}
interface NSRelativeSpecifier extends NSScriptObjectSpecifier {

  relativePosition(): NSRelativePosition;
  setRelativePosition(relativePosition: NSRelativePosition): void;
  baseSpecifier(): NSScriptObjectSpecifier;
  setBaseSpecifier(baseSpecifier: NSScriptObjectSpecifier): void;
}
declare const NSRelativeSpecifier: {
  alloc(): NSRelativeSpecifierUninitialized;
  class(): NSRelativeSpecifier;
}

