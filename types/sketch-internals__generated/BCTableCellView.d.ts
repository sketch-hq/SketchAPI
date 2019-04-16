interface BCTableCellViewUninitialized<InitializedType = BCTableCellView> extends NSTableCellViewUninitialized<BCTableCellView> {}

interface BCTableCellView extends NSTableCellView, INSMenuDelegate {
  renameNode(): void;
  updateBadgeImages(): void;
  drawDragImageInRect(dragRect: NSRect): void;
  updateSelectionStateIfRequired(): void;
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
  displayState(): BCTableCellViewDisplayState;
  setDisplayState(displayState: BCTableCellViewDisplayState): void;
  isTextFieldEditing(): boolean;
  widthForDragImage(): CGFloat;
}

declare const BCTableCellView: {
  alloc(): BCTableCellViewUninitialized;
  class(): BCTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

