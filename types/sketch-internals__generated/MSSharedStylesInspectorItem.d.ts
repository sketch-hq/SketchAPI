interface MSSharedStylesInspectorItemUninitialized<InitializedType = MSSharedStylesInspectorItem> extends MSInspectorItemUninitialized<MSSharedStylesInspectorItem> {}

interface MSSharedStylesInspectorItem extends MSInspectorItem, INSMenuDelegate {
  beginRenameSharedObject_completionBlock(sharedObject: MSSharedObject, block: MSRenameSharedObjectBlock): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;
}

declare const MSSharedStylesInspectorItem: {
  alloc(): MSSharedStylesInspectorItemUninitialized;
  class(): MSSharedStylesInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSSharedStylesInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

