interface NSSplitViewControllerUninitialized<InitializedType = NSSplitViewController> extends NSViewControllerUninitialized<NSSplitViewController> {}

interface NSSplitViewController extends NSViewController, INSSplitViewDelegate, INSUserInterfaceValidations {
  addSplitViewItem(splitViewItem: NSSplitViewItem): void;
  insertSplitViewItem_atIndex(splitViewItem: NSSplitViewItem, index: NSInteger): void;
  removeSplitViewItem(splitViewItem: NSSplitViewItem): void;
  splitViewItemForViewController(viewController: NSViewController): NSSplitViewItem;
  validateUserInterfaceItem(item: any): boolean;
  toggleSidebar(sender: any | null): IBAction;
  splitView_canCollapseSubview(splitView: NSSplitView, subview: NSView): boolean;
  splitView_shouldCollapseSubview_forDoubleClickOnDividerAtIndex(splitView: NSSplitView, subview: NSView, dividerIndex: NSInteger): boolean;
  splitView_constrainMinCoordinate_ofSubviewAt(splitView: NSSplitView, proposedMinimumPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_constrainMaxCoordinate_ofSubviewAt(splitView: NSSplitView, proposedMaximumPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_constrainSplitPosition_ofSubviewAt(splitView: NSSplitView, proposedPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_resizeSubviewsWithOldSize(splitView: NSSplitView, oldSize: NSSize): void;
  splitView_shouldAdjustSizeOfSubview(splitView: NSSplitView, view: NSView): boolean;
  splitView_shouldHideDividerAtIndex(splitView: NSSplitView, dividerIndex: NSInteger): boolean;
  splitView_effectiveRect_forDrawnRect_ofDividerAtIndex(splitView: NSSplitView, proposedEffectiveRect: NSRect, drawnRect: NSRect, dividerIndex: NSInteger): NSRect;
  splitView_additionalEffectiveRectOfDividerAtIndex(splitView: NSSplitView, dividerIndex: NSInteger): NSRect;
  splitViewWillResizeSubviews(notification: NSNotification): void;
  splitViewDidResizeSubviews(notification: NSNotification): void;
  validateUserInterfaceItem(item: any): boolean;

  splitView(): NSSplitView;
  setSplitView(splitView: NSSplitView): void;
  splitViewItems(): NSArray<any>;
  setSplitViewItems(splitViewItems: NSArray<any> | any[]): void;
  minimumThicknessForInlineSidebars(): CGFloat;
  setMinimumThicknessForInlineSidebars(minimumThicknessForInlineSidebars: CGFloat): void;
}

declare const NSSplitViewController: {
  alloc(): NSSplitViewControllerUninitialized;
  class(): NSSplitViewController;
}

