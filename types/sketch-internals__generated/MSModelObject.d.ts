interface MSModelObjectUninitialized<InitializedType = MSModelObject> extends MSModelObjectCommonUninitialized<MSModelObject> {
  initWithImmutableModelObject(immutableBase: MSImmutableModelObject): InitializedType;
}

interface MSModelObject extends MSModelObjectCommon, IMSModelObject {
  correctInvalidGamma(): void;
  cachedValueForKey(key: any): any;
  cachedValueForKey_setUsingBlock(key: any, block: BCCacheCreateObjectBlock): any;
  updateCachedValue_forKey(value: any, key: any): void;
  clearCachedValueForKey(key: any): void;
  clearCache(): void;
  storeMetadata_forKey(toStore: any, key: NSString | string): void;
  metadataForKey(key: NSString | string): any;
  performInitWithImmutableModelObject(immutableObject: MSImmutableModelObject): void;
  object_didChangeProperty(object: MSModelObject | null, propertyName: NSString | string | null): void;
  invalidateModelCacheGenerationForObject_property(object: MSModelObject | null, propertyName: NSString | string | null): void;
  invalidateModelCacheGeneration(): void;
  invalidateImmutableObject(): void;
  invalidateImmutableObjectAndAncestors(): void;
  setAsParentOnChildren(): void;
  isDescendantOfObject(object: MSModelObject): boolean;
  fireFault(): void;
  fireFaultIfNecessary(): void;
  undoManager(): NSUndoManager;
  setUndoActionName(name: NSString | string): void;
  setUndoActionSenderAndName(name: NSString | string): void;
  isUndoing(): boolean;
  registerUndoNamed_action(name: NSString | string, action: MSUndoActionBlock): void;
  copyPropertiesToObject_options(objectCopy: any, options: MSModelCopyOptions): void;
  syncPropertiesFromObject(object: any): void;

  foreignObject(): MSForeignObject;
  isForeign(): boolean;
  UIMetadataKey(): NSString;
  cachedImmutableModelObject(): any;
  setCachedImmutableModelObject(cachedImmutableModelObject: any): void;
  documentData(): MSDocumentData;
  parentObject(): MSModelObject;
  setParentObject(parentObject: MSModelObject): void;
  immutableModelObject(): any;
  isFault(): boolean;
  parentGroup(): MSLayerGroup;
  modelObjectCacheGeneration(): MSModelObjectCacheGeneration;
}

declare const MSModelObject: {
  alloc(): MSModelObjectUninitialized;
  class(): MSModelObject;
  immutableClass(): any;
  allowsFaulting(): boolean;
  generateObjectID(): any;
  defaultName(): NSString;
}

