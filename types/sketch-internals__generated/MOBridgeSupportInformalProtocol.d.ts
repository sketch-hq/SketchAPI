interface MOBridgeSupportInformalProtocolUninitialized<InitializedType = MOBridgeSupportInformalProtocol> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportInformalProtocol> {}
interface MOBridgeSupportInformalProtocol extends MOBridgeSupportSymbol {
  addMethod(method: MOBridgeSupportMethod): void;
  removeMethod(method: MOBridgeSupportMethod): void;
  methodWithSelector(selector: string): MOBridgeSupportMethod;

  methods(): NSArray<any>;
  setMethods(methods: NSArray<any> | any[]): void;
}
declare const MOBridgeSupportInformalProtocol: {
  alloc(): MOBridgeSupportInformalProtocolUninitialized;
  class(): MOBridgeSupportInformalProtocol;
}

