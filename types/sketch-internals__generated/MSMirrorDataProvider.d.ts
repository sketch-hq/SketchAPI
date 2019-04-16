interface MSMirrorDataProviderUninitialized<InitializedType = MSMirrorDataProvider> extends NSObjectUninitialized<MSMirrorDataProvider> {}

interface MSMirrorDataProvider extends NSObject, ISMKMirrorDataSource {
  currentArtboardDidChange(): void;
  setNeedsUpdate(): void;
  setNeedsUpdateMetadata(): void;

  connectionController(): SMKMirrorController;
  setConnectionController(connectionController: SMKMirrorController): void;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  documentData(): MSImmutableDocumentData;
  requiresImmediateUpdate(): boolean;
  setRequiresImmediateUpdate(requiresImmediateUpdate: boolean): void;
  currentArtboardID(): NSString;
  manifestContent(): NSDictionary<any, any>;
}

declare const MSMirrorDataProvider: {
  alloc(): MSMirrorDataProviderUninitialized;
  class(): MSMirrorDataProvider;
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

