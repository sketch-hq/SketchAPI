interface MSPreferencesPluginInfoUninitialized<InitializedType = MSPreferencesPluginInfo> extends NSObjectUninitialized<MSPreferencesPluginInfo> {}

interface MSPreferencesPluginInfo extends NSObject {

  name(): NSString;
  pluginDescription(): NSString;
  attributedTitle(): NSAttributedString;
  icon(): NSImage;
  enableCheckboxTitle(): NSString;
  version(): NSString;
  updateVersionString(): NSString;
  updateAvailable(): boolean;
  isCompatible(): boolean;
  warningString(): NSString;
  namePlusAuthor(): NSString;
  homepage(): NSURL;
  isUpdating(): boolean;
  setIsUpdating(isUpdating: boolean): void;
  suppliesData(): boolean;
  pluginBundle(): MSPluginBundle;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
}

declare const MSPreferencesPluginInfo: {
  alloc(): MSPreferencesPluginInfoUninitialized;
  class(): MSPreferencesPluginInfo;
  pluginInfoWithPluginBundle(pluginBundle: MSPluginBundle): MSPreferencesPluginInfo;
  pluginInfoWithName(name: NSString | string): MSPreferencesPluginInfo;
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

