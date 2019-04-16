interface MSSpecialLayerViewControllerUninitialized<InitializedType = MSSpecialLayerViewController> extends MSNestedInspectorSectionUninitialized<MSSpecialLayerViewController> {}

interface MSSpecialLayerViewController extends MSNestedInspectorSection, INSMenuDelegate {
  changeTextLayerFont(sender: any | null): IBAction;
  valuesPossiblyChanged(): void;
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;

  textSection(): MSBaseInspectorSection;
  symbolInstanceSection(): MSBaseInspectorSection;
}

declare const MSSpecialLayerViewController: {
  alloc(): MSSpecialLayerViewControllerUninitialized;
  class(): MSSpecialLayerViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

