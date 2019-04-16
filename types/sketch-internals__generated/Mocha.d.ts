interface MochaUninitialized<InitializedType = Mocha> extends NSObjectUninitialized<Mocha> {
  initWithName(name: NSString | string): InitializedType;
}

interface Mocha extends NSObject {
  evalString(string: NSString | string): any;
  evalString_atURL(string: NSString | string, url: NSURL): any;
  evalJSString_scriptPath(string: NSString | string, scriptPath: NSString | string): JSValueRef;
  callFunctionWithName(functionName: NSString | string): any;
  callFunctionWithName_withArguments(functionName: NSString | string, firstArg: any, ...args: any[]): any;
  callFunctionWithName_withArgumentsInArray(functionName: NSString | string, arguments: NSArray<any> | any[]): any;
  isSyntaxValidForString(string: NSString | string): boolean;
  loadFrameworkWithName(frameworkName: NSString | string): boolean;
  loadFrameworkWithName_inDirectory(frameworkName: NSString | string, directory: NSString | string): boolean;
  loadBridgeSupportFilesAtPath(path: NSString | string): boolean;
  addFrameworkSearchPath(path: NSString | string): void;
  insertFrameworkSearchPath_atIndex(path: NSString | string, idx: NSUInteger): void;
  removeFrameworkSearchPathAtIndex(idx: NSUInteger): void;
  garbageCollect(): void;
  context(): JSGlobalContextRef;
  JSValueForObject(object: any): JSValueRef;
  JSValueForObject_shouldCreateBox(object: any, shouldCreateBox: boolean): JSValueRef;
  objectForJSValue(value: JSValueRef): any;
  objectForJSValue_unboxObjects(value: JSValueRef, unboxObjects: boolean): any;
  boxedJSObjectForObject_shouldCreateBox(object: any, shouldCreateBox: boolean): JSObjectRef;
  unboxedObjectForJSObject(jsObject: JSObjectRef): any;
  objectWithName(name: NSString | string): any;
  setObject_withName(object: any, name: NSString | string): JSValueRef;
  setJSValue_withName(jsValue: JSValueRef, name: NSString | string): JSValueRef;
  setObject_withName_attributes(object: any, name: NSString | string, attributes: JSPropertyAttributes): JSValueRef;
  setJSValue_withName_attributes(jsValue: JSValueRef, name: NSString | string, attributes: JSPropertyAttributes): JSValueRef;
  removeObjectWithName(name: NSString | string): boolean;
  evalJSString(string: NSString | string): JSValueRef;
  JSFunctionWithName(functionName: NSString | string): JSObjectRef;
  callJSFunctionWithName_withArgumentsInArray(functionName: NSString | string, arguments: NSArray<any> | any[]): JSValueRef;
  callJSFunction_withArgumentsInArray(jsFunction: JSObjectRef, arguments: NSArray<any> | any[]): JSValueRef;
  exceptionWithJSException(exception: JSValueRef): NSException;
  throwJSException(exception: JSValueRef): void;
  installBuiltins(): void;
  cleanUp(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  frameworkSearchPaths(): NSArray<any>;
  setFrameworkSearchPaths(frameworkSearchPaths: NSArray<any> | any[]): void;
  globalSymbolNames(): NSArray<any>;
  context(): JSGlobalContextRef;
}

declare const Mocha: {
  alloc(): MochaUninitialized;
  class(): Mocha;
  sharedRuntime(): Mocha;
  runtimeWithContext(ctx: JSContextRef): Mocha;
  JSValueForObject_inContext(object: any, ctx: JSContextRef): JSValueRef;
  objectForJSValue_inContext(value: JSValueRef, ctx: JSContextRef): any;
  objectForJSValue_inContext_unboxObjects(value: JSValueRef, ctx: JSContextRef, unboxObjects: boolean): any;
  arrayForJSArray_inContext(arrayValue: JSObjectRef, ctx: JSContextRef): NSArray<any>;
  dictionaryForJSHash_inContext(hashValue: JSObjectRef, ctx: JSContextRef): NSDictionary<any, any>;
  exceptionWithJSException_context(exception: JSValueRef, ctx: JSContextRef): NSException;
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

