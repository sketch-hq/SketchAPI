interface NSLogicalTestUninitialized<InitializedType = NSLogicalTest> extends NSScriptWhoseTestUninitialized<NSLogicalTest> {
  initAndTestWithTests(subTests: NSArray<any> | any[]): InitializedType;
  initOrTestWithTests(subTests: NSArray<any> | any[]): InitializedType;
  initNotTestWithTest(subTest: NSScriptWhoseTest): InitializedType;
}

interface NSLogicalTest extends NSScriptWhoseTest {
}

declare const NSLogicalTest: {
  alloc(): NSLogicalTestUninitialized;
  class(): NSLogicalTest;
  accessInstanceVariablesDirectly(): boolean;

}

