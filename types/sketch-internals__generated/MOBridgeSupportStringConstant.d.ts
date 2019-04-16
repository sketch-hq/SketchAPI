interface MOBridgeSupportStringConstantUninitialized<InitializedType = MOBridgeSupportStringConstant> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportStringConstant> {}
interface MOBridgeSupportStringConstant extends MOBridgeSupportSymbol {

  value(): NSString;
  setValue(value: NSString | string): void;
  hasNSString(): boolean;
  setHasNSString(hasNSString: boolean): void;
}
declare const MOBridgeSupportStringConstant: {
  alloc(): MOBridgeSupportStringConstantUninitialized;
  class(): MOBridgeSupportStringConstant;
}

