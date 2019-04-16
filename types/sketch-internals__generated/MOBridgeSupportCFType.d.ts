interface MOBridgeSupportCFTypeUninitialized<InitializedType = MOBridgeSupportCFType> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportCFType> {}
interface MOBridgeSupportCFType extends MOBridgeSupportSymbol {

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  tollFreeBridgedClassName(): NSString;
  setTollFreeBridgedClassName(tollFreeBridgedClassName: NSString | string): void;
  getTypeIDFunctionName(): NSString;
  setGetTypeIDFunctionName(getTypeIDFunctionName: NSString | string): void;
}
declare const MOBridgeSupportCFType: {
  alloc(): MOBridgeSupportCFTypeUninitialized;
  class(): MOBridgeSupportCFType;
}

