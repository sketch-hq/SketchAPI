interface MOBridgeSupportSymbolUninitialized<InitializedType = MOBridgeSupportSymbol> extends NSObjectUninitialized<MOBridgeSupportSymbol> {}
interface MOBridgeSupportSymbol extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
}
declare const MOBridgeSupportSymbol: {
  alloc(): MOBridgeSupportSymbolUninitialized;
  class(): MOBridgeSupportSymbol;
}

