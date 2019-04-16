interface NSAppleEventManagerUninitialized<InitializedType = NSAppleEventManager> extends NSObjectUninitialized<NSAppleEventManager> {}

interface NSAppleEventManager extends NSObject {
  setEventHandler_andSelector_forEventClass_andEventID(handler: any, handleEventSelector: string, eventClass: AEEventClass, eventID: AEEventID): void;
  removeEventHandlerForEventClass_andEventID(eventClass: AEEventClass, eventID: AEEventID): void;
  dispatchRawAppleEvent_withRawReply_handlerRefCon(theAppleEvent: AppleEvent, theReply: AppleEvent, handlerRefCon: SRefCon): OSErr;
  suspendCurrentAppleEvent(): NSAppleEventManagerSuspensionID;
  appleEventForSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): NSAppleEventDescriptor;
  replyAppleEventForSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): NSAppleEventDescriptor;
  setCurrentAppleEventAndReplyEventWithSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): void;
  resumeWithSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): void;

  currentAppleEvent(): NSAppleEventDescriptor;
  currentReplyAppleEvent(): NSAppleEventDescriptor;
}

declare const NSAppleEventManager: {
  alloc(): NSAppleEventManagerUninitialized;
  class(): NSAppleEventManager;
  sharedAppleEventManager(): NSAppleEventManager;
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

