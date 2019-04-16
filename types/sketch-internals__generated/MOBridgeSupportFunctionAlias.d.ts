interface MOBridgeSupportFunctionAliasUninitialized<InitializedType = MOBridgeSupportFunctionAlias> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportFunctionAlias> {}
interface MOBridgeSupportFunctionAlias extends MOBridgeSupportSymbol {

  original(): NSString;
  setOriginal(original: NSString | string): void;
}
declare const MOBridgeSupportFunctionAlias: {
  alloc(): MOBridgeSupportFunctionAliasUninitialized;
  class(): MOBridgeSupportFunctionAlias;
}

