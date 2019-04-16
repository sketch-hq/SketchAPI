interface NSUndoManagerUninitialized<InitializedType = NSUndoManager> extends NSObjectUninitialized<NSUndoManager> {}

interface NSUndoManager extends NSObject {
  beginUndoGrouping(): void;
  endUndoGrouping(): void;
  disableUndoRegistration(): void;
  enableUndoRegistration(): void;
  undo(): void;
  redo(): void;
  undoNestedGroup(): void;
  removeAllActions(): void;
  removeAllActionsWithTarget(target: any): void;
  registerUndoWithTarget_selector_object(target: any, selector: string, anObject: any | null): void;
  prepareWithInvocationTarget(target: any): any;
  registerUndoWithTarget_handler(target: any, undoHandler: Block): void;
  setActionIsDiscardable(discardable: boolean): void;
  setActionName(actionName: NSString | string): void;
  undoMenuTitleForUndoActionName(actionName: NSString | string): NSString;
  redoMenuTitleForUndoActionName(actionName: NSString | string): NSString;
  setActionName_sender(actionName: NSString | string, senderID: NSString | string): void;

  groupingLevel(): NSInteger;
  undoRegistrationEnabled(): boolean;
  groupsByEvent(): boolean;
  setGroupsByEvent(groupsByEvent: boolean): void;
  levelsOfUndo(): NSUInteger;
  setLevelsOfUndo(levelsOfUndo: NSUInteger): void;
  runLoopModes(): NSArray<any>;
  setRunLoopModes(runLoopModes: NSArray<any> | any[]): void;
  canUndo(): boolean;
  canRedo(): boolean;
  undoing(): boolean;
  redoing(): boolean;
  undoActionIsDiscardable(): boolean;
  redoActionIsDiscardable(): boolean;
  undoActionName(): NSString;
  redoActionName(): NSString;
  undoMenuItemTitle(): NSString;
  redoMenuItemTitle(): NSString;
}

declare const NSUndoManager: {
  alloc(): NSUndoManagerUninitialized;
  class(): NSUndoManager;
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

