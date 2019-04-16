interface MSMultipleFillInspectorViewControllerUninitialized<InitializedType = MSMultipleFillInspectorViewController> extends MSMultipleColorStylePartInspectorViewControllerUninitialized<MSMultipleFillInspectorViewController> {}

interface MSMultipleFillInspectorViewController extends MSMultipleColorStylePartInspectorViewController, IMSInspectorSection, IBCPopoverDelegate {
  showAdvancedOptionsAction(sender: any): IBAction;
  views(): NSArray<any>;
  wantsSeparatorAfterViews(): boolean;
  separatorInsets(): NSEdgeInsets;
  footerViews(): NSArray<any>;
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

  opacityLabel(): MSTextLabelForUpDownField;
  setOpacityLabel(opacityLabel: MSTextLabelForUpDownField): void;
}

declare const MSMultipleFillInspectorViewController: {
  alloc(): MSMultipleFillInspectorViewControllerUninitialized;
  class(): MSMultipleFillInspectorViewController;
}

