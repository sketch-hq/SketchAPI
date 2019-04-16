interface MSPluginManagingStateUninitialized<InitializedType = MSPluginManagingState> extends NSObjectUninitialized<MSPluginManagingState> {
  initWithMetadataURL_incompatiblePlugins(metadataURL: NSURL, incompatiblePlugins: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

interface MSPluginManagingState extends NSObject {
  setEnabled_forPluginIdentifier_withVersion(enable: boolean, identifier: NSString | string, version: NSString | string): void;
  shouldEnablePluginIdentifier_withVersion(identifier: NSString | string, version: NSString | string): boolean;
  updateMetadataWithPluginIndentifiers(identifiers: NSArray<any> | any[]): void;
  isPluginWithIdentifier_incompatibleWithVersion(identifier: NSString | string, version: NSString | string): boolean;
  registerPluginIncompatibilityForVersions(pluginsDictionary: NSDictionary<any, any> | {[key: string]: any}): NSInteger;
  resetIncompatiblePluginMetadata(): void;
}

declare const MSPluginManagingState: {
  alloc(): MSPluginManagingStateUninitialized;
  class(): MSPluginManagingState;
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
  incompatiblePlugins(): NSDictionary<any, any>;
  existingDownloadededBlacklistURL(): NSURL;
  accessInstanceVariablesDirectly(): boolean;

}

