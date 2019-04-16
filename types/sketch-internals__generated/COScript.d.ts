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
  class(): COScript;  insertInMainMenu(): boolean;
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

}

