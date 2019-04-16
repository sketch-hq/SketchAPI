interface INSSplitViewDelegate {
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
}

