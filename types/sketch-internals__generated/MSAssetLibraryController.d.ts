interface MSAssetLibraryControllerUninitialized<InitializedType = MSAssetLibraryController> extends NSObjectUninitialized<MSAssetLibraryController> {}

interface MSAssetLibraryController extends NSObject, IMSAssetLibraryDelegate {
  existingLibraryForDocumentAtURL(url: NSURL): MSAssetLibrary;
  addAssetLibraryAtURL(url: NSURL): MSAssetLibraryControllerAddStatus;
  removeAssetLibrary(library: MSAssetLibrary): void;
  importShareableObjectReference_intoDocument(reference: MSShareableObjectReference, document: MSDocumentData): MSForeignObject;
  syncForeignObject_withMaster_fromLibrary(foreignObject: MSForeignObject, libraryMaster: MSShareableObject, sourceLibrary: MSAssetLibrary): void;
  enumerateForeignObjects_inDocument_includeDisabled_block(objects: NSArray<any> | any[], document: MSDocumentData, includeDisabled: boolean, block: Block): void;
  libraryForShareableObject(object: MSModelObject): MSAssetLibrary;
  loadLibrariesWithDispatchGroup(dispatchGroup: dispatch_group_t | null): void;
  loadRemoteLibraryRepresentationWithCompletionHandler(completionHandler: Block): void;
  copyInternalLibraryToApplicationSupport(): void;
  generatePreviewImageForLibrary_completionHandler(library: MSAssetLibrary, completionHandler: Block): void;
  addRemoteLibraryFromAppcastURL_withCompletionHandler(appcastURL: NSURL, completionHandler: Block): void;
  downloadAssetLibraryAppcastsWithHandler_completionHandler(handler: Block | null, completionBlock: Block): void;
  startDownloadingAssetLibrary_progressHandler_downloadCompletionHandler_completionHandler(assetLibrary: MSRemoteAssetLibrary, progressHandler: Block, downloadCompletionHandler: Block, completionHandler: Block): void;
  librariesWithUpdates(): NSArray<any>;
  addRemoteLibraryFromAppcastURL_context_callback(appcastURL: NSURL, coscript: COScript, callback: MOJavaScriptObject | Function): void;
  assetLibraryChangedOnDisk(library: MSAssetLibrary): void;
  assetLibraryEnableStateChanged(library: MSAssetLibrary): void;

  availableLibraries(): NSArray<any>;
  libraries(): NSArray<any>;
}

declare const MSAssetLibraryController: {
  alloc(): MSAssetLibraryControllerUninitialized;
  class(): MSAssetLibraryController;
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

