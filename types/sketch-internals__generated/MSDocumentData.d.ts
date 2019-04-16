interface MSDocumentDataUninitialized<InitializedType = MSDocumentData> extends _MSDocumentDataUninitialized<MSDocumentData> {}

interface MSDocumentData extends _MSDocumentData, IMSDocumentData {
  enumerateColorConvertiblesIgnoringForeignSymbols(block: MSColorConvertibleHandler): void;
  replaceInstancesOfColor_withColor_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor(color: MSColor, replacementColor: MSColor, ignoreAlphaWhenMatching: boolean, replaceAlphaOfOriginalColor: boolean): void;
  assignColorSpace(colorSpace: MSColorSpace): void;
  convertToColorSpace(colorSpace: MSColorSpace): void;
  defaultPagesArray(): NSArray<any>;
  removePages_detachInstances(page: NSArray<any> | any[], shouldDetachInstances: boolean): void;
  addBlankPage(): MSPage;
  symbolsPage(): MSPage;
  symbolsPageOrCreateIfNecessary(): MSPage;
  sharedObjectContainerOfType(type: MSSharedStyleType): MSSharedObjectContainer;
  documentIsEmpty(): boolean;
  selectedLayers(): MSLayerArray;
  layerTreeLayoutDidChange(): void;
  layerWithID(objectID: NSString | string): MSLayer;
  artboardWithID(objectID: any): MSArtboardGroup;
  layersByObjectID(): NSDictionary<any, any>;
  allArtboards(): NSArray<any>;
  allSymbols(): NSArray<any>;
  localSymbols(): NSArray<any>;
  symbolWithID(symbolID: any): MSSymbolMaster;
  textStyleWithID(sharedStyleID: NSString | string | null): MSSharedStyle;
  layerStyleWithID(sharedStyleID: NSString | string | null): MSSharedStyle;
  allForeignObjects(): NSArray<any>;
  addSymbolMaster(master: MSSymbolMaster): void;
  enumerateForeignObjects_withLibraries_block(objects: NSArray<any> | any[], libraries: NSArray<any> | any[], block: Block): void;
  libraryForForeignObject_inLibraries(object: MSForeignObject, libraries: NSArray<any> | any[]): any;
  temporarilyHideSelectionForLayers(layers: NSArray<any> | any[]): void;
  replaceExistingCreationMetadata(): void;
  refreshOverlay(): void;
  purgeForeignObjects(): void;
  invalidateAffectedSymbolInstances(): void;
  removeShareableObjectsFromInstanceOverrides(removed: NSSet<any>): void;
  replaceFonts(fontReplacements: NSDictionary<any, any> | {[key: string]: any}): void;
  invalidateFonts(): void;
  storeMetadata_forKey_object(toStore: any, key: NSString | string, object: MSModelObject): void;
  metadataForKey_object(key: NSString | string, object: MSModelObject): any;

  cache(): BCCache;
  setCache(cache: BCCache): void;
  currentPage(): MSPage;
  setCurrentPage(currentPage: MSPage): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  autoExpandGroupsInLayerList(): boolean;
  setAutoExpandGroupsInLayerList(autoExpandGroupsInLayerList: boolean): void;
  metadata(): NSDictionary<any, any>;
  textPreviewData(): NSData;
  fontList(): MSFontList;
  selectedOverrides(): NSArray<any>;
  setSelectedOverrides(selectedOverrides: NSArray<any> | any[]): void;
  pages(): NSArray<any>;
}

declare const MSDocumentData: {
  alloc(): MSDocumentDataUninitialized;
  class(): MSDocumentData;
}

