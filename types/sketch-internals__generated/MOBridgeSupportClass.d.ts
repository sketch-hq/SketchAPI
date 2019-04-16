interface MOBridgeSupportClassUninitialized<InitializedType = MOBridgeSupportClass> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportClass> {}
interface MOBridgeSupportClass extends MOBridgeSupportSymbol {
  addMethod(method: MOBridgeSupportMethod): void;
  removeMethod(method: MOBridgeSupportMethod): void;
  methodWithSelector(selector: string): MOBridgeSupportMethod;

  methods(): NSArray<any>;
  setMethods(methods: NSArray<any> | any[]): void;
}
declare const MOBridgeSupportClass: {
  alloc(): MOBridgeSupportClassUninitialized;
  class(): MOBridgeSupportClass;
}

