interface ECCommandLineCommandUninitialized<InitializedType = ECCommandLineCommand> extends NSObjectUninitialized<ECCommandLineCommand> {}

interface ECCommandLineCommand extends NSObject {
  enumerateArguments(block: ArgumentBlock): void;
  engine_processCommands(engine: ECCommandLineEngine, commands: NSMutableArray<any> | any[]): ECCommandLineResult;
  engine_willProcessWithArguments(engine: ECCommandLineEngine, arguments: NSMutableArray<any> | any[]): ECCommandLineResult;
  engine_didProcessWithArguments(engine: ECCommandLineEngine, arguments: NSMutableArray<any> | any[]): ECCommandLineResult;
  help(): NSString;
  summaryAs_parentName(name: NSString | string, parentName: NSString | string): NSString;
  usageAs_parentName_engine(name: NSString | string, parentName: NSString | string, engine: ECCommandLineEngine): NSString;
  subcommandSummaryAs(name: NSString | string): NSString;
  resolveCommandPath(commands: NSMutableArray<any> | any[]): ECCommandLineCommand;

  name(): NSString;
  arguments(): NSArray<any>;
  parentCommand(): ECCommandLineCommand;
  hidden(): boolean;
}

declare const ECCommandLineCommand: {
  alloc(): ECCommandLineCommandUninitialized;
  class(): ECCommandLineCommand;
  commandWithName_info_parentCommand(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}, parentCommand: ECCommandLineCommand): ECCommandLineCommand;
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

