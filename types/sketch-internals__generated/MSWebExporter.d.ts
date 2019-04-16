interface MSWebExporterUninitialized<InitializedType = MSWebExporter> extends NSObjectUninitialized<MSWebExporter> {
  initWithDocument_name_localURL(doc: MSDocumentData, name: NSString | string, localURL: NSURL): InitializedType;
}

interface MSWebExporter extends NSObject, IMSCloudManifestMakerDelegate {
  exportArtboardsWithCompletionBlock(completionBlock: MSWebExporterCompletionBlock): void;
  exportDocumentWithUIMetadata_completionBlock(UIMetadata: NSDictionary<any, any> | {[key: string]: any}, completionBlock: MSWebExporterCompletionBlock): void;
  exportArtboardsIncludingManifest_error(includeManifest: boolean, error: MOPointer<NSError>): boolean;
  cancel(): void;
  cloudManifestMaker_fileMetadataForRootLayer_layerBehavior_atScale(maker: MSCloudManifestMaker, root: MSImmutableLayerGroup, behavior: MSWebExportLayerBehavior, scale: CGFloat): NSDictionary<any, any>;

  documentData(): MSDocumentData;
  destinationURL(): NSURL;
  name(): NSString;
  selectiveExport(): boolean;
  setSelectiveExport(selectiveExport: boolean): void;
  cloudOrganization(): SCKOrganization;
  setCloudOrganization(cloudOrganization: SCKOrganization): void;
}

declare const MSWebExporter: {
  alloc(): MSWebExporterUninitialized;
  class(): MSWebExporter;
  exportArtboardsOfDocument_withName_toLocalURL_completionBlock(doc: MSDocumentData, name: NSString | string, localURL: NSURL, completionBlock: MSWebExporterCompletionBlock): void;
  exportSelectedArtboardsOfDocument_withName_toLocalURL_completionBlock(doc: MSDocumentData, name: NSString | string, localURL: NSURL, completionBlock: MSWebExporterCompletionBlock): void;
  exportBitmapImageForRequest(request: MSWebExportRequest): NSBitmapImageRep;
  imageURLWithHash_inDirectory(dataHash: NSString | string, directory: NSURL): NSURL;
  documentURLInDirectory(directory: NSURL): NSURL;
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

