interface COScriptUninitialized<InitializedType = COScript> extends NSObjectUninitialized<COScript> {
  initWithCoreModules_andName(coreModules: NSDictionary<any, any> | {[key: string]: any}, name: NSString | string): InitializedType;
}

interface COScript extends NSObject {
  addFiber(fiber: COSFiber): void;
  cleanupFibers(): void;
  removeFiber(fiber: COSFiber): void;
  createFiber(): COSFiber;
  cleanup(): void;
  garbageCollect(): void;
  executeString(str: NSString | string): any;
  executeString_baseURL(str: NSString | string, base: NSURL): any;
  pushObject_withName(obj: any, name: NSString | string): void;
  pushJSValue_withName(obj: JSValueRef, name: NSString | string): void;
  deleteObjectWithName(name: NSString | string): void;
  print(s: any): void;
  require(module: NSString | string): JSValueRef;
  shouldKeepRunning(): boolean;
  context(): JSGlobalContextRef;
  callFunctionNamed_withArguments(name: NSString | string, args: NSArray<any> | any[]): any;
  hasFunctionNamed(name: NSString | string): boolean;
  callJSFunction_withArgumentsInArray(jsFunction: JSObjectRef, arguments: NSArray<any> | any[]): any;
  fiberWasCleared(): void;

  printController(): any;
  setPrintController(printController: any): void;
  env(): NSMutableDictionary<any, any>;
  setEnv(env: NSMutableDictionary<any, any> | {[key: string]: any}): void;
  shouldPreprocess(): boolean;
  setShouldPreprocess(shouldPreprocess: boolean): void;
  shouldKeepAround(): boolean;
  setShouldKeepAround(shouldKeepAround: boolean): void;
  processedSource(): NSString;
  setProcessedSource(processedSource: NSString | string): void;
  coreModuleMap(): NSDictionary<any, any>;
  setCoreModuleMap(coreModuleMap: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const COScript: {
  alloc(): COScriptUninitialized;
  class(): COScript;
  insertInMainMenu(): boolean;
  loadBridgeSupportFileAtURL(url: NSURL): void;
  listen(): void;
  resetPlugins(): void;
  loadPlugins(): void;
  setShouldLoadJSTPlugins(b: boolean): void;
  application(app: NSString | string): any;
  app(app: NSString | string): any;
  currentCOScript(): COScript;
  setDebugController(debugController: any): any;
  setFlowDelegate(flowDelegate: any): any;
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

