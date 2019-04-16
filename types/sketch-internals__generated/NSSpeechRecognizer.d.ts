interface NSSpeechRecognizerUninitialized<InitializedType = NSSpeechRecognizer> extends NSObjectUninitialized<NSSpeechRecognizer> {}

interface NSSpeechRecognizer extends NSObject {
  startListening(): void;
  stopListening(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  commands(): NSArray<any>;
  setCommands(commands: NSArray<any> | any[]): void;
  displayedCommandsTitle(): NSString;
  setDisplayedCommandsTitle(displayedCommandsTitle: NSString | string): void;
  listensInForegroundOnly(): boolean;
  setListensInForegroundOnly(listensInForegroundOnly: boolean): void;
  blocksOtherRecognizers(): boolean;
  setBlocksOtherRecognizers(blocksOtherRecognizers: boolean): void;
}

declare const NSSpeechRecognizer: {
  alloc(): NSSpeechRecognizerUninitialized;
  class(): NSSpeechRecognizer;
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

