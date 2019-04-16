interface MSAssetCollectionViewItemUninitialized<InitializedType = MSAssetCollectionViewItem> extends NSCollectionViewItemUninitialized<MSAssetCollectionViewItem> {}

interface MSAssetCollectionViewItem extends NSCollectionViewItem, INSMenuDelegate {
  setAsset_name(asset: any, name: NSString | string): void;
  beginNameEditingMode(): void;
  shouldStartEditingNameWithEvent(event: NSEvent): boolean;
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;

  delegate(): any;
  setDelegate(delegate: any): void;
  assetHighlighted(): boolean;
  setAssetHighlighted(assetHighlighted: boolean): void;
  alternativeCollections(): NSArray<any>;
  setAlternativeCollections(alternativeCollections: NSArray<any> | any[]): void;
}

declare const MSAssetCollectionViewItem: {
  alloc(): MSAssetCollectionViewItemUninitialized;
  class(): MSAssetCollectionViewItem;
}

