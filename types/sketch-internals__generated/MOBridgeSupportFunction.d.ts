interface MOBridgeSupportFunctionUninitialized<InitializedType = MOBridgeSupportFunction> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportFunction> {}

interface MOBridgeSupportFunction extends MOBridgeSupportSymbol {
  addArgument(argument: MOBridgeSupportArgument): void;
  removeArgument(argument: MOBridgeSupportArgument): void;

  variadic(): boolean;
  setVariadic(variadic: boolean): void;
  sentinel(): NSNumber;
  setSentinel(sentinel: NSNumber | number): void;
  inlineFunction(): boolean;
  setInlineFunction(inlineFunction: boolean): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  returnValue(): MOBridgeSupportArgument;
  setReturnValue(returnValue: MOBridgeSupportArgument): void;
}

declare const MOBridgeSupportFunction: {
  alloc(): MOBridgeSupportFunctionUninitialized;
  class(): MOBridgeSupportFunction;
  accessInstanceVariablesDirectly(): boolean;

}

