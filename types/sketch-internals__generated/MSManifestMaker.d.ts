interface MSManifestMakerUninitialized<InitializedType = MSManifestMaker> extends NSObjectUninitialized<MSManifestMaker> {
  initWithDocument(documentData: MSImmutableDocumentData): InitializedType;
}

interface MSManifestMaker extends NSObject {
  createManifest(): NSDictionary<any, any>;
  metadataForRootLayer_onPage_earlierSlugs(root: MSImmutableLayerGroup, page: MSImmutablePage, slugs: NSMutableDictionary<any, any> | {[key: string]: any} | null): NSDictionary<any, any>;
  filesMetadataForRootLayer_onPage_id(root: MSImmutableLayerGroup, page: MSImmutablePage, fileID: NSString | string): NSArray<any>;

  documentData(): MSImmutableDocumentData;
  name(): NSString;
  setName(name: NSString | string): void;
  fileURL(): NSURL;
  setFileURL(fileURL: NSURL): void;
  selectiveExport(): boolean;
  setSelectiveExport(selectiveExport: boolean): void;
  usePageIfMissingArtboard(): boolean;
  setUsePageIfMissingArtboard(usePageIfMissingArtboard: boolean): void;
}

declare const MSManifestMaker: {
  alloc(): MSManifestMakerUninitialized;
  class(): MSManifestMaker;
  keyForFlowAnimationType(type: MSFlowAnimationType): NSString;
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

