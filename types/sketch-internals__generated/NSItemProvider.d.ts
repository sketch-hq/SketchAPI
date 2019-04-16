interface NSItemProviderUninitialized<InitializedType = NSItemProvider> extends NSObjectUninitialized<NSItemProvider> {
  initWithObject(object: any): InitializedType;
  initWithItem_typeIdentifier(item: any | null, typeIdentifier: NSString | string | null): InitializedType;
  initWithContentsOfURL(fileURL: NSURL): InitializedType;
}

interface NSItemProvider extends NSObject, INSCopying {
  registerDataRepresentationForTypeIdentifier_visibility_loadHandler(typeIdentifier: NSString | string, visibility: NSItemProviderRepresentationVisibility, loadHandler: Block): void;
  registerFileRepresentationForTypeIdentifier_fileOptions_visibility_loadHandler(typeIdentifier: NSString | string, fileOptions: NSItemProviderFileOptions, visibility: NSItemProviderRepresentationVisibility, loadHandler: Block): void;
  registeredTypeIdentifiersWithFileOptions(fileOptions: NSItemProviderFileOptions): NSArray<any>;
  hasItemConformingToTypeIdentifier(typeIdentifier: NSString | string): boolean;
  hasRepresentationConformingToTypeIdentifier_fileOptions(typeIdentifier: NSString | string, fileOptions: NSItemProviderFileOptions): boolean;
  loadDataRepresentationForTypeIdentifier_completionHandler(typeIdentifier: NSString | string, completionHandler: Block): NSProgress;
  loadFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: NSString | string, completionHandler: Block): NSProgress;
  loadInPlaceFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: NSString | string, completionHandler: Block): NSProgress;
  registerObject_visibility(object: any, visibility: NSItemProviderRepresentationVisibility): void;
  registerObjectOfClass_visibility_loadHandler(aClass: any, visibility: NSItemProviderRepresentationVisibility, loadHandler: Block): void;
  canLoadObjectOfClass(aClass: any): boolean;
  loadObjectOfClass_completionHandler(aClass: any, completionHandler: Block): NSProgress;
  registerItemForTypeIdentifier_loadHandler(typeIdentifier: NSString | string, loadHandler: NSItemProviderLoadHandler): void;
  loadItemForTypeIdentifier_options_completionHandler(typeIdentifier: NSString | string, options: NSDictionary<any, any> | {[key: string]: any} | null, completionHandler: NSItemProviderCompletionHandler | null): void;
  loadPreviewImageWithOptions_completionHandler(options: NSDictionary<any, any> | {[key: string]: any}, completionHandler: NSItemProviderCompletionHandler): void;
  registerCloudKitShareWithPreparationHandler(preparationHandler: Block): void;
  registerCloudKitShare_container(share: CKShare, container: CKContainer): void;
  copyWithZone(zone: NSZone | null): any;

  registeredTypeIdentifiers(): NSArray<any>;
  suggestedName(): NSString;
  setSuggestedName(suggestedName: NSString | string): void;
  previewImageHandler(): NSItemProviderLoadHandler;
  setPreviewImageHandler(previewImageHandler: NSItemProviderLoadHandler): void;
  sourceFrame(): NSRect;
  containerFrame(): NSRect;
  preferredPresentationSize(): NSSize;
}

declare const NSItemProvider: {
  alloc(): NSItemProviderUninitialized;
  class(): NSItemProvider;
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

