interface MOBridgeSupportLibraryUninitialized<InitializedType = MOBridgeSupportLibrary> extends NSObjectUninitialized<MOBridgeSupportLibrary> {}
interface MOBridgeSupportLibrary extends NSObject {
  addDependency(dependency: NSString | string): void;
  removeDependency(dependency: NSString | string): void;
  symbolWithName(name: NSString | string): MOBridgeSupportSymbol;
  setSymbol_forName(symbol: MOBridgeSupportSymbol, name: NSString | string): void;
  removeSymbolForName(name: NSString | string): void;

  name(): NSString;
  setName(name: NSString | string): void;
  URL(): NSURL;
  setURL(URL: NSURL): void;
  dependencies(): NSArray<any>;
  setDependencies(dependencies: NSArray<any> | any[]): void;
  symbols(): NSDictionary<any, any>;
  setSymbols(symbols: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const MOBridgeSupportLibrary: {
  alloc(): MOBridgeSupportLibraryUninitialized;
  class(): MOBridgeSupportLibrary;
}

