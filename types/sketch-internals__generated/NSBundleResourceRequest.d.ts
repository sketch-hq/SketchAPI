interface NSBundleResourceRequestUninitialized<InitializedType = NSBundleResourceRequest> extends NSObjectUninitialized<NSBundleResourceRequest> {
  initWithTags(tags: NSSet<any>): InitializedType;
  initWithTags_bundle(tags: NSSet<any>, bundle: NSBundle): InitializedType;
}

interface NSBundleResourceRequest extends NSObject, INSProgressReporting {
  beginAccessingResourcesWithCompletionHandler(completionHandler: Block): void;
  conditionallyBeginAccessingResourcesWithCompletionHandler(completionHandler: Block): void;
  endAccessingResources(): void;

  loadingPriority(): number;
  setLoadingPriority(loadingPriority: number): void;
  tags(): NSSet<any>;
  bundle(): NSBundle;
  progress(): NSProgress;
}

declare const NSBundleResourceRequest: {
  alloc(): NSBundleResourceRequestUninitialized;
  class(): NSBundleResourceRequest;
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

