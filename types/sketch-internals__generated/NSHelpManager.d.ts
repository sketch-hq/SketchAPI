interface NSHelpManagerUninitialized<InitializedType = NSHelpManager> extends NSObjectUninitialized<NSHelpManager> {}

interface NSHelpManager extends NSObject {
  setContextHelp_forObject(attrString: NSAttributedString, object: any): void;
  removeContextHelpForObject(object: any): void;
  contextHelpForObject(object: any): NSAttributedString;
  showContextHelpForObject_locationHint(object: any, pt: NSPoint): boolean;
  openHelpAnchor_inBook(anchor: NSHelpAnchorName, book: NSHelpBookName | null): void;
  findString_inBook(query: NSString | string, book: NSHelpBookName | null): void;
  registerBooksInBundle(bundle: NSBundle): boolean;
}

declare const NSHelpManager: {
  alloc(): NSHelpManagerUninitialized;
  class(): NSHelpManager;
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
  sharedHelpManager(): NSHelpManager;
  contextHelpModeActive(): boolean;
  setContextHelpModeActive(contextHelpModeActive: boolean): void;
  accessInstanceVariablesDirectly(): boolean;

}

