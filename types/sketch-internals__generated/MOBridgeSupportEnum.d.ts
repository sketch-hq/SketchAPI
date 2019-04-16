interface MOBridgeSupportEnumUninitialized<InitializedType = MOBridgeSupportEnum> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportEnum> {}

interface MOBridgeSupportEnum extends MOBridgeSupportSymbol {

  value(): NSNumber;
  setValue(value: NSNumber | number): void;
  value64(): NSNumber;
  setValue64(value64: NSNumber | number): void;
  ignored(): boolean;
  setIgnored(ignored: boolean): void;
  suggestion(): NSString;
  setSuggestion(suggestion: NSString | string): void;
}

declare const MOBridgeSupportEnum: {
  alloc(): MOBridgeSupportEnumUninitialized;
  class(): MOBridgeSupportEnum;
  accessInstanceVariablesDirectly(): boolean;

}

