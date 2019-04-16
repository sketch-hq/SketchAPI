interface MSBaseInspectorSectionUninitialized<InitializedType = MSBaseInspectorSection> extends NSViewControllerUninitialized<MSBaseInspectorSection> {}

interface MSBaseInspectorSection extends NSViewController, IMSInspectorSection, IMSInspectorItemDelegate {
  updateItems(): void;
  valuesPossiblyChanged(): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  changeTextLayerFont(sender: any): IBAction;
  views(): NSArray<any>;
  wantsSeparatorAfterViews(): boolean;
  separatorInsets(): NSEdgeInsets;
  footerViews(): NSArray<any>;
  valuesPossiblyChanged(item: NSViewController): void;
  itemDidResize(item: NSViewController): void;
  documentForInspectorItem(section: NSViewController): MSDocument;
  item_wantsSectionToCollapse(item: NSViewController, collapse: boolean): void;
  userInterfaceCacheForItem(item: NSViewController): NSCache;

  items(): NSArray<any>;
  setItems(items: NSArray<any> | any[]): void;
  layers(): MSLayerArray;
  setLayers(layers: MSLayerArray): void;
  valuesPossiblyDirty(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  selectionContainsChildrenOfCompoundPath(): boolean;
}

declare const MSBaseInspectorSection: {
  alloc(): MSBaseInspectorSectionUninitialized;
  class(): MSBaseInspectorSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

