interface NSInputServerUninitialized<InitializedType = NSInputServer> extends NSObjectUninitialized<NSInputServer> {
  initWithDelegate_name(delegate: any, name: NSString | string): InitializedType;
}

interface NSInputServer extends NSObject, INSInputServiceProvider, INSInputServerMouseTracker {
  insertText_client(string: any, sender: any): void;
  doCommandBySelector_client(selector: string, sender: any): void;
  markedTextAbandoned(sender: any | null): void;
  markedTextSelectionChanged_client(newSel: NSRange, sender: any): void;
  terminate(sender: any | null): void;
  canBeDisabled(): boolean;
  wantsToInterpretAllKeystrokes(): boolean;
  wantsToHandleMouseEvents(): boolean;
  wantsToDelayTextChangeNotifications(): boolean;
  inputClientBecomeActive(sender: any | null): void;
  inputClientResignActive(sender: any | null): void;
  inputClientEnabled(sender: any | null): void;
  inputClientDisabled(sender: any | null): void;
  activeConversationWillChange_fromOldConversation(sender: any, oldConversation: NSInteger): void;
  activeConversationChanged_toNewConversation(sender: any, newConversation: NSInteger): void;
  mouseDownOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): boolean;
  mouseDraggedOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): boolean;
  mouseUpOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): void;
}

declare const NSInputServer: {
  alloc(): NSInputServerUninitialized;
  class(): NSInputServer;
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

