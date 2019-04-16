interface NSPrintPanelUninitialized<InitializedType = NSPrintPanel> extends NSObjectUninitialized<NSPrintPanel> {}

interface NSPrintPanel extends NSObject {
  addAccessoryController(accessoryController: NSViewController): void;
  removeAccessoryController(accessoryController: NSViewController): void;
  setDefaultButtonTitle(defaultButtonTitle: NSString | string | null): void;
  defaultButtonTitle(): NSString;
  beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo(printInfo: NSPrintInfo, docWindow: NSWindow, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;
  runModalWithPrintInfo(printInfo: NSPrintInfo): NSInteger;
  runModal(): NSInteger;
  setAccessoryView(accessoryView: NSView | null): void;
  accessoryView(): NSView;
  updateFromPrintInfo(): void;
  finalWritePrintInfo(): void;

  accessoryControllers(): NSArray<any>;
  options(): NSPrintPanelOptions;
  setOptions(options: NSPrintPanelOptions): void;
  helpAnchor(): NSHelpAnchorName;
  setHelpAnchor(helpAnchor: NSHelpAnchorName): void;
  jobStyleHint(): NSPrintPanelJobStyleHint;
  setJobStyleHint(jobStyleHint: NSPrintPanelJobStyleHint): void;
  printInfo(): NSPrintInfo;
}

declare const NSPrintPanel: {
  alloc(): NSPrintPanelUninitialized;
  class(): NSPrintPanel;
  printPanel(): NSPrintPanel;
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

