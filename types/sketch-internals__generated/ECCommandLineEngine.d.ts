interface ECCommandLineEngineUninitialized<InitializedType = ECCommandLineEngine> extends NSObjectUninitialized<ECCommandLineEngine> {
  initWithDelegate(delegate: any): InitializedType;
}

interface ECCommandLineEngine extends NSObject, IECIODelegate {
  processArguments_argv(argc: number, argv: MOPointer<string>): ECCommandLineResult;
  showUsage(): void;
  outputDescription(description: NSString | string): void;
  info(): NSDictionary<any, any>;
  commandWithName(name: NSString | string): ECCommandLineCommand;
  optionWithName(name: NSString | string): ECCommandLineOption;
  paddingLength(): NSUInteger;
  exitWithResult(result: ECCommandLineResult): void;

  name(): NSString;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const ECCommandLineEngine: {
  alloc(): ECCommandLineEngineUninitialized;
  class(): ECCommandLineEngine;
  addCommandNamed_withInfo_toDictionary_parentCommand(mainName: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, dictionary: NSMutableDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): void;
  commandsInDisplayOrder(commands: NSDictionary<any, any> | {[key: string]: any}): NSArray<any>;
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

