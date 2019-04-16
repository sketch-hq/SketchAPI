interface MSOpacityBlendingInspectorItemUninitialized<InitializedType = MSOpacityBlendingInspectorItem> extends MSInspectorItemUninitialized<MSOpacityBlendingInspectorItem> {}

interface MSOpacityBlendingInspectorItem extends MSInspectorItem, INSMenuDelegate {
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;
}

declare const MSOpacityBlendingInspectorItem: {
  alloc(): MSOpacityBlendingInspectorItemUninitialized;
  class(): MSOpacityBlendingInspectorItem;
  itemForSection(section: MSBaseInspectorSection): MSOpacityBlendingInspectorItem;
  filterSelection(layers: MSLayerArray): MSLayerArray;
  canHandleSomeLayersOfSelection(layerArray: MSLayerArray): boolean;
  canHandleLayer(layer: MSLayer): boolean;
  adjustLayerHierarchyAfterEditingLayers(layers: MSLayerArray): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

