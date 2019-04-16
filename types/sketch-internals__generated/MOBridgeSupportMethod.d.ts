interface MOBridgeSupportMethodUninitialized<InitializedType = MOBridgeSupportMethod> extends MOBridgeSupportSymbolUninitialized<MOBridgeSupportMethod> {}
interface MOBridgeSupportMethod extends MOBridgeSupportSymbol {
  addArgument(argument: MOBridgeSupportArgument): void;
  removeArgument(argument: MOBridgeSupportArgument): void;

  selector(): string;
  setSelector(selector: string): void;
  type(): NSString;
  setType(type: NSString | string): void;
  type64(): NSString;
  setType64(type64: NSString | string): void;
  arguments(): NSArray<any>;
  setArguments(arguments: NSArray<any> | any[]): void;
  returnValue(): MOBridgeSupportArgument;
  setReturnValue(returnValue: MOBridgeSupportArgument): void;
  classMethod(): boolean;
  setClassMethod(classMethod: boolean): void;
  variadic(): boolean;
  setVariadic(variadic: boolean): void;
  sentinel(): NSNumber;
  setSentinel(sentinel: NSNumber | number): void;
  ignored(): boolean;
  setIgnored(ignored: boolean): void;
  suggestion(): NSString;
  setSuggestion(suggestion: NSString | string): void;
}
declare const MOBridgeSupportMethod: {
  alloc(): MOBridgeSupportMethodUninitialized;
  class(): MOBridgeSupportMethod;
}

