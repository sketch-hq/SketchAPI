interface MOBridgeSupportConstantUninitialized<InitializedType = MOBridgeSupportConstant> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportConstant> {}
interface MOBridgeSupportConstant extends MOBridgeSupportSymbol {

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  hasMagicCookie(): boolean;
  setHasMagicCookie(hasMagicCookie: boolean): void;
}
declare const MOBridgeSupportConstant: {
  alloc(): MOBridgeSupportConstantUninitialized;
  class(): MOBridgeSupportConstant;
}

