interface NSSpecifierTestUninitialized<InitializedType = NSSpecifierTest> extends NSScriptWhoseTestUninitialized<NSSpecifierTest> {
  initWithObjectSpecifier_comparisonOperator_testObject(obj1: NSScriptObjectSpecifier | null, compOp: NSTestComparisonOperation, obj2: any | null): InitializedType;
}
interface NSSpecifierTest extends NSScriptWhoseTest {
}
declare const NSSpecifierTest: {
  alloc(): NSSpecifierTestUninitialized;
  class(): NSSpecifierTest;
}

