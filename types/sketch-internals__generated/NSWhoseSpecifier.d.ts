interface NSWhoseSpecifierUninitialized<InitializedType = NSWhoseSpecifier> extends NSScriptObjectSpecifierUninitialized<NSWhoseSpecifier> {
  initWithContainerClassDescription_containerSpecifier_key_test(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string, test: NSScriptWhoseTest): InitializedType;
}
interface NSWhoseSpecifier extends NSScriptObjectSpecifier {

  test(): NSScriptWhoseTest;
  setTest(test: NSScriptWhoseTest): void;
  startSubelementIdentifier(): NSWhoseSubelementIdentifier;
  setStartSubelementIdentifier(startSubelementIdentifier: NSWhoseSubelementIdentifier): void;
  startSubelementIndex(): NSInteger;
  setStartSubelementIndex(startSubelementIndex: NSInteger): void;
  endSubelementIdentifier(): NSWhoseSubelementIdentifier;
  setEndSubelementIdentifier(endSubelementIdentifier: NSWhoseSubelementIdentifier): void;
  endSubelementIndex(): NSInteger;
  setEndSubelementIndex(endSubelementIndex: NSInteger): void;
}
declare const NSWhoseSpecifier: {
  alloc(): NSWhoseSpecifierUninitialized;
  class(): NSWhoseSpecifier;
}

