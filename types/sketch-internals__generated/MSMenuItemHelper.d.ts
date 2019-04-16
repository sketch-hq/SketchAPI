interface MSMenuItemHelperUninitialized<InitializedType = MSMenuItemHelper> extends NSObjectUninitialized<MSMenuItemHelper> {}

interface MSMenuItemHelper extends NSObject {
  menuItem(): NSMenuItem;

  title(): NSString;
  setTitle(title: NSString | string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  isSeparator(): boolean;
  setIsSeparator(isSeparator: boolean): void;
}

declare const MSMenuItemHelper: {
  alloc(): MSMenuItemHelperUninitialized;
  class(): MSMenuItemHelper;
  itemWithTitle_tag(title: NSString | string | null, tag: NSInteger): MSMenuItemHelper;
  itemWithTitle(title: NSString | string | null): MSMenuItemHelper;
  separator(): MSMenuItemHelper;
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

