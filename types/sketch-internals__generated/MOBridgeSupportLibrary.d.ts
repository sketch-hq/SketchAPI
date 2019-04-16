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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

