interface MOBridgeSupportOpaqueUninitialized<InitializedType = MOBridgeSupportOpaque> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportOpaque> {}

interface MOBridgeSupportOpaque extends MOBridgeSupportSymbol {

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  hasMagicCookie(): boolean;
  setHasMagicCookie(hasMagicCookie: boolean): void;
}

declare const MOBridgeSupportOpaque: {
  alloc(): MOBridgeSupportOpaqueUninitialized;
  class(): MOBridgeSupportOpaque;
  accessInstanceVariablesDirectly(): boolean;

}

