interface IBCPopoverDelegate {
  minimumPopoverContentViewHeight(popover: BCPopover): CGFloat;
  popoverWillShow(notification: NSNotification): void;
  popoverWillClose(popover: BCPopover): void;
  popoverWindowSizeDidChange(popover: BCPopover): void;
  popoverWindowDidMove(popover: BCPopover): void;
  popoverShouldCloseWhenNewPopoverOpens_newPopover(popover: BCPopover, newPopover: BCPopover): boolean;
  popoverShouldCauseExistingPopoversToClose(popover: BCPopover): boolean;
  popoverShouldAnimateOnContentFrameDidChange(notification: NSNotification): boolean;
  popoverWillReturnUndoManager(popover: BCPopover): NSUndoManager;
  popoverShouldTrackSuperviewOfAttachedToView(popover: BCPopover): boolean;
}

