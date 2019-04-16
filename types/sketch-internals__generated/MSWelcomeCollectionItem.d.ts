interface MSWelcomeCollectionItemUninitialized<InitializedType = MSWelcomeCollectionItem> extends NSObjectUninitialized<MSWelcomeCollectionItem> {
  initWithController(controller: MSWelcomeWindowController): InitializedType;
}

interface MSWelcomeCollectionItem extends NSObject, IMSWelcomeCollectionItemPreviewImageLoading {
  fetchPreviewImageWithMaximumPixelSize_completionHandler(maxPixelSize: CGFloat, handler: MSPreviewImageHandler): void;

  placeholderImage(): NSImage;
  title(): NSString;
  welcomeWindowController(): MSWelcomeWindowController;
  setWelcomeWindowController(welcomeWindowController: MSWelcomeWindowController): void;
  providesPreviewImage(): boolean;
  URL(): NSURL;
}

declare const MSWelcomeCollectionItem: {
  alloc(): MSWelcomeCollectionItemUninitialized;
  class(): MSWelcomeCollectionItem;
  bundledTemplatesDirectoryURL(): NSURL;
  userTemplatesDirectoryURL(): NSURL;
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

