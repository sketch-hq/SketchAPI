interface BCSideBarViewControllerUninitialized<InitializedType = BCSideBarViewController> extends NSViewControllerUninitialized<BCSideBarViewController> {
  initWithPageListDataSource_delegate_layerListDataSource_delegate(pageListDataSource: NSObject, pageListDelegate: NSObject, layerListDataSource: NSObject, layerListDelegate: NSObject): InitializedType;
}

interface BCSideBarViewController extends NSViewController {
  refreshWithMask(mask: BCSideBarRefreshType): void;
  refreshAfterAppearanceChange(): void;
  renamePage(): IBAction;
  renameLayer(): IBAction;
  renameLayerAfterNextLayerListRefresh(): IBAction;
  flagsChangedNotification(): void;
  showPageView(): void;
  isNodeExpanded(node: any): boolean;

  delegate(): NSObject;
  setDelegate(delegate: NSObject): void;
  filterViewController(): BCLayerListFilterViewController;
  setFilterViewController(filterViewController: BCLayerListFilterViewController): void;
}

declare const BCSideBarViewController: {
  alloc(): BCSideBarViewControllerUninitialized;
  class(): BCSideBarViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

