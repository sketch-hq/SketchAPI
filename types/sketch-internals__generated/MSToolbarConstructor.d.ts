interface MSToolbarConstructorUninitialized<InitializedType = MSToolbarConstructor> extends NSObjectUninitialized<MSToolbarConstructor> {
  initWithDocument(document: MSDocument): InitializedType;
}

interface MSToolbarConstructor extends NSObject, INSToolbarDelegate {
  constructToolbarForWindow(window: NSWindow): void;
  validateToolbarItems(): void;
  toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(toolbar: NSToolbar, itemIdentifier: NSToolbarItemIdentifier, flag: boolean): NSToolbarItem;
  toolbarDefaultItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarAllowedItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarSelectableItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarWillAddItem(notification: NSNotification): void;
  toolbarDidRemoveItem(notification: NSNotification): void;

  doc(): MSDocument;
  setDoc(doc: MSDocument): void;
}

declare const MSToolbarConstructor: {
  alloc(): MSToolbarConstructorUninitialized;
  class(): MSToolbarConstructor;
  toolbarAllowedItemIdentifiers(): NSArray<any>;
  toolbarDefaultItemIdentifiers(): NSArray<any>;
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

