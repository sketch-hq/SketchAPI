interface NSTouchBarUninitialized<InitializedType = NSTouchBar> extends NSObjectUninitialized<NSTouchBar> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTouchBar extends NSObject, INSCoding, INSCoding {
  itemForIdentifier(identifier: NSTouchBarItemIdentifier): NSTouchBarItem;
  encodeWithCoder(aCoder: NSCoder): void;
  encodeWithCoder(aCoder: NSCoder): void;

  customizationIdentifier(): NSTouchBarCustomizationIdentifier;
  setCustomizationIdentifier(customizationIdentifier: NSTouchBarCustomizationIdentifier): void;
  customizationAllowedItemIdentifiers(): NSArray<any>;
  setCustomizationAllowedItemIdentifiers(customizationAllowedItemIdentifiers: NSArray<any> | any[]): void;
  customizationRequiredItemIdentifiers(): NSArray<any>;
  setCustomizationRequiredItemIdentifiers(customizationRequiredItemIdentifiers: NSArray<any> | any[]): void;
  defaultItemIdentifiers(): NSArray<any>;
  setDefaultItemIdentifiers(defaultItemIdentifiers: NSArray<any> | any[]): void;
  itemIdentifiers(): NSArray<any>;
  principalItemIdentifier(): NSTouchBarItemIdentifier;
  setPrincipalItemIdentifier(principalItemIdentifier: NSTouchBarItemIdentifier): void;
  escapeKeyReplacementItemIdentifier(): NSTouchBarItemIdentifier;
  setEscapeKeyReplacementItemIdentifier(escapeKeyReplacementItemIdentifier: NSTouchBarItemIdentifier): void;
  templateItems(): NSSet<any>;
  setTemplateItems(templateItems: NSSet<any>): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  visible(): boolean;
}

declare const NSTouchBar: {
  alloc(): NSTouchBarUninitialized;
  class(): NSTouchBar;
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

