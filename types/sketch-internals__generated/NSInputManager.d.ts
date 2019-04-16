interface NSInputManagerUninitialized<InitializedType = NSInputManager> extends NSObjectUninitialized<NSInputManager> {
  initWithName_host(inputServerName: NSString | string, hostName: NSString | string): InitializedType;
}

interface NSInputManager extends NSObject, INSTextInput {
  localizedInputManagerName(): NSString;
  markedTextAbandoned(cli: any): void;
  markedTextSelectionChanged_client(newSel: NSRange, cli: any): void;
  wantsToInterpretAllKeystrokes(): boolean;
  language(): NSString;
  image(): NSImage;
  server(): NSInputServer;
  wantsToHandleMouseEvents(): boolean;
  handleMouseEvent(mouseEvent: NSEvent): boolean;
  wantsToDelayTextChangeNotifications(): boolean;
  insertText(string: any): void;
  doCommandBySelector(selector: string): void;
  setMarkedText_selectedRange(string: any, selRange: NSRange): void;
  unmarkText(): void;
  hasMarkedText(): boolean;
  conversationIdentifier(): NSInteger;
  attributedSubstringFromRange(range: NSRange): NSAttributedString;
  markedRange(): NSRange;
  selectedRange(): NSRange;
  firstRectForCharacterRange(range: NSRange): NSRect;
  characterIndexForPoint(point: NSPoint): NSUInteger;
  validAttributesForMarkedText(): NSArray<any>;
}

declare const NSInputManager: {
  alloc(): NSInputManagerUninitialized;
  class(): NSInputManager;
  currentInputManager(): NSInputManager;
  cycleToNextInputLanguage(sender: any | null): void;
  cycleToNextInputServerInLanguage(sender: any | null): void;
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

