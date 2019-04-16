interface MOBridgeSupportArgumentUninitialized<InitializedType = MOBridgeSupportArgument> extends NSObjectUninitialized<MOBridgeSupportArgument> {}
interface MOBridgeSupportArgument extends NSObject {
  addArgument(argument: MOBridgeSupportArgument): void;
  removeArgument(argument: MOBridgeSupportArgument): void;

  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  typeModifier(): NSString;
  setTypeModifier(typeModifier: NSString | string): void;
  signature(): NSString;
  setSignature(signature: NSString | string): void;
  signature64(): NSString;
  setSignature64(signature64: NSString | string): void;
  cArrayLengthInArg(): NSString;
  setCArrayLengthInArg(cArrayLengthInArg: NSString | string): void;
  cArrayOfFixedLength(): boolean;
  setCArrayOfFixedLength(cArrayOfFixedLength: boolean): void;
  cArrayDelimitedByNull(): boolean;
  setCArrayDelimitedByNull(cArrayDelimitedByNull: boolean): void;
  cArrayOfVariableLength(): boolean;
  setCArrayOfVariableLength(cArrayOfVariableLength: boolean): void;
  cArrayLengthInReturnValue(): boolean;
  setCArrayLengthInReturnValue(cArrayLengthInReturnValue: boolean): void;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  acceptsNull(): boolean;
  setAcceptsNull(acceptsNull: boolean): void;
  acceptsPrintfFormat(): boolean;
  setAcceptsPrintfFormat(acceptsPrintfFormat: boolean): void;
  alreadyRetained(): boolean;
  setAlreadyRetained(alreadyRetained: boolean): void;
  functionPointer(): boolean;
  setFunctionPointer(functionPointer: boolean): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  returnValue(): MOBridgeSupportArgument;
  setReturnValue(returnValue: MOBridgeSupportArgument): void;
}
declare const MOBridgeSupportArgument: {
  alloc(): MOBridgeSupportArgumentUninitialized;
  class(): MOBridgeSupportArgument;
}

