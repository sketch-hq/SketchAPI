interface NSPageLayoutUninitialized<InitializedType = NSPageLayout> extends NSObjectUninitialized<NSPageLayout> {}

interface NSPageLayout extends NSObject {
  addAccessoryController(accessoryController: NSViewController): void;
  removeAccessoryController(accessoryController: NSViewController): void;
  beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalWithPrintInfo(printInfo: NSPrintInfo): NSInteger;
  runModal(): NSInteger;
  setAccessoryView(accessoryView: NSView): void;
  accessoryView(): NSView;
  readPrintInfo(): void;
  writePrintInfo(): void;

  accessoryControllers(): NSArray<any>;
  printInfo(): NSPrintInfo;
}

declare const NSPageLayout: {
  alloc(): NSPageLayoutUninitialized;
  class(): NSPageLayout;
  pageLayout(): NSPageLayout;
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

