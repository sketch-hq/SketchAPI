interface MOBridgeSupportStructUninitialized<InitializedType = MOBridgeSupportStruct> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportStruct> {}

interface MOBridgeSupportStruct extends MOBridgeSupportSymbol {

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  opaque(): boolean;
  setOpaque(opaque: boolean): void;
}

declare const MOBridgeSupportStruct: {
  alloc(): MOBridgeSupportStructUninitialized;
  class(): MOBridgeSupportStruct;
  accessInstanceVariablesDirectly(): boolean;

}

