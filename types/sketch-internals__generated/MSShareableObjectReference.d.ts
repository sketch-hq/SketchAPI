interface MSShareableObjectReferenceUninitialized<InitializedType = MSShareableObjectReference> extends NSObjectUninitialized<MSShareableObjectReference> {}

interface MSShareableObjectReference extends NSObject, IBCSortable, IMSSharedObjectStyling {
  foreignObjectCollectionInDocument(document: MSDocumentData): NSArray<any>;
  generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock(menuItem: NSMenuItem, colorSpace: NSColorSpace, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForPopup_backingScale_completionBlock(cell: NSPopUpButtonCell, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForManageSheetWithBackingScale_completionBlock(backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock(size: CGSize, backingScale: CGFloat, shadow: boolean, colorSpace: NSColorSpace, block: MSPreviewGeneratorBlock): void;
  applyStyleToMenuItem_withColorSpace(item: NSMenuItem | null, colorSpace: NSColorSpace | null): void;

  sourceLibrary(): MSAssetLibrary;
  shareableObject(): MSShareableObject;
  shareableObjectType(): MSShareableObjectType;
  sharedObjectID(): NSString;
  locationPath(): NSString;
  name(): NSString;
}

declare const MSShareableObjectReference: {
  alloc(): MSShareableObjectReferenceUninitialized;
  class(): MSShareableObjectReference;
  referenceForShareableObject(object: MSModelObject): MSShareableObjectReference;
  referenceForShareableObject_inLibrary(object: MSModelObject, library: MSAssetLibrary | null): MSShareableObjectReference;
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

