interface MSAssetCollectionViewDataSourceUninitialized<InitializedType = MSAssetCollectionViewDataSource> extends NSObjectUninitialized<MSAssetCollectionViewDataSource> {
  initWithAssetCollection_assetType_identifier_name_title_isLibrary_delegate(assetCollection: MSAssetCollection, assetType: MSAsset, identifier: NSString | string, name: NSString | string, title: NSString | string | null, isLibrary: boolean, delegate: any | null): InitializedType;
}

interface MSAssetCollectionViewDataSource extends NSObject, INSCollectionViewDataSource {
  prepareCollectionView(collectionView: NSCollectionView): void;
  highlightAsset_inCollectionView(asset: any, collectionView: NSCollectionView): void;
  addAsset_withName(asset: any, name: NSString | string | null): NSIndexPath;
  setName_ofAssetAtIndexPath(name: NSString | string, indexPath: NSIndexPath): void;
  nameOfAssetAtIndexPath(indexPath: NSIndexPath): NSString;
  deleteAssetAtIndexPath(sourcePath: NSIndexPath): void;
  moveAssetAtIndexPath_toIndexPath(sourcePath: NSIndexPath, destinationPath: NSIndexPath): void;
  assetAtIndex(index: NSUInteger): any;
  numberOfAssets(): NSUInteger;
  pasteboardRepresentationForIndexPath(indexPath: NSIndexPath): any;
  getUpdatedIndexes(callback: Block): void;
  markUpdatedIndexesAsRead(): void;
  collectionView_numberOfItemsInSection(collectionView: NSCollectionView, section: NSInteger): NSInteger;
  collectionView_itemForRepresentedObjectAtIndexPath(collectionView: NSCollectionView, indexPath: NSIndexPath): NSCollectionViewItem;
  numberOfSectionsInCollectionView(collectionView: NSCollectionView): NSInteger;
  collectionView_viewForSupplementaryElementOfKind_atIndexPath(collectionView: NSCollectionView, kind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): NSView;

  assetType(): MSAsset;
  identifier(): NSString;
  name(): NSString;
  title(): NSString;
  isLibrary(): boolean;
  editable(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  itemProvider(): any;
  setItemProvider(itemProvider: any): void;
}

declare const MSAssetCollectionViewDataSource: {
  alloc(): MSAssetCollectionViewDataSourceUninitialized;
  class(): MSAssetCollectionViewDataSource;
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

